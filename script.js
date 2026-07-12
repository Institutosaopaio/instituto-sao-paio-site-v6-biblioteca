/* ============================================================
   script.js — Instituto São Paio (site oficial)
   Um único arquivo, carregado por todas as páginas.
   Cada bloco só roda se os elementos existirem na página atual,
   então o mesmo arquivo serve para o site inteiro sem dar erro.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* --------------------------------------------------------
       1. MENU NO CELULAR (botão hambúrguer abre/fecha o menu)
       -------------------------------------------------------- */
    var toggle = document.querySelector('.nav-toggle');
    var nav    = document.querySelector('.nav');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
        // Fecha o menu ao clicar em um link
        nav.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () { nav.classList.remove('open'); });
        });
    }


    /* --------------------------------------------------------
       1b. MODO NOTURNO (botão lua/sol criado aqui pelo JS,
       por isso ele aparece em todas as páginas sem editar HTML)
       -------------------------------------------------------- */
    var headerInner = document.querySelector('.header-inner');
    if (headerInner) {
        var raiz = document.documentElement;
        if (!raiz.getAttribute('data-tema')) {
            var pref = 'claro';
            try {
                pref = localStorage.getItem('isp-tema') ||
                    (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro');
            } catch (err) {}
            raiz.setAttribute('data-tema', pref);
        }
        var btnTema = document.createElement('button');
        btnTema.className = 'tema-toggle';
        function pintarIcone() {
            var escuro = raiz.getAttribute('data-tema') === 'escuro';
            btnTema.innerHTML = escuro ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            btnTema.setAttribute('aria-label', escuro ? 'Mudar para o modo claro' : 'Mudar para o modo noturno');
            btnTema.title = btnTema.getAttribute('aria-label');
        }
        pintarIcone();
        btnTema.addEventListener('click', function () {
            var novo = raiz.getAttribute('data-tema') === 'escuro' ? 'claro' : 'escuro';
            raiz.setAttribute('data-tema', novo);
            try { localStorage.setItem('isp-tema', novo); } catch (err) {}
            pintarIcone();
        });
        var navToggle = headerInner.querySelector('.nav-toggle');
        headerInner.insertBefore(btnTema, navToggle || null);
    }


    /* --------------------------------------------------------
       2. CABEÇALHO AO ROLAR (encolhe e ganha sombra)
       -------------------------------------------------------- */
    var header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', function () {
            header.classList.toggle('scrolled', window.scrollY > 20);
        });
    }


    /* --------------------------------------------------------
       3. TOAST — aviso flutuante (some sozinho em 3s)
       -------------------------------------------------------- */
    function mostrarToast(mensagem) {
        var t = document.createElement('div');
        t.className = 'toast';
        t.textContent = mensagem;
        document.body.appendChild(t);
        setTimeout(function () {
            t.classList.add('out');
            setTimeout(function () { t.remove(); }, 300);
        }, 3000);
    }


    /* --------------------------------------------------------
       4. MODAL "VER MAIS" DAS INICIATIVAS
       Os textos de cada área ficam neste objeto — é AQUI que
       você edita o conteúdo dos modais.
       -------------------------------------------------------- */
    var areas = {
        esporte: {
            tag: 'Iniciativa',
            titulo: 'Esporte',
            desc: 'A nossa raiz. O Instituto nasceu no esporte e segue formando ' +
                  'alunos-atletas na Quadra Vini Jr., usando o jogo como escola de vida.',
            itens: [
                'Formação de alunos-atletas',
                'Atividades esportivas na Quadra Vini Jr.',
                'Participação em campeonatos estaduais',
                'Disciplina, cooperação e superação',
                'Inclusão da comunidade pelo esporte'
            ]
        },
        educacao: {
            tag: 'Iniciativa',
            titulo: 'Educação',
            desc: 'Educação que abre portas: capacitação gratuita, leitura e formação ' +
                  'profissional para a comunidade de São Gonçalo.',
            itens: [
                'Cursos gratuitos de audiovisual (Lei Paulo Gustavo)',
                'Oficinas de produção de eventos e projetos culturais',
                'Campanha "Liberte um Livro" para a Biblioteca A Casa Amarela',
                'Consultoria e pesquisa (parceria UNESCO)',
                'Bolsas de estudo para moradores de áreas de risco'
            ]
        },
        cultura: {
            tag: 'Iniciativa',
            titulo: 'Cultura e Arte',
            desc: 'Como Ponto de Cultura, levamos teatro, cinema, podcast e dança ' +
                  'para a cidade — democratizando o acesso à arte.',
            itens: [
                'Teatro e espetáculos no Espaço Cultural Panorama',
                'Cineclube Panorama e sessões de cinema gratuitas',
                'Estúdio de podcast e videocast "A Resenha do IES"',
                'Oficinas de teatro e dança de salão',
                'Editais de ocupação com isenção de taxas'
            ]
        }
    };

    var modal = document.getElementById('modal');
    if (modal) {
        var mTag   = document.getElementById('modal-tag');
        var mTit   = document.getElementById('modal-titulo');
        var mDesc  = document.getElementById('modal-descricao');
        var mItens = document.getElementById('modal-itens');

        function abrirModal(chave) {
            var a = areas[chave];
            if (!a) return;
            mTag.textContent = a.tag;
            mTit.textContent = a.titulo;
            mDesc.textContent = a.desc;
            mItens.innerHTML = '';
            a.itens.forEach(function (item) {
                var li = document.createElement('li');
                li.textContent = item;
                mItens.appendChild(li);
            });
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
        function fecharModal() {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        }

        document.querySelectorAll('.card[data-area] .btn-vermais').forEach(function (b) {
            b.addEventListener('click', function () {
                abrirModal(b.closest('.card').getAttribute('data-area'));
            });
        });
        document.getElementById('modal-fechar').addEventListener('click', fecharModal);
        document.getElementById('modal-fechar-2').addEventListener('click', fecharModal);
        modal.addEventListener('click', function (e) { if (e.target === modal) fecharModal(); });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fecharModal(); });
    }


    /* ========================================================
       5. CONTADOR ANIMADO  (números da seção de impacto)
       Cada número guarda o valor final em data-alvo. A função
       anima de 0 até esse valor quando a seção entra na tela.

       Como funciona:
       - requestAnimationFrame chama a função a cada quadro da tela;
       - calculamos quanto do tempo (2s) já passou: o "progresso"
         vai de 0 a 1;
       - o número exibido é alvo × progresso (arredondado);
       - toLocaleString('pt-BR') coloca o ponto de milhar (9000 -> 9.000).
       ======================================================== */
    function animarContador(el) {
        var alvo    = parseInt(el.getAttribute('data-alvo'), 10);
        var sufixo  = el.getAttribute('data-sufixo') || '';
        var duracao = 2000;
        var inicio  = null;

        function passo(agora) {
            if (inicio === null) inicio = agora;
            var progresso = Math.min((agora - inicio) / duracao, 1);
            var valor = Math.floor(progresso * alvo);
            el.textContent = valor.toLocaleString('pt-BR') + sufixo;
            if (progresso < 1) {
                requestAnimationFrame(passo);
            } else {
                el.textContent = alvo.toLocaleString('pt-BR') + sufixo; // valor exato no fim
            }
        }
        requestAnimationFrame(passo);
    }

    var faixaStats = document.querySelector('.stats');
    if (faixaStats) {
        var numeros = faixaStats.querySelectorAll('.stat-num[data-alvo]');
        var obsStats = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (e) {
                if (e.isIntersecting) {
                    numeros.forEach(animarContador);
                    obsStats.unobserve(e.target); // anima uma vez só
                }
            });
        }, { threshold: 0.4 });
        obsStats.observe(faixaStats);
    }


    /* --------------------------------------------------------
       6. FORMULÁRIO DE CONTATO -> ENVIA E-MAIL (via Formspree)

       COMO ISSO FUNCIONA E O QUE VOCÊ PRECISA FAZER (1 vez só):
       Um site estático (só HTML/CSS/JS) não consegue enviar e-mail
       sozinho — ele precisa de um serviço que receba os dados e
       repasse para a sua caixa. Usamos o Formspree (tem plano grátis):

         1) Crie uma conta em https://formspree.io com o e-mail
            contato@institutosaopaio.org
         2) Crie um novo "Form". O Formspree vai te dar um endereço
            no formato:  https://formspree.io/f/XXXXXXXX
         3) Copie a parte XXXXXXXX e cole abaixo, no lugar de "SEU_ID_AQUI".

       Pronto: a partir daí, toda mensagem enviada no formulário
       chega no e-mail de vocês. Enquanto estiver "SEU_ID_AQUI",
       o site avisa que o envio ainda não foi configurado.
       -------------------------------------------------------- */
    var FORMSPREE_ID = 'SEU_ID_AQUI'; // <-- troque pelo seu ID do Formspree

    var form = document.getElementById('form-contato');
    if (form) {
        var erro = document.getElementById('form-erro');
        var ok   = document.getElementById('form-sucesso');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var nome  = document.getElementById('nome').value.trim();
            var email = document.getElementById('email').value.trim();
            var assun = document.getElementById('assunto').value.trim();
            var msg   = document.getElementById('mensagem').value.trim();

            erro.hidden = true; ok.hidden = true;

            // Validação no navegador (antes de enviar)
            if (!nome || !email || !assun || !msg) {
                erro.textContent = 'Preencha todos os campos antes de enviar.';
                erro.hidden = false; return;
            }
            if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
                erro.textContent = 'Digite um e-mail válido.';
                erro.hidden = false; return;
            }

            // Se o Formspree ainda não foi configurado, avisa e para.
            if (FORMSPREE_ID === 'SEU_ID_AQUI') {
                erro.textContent = 'O envio de e-mail ainda não foi configurado. (Veja as instruções no script.js)';
                erro.hidden = false; return;
            }

            // Envia os dados ao Formspree, que repassa para o e-mail de vocês.
            var botao = form.querySelector('.btn-submit');
            var textoBotao = botao.innerHTML;
            botao.disabled = true;
            botao.textContent = 'Enviando...';

            fetch('https://formspree.io/f/' + FORMSPREE_ID, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: JSON.stringify({ nome: nome, email: email, assunto: assun, mensagem: msg })
            })
            .then(function (resp) {
                if (resp.ok) {
                    ok.textContent = 'Mensagem enviada, ' + nome + '! Em breve entraremos em contato.';
                    ok.hidden = false;
                    mostrarToast('Mensagem enviada com sucesso!');
                    form.reset();
                } else {
                    erro.textContent = 'Não foi possível enviar agora. Tente novamente em instantes.';
                    erro.hidden = false;
                }
            })
            .catch(function () {
                erro.textContent = 'Erro de conexão. Verifique sua internet e tente de novo.';
                erro.hidden = false;
            })
            .finally(function () {
                botao.disabled = false;
                botao.innerHTML = textoBotao;
            });
        });
    }


    /* --------------------------------------------------------
       7. ANIMAÇÃO DE ENTRADA AO ROLAR
       -------------------------------------------------------- */
    var alvos = document.querySelectorAll('.reveal');
    if (alvos.length) {
        var obs = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });
        alvos.forEach(function (el) { obs.observe(el); });
    }

});


