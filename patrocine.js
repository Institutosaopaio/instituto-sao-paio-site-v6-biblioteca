/* ============================================================
   patrocine.js — só da página Patrocine (patrocine.html)
   Movimento feito com GSAP + ScrollTrigger (carregados antes
   deste arquivo). Se o GSAP não carregar, ou se o visitante
   pedir "movimento reduzido", a página aparece inteira, parada.
   ============================================================ */
(function () {
    var raiz = document.documentElement;
    var semMovimento = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    var temGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
    var animar = temGsap && !semMovimento;

    /* No site publicado o formulário envia de verdade. Em qualquer
       outro endereço (prévia, teste local) ele só simula. */
    var PREVIA = !/(^|\.)institutosaopaio\.org$/i.test(location.hostname);
    var FORMSPREE_ID = 'xjgnvbpq'; // o mesmo do formulário de Contato (script.js)

    function liberarConteudo() { raiz.classList.remove('pat-js'); }
    function $(sel, ctx) { return (ctx || document).querySelector(sel); }
    function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

    if (temGsap) gsap.registerPlugin(ScrollTrigger);
    if (!animar) {
        liberarConteudo();
        raiz.classList.remove('pat-intro-on');
    }

    /* ---------- números do topo (9.000+, 400+, 270, 12+) ---------- */
    function formatar(n, sufixo) { return Math.round(n).toLocaleString('pt-BR') + (sufixo || ''); }
    function contarNumeros() {
        $$('.pat-num[data-alvo]').forEach(function (el) {
            var alvo = +el.getAttribute('data-alvo');
            var suf = el.getAttribute('data-sufixo') || '';
            if (!animar) { el.textContent = formatar(alvo, suf); return; }
            var o = { v: 0 };
            gsap.to(o, { v: alvo, duration: 2, ease: 'power2.out', onUpdate: function () { el.textContent = formatar(o.v, suf); } });
        });
    }

    /* ---------- palavra que gira: "Seu imposto vira ___" ---------- */
    function girarPalavra() {
        var el = $('.pat-giro-palavra');
        if (!el || semMovimento) return;
        var lista = ['leitura', 'música', 'dança', 'games', 'turismo', 'teatro', 'festival'];
        var i = 0;
        setInterval(function () {
            i = (i + 1) % lista.length;
            el.textContent = lista[i];
            el.classList.remove('pat-giro-anima');
            void el.offsetWidth; // reinicia a animação
            el.classList.add('pat-giro-anima');
        }, 2000);
    }

    /* ---------- entrada do topo ---------- */
    var topoEntrou = false;
    function entradaTopo() {
        if (topoEntrou) return;
        topoEntrou = true;
        girarPalavra();
        if (!animar) { contarNumeros(); return; }
        $$('.pat-num[data-alvo]').forEach(function (el) { el.textContent = formatar(0, el.getAttribute('data-sufixo')); });
        gsap.set('.pat-revela', { opacity: 0, y: 50 });
        gsap.set('.pat-blur', { opacity: 0, y: 20, filter: 'blur(10px)' });
        gsap.set('.pat-motivo', { opacity: 0, scale: 0.3 });
        liberarConteudo();
        gsap.timeline({ defaults: { ease: 'power3.out' } })
            .to('.pat-revela', { opacity: 1, y: 0, duration: 1.2 }, 0.1)
            .to('.pat-blur', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, stagger: 0.1, clearProps: 'filter' }, 0.3)
            .to('.pat-motivo', { opacity: 1, scale: 1, duration: 1, stagger: 0.14, ease: 'back.out(1.6)' }, 0.35)
            .add(contarNumeros, 0.8);
        // as formas da logo flutuam devagar
        $$('.pat-motivo').forEach(function (m, k) {
            gsap.to(m, { y: k % 2 ? 14 : -14, duration: 4 + k, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.4 });
        });
    }

    /* ---------- espera as fontes do site (no máximo 1,5 s) ----------
       Sem isso, os textos apareciam primeiro numa fonte reserva e
       depois de novo, animados, na League Gothic. */
    function quandoFontesProntas(seguir) {
        var feito = false;
        function vai() { if (feito) return; feito = true; seguir(); }
        setTimeout(vai, 1500);
        if (document.fonts && document.fonts.load) {
            Promise.all([
                document.fonts.load('400 1em "League Gothic"'),
                document.fonts.load('700 1em "Montserrat"')
            ]).then(vai, vai);
        } else { vai(); }
    }

    /* ---------- abertura: formas da logo + palavras (uma vez por sessão) ---------- */
    function abertura(depois) {
        var intro = $('.pat-intro');
        if (!intro || !animar || !raiz.classList.contains('pat-intro-on')) {
            raiz.classList.remove('pat-intro-on');
            if (animar) quandoFontesProntas(depois); else depois();
            return;
        }
        clearTimeout(window.__patIntroSeguranca);
        quandoFontesProntas(function () { rodarAbertura(intro, depois); });
    }

    function rodarAbertura(intro, depois) {
        var palavra = $('.pat-intro__palavra', intro);
        var barra = $('.pat-intro__barra span', intro);
        var palavras = ['Cultura', 'Incentivo', 'Impacto'];
        var i = 0, estado = { v: 0 }, terminou = false;

        var troca = setInterval(function () {
            i = (i + 1) % palavras.length;
            gsap.to(palavra, { y: -20, opacity: 0, duration: 0.2, ease: 'power2.in', onComplete: function () {
                palavra.textContent = palavras[i];
                gsap.fromTo(palavra, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' });
            } });
        }, 640);

        function fechar() {
            if (terminou) return;
            terminou = true;
            clearInterval(troca);
            depois();
            gsap.to(intro, { yPercent: -100, duration: 0.8, ease: 'power3.inOut', onComplete: function () {
                raiz.classList.remove('pat-intro-on');
                gsap.set(intro, { clearProps: 'all' });
                try { sessionStorage.setItem('isp-intro-patrocine', '1'); } catch (e) {}
                ScrollTrigger.refresh();
            } });
        }

        // a partir daqui a fonte já chegou: os textos aparecem uma vez só, já animados
        intro.classList.add('is-pronta');
        var tl = gsap.timeline();
        tl.from($('.pat-intro__rotulo', intro), { y: -20, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0)
          .from($('.pat-intro__pular', intro), { opacity: 0, duration: 0.6 }, 0.2)
          .from($$('.pat-forma', intro), { scale: 0, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'back.out(1.8)' }, 0.1)
          .from(palavra, { y: 20, opacity: 0, duration: 0.4, ease: 'power2.out' }, 0.15)
          .to(estado, { v: 100, duration: 1.9, ease: 'power1.inOut', onUpdate: function () {
              barra.style.transform = 'scaleX(' + (estado.v / 100) + ')';
          } }, 0)
          .add(fechar, '+=0.3');

        intro.addEventListener('click', fechar);
        document.addEventListener('keydown', function tecla() { fechar(); document.removeEventListener('keydown', tecla); });
    }

    /* ---------- movimento ao rolar ---------- */
    function rolagem() {
        if (!animar) return;

        // títulos, painéis e formulário sobem ao aparecer
        $$('.pat-sobe').forEach(function (el) {
            gsap.from(el, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 86%', once: true } });
        });

        // cartões dos projetos entram em sequência
        gsap.set('.pat-card', { opacity: 0, y: 60 });
        ScrollTrigger.batch('.pat-card', {
            start: 'top 90%', once: true,
            onEnter: function (lote) {
                gsap.to(lote, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, overwrite: true });
            }
        });

        // topo: o conteúdo sobe e o vídeo se aproxima ao rolar
        var topo = { trigger: '.pat-hero', start: 'top top', end: 'bottom top', scrub: true };
        gsap.to('.pat-hero__conteudo', { yPercent: -14, opacity: 0.25, ease: 'none', scrollTrigger: topo });
        gsap.fromTo('.pat-hero__video', { scale: 1.05 }, { scale: 1.18, ease: 'none', scrollTrigger: topo });
        gsap.to('.pat-motivo--asterisco', { rotate: 180, ease: 'none', scrollTrigger: topo });

        // asterisco da pílula gira com a página
        gsap.to('.pat-pilula__marca svg', { rotate: 360, ease: 'none',
            scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1 } });

        var mm = gsap.matchMedia();

        // linha do passo a passo se desenha (horizontal no computador, vertical no celular)
        mm.add('(min-width: 761px)', function () {
            gsap.fromTo('.pat-passos__linha', { scaleX: 0 }, { scaleX: 1, ease: 'none',
                scrollTrigger: { trigger: '.pat-passos', start: 'top 82%', end: 'bottom 60%', scrub: 0.6 } });
        });
        mm.add('(max-width: 760px)', function () {
            gsap.fromTo('.pat-passos__linha', { scaleY: 0 }, { scaleY: 1, ease: 'none',
                scrollTrigger: { trigger: '.pat-passos', start: 'top 75%', end: 'bottom 55%', scrub: 0.6 } });
        });
        gsap.from('.pat-passos li', { y: 24, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: '.pat-passos', start: 'top 84%', once: true } });

        // "Em cena": as fotos entram e ganham um leve parallax ao rolar.
        // Sem "pin" nem posição fixa — o deslocamento é pequeno e dentro do
        // próprio espaço da foto, então nunca sobrepõe as outras seções.
        gsap.from('.pat-galeria .pat-moldura', { opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: '.pat-galeria', start: 'top 85%', once: true } });
        mm.add('(min-width: 721px)', function () {
            $$('.pat-galeria .pat-moldura').forEach(function (m) {
                gsap.fromTo(m, { yPercent: 6 }, { yPercent: -6, ease: 'none',
                    scrollTrigger: { trigger: m, start: 'top bottom', end: 'bottom top', scrub: true } });
            });
        });

        // no celular (sem mouse), a foto ganha cor quando o cartão passa pelo meio da tela
        mm.add('(max-width: 960px)', function () {
            $$('.pat-card').forEach(function (c) {
                ScrollTrigger.create({ trigger: c, start: 'top 62%', end: 'bottom 38%', toggleClass: 'is-cor' });
            });
        });

        // letreiro correndo no contato
        var trilho = $('.pat-letreiro__trilho');
        if (trilho) gsap.to(trilho, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 });

        if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
        window.addEventListener('load', function () { ScrollTrigger.refresh(); });
    }

    /* ---------- pílula de navegação (funciona mesmo sem GSAP) ---------- */
    function pilula() {
        var nav = $('.pat-pilula');
        var hero = $('.pat-hero');
        var contato = $('#contato');
        if (!nav || !hero || !('IntersectionObserver' in window)) return;
        var passouTopo = false, noContato = false;
        function atualizar() { nav.classList.toggle('is-visivel', passouTopo && !noContato); }
        new IntersectionObserver(function (e) { passouTopo = !e[0].isIntersecting; atualizar(); }, { threshold: 0, rootMargin: '0px 0px -35% 0px' }).observe(hero);
        if (contato) new IntersectionObserver(function (e) { noContato = e[0].isIntersecting; atualizar(); }, { threshold: 0.2 }).observe(contato);

        var links = $$('a[data-secao]', nav);
        var obs = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (en) {
                if (!en.isIntersecting) return;
                links.forEach(function (a) { a.classList.toggle('is-ativo', a.getAttribute('data-secao') === en.target.id); });
            });
        }, { rootMargin: '-50% 0px -50% 0px' });
        links.forEach(function (a) { var alvo = document.getElementById(a.getAttribute('data-secao')); if (alvo) obs.observe(alvo); });
    }

    /* ---------- "Quero patrocinar": leva ao formulário com o projeto marcado ---------- */
    var select = $('#pat-projeto');
    var escolhido = $('#pat-escolhido');
    function mostrarEscolhido() {
        if (!select || !escolhido) return;
        var op = select.options[select.selectedIndex];
        if (!select.value) { escolhido.hidden = true; return; }
        var grupo = op.parentNode && op.parentNode.label ? ' · ' + op.parentNode.label : '';
        escolhido.textContent = 'Projeto escolhido: ' + select.value + grupo;
        escolhido.hidden = false;
    }
    if (select) select.addEventListener('change', mostrarEscolhido);
    $$('.pat-quero').forEach(function (b) {
        b.addEventListener('click', function () {
            var card = b.closest('.pat-card');
            if (!card || !select) return;
            select.value = card.getAttribute('data-projeto');
            mostrarEscolhido();
            if (animar) {
                gsap.fromTo(select, { boxShadow: '0 0 0 0 rgba(255,198,13,0)' },
                    { boxShadow: '0 0 0 4px rgba(255,198,13,.6)', duration: 0.35, yoyo: true, repeat: 3, delay: 0.7, clearProps: 'boxShadow' });
            }
            if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
                setTimeout(function () { var n = $('#pat-nome'); if (n) n.focus({ preventScroll: true }); }, 900);
            }
        });
    });

    /* ---------- copiar e-mail ---------- */
    $$('[data-copiar]').forEach(function (b) {
        b.addEventListener('click', function () {
            var texto = b.getAttribute('data-copiar');
            var original = b.textContent;
            function selecionar() {
                var alvo = b.previousElementSibling;
                if (!alvo || !window.getSelection) return;
                var r = document.createRange(); r.selectNodeContents(alvo);
                var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
            }
            function pronto(ok) {
                b.textContent = ok ? 'Copiado' : 'Selecionado';
                if (!ok) selecionar();
                setTimeout(function () { b.textContent = original; }, 2000);
            }
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(texto).then(function () { pronto(true); }, function () { pronto(false); });
            } else { pronto(false); }
        });
    });

    /* ---------- formulário de interesse ---------- */
    var form = $('#form-patrocinio');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var erro = $('#pat-erro'), ok = $('#pat-sucesso');
            function v(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; }
            var nome = v('pat-nome'), email = v('pat-email');
            var projeto = (select && select.value) || 'Ainda não sei, quero ajuda para escolher';
            erro.hidden = true; ok.hidden = true;
            if (!nome || !email) { erro.textContent = 'Preencha o seu nome e o e-mail para a gente responder.'; erro.hidden = false; return; }
            if (email.indexOf('@') === -1 || email.indexOf('.') === -1) { erro.textContent = 'Digite um e-mail válido.'; erro.hidden = false; return; }

            if (PREVIA) {
                ok.textContent = 'Prévia: no site publicado, este pedido vai direto para contato@institutosaopaio.org, pelo mesmo serviço do formulário de Contato.';
                ok.hidden = false;
                return;
            }

            var botao = form.querySelector('.btn-submit');
            var textoBotao = botao.innerHTML;
            botao.disabled = true;
            botao.textContent = 'Enviando...';
            fetch('https://formspree.io/f/' + FORMSPREE_ID, {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    assunto: 'Patrocínio: ' + projeto,
                    nome: nome, empresa: v('pat-empresa'), email: email, telefone: v('pat-telefone'),
                    projeto: projeto, mensagem: v('pat-mensagem')
                })
            }).then(function (r) {
                if (r.ok) {
                    ok.textContent = 'Recebemos o seu interesse, ' + nome + '! Em breve a equipe do Instituto entra em contato.';
                    ok.hidden = false;
                    form.reset();
                    mostrarEscolhido();
                } else {
                    erro.textContent = 'Não foi possível enviar agora. Tente de novo em instantes ou escreva para contato@institutosaopaio.org.';
                    erro.hidden = false;
                }
            }).catch(function () {
                erro.textContent = 'Erro de conexão. Verifique a internet e tente de novo.';
                erro.hidden = false;
            }).finally(function () {
                botao.disabled = false;
                botao.innerHTML = textoBotao;
            });
        });
    }

    /* ---------- começa ---------- */
    pilula();
    abertura(function () { entradaTopo(); });
    rolagem();
})();