/* ============================================================
   8. CONTEÚDO DINÂMICO (dados.js)
   Programação, galeria e apoiadores são lidos do arquivo
   dados.js. Para atualizar, use o painel admin.html — não é
   preciso mexer em nenhum código.
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {

    var D = window.DADOS_SITE || {};

    /* ---------- util: data "2026-08-15" -> {dia:"15", mes:"AGO", full:...} ---------- */
    var MESES = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];
    function infoData(iso) {
        var p = (iso || '').split('-');
        if (p.length !== 3) return null;
        var dt = new Date(+p[0], +p[1] - 1, +p[2]);
        return {
            dia: p[2],
            mes: MESES[dt.getMonth()] || '',
            passado: dt < new Date(new Date().setHours(0,0,0,0)),
            extenso: dt.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })
        };
    }

    function fallbackImg(img) {
        img.addEventListener('error', function () {
            img.style.display = 'none';
            if (img.parentElement) img.parentElement.classList.add('img-quebrada');
        });
    }

    /* ---------- PROGRAMAÇÃO (panorama.html) ----------
       Os espetáculos são agrupados por MÊS e exibidos em ordem
       cronológica (janeiro -> dezembro). Datas passadas somem
       sozinhas (config "ocultarPassados" no dados.js). ---------- */
    var progWrap = document.getElementById('prog-conteudo');
    if (progWrap) {
        var MESES_EXT = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
        var lista = (D.programacao || []).slice();
        if (D.ocultarPassados !== false) {
            lista = lista.filter(function (e) {
                var i = infoData(e.data);
                return !i || !i.passado;
            });
        }
        lista.sort(function (a, b) { return (a.data || '9999') < (b.data || '9999') ? -1 : 1; });

        if (!lista.length) {
            document.getElementById('prog-vazio').hidden = false;
        }

        function criarCard(e) {
            var i = infoData(e.data);
            var card = document.createElement('article');
            card.className = 'prog-card reveal visible';

            var figure = document.createElement('div');
            figure.className = 'prog-foto';
            if (e.foto) {
                var img = document.createElement('img');
                img.src = e.foto;
                img.alt = 'Cartaz de ' + (e.titulo || 'espetáculo');
                img.loading = 'lazy';
                fallbackImg(img);
                figure.appendChild(img);
            } else {
                figure.classList.add('img-quebrada');
            }
            if (i) {
                var badge = document.createElement('div');
                badge.className = 'prog-data';
                badge.innerHTML = '<span class="d">' + i.dia + '</span><span class="m">' + i.mes + '</span>';
                figure.appendChild(badge);
            }
            card.appendChild(figure);

            var body = document.createElement('div');
            body.className = 'prog-body';
            if (e.tipo) {
                var tag = document.createElement('span');
                tag.className = 'prog-tipo';
                tag.textContent = e.tipo;
                body.appendChild(tag);
            }
            var h3 = document.createElement('h3');
            h3.textContent = e.titulo || 'Espetáculo';
            body.appendChild(h3);

            var meta = document.createElement('p');
            meta.className = 'prog-meta';
            meta.innerHTML = '<i class="far fa-calendar"></i> ' +
                (i ? i.extenso : 'Data a confirmar') + (e.hora ? ' · ' + e.hora : '');
            body.appendChild(meta);

            if (e.sinopse) {
                var sin = document.createElement('p');
                sin.className = 'prog-sinopse';
                sin.textContent = e.sinopse;
                body.appendChild(sin);
            }

            var foot = document.createElement('div');
            foot.className = 'prog-foot';
            if (e.preco) {
                var preco = document.createElement('span');
                preco.className = 'prog-preco';
                preco.innerHTML = '<i class="fas fa-ticket"></i> ' + e.preco;
                foot.appendChild(preco);
            }
            if (e.linkIngresso) {
                var btn = document.createElement('a');
                btn.className = 'btn btn--accent btn--mini';
                btn.href = e.linkIngresso;
                btn.target = '_blank';
                btn.rel = 'noopener';
                btn.innerHTML = '<i class="fas fa-ticket-simple"></i> Comprar ingresso';
                foot.appendChild(btn);
            } else if (e.preco) {
                var aviso = document.createElement('span');
                aviso.className = 'prog-bilheteria';
                aviso.textContent = 'Vendas na bilheteria';
                foot.appendChild(aviso);
            }
            body.appendChild(foot);
            card.appendChild(body);
            return card;
        }

        // Agrupa por "AAAA-MM" mantendo a ordem cronológica
        var grupos = [];
        lista.forEach(function (e) {
            var chave = (e.data || '').slice(0, 7) || 'sem-data';
            var g = grupos.length && grupos[grupos.length - 1].chave === chave
                ? grupos[grupos.length - 1] : null;
            if (!g) { g = { chave: chave, eventos: [] }; grupos.push(g); }
            g.eventos.push(e);
        });

        grupos.forEach(function (g) {
            var titulo = document.createElement('h3');
            titulo.className = 'prog-mes';
            if (g.chave === 'sem-data') {
                titulo.innerHTML = '<span>Em breve</span>';
            } else {
                var ano = g.chave.slice(0, 4);
                var mes = MESES_EXT[+g.chave.slice(5, 7) - 1] || '';
                titulo.innerHTML = '<span>' + mes + '</span> <em>' + ano + '</em>';
            }
            progWrap.appendChild(titulo);

            var grid = document.createElement('div');
            grid.className = 'prog-grid';
            g.eventos.forEach(function (e) { grid.appendChild(criarCard(e)); });
            progWrap.appendChild(grid);
        });
    }

    /* ---------- GALERIA (panorama.html) + lightbox ---------- */
    var galeria = document.getElementById('galeria-fotos');
    if (galeria) {
        var fotos = D.galeria || [];
        if (!fotos.length) {
            galeria.innerHTML = '<div class="photo-placeholder"><i class="fas fa-camera"></i><span>Fotos em breve</span></div>';
        }
        fotos.forEach(function (f, idx) {
            var item = document.createElement('button');
            item.type = 'button';
            item.className = 'gal-item';
            item.setAttribute('aria-label', 'Ampliar foto: ' + (f.legenda || 'foto ' + (idx + 1)));
            var img = document.createElement('img');
            img.src = f.foto;
            img.alt = f.legenda || 'Foto do Espaço Cultural Panorama';
            img.loading = 'lazy';
            fallbackImg(img);
            item.appendChild(img);
            if (f.legenda) {
                var leg = document.createElement('span');
                leg.className = 'gal-legenda';
                leg.textContent = f.legenda;
                item.appendChild(leg);
            }
            item.addEventListener('click', function () { abrirLightbox(f); });
            galeria.appendChild(item);
        });

        var lb = document.createElement('div');
        lb.className = 'lightbox';
        lb.innerHTML = '<button class="lightbox-fechar" aria-label="Fechar">&times;</button><figure><img alt=""><figcaption></figcaption></figure>';
        document.body.appendChild(lb);
        function abrirLightbox(f) {
            lb.querySelector('img').src = f.foto;
            lb.querySelector('img').alt = f.legenda || '';
            lb.querySelector('figcaption').textContent = f.legenda || '';
            lb.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
        function fecharLightbox() {
            lb.classList.remove('open');
            document.body.style.overflow = '';
        }
        lb.addEventListener('click', function (e) {
            if (e.target === lb || e.target.classList.contains('lightbox-fechar')) fecharLightbox();
        });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fecharLightbox(); });
    }

    /* ---------- APOIADORES (index.html) ---------- */
    var apGrid = document.getElementById('apoiadores-grid');
    if (apGrid) {
        (D.apoiadores || []).forEach(function (a) {
            var box = document.createElement(a.link ? 'a' : 'div');
            box.className = 'apoiador-box';
            if (a.link) { box.href = a.link; box.target = '_blank'; box.rel = 'noopener'; }
            var img = document.createElement('img');
            img.src = a.logo;
            img.alt = a.nome || 'Apoiador';
            img.loading = 'lazy';
            fallbackImg(img);
            box.appendChild(img);
            apGrid.appendChild(box);
        });
    }

    /* ---------- BIBLIOTECA A CASA AMARELA ----------
       Os textos vêm do dados.js (chave "biblioteca") e são editados
       no painel admin.html, aba "Biblioteca". Este bloco preenche
       os elementos marcados com data-bib="..." na página inicial
       (banner) e em biblioteca.html (selo, horário, aviso etc.).
       Se um campo estiver vazio no painel, o site mantém o texto
       padrão que já está escrito no HTML — nada quebra. ---------- */
    var BIB = (window.DADOS_SITE && window.DADOS_SITE.biblioteca) || null;
    if (BIB) {
        ['selo', 'destaque', 'texto', 'inauguracao'].forEach(function (chave) {
            if (!BIB[chave]) return;
            document.querySelectorAll('[data-bib="' + chave + '"]').forEach(function (el) {
                el.textContent = BIB[chave];
            });
        });
        // Horário de funcionamento: só aparece quando preenchido no painel
        if (BIB.horario) {
            document.querySelectorAll('[data-bib="horario"]').forEach(function (el) {
                el.textContent = '🕐 ' + BIB.horario;
                el.style.display = '';
            });
        }
        // Aviso especial: faixa que só aparece quando preenchida
        if (BIB.aviso) {
            document.querySelectorAll('[data-bib="aviso"]').forEach(function (el) {
                el.textContent = BIB.aviso;
            });
            document.querySelectorAll('[data-bib="aviso-box"]').forEach(function (el) {
                el.style.display = '';
            });
        }
    }

    /* ---------- ANO ATUAL no rodapé ---------- */
    document.querySelectorAll('.ano-atual').forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });
});
