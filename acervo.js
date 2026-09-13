/* acervo.js — catálogo do Acervo Digital da Biblioteca A Casa Amarela Oton São Paio.

   Cada linha é: ["título", "autor", prateleira, gênero, código da obra, arquivo da capa]

   A prateleira é a categoria do portal Domínio Público:
     L = Literatura
     I = Literatura Infantil
     C = Literatura de Cordel

   O gênero é o tipo de leitura:
     R = Romance              C = Conto e novela
     P = Poesia               T = Teatro
     M = Crônica e memórias   E = Ensaio e história
     D = Cordel               I = Infantojuvenil
     F = Fábula e conto de fadas

   O sexto item é opcional. Quando existe, a capa real do livro está em
   img/acervo/capas/<arquivo>.jpg. Quando não existe, a página desenha uma
   capa tipográfica na identidade da casa, para nenhum livro ficar sem capa.

   O link de leitura vai direto para o arquivo, sem passar pela página de
   ficha do portal.

   Todas as obras estão em domínio público e o arquivo é servido pelo portal
   Domínio Público, do Ministério da Educação. O Instituto São Paio não
   hospeda nenhum arquivo, apenas organiza e dá acesso.

   Para incluir um livro: copie o número co_obra da ficha no portal e
   acrescente uma linha aqui. A capa é opcional. */

window.ACERVO_DIGITAL = [
["14 de Julho na roça","Raul Pompéia","L","P","7632"],
["345","Artur Azevedo","L","C","7425"],
["6 rocks matutos & 1 romance rasgado. Sambarrancho do bar Jangadeiro","Salomão Rovedo","L","P","70025"],
["7 Canções","Salomão Rovedo","L","P","19343","7-cancoes"],
["A \"Não-me-toques\"!","Artur Azevedo","L","C","7436"],
["A Abóboda","Alexandre Herculano","L","C","81912"],
["A água chia no púcaro que elevo à boca","Alberto Caeiro","L","P","82046"],
["A Alegria da Revolução","Ken Knab","L","E","2638"],
["A Alma do Lázaro","José de Alencar","L","C","7545","a-alma-do-lazaro"],
["A Alma Encantadora das Ruas","João do Rio","L","R","2051","a-alma-encantadora-das-ruas"],
["A Almanjarra","Artur Azevedo","L","T","7418"],
["A Ama-Seca","Artur Azevedo","L","C","7426"],
["A Arrábida","Alexandre Herculano","L","C","7389"],
["A Bela Madame Vargas","João do Rio","L","R","17347"],
["A bico de pena: fantasias, contos e ferfis (coleção revivendo, nº 4)","Coelho Netto","L","C","43200"],
["A boa vista","Antônio Frederico de Castro Alves","L","P","86652"],
["A Bonaval quer'eu, mia senhor, ir","Bernardo de Bonaval","L","P","82100"],
["A borboleta azul","Lenira Almeida Heck","I","F","28982"],
["A Brasileira de Prazins","Camilo Castelo Branco","L","R","1778","a-brasileira-de-prazins"],
["A Bruxa e o Caldeirão","José Leon Machado","I","F","4978","a-bruxa-e-o-caldeirao"],
["A cachoeira","Antônio Frederico de Castro Alves","L","P","86501"],
["A cachoeira de Paulo Afonso","Antônio Frederico de Castro Alves","L","P","35994"],
["A Campanha Abolicionista","José Carlos do Patrocínio","L","E","2121"],
["A campanha da Cordilheira: diário do exército, volume 1","Visconde de Taunay","L","C","43203"],
["A canoa fantástica","Antônio Frederico de Castro Alves","L","P","86502"],
["A capital","José Maria Eça de Queirós","L","R","43205"],
["A Capital Federal","Artur Azevedo","L","T","2222"],
["A Carne","Júlio Ribeiro","L","R","2123","a-carne"],
["A Carta","Pero Vaz de Caminha","L","E","2003","a-carta"],
["A Carta de Mestre João Faras","Mestre João Faras","L","E","2240"],
["A carta do pistoleiro Mainha à sociedade","Guaipuan Vieira","C","D","20047"],
["A Carteira","Machado de Assis","L","C","16915","a-carteira"],
["A Cartomante","Machado de Assis","L","C","1965","a-cartomante"],
["A Casa Fechada","Roberto Gomes Ribeiro","L","C","2010"],
["A Casadinha de Fresco","Artur Azevedo","L","T","1756"],
["A Casinha de Fresco","Artur Azevedo","L","T","16548"],
["A Causa Secreta","Machado de Assis","L","C","16917","a-causa-secreta"],
["A chave","Machado de Assis","L","C","17900"],
["A chegada de Lampião no céu","Guaipuan Vieira","C","D","20046"],
["A Chinela Turca","Machado de Assis","L","C","1941"],
["A Cidade e as Serras","José Maria Eça de Queirós","L","R","1790","a-cidade-e-as-serras"],
["A Condessa Vésper","Aluísio Azevedo","L","R","2124","a-condessa-vesper"],
["A Confissão de Lúcio","Mário de Sá-Carneiro","L","R","16999"],
["A Conquista","Coelho Neto","L","R","7524","a-conquista"],
["A Conselho do Marido","Artur Azevedo","L","C","7428"],
["A criação fantástica do humano e o conhecimento de mundo: contextos para o estudo da obra frankenstein de Mary Shelley","Ana Claudia Brida","L","E","121612"],
["A criança que pensa em fadas","Alberto Caeiro","L","P","82065"],
["A Cruz Mutilada","Alexandre Herculano","L","C","7399"],
["A Dama das Camélias","Alexandre Dumas","L","R","16517"],
["A Dama do pé-de-cabra","Alexandre Herculano","L","C","81913"],
["A Dança dos Ossos","Bernardo Guimarães","L","C","16110"],
["A declamação trágica","José Basílio da Gama","L","P","82095"],
["A descoberta da Índia","Coelho Netto","L","C","43340"],
["A Desejada das Gentes","Machado de Assis","L","C","16918"],
["A Desobediência Civil","Henry David Thoreau","L","E","2249","a-desobediencia-civil"],
["A Dívida","Artur Azevedo","L","C","7429"],
["A Divina Comédia","Dante Alighieri","L","R","2203","a-divina-comedia"],
["A divina quimera","Eduardo Guimaraens","L","R","17755"],
["A Doença do Fabrício","Artur Azevedo","L","C","7430"],
["A dona que eu am’e tenho por senhor","Bernardo de Bonaval","L","P","82101"],
["A duas flores","Antônio Frederico de Castro Alves","L","P","86822"],
["A Ela","Machado de Assis","L","P","1899"],
["A epifania em Clarice Lispector","Achilles Cleto Cabral da Luz","L","E","164856"],
["A Escrava Isaura","Bernardo Guimarães","L","R","1775","a-escrava-isaura"],
["A Esfinge sem Segredo","Oscar Wilde","L","C","2200"],
["A espantosa realidade das cousas","Alberto Caeiro","L","P","82066"],
["A Eugênia","Auta de Sousa","L","P","81640"],
["A evolução feminista e o comportamento da mulher entre as décadas de 60 e 80 nas obras de Nelson Rodrigues e Ignácio de Loyola Brandão","Andressa Aparecida Evangelista","L","E","88529"],
["A falência","Júlia Lopes de Almeida","L","R","7552","a-falencia"],
["A Filha de Maria Angu","Artur Azevedo","L","T","1758"],
["A Filha do Pescador","Leandro Gomes de Barros","C","D","5391"],
["A Filha Maria de Angu","Artur Azevedo","L","T","16560"],
["A Filosofia do Mendes","Artur Azevedo","L","C","7431"],
["A Força do Amor: Alonso e Marina","José Bernardo da Silva","C","D","5393"],
["A garganta do diabo","Edio Riedi","L","C","127636"],
["A gran dereito lazerei","Afonso Eanes de Coton","L","P","82033"],
["A guerra que aflige com seus esquadrões","Alberto Caeiro","L","P","82070"],
["A Harpa do Crente","Alexandre Herculano","L","C","16518","a-harpa-do-crente"],
["A Herança","Machado de Assis","L","C","17350","a-heranca"],
["A história de Seny - A caminhada","Sylvia Senny","L","C","142712"],
["A idéia do Ezequiel Maia","Machado de Assis","L","C","17896"],
["A Igreja do Diabo","Machado de Assis","L","C","1903","a-igreja-do-diabo"],
["A Ilha da Maré","Oliveira","L","C","16989"],
["A Ilustre Casa de Ramires","José Maria Eça de Queirós","L","R","7529","a-ilustre-casa-de-ramires"],
["A Inglezinha Barcelos","Machado de Assis","L","C","17352"],
["A intertextualidade entre as obras de \"Romeu e Julieta\", de Shakespeare, e \"Inocência\" de Visconde de Taunay","Priscila Fernandes De Moraes Soraggi","L","E","199650"],
["A Intrusa","Júlia Lopes de Almeida","L","R","2125","a-intrusa"],
["A isca","Júlia Lopes de Almeida","L","C","43212","a-isca"],
["A J. J. C. Macedo-Júnior","Casimiro de Abreu","L","P","84539"],
["A Jóia","Artur Azevedo","L","T","16561"],
["A judia","Manuel Joaquim Pinheiro Chagas","L","T","43213"],
["A Júlia","Auta de Sousa","L","P","81682"],
["A lotação do bondes","França Júnior","L","T","7535"],
["A Luís","Antônio Frederico de Castro Alves","L","P","86653"],
["A Luneta Mágica","Joaquim Manuel de Macedo","L","R","16666","a-luneta-magica"],
["A Luta","Carmen Dolores","L","C","7523","a-luta"],
["A Maciel Pinheiro","Antônio Frederico de Castro Alves","L","P","86654"],
["A mágoa do Infeliz Cosme","Machado de Assis","L","C","17353"],
["A Maldita Parentela","França Júnior","L","T","1768"],
["A Manhã fresca está, sereno o vento","Abade de Jazente","L","P","81617"],
["A manhã raia","Alberto Caeiro","L","P","82072"],
["A Mão e a Luva","Machado de Assis","L","R","2039","a-mao-e-a-luva"],
["A Marcelina","Artur Azevedo","L","C","7432"],
["A Margem","José Leon Machado","L","C","4979"],
["A Marquesa de Santos","Paulo Setúbal","L","R","17399"],
["A medida das saudades","Geraldo Pereira","L","P","41862"],
["A Melhor Amiga","Artur Azevedo","L","C","7433"],
["A melhor das noivas","Machado de Assis","L","C","17354"],
["A Melhor Vingança","Artur Azevedo","L","C","7434"],
["A Mensageira das Violetas","Florbela Espanca","L","P","1803"],
["A Metamorfose","Franz Kafka","L","R","16641","a-metamorfose"],
["A Meu Irmão Guilherme de Castro Alves","Antônio Frederico de Castro Alves","L","P","86655"],
["A mia senhor que eu por mal de mi","Dom Dinis","L","P","88499"],
["A Minha Avó","Auta de Sousa","L","P","81643"],
["A Moça mais Bonita do Rio de Janeiro","Artur Azevedo","L","C","7435"],
["A Moreninha","Joaquim Manuel de Macedo","L","R","2023","a-moreninha"],
["A morgadinha dos canaviais: crônicas da aldeia","Júlio Dinis","L","C","28806","a-morgadinha-dos-canaviais-cronicas-da-aldeia"],
["A Mortalha de Alzira","Aluísio Azevedo","L","R","2057"],
["A Morte de Helena","Auta de Sousa","L","P","81652"],
["A Morte do Lidador","Alexandre Herculano","L","C","16519"],
["A mulher de Anacleto","Afonso Henriques de Lima Barreto","L","C","16812"],
["A Mulher de Preto","Machado de Assis","L","C","1881"],
["A mulher Pálida","Machado de Assis","L","C","17355"],
["A Mulher Roubada","Leandro Gomes de Barros","C","D","5431"],
["A neve pôs uma toalha calada sobre tudo","Alberto Caeiro","L","P","82074"],
["A noite desce, o calor soçobra um pouco","Alberto Caeiro","L","P","82075"],
["A Normalista","Adolfo Caminha","L","R","2016","a-normalista"],
["A Nota de Cem Mil-Réis","Artur Azevedo","L","C","7437"],
["A Nova Califórnia","Afonso Henriques de Lima Barreto","L","C","16813"],
["A Onde Vai a Lágrima","Auta de Sousa","L","P","81677"],
["A Orgia dos Duendes","Bernardo Guimarães","L","C","17318"],
["A Origem do Mênstruo","Bernardo Guimarães","L","C","17322"],
["A Parasita Azul","Machado de Assis","L","C","1894"],
["A Partida","Coelho Neto","L","C","7527"],
["A Pata da Gazela","José de Alencar","L","R","2096","a-pata-da-gazela"],
["A Pele do Lobo","Artur Azevedo","L","T","16562"],
["A Pianista","Machado de Assis","L","C","17357"],
["A Poesia Interminável","João da Cruz e Sousa","L","P","2101","a-poesia-interminavel"],
["A Polêmica","Artur Azevedo","L","C","7439"],
["A presença da morte e do luto em exílio de Lya Luft","Rafael Rodrigues Gomes","L","E","124737"],
["A Princesa de Babilônia","François-Marie Arouet (Voltaire)","L","C","2232"],
["A Princesa dos Cajueiros","Artur Azevedo","L","C","16564"],
["A reação do bom senso","Jackson de Figueiredo","L","E","43232"],
["A Relíquia","José Maria Eça de Queirós","L","R","1794","a-reliquia"],
["A Retirada da Laguna","Visconde de Taunay","L","C","2015","a-retirada-da-laguna"],
["A Ritinha","Artur Azevedo","L","C","7440"],
["A Seca do Ceará","Leandro Gomes de Barros","C","D","21397","a-seca-do-ceara"],
["A Segunda Vida","Machado de Assis","L","C","1915"],
["A Semana","Machado de Assis","L","M","16924","a-semana"],
["A Semana Santa","Alexandre Herculano","L","C","7387"],
["A Senhora do Galvão","Machado de Assis","L","C","1919"],
["A senzala","Antônio Frederico de Castro Alves","L","P","86503"],
["A Sereníssima República","Machado de Assis","L","C","1947"],
["A serpente de bronze","Humberto de Campos","L","M","16660","a-serpente-de-bronze"],
["A tal estado m'adusse, senhor","Dom Dinis","L","P","88501"],
["A tarde","Antônio Frederico de Castro Alves","L","P","86504"],
["A teia do contar na Nhecolândia - a personagem lendária Mãozão","Áurea Rita de Ávila Lima Ferreira","L","C","137953"],
["A Tempestade","Alexandre Herculano","L","C","7392"],
["A terrível história da Perna Cabeluda","Guaipuan Vieira","C","D","20049"],
["A tia Aninha","Artur Azevedo","L","C","7441"],
["A Ulina","Manuel Maria de Barbosa du Bocage","L","P","82111"],
["A última receita","Machado de Assis","L","C","17941"],
["A uma atriz","Antônio Frederico de Castro Alves","L","P","86656"],
["A uma estrangeira","Antônio Frederico de Castro Alves","L","P","86823"],
["A uma platéia","Casimiro de Abreu","L","P","84540"],
["A uma taça feita de um crânio humano","Antônio Frederico de Castro Alves","L","P","86824"],
["A valsa","Casimiro de Abreu","L","P","84542"],
["A Vida Eterna","Machado de Assis","L","C","17358"],
["A Vitória e a Piedade","Alexandre Herculano","L","C","7398"],
["A Viúva do Estanislau","Artur Azevedo","L","C","7442"],
["A viúva Simões","Júlia Lopes de Almeida","L","R","7553"],
["A viúva Sobral","Machado de Assis","L","C","17887"],
["A Viuvinha","José de Alencar","L","R","16674","a-viuvinha"],
["A Volta ao Mundo em 80 Dias","Júlio Verne","L","R","3527","a-volta-ao-mundo-em-80-dias"],
["A Volta ao Mundo em Oitenta Dias","Júlio Verne","L","R","2204"],
["A volta da primavera","Antônio Frederico de Castro Alves","L","P","86821"],
["A Voz","Alexandre Herculano","L","C","7388"],
["A voz do rio","Casimiro de Abreu","L","P","84544"],
["A***","Casimiro de Abreu","L","P","84546"],
["Abel e Helena","Artur Azevedo","L","T","16546"],
["Abençoa Senhor","Auta de Sousa","L","P","81651"],
["Abgar Renault. Antologia de sonetos","Salomão Rovedo","L","E","70022"],
["Abrãao e as frutas. (Coleção literatura para todos; v. 9)","Luciana V. P. de Mendonça","L","C","50056"],
["Aceita o universo","Alberto Caeiro","L","P","82062"],
["Acho tão natural que não se pense","Alberto Caeiro","L","P","82063"],
["Acima do dó central","Abdul Cadre","L","P","22681"],
["Acordar e despertar: pequenos toques para acordar ao lado da felicidade","Priscila Lima Rovedo","L","P","65734"],
["Acordo de noite subitamente","Alberto Caeiro","L","P","82064"],
["Actores e autores","Fialho de Almeida","L","M","43215"],
["Adão e Eva","Machado de Assis","L","C","16925"],
["Adeus","Antônio Frederico de Castro Alves","L","P","86505"],
["Adeus!","Auta de Sousa","L","P","81683"],
["Adoração dos Reis","Auta de Sousa","L","P","81681"],
["Adoração dos Reis Magos","Auta de Sousa","L","P","81793"],
["Adormecida","Antônio Frederico de Castro Alves","L","P","86825"],
["Advertência","Mário de Alencar","L","M","7561"],
["Afonso Arinus","Crispiano Neto","C","D","167344"],
["Agonia do Coração","Auta de Sousa","L","P","81668"],
["Agora que sinto amor","Alberto Caeiro","L","P","82069"],
["Ah! Querem uma luz melhor","Alberto Caeiro","L","P","82071"],
["Ahasverus e o gênio","Antônio Frederico de Castro Alves","L","P","86827"],
["Ai flores, ai flores do verde pino","Dom Dinis","L","P","86555"],
["Ai senhor fremosa, por Deus","Dom Dinis","L","P","88511"],
["Ai, fals'amigu'e sen lealdade","Dom Dinis","L","P","86566"],
["Ai, fremosinha, se ben ajades","Bernardo de Bonaval","L","P","82110"],
["Alexandre de Gusmão","Fundação Alexandre de Gusmão","C","D","167348"],
["Alfarrábios: o Ermitão da Glória","José de Alencar","L","C","43220","alfarrabios-o-ermitao-da-gloria"],
["Alfarrábios: o Garatuja","José de Alencar","L","C","43217","alfarrabios-o-garatuja"],
["Alguém na Estrada","Auta de Sousa","L","P","81648"],
["Alma Cabocla","Paulo Setúbal","L","R","17397","alma-cabocla"],
["Alma inquieta","Olavo Bilac","L","P","1996","alma-inquieta"],
["Almas Agradecidas","Machado de Assis","L","C","17359"],
["Almejos da angelitude - pensamentos","Valdecir de Oliveira Anselmo","L","P","19314"],
["Alves & Cia.","José Maria Eça de Queirós","L","C","1767","alves-cia"],
["Amad'e meu amigo","Dom Dinis","L","P","86557"],
["Amanda e os Nanorobôs","Eliú Quintiliano","I","I","145570","amanda-e-os-nanorobos"],
["Amante","Antônio Frederico de Castro Alves","L","P","86506"],
["Amaricanto","Salomão Rovedo","L","P","17718"],
["Amelia Smith","Visconde de Taunay","L","C","43227"],
["Americanas","Machado de Assis","L","P","2062","americanas"],
["Amiga, bom grad'haja Deus","Dom Dinis","L","P","86612"],
["Amiga, faço-me maravilhada","Dom Dinis","L","P","86558"],
["Amiga, muit'ha gran sazón","Dom Dinis","L","P","86548"],
["Amiga, quem vos (ama)","Dom Dinis","L","P","86716"],
["Amiga, sei eu bem d'unha molher","Dom Dinis","L","P","86616"],
["Amigo fals'e desleal","Dom Dinis","L","P","86680"],
["Amigo, pois vos non vi","Dom Dinis","L","P","86567"],
["Amigo, queredes-vos ir?","Dom Dinis","L","P","86692"],
["Amimone","José Cândido de Lacerda Coutinho","L","C","2129"],
["Amor com amor se paga","França Júnior","L","T","7536","amor-com-amor-se-paga"],
["Amor de Perdição","Camilo Castelo Branco","L","R","16586","amor-de-perdicao"],
["Amor de Salvação","Camilo Castelo Branco","L","R","88534","amor-de-salvacao"],
["Amor e Pátria","Joaquim Manuel de Macedo","L","C","16668"],
["Amor é um arder, que se não sente","Abade de Jazente","L","P","81616"],
["Amor por Anexins","Artur Azevedo","L","T","2063"],
["Amor, em que grave dia vos vi","Dom Dinis","L","P","88527"],
["Andar a Pé","David Henry Thoreau","L","E","2205"],
["Anedota do Cabriolet","Machado de Assis","L","C","1961"],
["Anedota Pecuniária","Machado de Assis","L","C","1913"],
["Angelica e Firmino","Manuel José Araújo Porto-Alegre","L","P","2130"],
["Angelina","Auta de Sousa","L","P","81684"],
["Angelitude","Valdecir de Oliveira Anselmo","L","P","16232"],
["Anjo","Antônio Frederico de Castro Alves","L","P","86629"],
["Anjo!","Casimiro de Abreu","L","P","84549"],
["Ano Bom","Auta de Sousa","L","P","81649"],
["Antes da Missa","Machado de Assis","L","C","17370"],
["Antes da Rocha Tapéia","Machado de Assis","L","C","17360"],
["Antes o vôo da ave, que passa e não deixa rasto","Alberto Caeiro","L","P","82073"],
["Antes que Cases","Machado de Assis","L","T","17371"],
["Antes que os jardins","Lucas Daniel Tomáz de Aquino","L","P","184139"],
["Antologia","Antero de Quental","L","E","1738"],
["Antologia Portuguesa","Teófilo Braga","L","E","43229"],
["Antonica da Silva","Joaquim Manuel de Macedo","L","C","2131"],
["Antonieta","Auta de Sousa","L","P","81644"],
["Antônio Rodrigues, soldado, viajante e jesuíta português na América do Sul no século XVI","Antônio Rodrigues","L","E","2065"],
["Antônio Silvino: o rei dos cangaceiros","Leandro Gomes de Barros","C","D","21386"],
["Antônio Silvino: Vida, Crimes e Julgamento","Francisco das Chagas Batista","C","D","5376"],
["Ao ator Joaquim Augusto","Antônio Frederico de Castro Alves","L","P","86828"],
["Ao Cair da Noite","Auta de Sousa","L","P","81645"],
["Ao Clarão da Lua","Auta de Sousa","L","P","81670"],
["Ao Correr da Pena","José de Alencar","L","C","1838"],
["Ao dous de julho","Antônio Frederico de Castro Alves","L","P","86829"],
["Ao entardecer","Alberto Caeiro","L","P","82076"],
["Ao Entardecer (contos vários)","Visconde de Taunay","L","C","2013"],
["Ao Luar","Auta de Sousa","L","P","81686"],
["Ao Mar","Auta de Sousa","L","P","81687"],
["Ao Meu Bom Anjo","Auta de Sousa","L","P","81646"],
["Ao Pé de um Berço","Auta de Sousa","L","P","81672"],
["Ao Pé do Túmulo","Auta de Sousa","L","P","81647"],
["Ao Senhor do Bomfim","Auta de Sousa","L","P","81673"],
["Aos Vinte Anos","Aluísio Azevedo","L","C","16528"],
["Apaixonada por Beethoven","Salomão Rovedo","L","P","70016"],
["Apólogos: contos para criança","Coelho Netto","L","F","43230","apologos-contos-para-crianca"],
["Aproximações. Ensaios sobre literatura","Sônia Régis","L","E","69968"],
["Aquela senhora tem um piano","Alberto Caeiro","L","P","82079"],
["Arras por Foro de Espanha (1371-1372)","Alexandre Herculano","L","C","16520"],
["Arte Poética","Aristóteles","L","E","2235"],
["As Academias de Sião","Machado de Assis","L","C","1920"],
["As Asas de um Anjo (Comédia)","José de Alencar","L","C","43235"],
["As Asas de um Anjo (Peça)","José de Alencar","L","C","16676"],
["As Asneiras do Guedes","Artur Azevedo","L","C","7443"],
["As Bodas de Luís Duarte","Machado de Assis","L","C","1895"],
["As bolas de sabão que esta criança","Alberto Caeiro","L","P","82142"],
["As Cartas de Amabed","François-Marie Arouet (Voltaire)","L","C","2241"],
["As Casadas Solteiras","Luís Carlos Martins Pena","L","T","17001"],
["As Cerejas","Artur Azevedo","L","C","7444"],
["As Doutoras","França Júnior","L","T","2082"],
["As duas ilhas","Antônio Frederico de Castro Alves","L","P","86830"],
["As Fábulas de Esopo","Joseph Shafan","L","F","121614","as-fabulas-de-esopo"],
["As Farpas (Fevereiro a Maio 1878)","José Maria Eça de Queirós","L","C","3739"],
["As Farpas (Janeiro 1878)","Ramalho Ortigão","L","M","81703","as-farpas-janeiro-1878"],
["As Farpas (Janeiro 1878)","José Maria Eça de Queirós","L","C","3740"],
["As Farpas (Janeiro a Fevereiro 1873)","José Maria Eça de Queirós","L","C","3807"],
["As Farpas (Junho 1883)","José Maria Eça de Queirós","L","C","3745"],
["As Farpas (Junho a Julho 1882)","José Maria Eça de Queirós","L","C","3744"],
["As Farpas (Março a Abril 1873)","José Maria Eça de Queirós","L","C","3808"],
["As Farpas (Novembro a Dezembro 1882)","José Maria Eça de Queirós","L","C","3800"],
["As Farpas (Outubro a Novembro 1873)","José Maria Eça de Queirós","L","C","3809"],
["As Forças Caudinas","Machado de Assis","L","T","17373","as-forcas-caudinas"],
["As jóias da Coroa","Raul Pompéia","L","P","17439"],
["As Maluquices do Imperador","Paulo Setúbal","L","R","7621"],
["As Mãos de Clarisse","Auta de Sousa","L","P","81675"],
["As Mulheres de Mantilha","Joaquim Manuel de Macedo","L","C","2133","as-mulheres-de-mantilha"],
["As Paradas","Artur Azevedo","L","C","7446"],
["As Primaveras","Casimiro de Abreu","L","P","2173","as-primaveras"],
["As proezas de um namorado mofino","Leandro Gomes de Barros","C","D","21400"],
["As Pupilas do Senhor Reitor","Júlio Dinis","L","R","16683","as-pupilas-do-senhor-reitor"],
["As quatro canções que seguem","Alberto Caeiro","L","P","82144"],
["As Quatro Órfãs de Portugal ou O Valor da Honestidade","João Melquíades Ferreira da Silva","C","D","5387"],
["As Religiões no Rio","João do Rio","L","M","7617"],
["As sete dores de Nossa Senhora","Coelho Netto","L","C","43241"],
["As viagens","Olavo Bilac","L","P","7565"],
["As visões de Santa Thereza","Francisco Mangabeira","L","P","43245"],
["As Vítimas-Algozes","Joaquim Manuel de Macedo","L","R","2134"],
["Assí me trax coitado","Dom Dinis","L","P","86587"],
["Assim como falham as palavras","Alberto Caeiro","L","P","82146"],
["Assim!","Casimiro de Abreu","L","P","84551"],
["Assombramento","Afonso Arinos","L","C","7374"],
["Assunto para um Conto","Artur Azevedo","L","C","7447"],
["Astúcias de Marido","Machado de Assis","L","C","17375"],
["Astúcias de namorada","M. Pinheiro Chagas","L","T","7558"],
["Atir: cartas, contos e crônicas","Rilvan Batista de Santana","L","C","121611"],
["Augusto Frederico Schmidt - um autêntico brasileiro","Chico de Assis","C","D","167358"],
["Aurora sem Dia","Machado de Assis","L","C","1897"],
["Auto da Alma","Gil Vicente","L","T","16645","auto-da-alma"],
["Auto da Barca do Inferno","Gil Vicente","L","T","1815","auto-da-barca-do-inferno"],
["Auto da Feira","Gil Vicente","L","T","16647"],
["Auto da Festa de São Lourenço","Pe. José de Anchieta","L","T","1853","auto-da-festa-de-sao-lourenco"],
["Auto da Índia","Gil Vicente","L","T","16648","auto-da-india"],
["Auto de Mofina Mendes","Gil Vicente","L","T","16649"],
["Auto Representado na Festa de São Lourenço","Pe. José de Anchieta","L","T","17391","auto-representado-na-festa-de-sao-lourenco"],
["Auto-retrato","Manuel Maria de Barbosa du Bocage","L","T","82112"],
["Ave","Auta de Sousa","L","P","81654"],
["Aventuras de Diófanes","Teresa Margarida da Silva e Orta","L","C","2067","aventuras-de-diofanes"],
["Aves da arribação","Antônio Frederico de Castro Alves","L","P","86831"],
["Ayres e Vergueiro","Machado de Assis","L","C","17376"],
["Balas de Estalo","Machado de Assis","L","M","16926","balas-de-estalo"],
["Balladilhas","Coelho Netto","L","C","43336"],
["Bálsamo","Casimiro de Abreu","L","P","84559"],
["Banhos de Mar","Artur Azevedo","L","C","7448"],
["Barão do Rio Branco","Crispiano Neto","C","D","167345"],
["Barca","Artur Azevedo","L","C","7449"],
["Batata cozida, mingau de cará. (Coleção literatura para todos; v. 8)","Eloí Elisabete Bocheco","L","C","50050"],
["Béatrix","Honoré de Balzac","L","C","2201","beatrix"],
["Bela-Menina","Adolfo Coelho","L","E","81601"],
["Bem entendi, meu amigo","Dom Dinis","L","P","86609"],
["Ben me cuidei eu, María García","Afonso Eanes de Coton","L","P","82032"],
["Bendito seja o mesmo sol em outras terras","Alberto Caeiro","L","P","82149"],
["Beneficiary Features of American Trade Unions","James B. Kennedy","L","E","79596","beneficiary-features-of-american-trade-unions"],
["Berço e túmulo","Casimiro de Abreu","L","P","84555"],
["Bluesia","Salomão Rovedo","L","P","70017"],
["Boa-noite","Antônio Frederico de Castro Alves","L","P","86832"],
["Bohemias","Auta de Sousa","L","P","81689"],
["Bom Crioulo","Adolfo Caminha","L","R","2064","bom-crioulo"],
["Bom dia vi amigo","Dom Dinis","L","P","86691"],
["Bombeiro civil no Brasil","Aparecido da Cruz","L","C","167305"],
["Bons Dias","Machado de Assis","L","M","1875"],
["Borboleta","Casimiro de Abreu","L","P","84557"],
["Brás, Bexiga e Barra Funda","Alcântara Machado","L","C","16516","bras-bexiga-e-barra-funda"],
["Brincar com fogo","Machado de Assis","L","C","17377"],
["Broquéis","João da Cruz e Sousa","L","P","2069","broqueis"],
["Brutos penhascos, rústicas montanhas","Abade de Jazente","L","P","81618"],
["Cabelos molhados. (Coleção literatura para todos; v. 10)","Luís Pimentel","L","P","50062"],
["Cachoeira em crônicas: cotidiano","Jeferson Francisco Selbach","L","C","26675"],
["Café com Cuca","Ismar Imhof","L","E","183809"],
["Caiu o Ministério","França Júnior","L","T","2139"],
["Camafeus Romanos","Eugénio de Castro","L","P","43337"],
["Caminho do Sertão","Auta de Sousa","L","P","81720"],
["Camões","Joaquim Nabuco","L","E","2053","camoes"],
["Camões: discurso pronunciado a 10 de junho de 1880 por parte [sic] do Gabinete Português de Leitura","Joaquim Nabuco","L","E","15637"],
["Campanha Abolicionista","José Carlos do Patrocínio","L","E","2122"],
["Canção ao Mar (Mar Eterno)","Eugénio Tavares","L","P","17624"],
["Canção do boêmio","Antônio Frederico de Castro Alves","L","P","86833"],
["Canção do Exílio","Antônio Gonçalves Dias","L","P","2112"],
["Canção do exílio","Casimiro de Abreu","L","P","86488"],
["Canção do Tamoio","Antônio Gonçalves Dias","L","P","200085"],
["Cancioneiro","Fernando Pessoa","L","P","2199","cancioneiro"],
["Canções e Elegias","Luís Vaz de Camões","L","P","16840"],
["Cândido","François-Marie Arouet (Voltaire)","L","R","2239"],
["Cantai","Auta de Sousa","L","P","81724"],
["Cantata à morte de Inês de Castro","Manuel Maria de Barbosa du Bocage","L","P","82114"],
["Cantiga","Auta de Sousa","L","P","81691"],
["Cantiga de Esponsais","Machado de Assis","L","C","1906"],
["Cantiga sua à Senhora Maria Coresma","Bernardim Ribeiro","L","P","82097"],
["Cantiga velha","Machado de Assis","L","C","17890"],
["Canto da Solidão","Bernardo Guimarães","L","C","17319"],
["Canto de amor","Casimiro de Abreu","L","P","84561"],
["Capítulo dos Chapéus","Machado de Assis","L","C","1912"],
["Capítulos de História Colonial","João Capistrano de Abreu","L","E","7522","capitulos-de-historia-colonial"],
["Capítulos de História Colonial (1500-1800)","João Capistrano de Abreu","L","E","2074","capitulos-de-historia-colonial-1500-1800"],
["Caramuru","José de Santa Rita Durão","L","P","16642","caramuru"],
["Caramuru: poema épico do descobrimento da Bahia","José de Santa Rita Durão","L","P","2111","caramuru-poema-epico-do-descobrimento-da-bahia"],
["Caráter","Ralph Waldo Emerson","L","E","2206"],
["Caravela: redescobrimentos. (Coleção literatura para todos; v.4)","Gabriel Bicalho","L","P","50036"],
["Carlota","Auta de Sousa","L","P","81694"],
["Carne Frita","Gustavo Villas Boas Farias","L","C","16233"],
["Carolina","Casimiro de Abreu","L","P","16589"],
["Carrilhões","Murilo Araújo","L","P","17008"],
["Carta da Companhia","Pe. José de Anchieta","L","T","38596"],
["Carta de um Defunto Rico","Afonso Henriques de Lima Barreto","L","C","16814"],
["Cartas Chilenas","Tomás Antônio Gonzaga","L","P","17453"],
["Cartas D'Amor","José Maria Eça de Queirós","L","M","16620"],
["Cartas D'Amor - O Efêmero Feminino","José Maria Eça de Queirós","L","M","1789","cartas-damor-o-efemero-feminino"],
["Cartas de Inglaterra","José Maria Eça de Queirós","L","M","14017","cartas-de-inglaterra"],
["Cartas de Olinda e Alzira","Manuel Maria de Barbosa du Bocage","L","P","82115"],
["Cartas Familiares e Bilhetes de Paris","José Maria Eça de Queirós","L","M","14019","cartas-familiares-e-bilhetes-de-paris"],
["Casa de Pensão","Aluísio Azevedo","L","R","16529","casa-de-pensao"],
["Casa Velha","Machado de Assis","L","R","1876","casa-velha"],
["Casa, não casa","Machado de Assis","L","C","17903"],
["Casada e viúva","Machado de Assis","L","C","17909"],
["Caso da Vara","Machado de Assis","L","C","1927","caso-da-vara"],
["Catálogo da Exposição Comemorativa do IV Centenário","Fundação Biblioteca Nacional","L","E","2135"],
["Catálogo da Exposição Cruz e Sousa, 100 anos de morte (1898-1998)","Fundação Biblioteca Nacional","L","E","2136"],
["Catálogo de Autores Brasileiros com a Obra em Domínio Público","Fundação Biblioteca Nacional","L","E","2137"],
["Catálogo de Publicações da Biblioteca Nacional","Fundação Biblioteca Nacional","L","E","2138"],
["Cavação","Artur Azevedo","L","C","7450"],
["Celeste","Auta de Sousa","L","P","81709"],
["Cena íntima","Casimiro de Abreu","L","P","84563"],
["Certa Entidade em Busca de Outra","Qorpo Santo","L","T","17430"],
["Cervantes, Dom Quixote e outras e-crônicas do nosso tempo","Salomão Rovedo","L","P","70018"],
["Céus e terras do Brasil","Visconde de Taunay","L","C","43338"],
["Chapada das Mulatas: postagens de um blogueiro","Jeferson Francisco Selbach","L","C","88448"],
["Chapéus de palha, panamás, plumas, cartolas","Sylvia Helena Telarolli de Almeida Leite","L","C","17826"],
["Charneca em flor","Florbela Espanca","L","P","7531"],
["Chegou-m'amiga recado","Dom Dinis","L","P","86714"],
["Chegou-m'ora aqui recado","Dom Dinis","L","P","86611"],
["Chico","Artur Azevedo","L","C","7451"],
["Chico Science: a rapsódia afrociberdélica","Moisés Neto","L","P","104173"],
["Chorando","Auta de Sousa","L","P","81692"],
["Chuva e sol","Adelina Lopes Vieira","I","I","81624","chuva-e-sol"],
["Cícero","Plutarco","L","E","2236"],
["Cinco Minutos","José de Alencar","L","R","1836","cinco-minutos"],
["Cinco Mulheres","Machado de Assis","L","C","17379"],
["Ciúme","Auta de Sousa","L","P","81710"],
["Clara","Casimiro de Abreu","L","P","84566"],
["Clara dos Anjos","Afonso Henriques de Lima Barreto","L","R","16815","clara-dos-anjos"],
["Clarisse","Auta de Sousa","L","P","81711"],
["Clepsidra","Camilo Pessanha","L","P","1783","clepsidra"],
["Cobras em compota. (Coleção literatura para todos; v.2)","Índigo","L","P","50033"],
["Coisas que Só Eu Sei","Camilo Castelo Branco","L","C","1780","coisas-que-so-eu-sei"],
["Coitada viv', amigo, porque vos nom vejo","Dom Dinis","L","P","86715"],
["Coleção lusitânia","Coelho Netto","L","C","43346"],
["Com'ousará parecer ante mi","Dom Dinis","L","P","86666"],
["Comadre Morte","Adolfo Coelho","L","E","81603"],
["Combate de José Colatino com o Carranca do Piauí","João Melquíades Ferreira da Silva","C","D","5379"],
["Comes e Bebes","Artur Azevedo","L","C","7452"],
["Como e por que sou Romancista","José de Alencar","L","C","1837","como-e-por-que-sou-romancista"],
["Como me Deus aguisou que vivesse","Dom Dinis","L","P","86728"],
["Como o Brasil enfrenta a exploração sexual-comercial de crianças e adolescentes","Ministério das Relações Exteriores","L","E","84450"],
["Como o Diabo as Arma!","Artur Azevedo","L","C","7453"],
["Como quem num dia de verão abre a porta de casa","Alberto Caeiro","L","P","82151"],
["Como se fazia um Deputado","França Júnior","L","T","16635"],
["Como se inventaram os almanaques","Machado de Assis","L","C","17380"],
["Como um grande borrão de fogo sujo","Alberto Caeiro","L","P","82152"],
["Como uma criança antes de a ensinarem a ser grande","Alberto Caeiro","L","P","82154"],
["Confissões de uma Viúva","Machado de Assis","L","C","1883"],
["Confissões de uma Viúva Moça","Machado de Assis","L","C","16927"],
["Conjugo Vobis","Artur Azevedo","L","C","7454"],
["Consolo Supremo","Auta de Sousa","L","P","81721"],
["Construção da figura religiosa no romance de cavalaria","Marcia Maria de Medeiros","L","C","151167"],
["Conto Alexandrino","Machado de Assis","L","C","1909"],
["Conto de Escola","Machado de Assis","L","C","16928","conto-de-escola"],
["Conto ou não conto?","Abel Sidney","I","I","105130","conto-ou-nao-conto"],
["Contos","José Maria Eça de Queirós","L","C","2742","contos"],
["Contos avulsos","Alcântara Machado","L","C","7386"],
["Contos de Lima Barreto","Afonso Henriques de Lima Barreto","L","C","2140"],
["Contos fantásticos","Teófilo Braga","L","P","43339","contos-fantasticos"],
["Contos Fluminenses","Machado de Assis","L","C","1878","contos-fluminenses"],
["Contos Fora da Moda","Artur Azevedo","L","C","16566"],
["Contos Fora de Moda","Artur Azevedo","L","C","1757"],
["Contos Gauchescos","João Simões Lopes Neto","L","C","1829","contos-gauchescos"],
["Contos para Velhos","Olavo Bilac","L","P","2061"],
["Contos, cartas, frases e poemas","Djalma de Freitas Pinheiro","L","P","174701"],
["Contrastes","Auta de Sousa","L","P","81713"],
["Contrastes e Confrontos","Euclides da Cunha","L","E","1796"],
["Conversa pra boi dormir: um pouco de castelo na minha lembrança","José Antônio Caliman","L","C","86422"],
["Conversão de um avaro","Machado de Assis","L","C","17382"],
["Convite a Marília","Manuel Maria de Barbosa du Bocage","L","P","82116"],
["Coração, Cabeça e Estômago","Camilo Castelo Branco","L","C","1781","coracao-cabeca-e-estomago"],
["Cores","Auta de Sousa","L","P","81690"],
["Correspondência","Emílio de Meneses","L","P","17344"],
["Correspondência de Machado de Assis","Machado de Assis","L","M","17384"],
["Coup D'Étrier","Antônio Frederico de Castro Alves","L","P","86834"],
["Covilheira velha, se vos fezesse","Afonso Eanes de Coton","L","P","82034"],
["Creio que irei morrer","Alberto Caeiro","L","P","82156"],
["Crepúsculo","Auta de Sousa","L","P","81693"],
["Crianças","Auta de Sousa","L","P","81712"],
["Crisálidas","Machado de Assis","L","P","16929","crisalidas"],
["Crisfal","Cristóvão Falcão","L","P","16612","crisfal"],
["Críticas Teatrais","Machado de Assis","L","M","1887"],
["Crônica do viver baiano seiscentista - a cidade e seus pícaros - a freira:ralo, roda e grade","Gregório de Matos","L","P","19634"],
["Crônica do viver Baiano Seiscentista - a cidade e seus pícaros - alguns passos discretos e tristes","Gregório de Matos","L","P","19639"],
["Crônica do viver baiano seiscentista - a cidade e seus pícaros - andanças de uma viola de cabaça","Gregório de Matos","L","P","19644"],
["Crônica do viver baiano seiscentista - a cidade e seus pícaros - Antônia","Gregório de Matos","L","P","19626"],
["Crônica do viver baiano seiscentista - a cidade e seus pícaros - Bárbora ou Babu","Gregório de Matos","L","P","19623"],
["Crônica do viver Baiano Seiscentista - a cidade e seus pícaros - Betica","Gregório de Matos","L","P","19638"],
["Crônica do viver baiano seiscentista - a cidade e seus pícaros - briga, briga","Gregório de Matos","L","P","19628"],
["Crônica do viver baiano seiscentista - a cidade e seus pícaros - Cota","Gregório de Matos","L","P","19591"],
["Crônica do viver baiano seiscentista - a cidade e seus pícaros - Custódia","Gregório de Matos","L","P","19620"],
["Crônica do viver baiano seiscentista - a cidade e seus pícaros - Joana","Gregório de Matos","L","P","19643"],
["Crônica do viver baiano seiscentista - a cidade e seus pícaros - Letrados","Gregório de Matos","L","P","19599"],
["Crônica do viver baiano seiscentista - a cidade e seus pícaros - Mariana, apelidada a rola","Gregório de Matos","L","P","19641"],
["Crônica do viver baiano seiscentista - a cidade e seus pícaros - Pança farta e pé dormente","Gregório de Matos","L","P","19595"],
["Crônica do Viver Baiano Seiscentista - A Nossa Sé da Bahia","Gregório de Matos","L","P","16657"],
["Crônica do viver baiano seiscentista - cidade e seus pícaros - Adãos de Massapê","Gregório de Matos","L","P","19633"],
["Crônica do viver baiano seiscentista - cidade e seus pícaros - Ângela","Gregório de Matos","L","P","19587"],
["Crônica do viver baiano seiscentista - cidade e seus pícaros - Brites","Gregório de Matos","L","P","19637"],
["Crônica do viver baiano seiscentista - cidade e seus pícaros - Maria João","Gregório de Matos","L","P","19631"],
["Crônica do viver baiano seiscentista - cidade e seus pícaros - opúsculo de Pedro Alz. da Neyva","Gregório de Matos","L","P","19635"],
["Crônica do viver baiano seiscentista - cidade e seus pícaros - Teresa","Gregório de Matos","L","P","19629"],
["Crônica do Viver Baiano Seiscentista - O Burgo","Gregório de Matos","L","P","16655"],
["Crônica do Viver Baiano Seiscentista - Os Homens Bons","Gregório de Matos","L","P","16656"],
["Crônica do viver baiano seiscentista - os homens bons - a nossa sé da Bahia","Gregório de Matos","L","P","19578"],
["Crônica do viver baiano seiscentista - os homens bons - espada e espadilha","Gregório de Matos","L","P","19580"],
["Crônica do viver baiano seiscentista - os homens bons - juízes do Iguaraçu","Gregório de Matos","L","P","19581"],
["Crônica do viver baiano seiscentista - os homens bons - pessoas beneméritas","Gregório de Matos","L","P","19576"],
["Crônica do viver baiano seiscentista - os homens bons - pessoas muito principais","Gregório de Matos","L","P","19571"],
["Crônica do viver baiano seiscentista - os homens bons - santos unhates","Gregório de Matos","L","P","19583"],
["Crônica do viver baiano seiscentista -os homens bons - a musa praguejadora","Gregório de Matos","L","P","19584"],
["Crônicas","Afonso Henriques de Lima Barreto","L","M","7555"],
["Crônicas de Londres","José Maria Eça de Queirós","L","M","14018"],
["Culto Métrico","Cláudio Manuel da Costa (Glauceste Satúrnio)","L","P","16550"],
["Cultura e Opulência do Brasil por suas Drogas e Minas","Pe. André João Antonil","L","E","1737","cultura-e-opulencia-do-brasil-por-suas-drogas-e-minas"],
["Curiosidades e Factos Notaveis do Ceará","J. G. Dias Sobreira","L","C","5973"],
["Curta história","Machado de Assis","L","C","17880"],
["D. Benedita","Machado de Assis","L","C","1943"],
["D. Jucunda","Machado de Assis","L","C","17876"],
["D. Mônica","Machado de Assis","L","C","17387"],
["D. Paula","Machado de Assis","L","C","1981"],
["D. Pedro","Alexandre Herculano","L","C","7396"],
["Da Literatura fantástica (teorias e contos)","Marcio Cícero de Sá","L","C","86745"],
["Da mais alta janela da minha casa","Alberto Caeiro","L","P","82158"],
["Da mia senhor que eu servi","Dom Dinis","L","P","86731"],
["Da minha aldeia vejo quanto a terra","Alberto Caeiro","L","P","82161"],
["Dadá","Auta de Sousa","L","P","81729"],
["Dalila","Antônio Frederico de Castro Alves","L","P","86835"],
["De cerúleo gabão não bem coberto","Manuel Maria de Barbosa du Bocage","L","P","82117"],
["De Cima para Baixo","Artur Azevedo","L","C","7455"],
["De Jerssey a Granville","Alexandre Herculano","L","C","81914"],
["De Joán Bol'and'eu maravilhado","Dom Dinis","L","P","86593"],
["De joelhos","Auta de Sousa","L","P","81726"],
["De joelhos","Casimiro de Abreu","L","P","84567"],
["De Longe","Auta de Sousa","L","P","81727"],
["De longe vejo passar no rio um navio","Alberto Caeiro","L","P","82164"],
["De mi vós fazerdes, senhor","Dom Dinis","L","P","88520"],
["De morrerdes por mi gram dereit'é","Dom Dinis","L","P","86684"],
["De muitas coitas, senhor, que levei","Dom Dinis","L","P","88517"],
["De que morredes, filha, a do corpo velido?","Dom Dinis","L","P","86554"],
["Decadência de dois grandes homens","Machado de Assis","L","C","17388"],
["Décima","Frei Caneca","L","E","82027"],
["Deito-me ao comprido na erva","Alberto Caeiro","L","P","82162"],
["Demônios","Aluísio Azevedo","L","C","7413"],
["Dentro da noite","João do Rio","L","R","2076","dentro-da-noite"],
["Denúncia Involuntária","Artur Azevedo","L","C","7456"],
["Desalento","Auta de Sousa","L","P","81728"],
["Desconexo desejo","Hilário Pio","L","P","105131"],
["Descrição da Ilha de Itaparica","Frei Manuel de Santa Maria Itaparica","L","P","1987"],
["Desencantos","Machado de Assis","L","T","17390","desencantos"],
["Desespero","Antônio Frederico de Castro Alves","L","P","86630"],
["Despertar","Hermes Fontes","L","P","43341"],
["Deste modo ou daquele modo","Alberto Caeiro","L","P","82165"],
["Deus!","Casimiro de Abreu","L","P","84568"],
["Deveres do Homem","Ferdinando Medici","L","E","2645"],
["Diálogo dos ecos","Antônio Frederico de Castro Alves","L","P","86631"],
["Diálogos das Grandezas do Brasil","Izaak Walton","L","E","1736"],
["Diana","Machado de Assis","L","C","17392"],
["Diário íntimo","Afonso Henriques de Lima Barreto","L","M","2078"],
["Dias de guerra e de sertão","Visconde de Taunay","L","C","43342"],
["Dirceu de Marília","Joaquim Norberto de Souza e Silva","L","E","2079"],
["Discurso de Posse na ABL","Emílio de Meneses","L","E","17346"],
["Discurso sobre a História da Literatura do Brasil","Domingos Gonçalves de Magalhães","L","E","2080"],
["Discursos (obras completas)","Tobias Barreto de Menezes","L","E","43344"],
["Dispersão","Mário de Sá-Carneiro","L","R","19245","dispersao"],
["Diss´a fremosa en Bonaval assí","Bernardo de Bonaval","L","P","82108"],
["Disse-m'hoj'un cavaleiro","Dom Dinis","L","P","86607"],
["Diva","José de Alencar","L","R","2033","diva"],
["Dívida Extinta","Machado de Assis","L","C","17393"],
["Dizede por Deus amigo","Dom Dinis","L","P","86672"],
["Dizem que em cada coisa uma coisa oculta mora","Alberto Caeiro","L","P","82166"],
["Dizes-me: tu és mais alguma cousa","Alberto Caeiro","L","P","82167"],
["Dizia la fremozinha","Afonso Sanches","L","P","82042"],
["Do Contrato Social","Jean-Jacques Rousseau","L","C","2244","do-contrato-social"],
["Do Livro do Desassossego","Fernando Pessoa","L","P","16740"],
["Doente","Auta de Sousa","L","P","81731"],
["Dois proveitos em um saco","França Júnior","L","T","7537"],
["Dolores","Auta de Sousa","L","P","81732"],
["Dom Casmurro","Machado de Assis","L","R","1888","dom-casmurro"],
["Dom Quixote","Adelina Lopes Vieira","I","I","81625","dom-quixote"],
["Don Quixote. Vol. 1","Miguel de Cervantes Saavedra","L","C","17707","don-quixote-vol-1"],
["Don Quixote. Vol. 2","Miguel de Cervantes Saavedra","L","C","17708"],
["Dona Eulália","Artur Azevedo","L","C","7457"],
["Dona Guidinha do Poço","Manuel de Oliveira Paiva","L","R","16998","dona-guidinha-do-poco"],
["Dores","Casimiro de Abreu","L","P","84569"],
["Dos que ora son na hoste","Dom Dinis","L","P","86550"],
["Duas Apostas","Artur Azevedo","L","C","7458"],
["Duas Juízas","Machado de Assis","L","C","16932"],
["Eficiência Militar","Afonso Henriques de Lima Barreto","L","C","16816"],
["Elbow-Room - A Novel Without a Plot","Charles Heber Clark","L","C","79597"],
["Elefantes e Ursos","Artur Azevedo","L","C","7459"],
["Elogio da vaidade","Machado de Assis","L","C","17396"],
["Em busca dos contos perdidos","Mariza B. T. Mendes","L","E","17829"],
["Em gram coita, senhor","Dom Dinis","L","P","86733"],
["Em Sonhos","Artur Azevedo","L","C","7460"],
["En grave día, senhor, que vos oí","Dom Dinis","L","P","86591"],
["Encarnação","José de Alencar","L","R","2031"],
["Encher tempo","Machado de Assis","L","C","17398"],
["Encontros Reveladores","Artur Azevedo","L","C","7461"],
["Ensaio Histórico sobre as Letras no Brasil","Francisco Adolfo de Varnhagen","L","E","2083"],
["Entre 1892 e 1894","Machado de Assis","L","M","1937"],
["Entre a juntura dos ossos. (Coleção literatura para todos; v. 5)","Vera Lúcia de Oliveira","L","P","50040"],
["Entre a Missa e o Almoço","Artur Azevedo","L","C","16567"],
["Entre duas datas","Machado de Assis","L","C","17886"],
["Entre Marília e a pátria","Frei Caneca","L","E","82028"],
["Entre o que vejo","Alberto Caeiro","L","P","82170"],
["Entre Santos","Machado de Assis","L","C","1966"],
["Entrei para o Clube Jácome","França Júnior","L","T","1807"],
["Epaminondas","Artur Azevedo","L","C","7480"],
["Epicédio","Cláudio Manuel da Costa (Glauceste Satúrnio)","L","P","16551"],
["Epitáfio — Se estiver nos meus fados a próxima extinção de meus dias","Manuel Maria de Barbosa du Bocage","L","P","82118"],
["Ernesto de Tal","Machado de Assis","L","C","1896"],
["Erótica","Rafael Rodrigues Gomes","L","C","124736"],
["Esaú e Jacó","Machado de Assis","L","R","16937","esau-e-jaco"],
["Esparsos e Inéditos","Emílio de Meneses","L","P","17337"],
["Espumas Flutuantes","Antônio Frederico de Castro Alves","L","P","1785","espumas-flutuantes"],
["Esta tarde a trovoada caiu","Alberto Caeiro","L","P","82172"],
["Estas quatro canções, escrevi-as estando doente","Alberto Caeiro","L","P","82173"],
["Estas verdades não são perfeitas porque são ditas","Alberto Caeiro","L","P","82176"],
["Este mundo da injustiça globalizada","José Saramago","L","C","2913"],
["Estes, que m’ora tolhem mia Senhor","Afonso Sanches","L","P","82043"],
["Estórias de Jenni","François-Marie Arouet (Voltaire)","L","C","2305"],
["Estou doente","Alberto Caeiro","L","P","82178"],
["Estrada a Fora","Auta de Sousa","L","P","81734"],
["Eterna dor","Auta de Sousa","L","P","81733"],
["Eterna Mágoa","Augusto dos Anjos","L","P","5031"],
["Eterno!","Machado de Assis","L","C","1930"],
["Eu","Augusto dos Anjos","L","P","2066"],
["Eu e Outras Poesias","Augusto dos Anjos","L","P","1772","eu-e-outras-poesias"],
["Eu nasci além dos mares","Casimiro de Abreu","L","P","84570"],
["Eu nunca guardei rebanhos","Alberto Caeiro","L","P","82179"],
["Eu que vi, eu que vi","Devison Amorim do Nascimento","I","I","124735"],
["Eu queria ter o tempo e o sossego suficientes","Alberto Caeiro","L","P","82180"],
["Eu sou a vida; eu não sou a morte","Qorpo Santo","L","T","7627"],
["Eurico, o Presbítero","Alexandre Herculano","L","C","16521","eurico-o-presbitero"],
["Evolução","Machado de Assis","L","C","1959"],
["Ex Cathedra","Machado de Assis","L","C","1918"],
["Fabulário","Coelho Netto","L","F","43347","fabulario"],
["Falando ao Coração","Auta de Sousa","L","P","81771"],
["Falaram-me os homens em humanidade","Alberto Caeiro","L","P","82182"],
["Falas de civilização, e de não dever ser","Alberto Caeiro","L","P","82181"],
["Falenas","Machado de Assis","L","P","2070","falenas"],
["Falou-m'hoj'o meu amigo","Dom Dinis","L","P","86573"],
["Família composta. (Coleção literatura para todos; v. 7)","Domingos Pellegrini","L","C","50049"],
["Faróis","João da Cruz e Sousa","L","P","16614"],
["Farsa de Inês Pereira","Gil Vicente","L","T","1819","farsa-de-ines-pereira"],
["Farsa do Velho da Horta","Gil Vicente","L","T","1820"],
["Farsa ou Auto de Inês Pereira","Gil Vicente","L","T","16650"],
["Fatalidade","Artur Azevedo","L","C","7462"],
["Fausto","Johann Wolfgang von Goethe","L","C","2650","fausto"],
["Fefa","Auta de Sousa","L","P","81768"],
["Feira dos anexins","Francisco Manuel de Melo","L","C","43207","feira-dos-anexins"],
["Feitos de Mem de Sá","Pe. José de Anchieta","L","T","17394"],
["Felicidade pelo Casamento","Machado de Assis","L","C","17400"],
["Feliz","Auta de Sousa","L","P","81769"],
["Fernando e Fernanda","Machado de Assis","L","C","17403"],
["Ficções do interlúdio: para além do outro oceano de Coelho Pacheco.","Fernando Pessoa","L","P","24203","ficcoes-do-interludio-para-alem-do-outro-oceano-de-coelho-pa"],
["Filmer","H.G. Wells","L","C","7227"],
["Filomena Borges","Aluísio Azevedo","L","R","16530"],
["Filosofia de um par de botas","Machado de Assis","L","C","17407"],
["Fio Partido","Auta de Sousa","L","P","81770"],
["Flor anônima","Machado de Assis","L","C","17913"],
["Flor de pitanga","William Henrique Stutz","L","C","166653"],
["Flor de Sangue","Valentim Magalhães","L","P","17461"],
["Flor do Campo","Auta de Sousa","L","P","81767"],
["Flores","Auta de Sousa","L","P","81766"],
["Flores da Noite","Lycurgo José Henrique de Paiva","L","C","16839"],
["Foi Buscar Lã...","Afonso Henriques de Lima Barreto","L","C","16817"],
["Foi Don Fagundo un día convidar","Afonso Eanes de Coton","L","P","82035"],
["Folha negra","Casimiro de Abreu","L","P","86437"],
["Folha rota","Machado de Assis","L","C","17901"],
["Folhas Caídas","João Batista da Silva Leitão de Almeida Garrett","L","C","16524","folhas-caidas"],
["Fragmento","Casimiro de Abreu","L","P","86438"],
["Fragmentos de meu tempo","Geraldo Pereira","L","P","103030"],
["Francisca","Machado de Assis","L","C","17413"],
["Frei Simão","Machado de Assis","L","C","16939"],
["Fremosas, a Deus grado","Bernardo de Bonaval","L","P","82102"],
["Fritzmac","Artur Azevedo","L","C","7417"],
["Fulano","Machado de Assis","L","C","1914"],
["Galeria Póstuma","Machado de Assis","L","C","1908"],
["Gardenia","Salomão Rovedo","L","P","70019"],
["Gênese","Hermes Fontes","L","P","43348"],
["Gentil","Auta de Sousa","L","P","81772"],
["Gilberto Amado","Crispiano Neto","C","D","167349"],
["Girândola de Amores","Aluísio Azevedo","L","R","16531"],
["Goivos","Auta de Sousa","L","P","81773"],
["Goivos e Camélias","Machado de Assis","L","C","1898"],
["Goyaz","Visconde de Taunay","L","C","19648"],
["Gozo os campos sem reparar para eles","Alberto Caeiro","L","P","82184"],
["Graded Lessons in English - An Elementary English Grammar Consisting of One Hundred Practical Lessons, Carefully Graded and Adapted to the Class-Room","Alonzo Reed","L","E","38543","graded-lessons-in-english-an-elementary-english-grammar-cons"],
["Gram temp'há, meu amigo, que nom quis Deus","Dom Dinis","L","P","86683"],
["Grãos de mostarda","Humberto de Campos","L","M","16661","graos-de-mostarda"],
["Grave vos é de que vos hei amor","Dom Dinis","L","P","86737"],
["Guerra junqueiro: Que é a terra?, O verbo cantar e Que é a vida?","Júlio Brandão","L","P","43470"],
["Guerras do Alecrim e da Manjerona","Antônio José da Silva","L","T","1750"],
["Há metafísica bastante em não pensar em nada","Alberto Caeiro","L","P","84426"],
["Há poetas que são artistas","Alberto Caeiro","L","P","82168"],
["Habilidoso","Machado de Assis","L","C","17882"],
["Hanna","Rilvan Batista de Santana","L","C","121956"],
["Hebréia","Antônio Frederico de Castro Alves","L","P","86836"],
["Helena","Machado de Assis","L","R","16940","helena"],
["Henriqueta Renan","Machado de Assis","L","C","1935","henriqueta-renan"],
["Herói à Força","Artur Azevedo","L","C","16568"],
["Hino ao sono","Antônio Frederico de Castro Alves","L","P","86837"],
["História comum","Machado de Assis","L","C","17895"],
["História da Conjuração Mineira","Joaquim Norberto de Souza e Silva","L","E","2092"],
["História da Literatura Brasileira","José Veríssimo Dias de Matos","L","E","2127"],
["História da Literatura Brasileira: Fatores da Literatura Brasileira","Sílvio Romero","L","E","2128"],
["História da literatura portuguesa (recapitulação): Idade média","Teófilo Braga","L","P","43350"],
["História da literatura portuguesa: teatro clássico no século XVI e XVII","Teófilo Braga","L","P","43434"],
["História da Princesa da Pedra Fina","Leandro Gomes de Barros","C","D","5399"],
["História da Província de Santa Cruz","Pero de Magalhães Gândavo","L","E","17411"],
["História da Província de Santa Cruz, A que Vulgarmente Chamamos Brasil","Pero de Magalhães Gândavo","L","E","2001"],
["História de Donzela Teodora","Leandro Gomes de Barros","C","D","5394"],
["História de Juvenal e o Dragão","Leandro Gomes de Barros","C","D","5405"],
["História de Quinze Dias","Machado de Assis","L","M","16941","historia-de-quinze-dias"],
["História de um crime","Antônio Frederico de Castro Alves","L","P","86632"],
["História de um Dominó","Artur Azevedo","L","C","7463"],
["História de um Soneto","Artur Azevedo","L","C","7464"],
["História de uma lágrima","Machado de Assis","L","C","17414"],
["História de Zezinho e Mariquinha","Silvino Pirauá de Lima","C","D","5454"],
["História do Boi Misterioso","Leandro Gomes de Barros","C","D","5406","historia-do-boi-misterioso"],
["História do Cachorro dos Mortos","Leandro Gomes de Barros","C","D","5425"],
["História do compadre rico e do compadre pobre","Adolfo Coelho","L","E","81609"],
["História do Futuro, Vol. I","Pe. Antônio Vieira","L","E","17328"],
["História do Futuro, Vol. II","Pe. Antônio Vieira","L","E","17329"],
["História do teatro português: teatro moderno","Teófilo Braga","L","P","43352"],
["História do teatro português: teatro nacional no século VI","Teófilo Braga","L","P","43351"],
["História do Valente Sertanejo Zé Garcia","João Melquíades Ferreira da Silva","C","D","5382"],
["História Vulgar","Artur Azevedo","L","C","7466"],
["Histórias da Avózinha","Alberto Figueiredo Pimentel","I","F","2147","historias-da-avozinha"],
["Histórias da Meia-Noite","Machado de Assis","L","C","1893","historias-da-meia-noite"],
["Histórias e Sonhos","Afonso Henriques de Lima Barreto","L","C","16818"],
["Histórias e Tradições da Província de Minas Gerais","Bernardo Guimarães","L","C","2142"],
["Histórias que acabam aqui","Maria Teresa Lobato Fernandes Pereira Lopes","I","I","36177"],
["Histórias sem Data","Machado de Assis","L","C","1902","historias-sem-data"],
["Hoje","Auta de Sousa","L","P","81774"],
["Hoje Avental, amanhã Luva","Machado de Assis","L","C","17415","hoje-avental-amanha-luva"],
["Hoje de manhã saí muito cedo","Alberto Caeiro","L","P","84427"],
["Hoje sou um; e amanhã outro","Qorpo Santo","L","T","7628"],
["Hontem pos-se a sol","Bernardim Ribeiro","L","P","82098"],
["Hora de Paz","Auta de Sousa","L","P","81776"],
["Horas tristes","Casimiro de Abreu","L","P","86439"],
["Hóspede","Pardal Mallet","L","C","7626"],
["Hospital das letras","Francisco Manoel de Melo","L","C","38019"],
["Iaiá Garcia","Machado de Assis","L","R","1971","iaia-garcia"],
["Idéias do Canário","Machado de Assis","L","C","16944"],
["Identidade","Machado de Assis","L","C","17878"],
["Identidades, poderes e saberes em um programa popular da televisão brasileira: uma abordagem discursiva","Carlos Renato Lopes","L","E","86544"],
["Ilha. Retratos encontrados num álbum esquecido...","Salomão Rovedo","L","P","70020"],
["Iluminuras","Arthur Rimbaud","L","P","2271"],
["Ilusão","Casimiro de Abreu","L","P","86440"],
["Immensis orbitus anguis","Antônio Frederico de Castro Alves","L","P","86838"],
["In Extremis","Artur Azevedo","L","C","7467"],
["In London And Moscow: South Of France The Memoirs Of Jacques Casanova De Seingalt 1725-1798","Jacques Casanova de Seingalt","L","C","16787","in-london-and-moscow-south-of-france-the-memoirs-of-jacques-"],
["Incultas produções da mocidade","Manuel Maria de Barbosa du Bocage","L","P","82119"],
["Inéditos e esparsos","Júlio Dinis","L","C","28811","ineditos-e-esparsos"],
["Infância","Casimiro de Abreu","L","P","86441"],
["Ingenuidade","Artur Azevedo","L","C","7468"],
["Ingleses na Costa","França Júnior","L","T","16636"],
["Inocência","Visconde de Taunay","L","R","2017","inocencia"],
["Inspirações da Tarde","Bernardo Guimarães","L","C","17320"],
["Inspirações do claustro","Luís José Junqueira Freire","L","P","43440","inspiracoes-do-claustro"],
["Iracema","José de Alencar","L","R","1844","iracema"],
["Ironia e piedade","Olavo Bilac","L","P","43441"],
["Jesuítas","Antônio Frederico de Castro Alves","L","P","86839"],
["Jesus! Maria!","Auta de Sousa","L","P","81777"],
["João Fernandes","Machado de Assis","L","C","17425"],
["João Silva","Artur Azevedo","L","C","7471"],
["Jogo do Bicho","Machado de Assis","L","C","17942"],
["Juca-Pirama","Antônio Gonçalves Dias","L","P","16652"],
["Juramento","Casimiro de Abreu","L","P","86442"],
["Juriti","Casimiro de Abreu","L","P","86443"],
["Lágrimas","Auta de Sousa","L","P","81778"],
["Lágrimas de Xerxes","Machado de Assis","L","C","1933"],
["Laranja-da-China","Alcântara Machado","L","C","7384"],
["Last poem","Alberto Caeiro","L","P","84429"],
["Lembrança","Casimiro de Abreu","L","P","86444"],
["Lendas do Sul","João Simões Lopes Neto","L","C","16665"],
["Lendas e Narrativas (Tomo I)","Alexandre Herculano","L","C","3742","lendas-e-narrativas-tomo-i"],
["Léo, o pardo. (Coleção literatura para todos; v. 6)","Rinaldo Santos Teixeira","L","C","50043"],
["Leonce e Lena","George Büchner","L","T","16643"],
["Leonor de Mendonça","Antônio Gonçalves Dias","L","P","16653"],
["Ler também é uma paixão","Armando Nogueira","L","E","64582"],
["Leram-me hoje S. Francisco de Assis","Alberto Caeiro","L","P","84430"],
["Letra vencida","Machado de Assis","L","C","17898"],
["Letras livres: disseminando cultura!","Pedro Anízio Gomes","L","P","53926"],
["Levantou-s'a velida","Dom Dinis","L","P","86556"],
["Leve, leve, muito leve","Alberto Caeiro","L","P","84431"],
["Li hoje quase duas páginas","Alberto Caeiro","L","P","84433"],
["Lição de Botânica","Machado de Assis","L","T","2141","licao-de-botanica"],
["Linha Reta e Linha Curva","Machado de Assis","L","C","1884"],
["Lira dos Vinte Anos","Manuel Antônio Álvares de Azevedo","L","P","16539","lira-dos-vinte-anos"],
["Literatura Brasileira","Ministério das Relações Exteriores","L","E","84446"],
["Literatura para todos: conversa com educadores","Ligia Cademartori","L","E","50065"],
["Livro das donas e donzelas","Júlia Lopes de Almeida","L","C","7554"],
["Livro de Isaac de Nínive","Isaac de Nínive","L","E","2046"],
["Livro de Mágoas","Florbela Espanca","L","P","1802","livro-de-magoas"],
["Livro de Sóror Saudade","Florbela Espanca","L","P","7534","livro-de-soror-saudade"],
["Livro do Desassossego","Fernando Pessoa","L","P","24204","livro-do-desassossego"],
["Livro póstumo","José Ezequiel Freire","L","C","43443"],
["Livros das Donas e Donzelas","Júlia Lopes de Almeida","L","C","16682"],
["Livrovivo 2000 - 2002","Ricardo de Lima Barreto","L","C","19318"],
["Loli","Auta de Sousa","L","P","81779"],
["Longe dos Olhos","Machado de Assis","L","C","17427"],
["Loucura divina","Antônio Frederico de Castro Alves","L","P","86633"],
["Lourenço (crônica Pernambucana)","Franklin Távora","L","C","43444"],
["Lucas","Antônio Frederico de Castro Alves","L","P","86634"],
["Lucíola","José de Alencar","L","R","2047"],
["Lucrécias","Bruno Seabra","L","P","2143"],
["Luís Soares","Machado de Assis","L","C","1880"],
["Luxo e Vaidade","Joaquim Manuel de Macedo","L","C","16669","luxo-e-vaidade"],
["Luz e Sombra","Auta de Sousa","L","P","81781"],
["Luzia-Homem","Domingos Olímpio Braga Cavalcanti","L","C","16618"],
["Lydia","Auta de Sousa","L","P","81782"],
["Ma madre velida","Dom Dinis","L","P","86564"],
["Macário","Manuel Antônio Álvares de Azevedo","L","P","2105"],
["Macbeth","William Shakespeare","L","C","2341","macbeth"],
["Madalena. (Coleção literatura para todos; v.1)","Cristiane Dantas","L","C","50025"],
["Madresilvas","Brasílio Machado","L","E","43446"],
["Madrid","M. Pinheiro Chagas","L","T","43450","madrid"],
["Mãe","José de Alencar","L","C","7546"],
["Mãe penitente","Antônio Frederico de Castro Alves","L","P","86637"],
["Mainha, o maior pistoleiro do Nordeste","Guaipuan Vieira","C","D","20048"],
["Maîtres de plaisir [construtores de imagens]","Jeferson Francisco Selbach","L","C","26677"],
["Mal por Mal...","Artur Azevedo","L","C","7472"],
["Mana Maria","Alcântara Machado","L","C","7385"],
["Manel Capineiro","Afonso Henriques de Lima Barreto","L","C","16819"],
["Manhã no Campo","Auta de Sousa","L","P","81861"],
["Mano","Coelho Neto","L","C","7528"],
["Manuscrito de um Sacristão","Machado de Assis","L","C","1917"],
["Marcha Fúnebre","Machado de Assis","L","C","1955"],
["Marginália","Afonso Henriques de Lima Barreto","L","C","16820"],
["Marginalidade, violência e testemunho nos contos de Marcelino Freire","Flávia Heloísa Unbehaum Ferraz","L","C","178571"],
["Mari'Mateu, ir-me quer'eu d'aquén","Afonso Eanes de Coton","L","P","82036"],
["Maria","Antônio Frederico de Castro Alves","L","P","86635"],
["Maria Cora","Machado de Assis","L","C","1954"],
["Maria Dusá","Lindolfo Rocha","L","C","16838","maria-dusa"],
["Maria Madalena","Rilvan Batista de Santana","L","C","121409"],
["Maria Rosa Mística","Pe. Antônio Vieira","L","E","17332"],
["Maria Rosa Mística Excelências, Poderes e Maravilha do seu Rosário","Pe. Antônio Vieira","L","E","16401"],
["Mariana","Machado de Assis","L","C","1978"],
["Marília de Dirceu","Tomás Antônio Gonzaga","L","P","2048","marilia-de-dirceu"],
["Masterpieces of american wit and humor","Thomas L. Masson","L","E","36382","masterpieces-of-american-wit-and-humor"],
["Mater","Auta de Sousa","L","P","81859"],
["Mateus e Mateusa","Qorpo Santo","L","T","2007"],
["Mattos, Malta ou Matta?","Aluísio Azevedo","L","C","1725"],
["Máximas, Pensamentos e Reflexões","Marquês de Maricá","L","E","2049"],
["Médico é Remédio","Machado de Assis","L","C","16950"],
["Meestre Nicolás, a meu cuidar","Afonso Eanes de Coton","L","P","82037"],
["Meia hora de cinismo","França Júnior","L","T","1809"],
["Meiguice","Adelina Lopes Vieira","I","I","81627"],
["Mel","Salomão Rovedo","L","P","70021"],
["Melancolia","Auta de Sousa","L","P","81796"],
["Memorial de Aires","Machado de Assis","L","R","2037","memorial-de-aires"],
["Memorial de um Passageiro de Bonde","Amadeu Amaral","L","E","16544"],
["Memórias da Rua do Ouvidor","Joaquim Manuel de Macedo","L","M","7544","memorias-da-rua-do-ouvidor"],
["Memórias de um Sargento de Milícias","Manuel Antônio de Almeida","L","R","16987","memorias-de-um-sargento-de-milicias"],
["Memórias e Cotidiano do Rio de Janeiro no Tempo do Rei: trechos selecionados das cartas de Luís Joaquim dos Santos Marrocos","Luís Joaquim dos Santos Marrocos","L","E","2056"],
["Memórias Póstumas de Brás Cubas","Machado de Assis","L","R","2038","memorias-postumas-de-bras-cubas"],
["Menina e Moça","Bernardim Ribeiro","L","P","16109","menina-e-moca"],
["Mensagem","Fernando Pessoa","L","P","15726","mensagem"],
["Mesura sería, senhor","Dom Dinis","L","P","86582"],
["Metafísica das Rosas","Machado de Assis","L","C","17435"],
["Meto-me para dentro, e fecho a janela","Alberto Caeiro","L","P","84434"],
["Meu amig', u eu sejo","Dom Dinis","L","P","86685"],
["Meu amigo vem hoj'aqui","Dom Dinis","L","P","86681"],
["Meu amigo, nom poss'eu guarecer","Dom Dinis","L","P","86678"],
["Meu Pai","Auta de Sousa","L","P","81857"],
["Meus oito anos","Casimiro de Abreu","L","P","86500"],
["Micrômegas","François-Marie Arouet (Voltaire)","L","C","2275","micromegas"],
["Migalhas de história portuguesa","M. Pinheiro Chagas","L","T","43452"],
["Milagre do Natal","Afonso Henriques de Lima Barreto","L","C","16821"],
["Miloca","Machado de Assis","L","C","17907"],
["Mimo de Anos","Auta de Sousa","L","P","81791"],
["Minh'alma é triste","Casimiro de Abreu","L","P","86445"],
["Minha formação","Joaquim Nabuco","L","E","16672","minha-formacao"],
["Minha mãe","Casimiro de Abreu","L","P","86447"],
["Minh’Alma e o Verso","Auta de Sousa","L","P","81863"],
["Miss Dollar","Machado de Assis","L","C","1879","miss-dollar"],
["Miss Kate","Cosme Velho","L","M","43453","miss-kate"],
["Missa do Galo","Machado de Assis","L","C","1931"],
["Missal","João da Cruz e Sousa","L","P","16615","missal"],
["Mistério","Auta de Sousa","L","P","81797"],
["Místico","Auta de Sousa","L","P","81790"],
["Mocidade","Casimiro de Abreu","L","P","86448"],
["Mocidade e Morte","Alexandre Herculano","L","C","7390"],
["Mocidade e morte","Antônio Frederico de Castro Alves","L","P","86840"],
["Mocidade morta","Luis Gonzaga Duque Estrada","L","R","38020"],
["Momento literário","João do Rio","L","M","2144"],
["Morena","Auta de Sousa","L","P","81860"],
["Moreninha","Casimiro de Abreu","L","P","86449"],
["Morta","Auta de Sousa","L","P","81795"],
["Morta que Mata","Artur Azevedo","L","C","7473"],
["Mortalhas","Emílio de Meneses","L","P","17335"],
["Motta Coqueiro ou A pena de morte","José do Patrocínio","L","E","7550"],
["Mudo e quedo","Antônio Frederico de Castro Alves","L","P","86636"],
["Muitos anos depois","Machado de Assis","L","C","17437"],
["Mulheres: história e direitos","Jeferson Francisco Selbach","L","C","26678"],
["Munúsciulo Métrico","Cláudio Manuel da Costa (Glauceste Satúrnio)","L","P","16552"],
["Murmúrios da tarde","Antônio Frederico de Castro Alves","L","P","86841"],
["Na Academia Brasileira de Letras","Machado de Assis","L","M","7560"],
["Na Arca","Machado de Assis","L","C","1942"],
["Na Capelinha","Auta de Sousa","L","P","81871"],
["Na estrada","Casimiro de Abreu","L","P","86450"],
["Na Exposição","Artur Azevedo","L","C","7475"],
["Na fonte","Antônio Frederico de Castro Alves","L","P","86638"],
["Na Horta","Artur Azevedo","L","C","7476"],
["Na margem","Antônio Frederico de Castro Alves","L","P","86639"],
["Na primeira página","Auta de Sousa","L","P","81864"],
["Na rede","Casimiro de Abreu","L","P","86451"],
["Não basta abrir a janela","Alberto Caeiro","L","P","84435"],
["Não Consultes Médico","Machado de Assis","L","T","2145","nao-consultes-medico"],
["Não é mel para a boca do asno","Machado de Assis","L","C","17443"],
["Não me importo com as rimas","Alberto Caeiro","L","P","84437"],
["Não posso contar meus males","Frei Caneca","L","E","82029"],
["Não se perde nada à mesa","Adelina Lopes Vieira","I","I","81628","nao-se-perde-nada-a-mesa"],
["Não sei o que é conhecer-me","Alberto Caeiro","L","P","84439"],
["Não tenho pressa","Alberto Caeiro","L","P","84441"],
["Não tenho pressa: não a têm o sol e a lua","Alberto Caeiro","L","P","84443"],
["Natal","Auta de Sousa","L","P","81879"],
["Navio que partes para longe","Alberto Caeiro","L","P","84447"],
["Negra Rosa & Outros Poemas","José Neres","L","C","188310"],
["Nem sempre sou igual no que digo e escrevo","Alberto Caeiro","L","P","84448"],
["Nem uma nem outra","Machado de Assis","L","T","17445"],
["Never more","Auta de Sousa","L","P","81872"],
["No álbum de Dolores","Auta de Sousa","L","P","81870"],
["No álbum de Eugênia","Auta de Sousa","L","P","81865"],
["No álbum de J. C. M.","Casimiro de Abreu","L","P","86456"],
["No álbum do artista","Antônio Frederico de Castro Alves","L","P","86842"],
["No barco","Antônio Frederico de Castro Alves","L","P","86640"],
["No dia brancamente nublado entristeço","Alberto Caeiro","L","P","84451"],
["No entardecer dos dias de Verão, às vezes","Alberto Caeiro","L","P","84452"],
["No jardim","Casimiro de Abreu","L","P","86453"],
["No Jardim das Oliveiras","Auta de Sousa","L","P","81869"],
["No lar","Casimiro de Abreu","L","P","86452"],
["No leito","Casimiro de Abreu","L","P","86454"],
["No meu prato que mistura de Natureza!","Alberto Caeiro","L","P","84454"],
["No monte","Antônio Frederico de Castro Alves","L","P","86641"],
["No País dos Ianques","Adolfo Caminha","L","R","2146"],
["No reino das letras felizes","Lenira Almeida Heck","I","I","53489"],
["No Templo","Auta de Sousa","L","P","81873"],
["No túmulo dum menino","Casimiro de Abreu","L","P","86455"],
["Noemi","Auta de Sousa","L","P","81880"],
["Noite cruel","Auta de Sousa","L","P","81875"],
["Noite de Almirante","Machado de Assis","L","C","1916"],
["Noite de São João","Alberto Caeiro","L","P","84453"],
["Noite na Taverna","Manuel Antônio Álvares de Azevedo","L","P","2025","noite-na-taverna"],
["Noites amadas","Auta de Sousa","L","P","81881"],
["Noivado","Casimiro de Abreu","L","P","86457"],
["Nom me podedes vós, senhor","Dom Dinis","L","P","88524"],
["Nom poss'eu, meu amigo","Dom Dinis","L","P","86674"],
["Nom sei hoj', amigo, quem padecesse","Dom Dinis","L","P","86690"],
["Non chegou, madre, o meu amigo","Dom Dinis","L","P","86553"],
["Non sei como me salv'a mia senhor","Dom Dinis","L","P","86585"],
["Nos campos","Antônio Frederico de Castro Alves","L","P","86642"],
["Nostro Senhor, hajades bon grado","Dom Dinis","L","P","86584"],
["Nostro Senhor, se haverei guisado","Dom Dinis","L","P","88518"],
["Notas do dia: commemorando","Afonso Arinos","L","C","43455"],
["Notas Semanais","Machado de Assis","L","M","16956","notas-semanais"],
["Nova Viagem à Lua","Artur Azevedo","L","C","1761","nova-viagem-a-lua"],
["Novalis e Álvares de Azevedo: jovens poetas no mundo romântico dos sonhos","Elaine Cristina Carvalho Duarte","L","C","185614"],
["Novas relíquias","Machado de Assis","L","C","43456"],
["Novela e Conto","Amadeu Amaral","L","E","7380"],
["Novos Cantos","Antônio Gonçalves Dias","L","P","1822"],
["Num dia excessivamente nítido","Alberto Caeiro","L","P","84455"],
["Num leque","Auta de Sousa","L","P","81876"],
["Num meio-dia de fim de primavera","Alberto Caeiro","L","P","84456"],
["Numa e a Ninfa","Afonso Henriques de Lima Barreto","L","R","16822"],
["Nunca busquei viver a minha vida","Alberto Caeiro","L","P","84457"],
["Nunca Deus fez tal coita qual eu hei","Dom Dinis","L","P","86729"],
["Nunca mais","Auta de Sousa","L","P","81878"],
["Nunca sei","Alberto Caeiro","L","P","84458"],
["Nunca vos ousei a dizer","Dom Dinis","L","P","88523"],
["O 15 e o 17","Artur Azevedo","L","C","7477"],
["O Abolicionismo","Joaquim Nabuco","L","E","1835","o-abolicionismo"],
["O adeus de Teresa","Antônio Frederico de Castro Alves","L","P","86844"],
["O Alcaide de Santarém","Alexandre Herculano","L","R","7401"],
["O Alforge da Boa Razão","Bruno Seabra","L","P","2150"],
["O Alienista","Machado de Assis","L","R","16957","o-alienista"],
["O almada","Machado de Assis","L","C","17490","o-almada"],
["O amor é uma companhia","Alberto Caeiro","L","P","84460"],
["O Anel de Polícrates","Machado de Assis","L","C","1945"],
["O Anjo Caído","João Batista da Silva Leitão de Almeida Garrett","L","C","16523"],
["O anjo das donzelas","Machado de Assis","L","C","17447"],
["O anjo Rafael","Machado de Assis","L","C","17451"],
["O Arco de Sant'ana","João Batista da Silva Leitão de Almeida Garrett","L","R","1718","o-arco-de-sant-ana"],
["O Asa-negra","Artur Azevedo","L","C","7427"],
["O astrólogo","Machado de Assis","L","C","17452"],
["O Ateneu","Raul Pompéia","L","R","2020","o-ateneu"],
["O Badejo","Artur Azevedo","L","T","2068"],
["O BAILE DO JUDEU","Inglês de Sousa","L","C","7543"],
["O baile na flor","Antônio Frederico de Castro Alves","L","P","86643"],
["O baile!","Casimiro de Abreu","L","P","86458"],
["O balanceio de Lauro Maia","Miguel Ângelo de Azevedo (Nirez)","L","E","17832"],
["O bandolim da desgraça","Antônio Frederico de Castro Alves","L","P","86644"],
["O Banqueiro Anarquista","Fernando Pessoa","L","P","15729","o-banqueiro-anarquista"],
["O Barão de Pituaçu","Artur Azevedo","L","C","7421"],
["O Beija-Flor","Auta de Sousa","L","P","81891"],
["O Bispo Negro","Alexandre Herculano","L","C","16522"],
["O Bobo","Alexandre Herculano","L","R","5030","o-bobo"],
["O Bote de rapé","Machado de Assis","L","T","17454","o-bote-de-rape"],
["O Brasil anedótico","Humberto de Campos","L","M","7542","o-brasil-anedotico"],
["O Cabeleira","Franklin Távora","L","R","2073","o-cabeleira"],
["O Caçador de Esmeraldas","Olavo Bilac","L","P","17311","o-cacador-de-esmeraldas"],
["O Caçador Doméstico","Afonso Henriques de Lima Barreto","L","C","16824"],
["O Califa da Rua do Sabão","Artur Azevedo","L","C","2052"],
["O califa de platina","Machado de Assis","L","C","17457"],
["O caminho da porta","Machado de Assis","L","T","17459","o-caminho-da-porta"],
["O caminho de Damasco","Machado de Assis","L","C","17462"],
["O Cancioneiro Português da Vaticana","Teófilo Braga","L","P","3741"],
["O cancioneiro portuguez da Vaticana","Teófilo Braga","L","P","17016","o-cancioneiro-portuguez-da-vaticana"],
["O capitão Mendonça","Machado de Assis","L","C","17463"],
["O carro 13","Machado de Assis","L","C","17464"],
["O Casamento do Bode com a Raposa","José Bernardo da Silva","C","D","5372"],
["O Casamento do Calangro","Leandro Gomes de Barros","C","D","5390"],
["O caso Barreto","Machado de Assis","L","C","17469"],
["O caso da Viúva","Machado de Assis","L","C","17465"],
["O caso do Romualdo","Machado de Assis","L","C","17885"],
["O caso Traps: Presságio Funesto","Rolando Júnior","L","C","158990"],
["O Castelo da Faria","Alexandre Herculano","L","C","7402"],
["O Cemitério dos Vivos","Afonso Henriques de Lima Barreto","L","C","16825"],
["O Chapéu","Artur Azevedo","L","C","7478"],
["O ciúme","Manuel Maria de Barbosa du Bocage","L","P","82120"],
["O Conde d'Abranhos","José Maria Eça de Queirós","L","R","14020"],
["O Cônego ou Metafísica do Estilo","Machado de Assis","L","C","16959"],
["O contrato","Machado de Assis","L","C","17889"],
["O coração","Antônio Frederico de Castro Alves","L","P","86845"],
["O Coração e o Beijo","Auta de Sousa","L","P","81945"],
["O corpo feminino em debate","Maria Izilda Santos de Matos","L","E","17934","o-corpo-feminino-em-debate"],
["O Cortiço","Aluísio Azevedo","L","R","1723","o-cortico"],
["O Coruja","Aluísio Azevedo","L","R","7406","o-coruja"],
["O crepúsculo sertanejo","Antônio Frederico de Castro Alves","L","P","86645"],
["O Crime do Padre Amaro","José Maria Eça de Queirós","L","R","2744","o-crime-do-padre-amaro"],
["O Cuco","Artur Azevedo","L","T","7479"],
["O cuecão de Chiquinho","José Felipe Nazário Júnior","L","C","141927"],
["O D N A de Emanuel","Rilvan Batista de Santana","L","C","121411"],
["O declínio da tradição no espírito da subversão: o papel do intelectual, a literatura militante e a tradição literária brasileira nas crônicas de Lima Barreto (1881-1922)","Luiz Fernando Gomes","L","E","124919"],
["O defeito de família","França Júnior","L","T","1806"],
["O Defunto","Thomaz Lopes","L","P","17450"],
["O Demônio Familiar","José de Alencar","L","C","7547"],
["O destinado","Machado de Assis","L","C","17894"],
["O Devanear do Céptico","Bernardo Guimarães","L","C","2077"],
["O dia da criação","Eduardo Alves da Silva","L","C","185234"],
["O dialeto caipira","Amadeu Amaral","L","E","7381"],
["O Dicionário","Machado de Assis","L","C","1928"],
["O Diletante","Artur Azevedo","L","C","2151"],
["O Diplomático","Machado de Assis","L","C","1977"],
["O Dote","Artur Azevedo","L","T","2114"],
["O Duplo","Coelho Neto","L","R","7526"],
["O Elixir da Longa Vida","Honoré de Balzac","L","C","2256","o-elixir-da-longa-vida"],
["O Elixir do Pajé","Bernardo Guimarães","L","C","17325"],
["O Elogio da Mentira e outras histórias","Lycio de Faria","L","C","17670"],
["O empresário","Rilvan Batista de Santana","L","C","128113"],
["O Empréstimo","Machado de Assis","L","T","1946","o-emprestimo"],
["O Enfermeiro","Machado de Assis","L","C","16962","o-enfermeiro"],
["O enviado","Rilvan Batista de Santana","L","C","128114"],
["O Ermitão de Muquém","Bernardo Guimarães","L","R","16584","o-ermitao-de-muquem"],
["O Ermitão do Muquém","Bernardo Guimarães","L","R","2084"],
["O Escravocrata","Artur Azevedo","L","C","2085"],
["O escrivão Coimbra","Machado de Assis","L","C","17471"],
["O Espelho","Machado de Assis","L","C","1948","o-espelho"],
["O espelho reflecte certo","Alberto Caeiro","L","P","84461"],
["O Espírito","Artur Azevedo","L","C","7481"],
["O Esqueleto","Aluísio Azevedo","L","C","7409"],
["O estilo gótico na literatura: estudo da obra drácula, o vampiro da noite de Bram Stoker","Ana Claudia Brida","L","E","121961"],
["O Eu profundo e os outros Eus.","Fernando Pessoa","L","P","24206"],
["O Falso Dom Henrique V","Afonso Henriques de Lima Barreto","L","C","16826"],
["O fantasma e a canção","Antônio Frederico de Castro Alves","L","P","86846"],
["O Filho de Gabriela","Afonso Henriques de Lima Barreto","L","C","16827"],
["O Galã","Artur Azevedo","L","C","7482"],
["O Galo","Artur Azevedo","L","C","7483"],
["O galo Tião e a dinda Raposa","Lenira Almeida Heck","I","F","5227","o-galo-tiao-e-a-dinda-raposa"],
["O galo Tião e a vaca Malhada","Lenira Almeida Heck","I","F","19437"],
["O Garatuja","José de Alencar","L","C","1841","o-garatuja"],
["O Garimpeiro","Bernardo Guimarães","L","R","1776","o-garimpeiro"],
["O Gaúcho","José de Alencar","L","R","1842","o-gaucho"],
["O gondoleiro do amor","Antônio Frederico de Castro Alves","L","P","86847"],
["O gram viç'e o gram sabor","Dom Dinis","L","P","88521"],
["O Gramático","Artur Azevedo","L","C","7484"],
["O Guarani","José de Alencar","L","R","1843","o-guarani"],
["O Guardador de Rebanhos","Fernando Pessoa","L","P","15723","o-guardador-de-rebanhos"],
["O Homem","Aluísio Azevedo","L","R","7408","o-homem"],
["O Homem","Artur Azevedo","L","C","7422"],
["O Homem dos Quarenta Escudos","François-Marie Arouet (Voltaire)","L","C","2290"],
["O homem nasce para ser feliz?","Rilvan Batista de Santana","L","C","199745"],
["O Homem que Sabia Javanês","Afonso Henriques de Lima Barreto","L","R","16828","o-homem-que-sabia-javanes"],
["O Homem que Sabia Javanês e Outros Contos","Afonso Henriques de Lima Barreto","L","C","1861"],
["O hóspede","Antônio Frederico de Castro Alves","L","P","86848"],
["O Humor e a Ironia em Bernardo de Guimarães","Bernardo Guimarães","L","C","2093"],
["O imortal","Machado de Assis","L","C","17899"],
["O Ingênuo","François-Marie Arouet (Voltaire)","L","C","2280"],
["O Jaó","Artur Azevedo","L","C","7485"],
["O Japão","Aluísio Azevedo","L","C","7416","o-japao"],
["O Judas em Sábado de Aleluia","Luís Carlos Martins Pena","L","T","2152"],
["O juiz","Rilvan Batista de Santana","L","C","121412"],
["O Juiz de Paz da Roça","Luís Carlos Martins Pena","L","T","2115"],
["O laço de fita","Antônio Frederico de Castro Alves","L","P","86849"],
["O Lapso","Machado de Assis","L","C","1904"],
["O leão Praxedes","Tarcísio Lage","I","I","132603","o-leao-praxedes"],
["O Lencinho","Artur Azevedo","L","C","7486"],
["O Liberato","Artur Azevedo","L","T","1760"],
["O livro D'ele","Florbela Espanca","L","P","7532"],
["O Livro da Lei","Aleister Crowley","L","E","2488","o-livro-da-lei"],
["O Livro de Cesario Verde","José Joaquim Cesário Verde","L","P","40113","o-livro-de-cesario-verde"],
["O livro de Jó","José Elói Otôni","L","P","38086"],
["O Livro de uma Sogra","Aluísio Azevedo","L","R","16536"],
["O Livro Derradeiro","João da Cruz e Sousa","L","P","16616"],
["O livro e a América","Antônio Frederico de Castro Alves","L","P","86850"],
["O Lobisomem","Raymundo Magalhães","L","R","17448"],
["O luar através dos altos ramos","Alberto Caeiro","L","P","84597"],
["O luar quando bate na relva","Alberto Caeiro","L","P","84598"],
["O machete","Machado de Assis","L","C","17902"],
["O maestro sacode a batuta","Alberto Caeiro","L","P","84600"],
["O Major Napoleão","M. Pinheiro Chagas","L","T","43467"],
["O Mambembe","Artur Azevedo","L","T","2099"],
["O Mandarim","José Maria Eça de Queirós","L","C","1793","o-mandarim"],
["O marido da adultera","Lúcio de Mendonça","L","M","171390"],
["O Matuto","Franklin Távora","L","R","1812"],
["O melhor remédio","Machado de Assis","L","C","17888"],
["O Mercador de Veneza","William Shakespeare","L","C","2354","o-mercador-de-veneza"],
["O meu amig', amiga, non quer'eu","Dom Dinis","L","P","86551"],
["O meu amigo há de mal assaz","Dom Dinis","L","P","86676"],
["O Meu Criado João","Artur Azevedo","L","C","7487"],
["O meu olhar azul como o céu","Alberto Caeiro","L","P","84603"],
["O meu olhar é nítido como um girassol","Alberto Caeiro","L","P","84601"],
["O Missionário","Inglês de Sousa","L","R","16663","o-missionario"],
["O Mistério da Estrada de Sintra","José Maria Eça de Queirós","L","R","14021","o-misterio-da-estrada-de-sintra"],
["O mistério das cousas, onde está ele?","Alberto Caeiro","L","P","84605"],
["O mistério do anel de pérola","Lenira Almeida Heck","I","I","108081"],
["O Moço Loiro","Joaquim Manuel de Macedo","L","R","2107"],
["O Monstro e Outros Contos","Humberto de Campos","L","M","16662","o-monstro-e-outros-contos"],
["O Movimento da Independência,","Oliveira Lima","L","E","7566","o-movimento-da-independencia"],
["O Mulato","Aluísio Azevedo","L","R","2024","o-mulato"],
["O Mundo como Está","François-Marie Arouet (Voltaire)","L","C","2276"],
["O nadador","Antônio Frederico de Castro Alves","L","P","86646"],
["O Namorador ou a Noite de São João","Luís Carlos Martins Pena","L","T","1992"],
["O Navio Negreiro","Antônio Frederico de Castro Alves","L","P","1786","o-navio-negreiro"],
["O Noviço","Luís Carlos Martins Pena","L","T","2044","o-novico"],
["O Número da Sepultura","Afonso Henriques de Lima Barreto","L","C","16829"],
["O Oráculo","Machado de Assis","L","C","17472"],
["O pacto maldito e outras histórias de morte","José Cláudio da Silva","I","I","125933"],
["O Pai","Machado de Assis","L","C","17474"],
["O País das Quimeras","Machado de Assis","L","C","17476"],
["O Palhaço","Artur Azevedo","L","C","7488"],
["O Parnaso Obsequioso e Obras Poéticas","Cláudio Manuel da Costa (Glauceste Satúrnio)","L","P","16553"],
["O Parocho da aldeia","Alexandre Herculano","L","C","81915"],
["O Passado, passado","Machado de Assis","L","C","17478"],
["O pastor amoroso","Fernando Pessoa","L","P","19803"],
["O pastor amoroso perdeu o cajado","Alberto Caeiro","L","P","84614"],
["O Paulo","Artur Azevedo","L","C","7489"],
["O Pecado","Afonso Henriques de Lima Barreto","L","C","16830"],
["O peixinho e o gato","Lenira Almeida Heck","I","F","14763"],
["O Penúltimo poema","Alberto Caeiro","L","P","84615"],
["O Poeta e a Inquisição","Visconde de Araguaia","L","P","2154"],
["O Primo Basílio","José Maria Eça de Queirós","L","R","16622","o-primo-basilio"],
["O Primo da Califórnia","Joaquim Manuel de Macedo","L","C","16670"],
["O Príncipe de Nassau","Paulo Setúbal","L","C","17401"],
["O Príncipe e a Fada","Leandro Gomes de Barros","C","D","5438"],
["O Príncipe Sapo","Adolfo Coelho","L","E","81608"],
["O programa","Machado de Assis","L","C","17897"],
["O Protocolo","Machado de Assis","L","T","17479","o-protocolo"],
["O quarto dos dragões","Breno Pannia Espósito","L","C","86871"],
["O que é - simpatia","Casimiro de Abreu","L","P","86446"],
["O que é o Casamento?","José de Alencar","L","C","16678"],
["O que nós vemos das cousas são as cousas","Alberto Caeiro","L","P","84616"],
["O que ouviu os meus versos","Alberto Caeiro","L","P","84618"],
["O que são as moças","Machado de Assis","L","C","17480"],
["O que são estrelas","Auta de Sousa","L","P","81946"],
["O que vos nunca cuidei a dizer","Dom Dinis","L","P","88502"],
["O quê?","Casimiro de Abreu","L","P","86472"],
["O quê? Valho mais que uma flor","Alberto Caeiro","L","P","84619"],
["O ramo verde","Adelina Lopes Vieira","I","I","81629"],
["O ratinho Rói-Rói","Lenira Almeida Heck","I","F","176019","o-ratinho-roi-roi"],
["O Rei dos Caiporas","Machado de Assis","L","C","17481"],
["O Relógio de Ouro","Machado de Assis","L","C","1900"],
["O Retrato","Artur Azevedo","L","T","7490"],
["O Rio de Janeiro - Verso e Reverso","José de Alencar","L","C","16680"],
["O Rio de Janeiro 1877","Artur Azevedo","L","C","16573"],
["O Rio de Janeiro em 1877","Artur Azevedo","L","C","1770"],
["O Romance do Prata","Paulo Setúbal","L","C","7623"],
["O Sá","Artur Azevedo","L","C","7491"],
["O Sacrifício","Franklin Távora","L","C","16632","o-sacrificio"],
["O sainete","Machado de Assis","L","C","17904"],
["O segredo","Antônio Frederico de Castro Alves","L","P","86647"],
["O Segredo de Augusta","Machado de Assis","L","C","16964"],
["O Segredo do Bonzo","Machado de Assis","L","C","1944"],
["O Seminarista","Bernardo Guimarães","L","R","16585","o-seminarista"],
["O Sertanejo","José de Alencar","L","R","1848","o-sertanejo"],
["O sertanejo revisitado pela ficção de Euclides da Cunha","José Jonas Camelo de França","L","C","147691"],
["O Soldado","Alexandre Herculano","L","C","7394"],
["O soldado Jacob","José Joaquim Medeiros de Albuquerque","L","M","7562"],
["O sonhador","Salomão Rovedo","L","P","70023"],
["O Sonho das Esmeraldas","Paulo Setúbal","L","C","17404"],
["O Sonho do Conselheiro","Artur Azevedo","L","C","7492"],
["O Subterrâneo do Morro do Castelo","Afonso Henriques de Lima Barreto","L","C","1866"],
["O Tejo é mais belo que o rio que corre pela minha aldeia","Alberto Caeiro","L","P","84622"],
["O Telefone","Artur Azevedo","L","C","7493"],
["O Teles e o Tobias","Machado de Assis","L","C","16965"],
["O Testamento da Cigana Esmeralda","Leandro Gomes de Barros","C","D","5450"],
["O tipo brasileiro","França Júnior","L","T","1810"],
["O tonel das dânaides","Antônio Frederico de Castro Alves","L","P","86851"],
["O toque das almas","Wilder Machado da Cruz","L","C","180895"],
["O Touro Branco","François-Marie Arouet (Voltaire)","L","C","2282"],
["O Touro Negro","Aluísio Azevedo","L","R","7415"],
["O Tribofe","Artur Azevedo","L","T","16574"],
["O triste fim de Policarpo Quaresma","Afonso Henriques de Lima Barreto","L","R","2028","o-triste-fim-de-policarpo-quaresma"],
["O Turbilhão","Coelho Neto","L","R","16596"],
["O Último dia de um poeta","Machado de Assis","L","C","17483"],
["O Último Palpite","Artur Azevedo","L","C","7494"],
["O Único Assassinato de Cazuza","Afonso Henriques de Lima Barreto","L","C","16832"],
["O único mistério do Universo é o mais e não o menos","Alberto Caeiro","L","P","84623"],
["O Universo não é uma idéia minha","Alberto Caeiro","L","P","84624"],
["O Uraguai","José Basílio da Gama","L","P","2106","o-uraguai"],
["O Valor da Mulher","Leandro Gomes de Barros","C","D","5452"],
["O Vaqueano","Apolinário José Gomes Porto-Alegre","L","P","16545"],
["O Velho da Horta","Gil Vicente","L","T","16651"],
["O Velho Senado","Machado de Assis","L","M","1936","o-velho-senado"],
["O vôo do gênio","Antônio Frederico de Castro Alves","L","P","86852"],
["O voss'amig', ai amiga","Dom Dinis","L","P","86565"],
["O voss'amig', amiga, vi andar","Dom Dinis","L","P","86670"],
["O voss'amigo tam de coraçom","Dom Dinis","L","P","86617"],
["Obra completa, 4º edição","José Joaquim Cesário Verde","L","P","43463"],
["Obras","Bento de Figueiredo Tenreiro Aranha","L","P","38021","obras"],
["Obras completas","José de Sousa Monteiro","L","P","43466"],
["Obras completas","Filinto Elísio de Sousa Ramalho","L","P","43465"],
["Obras completas de Almeida Garrett: lirica, volume II","João Batista da Silva Leitão de Almeida Garrett","L","C","43445","obras-completas-de-almeida-garrett-lirica-volume-ii"],
["Obras completas de Almeida Garrett: teatro, volume IV","João Batista da Silva Leitão de Almeida Garrett","L","C","43460"],
["Obras completas, poesia I","Teófilo Braga","L","P","43478"],
["Obras completas, poesia II","Teófilo Braga","L","P","43476"],
["Obras completas, poesia IV","Teófilo Braga","L","P","43477"],
["Obras poéticas","Manuel Maria de Barbosa du Bocage","L","P","43457"],
["Obras poéticas (nova edição)","Manuel Maria de Barbosa du Bocage","L","P","43461"],
["Obras Poéticas de Glauceste Satúrnio","Cláudio Manuel da Costa (Glauceste Satúrnio)","L","P","16554"],
["Obras Seletas","Rui Barbosa","L","E","2098"],
["Obrigada!","Auta de Sousa","L","P","81884","obrigada"],
["Ocidentais","Machado de Assis","L","P","2097","ocidentais"],
["Octogenário","Artur Azevedo","L","C","7495"],
["Ode ao dous de julho","Antônio Frederico de Castro Alves","L","P","86853"],
["Oimais quer'eu ja leixá-lo trobar","Dom Dinis","L","P","86574"],
["Olá, guardador de rebanhos","Alberto Caeiro","L","P","84595"],
["Olhos Azuis","Auta de Sousa","L","P","81885"],
["Onda","Machado de Assis","L","C","17485"],
["Ondas e Outros Poemas Esparsos","Euclides da Cunha","L","E","1798"],
["Onde estás","Antônio Frederico de Castro Alves","L","P","86854"],
["Ontem à tarde um homem das cidades","Alberto Caeiro","L","P","84606"],
["Ontem o pregador de verdades dele","Alberto Caeiro","L","P","84612"],
["Onze anos depois","Machado de Assis","L","C","17486"],
["Ora vej'eu bem, mia senhor","Dom Dinis","L","P","88497"],
["Ora, senhor, nom poss'eu já","Dom Dinis","L","P","88507"],
["Oração da noite","Auta de Sousa","L","P","81889"],
["Orações","Casimiro de Abreu","L","P","86473"],
["Orai por ele","Machado de Assis","L","C","17487"],
["Origem e características da literatura de cordel","Angela Maciel Nogueira","C","D","176167"],
["Orraca López vi doente un día","Afonso Eanes de Coton","L","P","82038"],
["Os Brilhantes do Brasileiro","Camilo Castelo Branco","L","C","1779","os-brilhantes-do-brasileiro"],
["Os Bruzundangas","Afonso Henriques de Lima Barreto","L","C","1970","os-bruzundangas"],
["Os canários","Auta de Sousa","L","P","81888"],
["Os Ciúmes de um Pedestre ou o Terrível Capitão do Mato","Luís Carlos Martins Pena","L","T","2155"],
["Os Compadres","Artur Azevedo","L","C","7496"],
["Os deuses de casaca","Machado de Assis","L","T","17498"],
["Os Dez por Cento","Artur Azevedo","L","C","7497"],
["Os Dois Amores","Joaquim Manuel de Macedo","L","C","2158"],
["Os Dois Andares","Artur Azevedo","L","C","7498"],
["Os Dois ou o Inglês Maquinista","Luís Carlos Martins Pena","L","T","2164"],
["Os Escravos","Antônio Frederico de Castro Alves","L","P","16727","os-escravos"],
["Os esquecidos","Mayer Garção","L","C","43471"],
["Os Estrangeiros","Francisco de Sá de Miranda","L","C","4980"],
["Os fidalgos da casa mourisca","Júlio Dinis","L","R","28809","os-fidalgos-da-casa-mourisca"],
["Os Filhos do Padre Anselmo","António da Costa Couto Sá de Albergaria","L","C","86804"],
["Os Irmãos das Almas","Luís Carlos Martins Pena","L","T","2161"],
["Os Irmãos Leme","Paulo Setúbal","L","C","17406"],
["Os Lobisomens","Manuel José Araújo Porto-Alegre","L","P","2162"],
["Os Lusíadas","Luís Vaz de Camões","L","R","16841","os-lusiadas"],
["Os Maias","José Maria Eça de Queirós","L","R","1792","os-maias"],
["Os Martírios de Genoveva","Leandro Gomes de Barros","C","D","5428"],
["Os Noivos","Artur Azevedo","L","T","16575"],
["Os Óculos de Pedro Antão","Machado de Assis","L","C","17497"],
["Os Ouvidos do Conde de Chesterfield e o Capelão Goudman","François-Marie Arouet (Voltaire)","L","C","2243"],
["Os pastores de Virgílio tocavam avenas e outras cousas","Alberto Caeiro","L","P","84620"],
["Os Pobres","Raul Brandão","L","C","4981","os-pobres"],
["Os quilombos","Ministério das Relações Exteriores","L","E","84449"],
["Os retirantes","José do Patrocínio","L","E","7551"],
["Os romances da semana","Joaquim Manuel de Macedo","L","C","43487","os-romances-da-semana"],
["Os Sertões","Euclides da Cunha","L","E","2163","os-sertoes"],
["Os Sofrimentos de Alzira","Leandro Gomes de Barros","C","D","5447"],
["Os Sonhos d'Ouro","José de Alencar","L","R","1849"],
["Os Timbiras","Antônio Gonçalves Dias","L","P","1825"],
["Os três tempos do Édipo em Lacan e a terceira margem do rio em Rosa","Eduardo Benzatti do Carmo","L","C","139932"],
["Oswaldo","Auta de Sousa","L","P","81882"],
["Outras Poesias","Augusto dos Anjos","L","P","1773"],
["Outro soneto ao França","Manuel Maria de Barbosa du Bocage","L","P","82121"],
["Outro Soneto do Prazer Efêmero","Manuel Maria de Barbosa du Bocage","L","P","82122"],
["Paai Rengel e outros dous romeus","Afonso Eanes de Coton","L","P","82039"],
["Paga ou Morre!","Artur Azevedo","L","C","7499"],
["Página azul","Auta de Sousa","L","P","81949"],
["Página triste","Auta de Sousa","L","P","81950"],
["Páginas Críticas e Comemorativas","Machado de Assis","L","M","1962"],
["Páginas Recolhidas","Machado de Assis","L","M","1926"],
["Pai Contra Mãe","Machado de Assis","L","C","1951","pai-contra-mae"],
["Pai, posso dar um soco nele?","José Cláudio da Silva","I","I","125934"],
["Paisagens brasileiras","Visconde de Taunay","L","C","43472"],
["Palavras a alguém","Casimiro de Abreu","L","P","86474"],
["Palavras no mar","Casimiro de Abreu","L","P","86475"],
["Palavras Tristes","Auta de Sousa","L","P","81955"],
["Pan-americano","Artur Azevedo","L","C","7500"],
["Panóplias","Olavo Bilac","L","P","17312"],
["Papéis Avulsos","Machado de Assis","L","C","1938","papeis-avulsos"],
["Papéis Velhos","Machado de Assis","L","C","1934"],
["Para além da curva da estrada","Alberto Caeiro","L","P","84626"],
["Para defender a pátria","Frei Caneca","L","E","82030"],
["Para não dizer, que não falei em flores","Marco Ramos","L","P","117137"],
["Paranóia delirante","Roberto Wagner Magalhães","L","C","146103"],
["Parecer de Concurso Literário","Emílio de Meneses","L","P","17341"],
["Pareceres de Machado de Assis","Machado de Assis","L","M","2165","pareceres-de-machado-de-assis"],
["Passa uma borboleta por diante de mim","Alberto Caeiro","L","P","84628"],
["Passei toda a noite","Alberto Caeiro","L","P","84630"],
["Passou a diligência pela estrada, e foi-se","Alberto Caeiro","L","P","84631"],
["Pastor do monte, tão longe de mim com as tuas ovelhas","Alberto Caeiro","L","P","84632"],
["Patkull","Antônio Gonçalves Dias","L","P","2166","patkull"],
["Patriota? Não: só português","Alberto Caeiro","L","P","84635"],
["Paulino e Roberto","Artur Azevedo","L","C","7501"],
["PAULO","Bruno Seabra","L","P","7520"],
["Pedro Gobá","José Ezequiel Freire","L","C","16628"],
["Pegadas urbanas: Novo Hamburgo como palco do flâneur","Jeferson Francisco Selbach","L","C","26680"],
["Peleja de Joaquim Jaqueira com João Melquíades","João Melquíades Ferreira da Silva","C","D","5386"],
["Peleja do Cego Aderaldo com Zé Pretinho","José Bernardo da Silva","C","D","5374"],
["Pelo passado","Auta de Sousa","L","P","81952"],
["Pennas de Garça","Auta de Sousa","L","P","81956"],
["Pensar em Deus é desobedecer a Deus","Alberto Caeiro","L","P","84636"],
["Pepita","Casimiro de Abreu","L","P","86476"],
["Pequetita","Artur Azevedo","L","C","7438"],
["Pera veer meu amigo","Dom Dinis","L","P","86562"],
["Perdão!","Casimiro de Abreu","L","P","86477"],
["Perfumes e amor","Casimiro de Abreu","L","P","86478"],
["Pero eu dizer quisesse","Dom Dinis","L","P","88510"],
["Pero que eu mui long' estou","Dom Dinis","L","P","88494"],
["Peru versus Bolívia","Euclides da Cunha","L","E","1799","peru-versus-bolivia"],
["Pesar mi fez meu amigo","Dom Dinis","L","P","86615"],
["Pesquisa sem frescura","Jeferson Francisco Selbach","L","C","26681"],
["Pétala dobrada para trás da rosa","Alberto Caeiro","L","P","84637"],
["Piedade Filial","Artur Azevedo","L","C","7502"],
["Pílades e Orestes","Machado de Assis","L","T","1960"],
["Pobre Cardeal!","Machado de Assis","L","C","17491"],
["Pobre Finoca","Machado de Assis","L","C","17494"],
["Pobre flor!","Auta de Sousa","L","P","81953"],
["Pobres das flores dos canteiros dos jardins regulares","Alberto Caeiro","L","P","84638"],
["Pobres Liberais!","Artur Azevedo","L","C","7503"],
["Poema da mocidades seguido de Anjo do lar","M. Pinheiro Chagas","L","T","43479"],
["Poema da Virgem","Pe. José de Anchieta","L","T","17395"],
["Poema dos Feitos de Mem de Sá","Pe. José de Anchieta","L","T","1854"],
["Poemas","Alphonsus de Guimarães","L","P","2361","poemas-2"],
["Poemas","Cláudio Manuel da Costa (Glauceste Satúrnio)","L","P","2362"],
["Poemas","Luís Nicolau Fagundes Varela","L","P","16629"],
["Poemas","Safo","L","P","3449","poemas"],
["Poemas da Morte","Emílio de Meneses","L","P","17330"],
["Poemas de Álvaro de Campos","Fernando Pessoa","L","P","16598","poemas-de-alvaro-de-campos"],
["Poemas de Fagundes Varela","Luís Nicolau Fagundes Varela","L","P","2167"],
["Poemas de Fernando Pessoa","Fernando Pessoa","L","P","16090"],
["Poemas de Raul de Leoni","Raul de Leoni","L","P","2168"],
["Poemas de Ricardo Reis","Fernando Pessoa","L","P","16549"],
["Poemas em Inglês","Fernando Pessoa","L","P","16744"],
["Poemas Escolhidos","Cláudio Manuel da Costa (Glauceste Satúrnio)","L","P","2050"],
["Poemas Humorísticos e Irônicos","João da Cruz e Sousa","L","P","2110"],
["Poemas Inconjuntos","Fernando Pessoa","L","P","15725"],
["Poemas Irônicos, Venenosos e Sarcásticos","Manuel Antônio Álvares de Azevedo","L","P","16542"],
["Poemas Malditos","Manuel Antônio Álvares de Azevedo","L","P","16543"],
["Poemas Selecionados","Florbela Espanca","L","P","2786"],
["Poemas Traduzidos","Fernando Pessoa","L","P","16114"],
["Poesia e amor","Casimiro de Abreu","L","P","86480"],
["Poesia Litigiosa","Antônio Frederico de Castro Alves","L","P","16720"],
["Poesia Satírica e Versos de Circunstância","Emílio de Meneses","L","P","17338"],
["Poesias","Luís Delfino dos Santos","L","P","103336"],
["Poesias","Manuel Maria de Barbosa du Bocage","L","P","43483"],
["Poesias","Francisca Julia da Silva","L","P","103364"],
["Poesias","Júlio Dinis","L","P","28812","poesias"],
["Poesias Colegiais","Antônio Frederico de Castro Alves","L","P","16719"],
["Poesias Coligidas","Antônio Frederico de Castro Alves","L","P","16723"],
["Poesias Completas","Laurindo José da Silva Rabelo","L","P","2045"],
["Poesias dispersas","Machado de Assis","L","P","17875"],
["Poesias Escolhidas","José Cândido de Lacerda Coutinho","L","P","2116"],
["Poesias Inéditas","Fernando Pessoa","L","P","16113"],
["Poesias Manuscritas","Cláudio Manuel da Costa (Glauceste Satúrnio)","L","P","16555"],
["Poetas devem jogar poemas no lixo","Nelson Lima","L","P","103035"],
["Pois ante vós estou aqui","Dom Dinis","L","P","88525"],
["Pois mia ventura tal é ja","Dom Dinis","L","P","86575"],
["Pois não é?!","Casimiro de Abreu","L","P","86481"],
["Pois que diz meu amigo","Dom Dinis","L","P","86687"],
["Pois que vos Deus fez, mia senhor","Dom Dinis","L","P","86578"],
["Pois que vos Deus, amigo, quer guisar","Dom Dinis","L","P","88500"],
["Polêmicas e reflexões","Machado de Assis","L","M","17873"],
["Pombos mensageiros","Auta de Sousa","L","P","81957"],
["Ponto de Vista","Machado de Assis","L","M","1901"],
["Por Deus, amiga, pês-vos do gram mal","Dom Dinis","L","P","86689"],
["Por Deus, amigo, quen cuidaría","Dom Dinis","L","P","86559"],
["Por Deus, punhade de veerdes meu","Dom Dinis","L","P","86686"],
["Porca elegia","Salomão Rovedo","L","P","70024"],
["Possível e Impossível","Machado de Assis","L","C","17493"],
["Pouco a pouco o campo se alarga e se doura","Alberto Caeiro","L","P","84641"],
["Pouco me importa","Alberto Caeiro","L","P","86509"],
["Poverina","Artur Azevedo","L","C","7504"],
["Praz-m' a mi, senhor, de morrer","Dom Dinis","L","P","86719"],
["Preguntar-vos quero por Deus","Dom Dinis","L","P","88516"],
["Primas de Sapucaia","Machado de Assis","L","C","1910"],
["Primaveras","Casimiro de Abreu","L","P","86482","primaveras"],
["Primeiras Trovas Burlescas","Luiz Gonzaga Pinto da Gama","L","P","2113"],
["Primeiro Fausto","Fernando Pessoa","L","P","15727"],
["Primeiro prenúncio de trovoada de depois de amanhã","Alberto Caeiro","L","P","86510"],
["Primeiros Cantos","Antônio Gonçalves Dias","L","P","16654"],
["Produções Satíricas e Bocageanas de Bernardo de Guimarães","Bernardo Guimarães","L","C","2102"],
["Proençaes soen mui ben trobar","Dom Dinis","L","P","86547"],
["Profissão de fé","Olavo Bilac","L","P","7563"],
["Prólogos Interessantíssimos","Vários Autores","L","E","2109"],
["Prosa de Circunstância","Emílio de Meneses","L","P","17340"],
["Prosas Bárbaras","José Maria Eça de Queirós","L","C","14022","prosas-barbaras"],
["Prosopopéia","Bento Teixeira","L","P","1774","prosopopeia"],
["Puelina","Artur Azevedo","L","C","7505"],
["Qual dos dois","Machado de Assis","L","C","17843"],
["Quand'eu ben meto femença","Dom Dinis","L","P","86589"],
["Quando a erva crescer em cima da minha sepultura","Alberto Caeiro","L","P","86511"],
["Quando está frio no tempo do frio","Alberto Caeiro","L","P","86512"],
["Quando eu morrer","Auta de Sousa","L","P","81958"],
["Quando eu não te tinha","Alberto Caeiro","L","P","86513"],
["Quando tornar a vir a Primavera","Alberto Caeiro","L","P","86514"],
["Quando tu choras","Casimiro de Abreu","L","P","86483"],
["Quando vier a primavera","Alberto Caeiro","L","P","86515"],
["Quando?!...","Casimiro de Abreu","L","P","86484"],
["Quant'eu, fremosa mia senhor","Dom Dinis","L","P","86724"],
["Quant'há, senhor, que m'eu de vós parti","Dom Dinis","L","P","88496"],
["Quarta parte em Lisboa na Oficina de Miguel Deslandes, com todas as licenças e privilégio real","Pe. Antônio Vieira","L","E","16410"],
["Quarta parte, licenças e privilégio real","Pe. Antônio Vieira","L","E","16398"],
["Quase Ela deu o \"sim\", mas...","Afonso Henriques de Lima Barreto","L","C","16834"],
["Quase ministro","Machado de Assis","L","T","17844","quase-ministro"],
["Quatro quartetos da amada cidade de São Luis","Salomão Rovedo","L","P","70014"],
["Que coita houvestes, madr'e senhor","Dom Dinis","L","P","86679"],
["Que estranho que m'é, senhor","Dom Dinis","L","P","88513"],
["Que grave coita, senhor, é","Dom Dinis","L","P","86586"],
["Que mui gram prazer que eu hei, senhor","Dom Dinis","L","P","88503"],
["Que muit'há já que nom vejo","Dom Dinis","L","P","86610"],
["Que razom cuidades vós, mia senhor","Dom Dinis","L","P","86723"],
["Que soidade de mia senhor hei","Dom Dinis","L","P","88509"],
["Que trist'hoj'é meu amigo","Dom Dinis","L","P","86549"],
["Queixumes","Casimiro de Abreu","L","P","86485"],
["Quem Boa Cama Faz...","Machado de Assis","L","C","16970"],
["Quem Casa, Quer Casa","Luís Carlos Martins Pena","L","T","17006"],
["Quem conta em conto...","Machado de Assis","L","C","17845"],
["Quem ele era?","Artur Azevedo","L","C","7506"],
["Quem me dera que a minha vida fosse um carro de bois","Alberto Caeiro","L","P","86516"],
["Quem me dera que eu fosse o pó da estrada","Alberto Caeiro","L","P","86517"],
["Quem não quer ser lobo...","Machado de Assis","L","C","17846"],
["Quem vos mui bem visse, senhor","Dom Dinis","L","P","88498"],
["Quer'eu em maneira de proençal","Dom Dinis","L","P","86545"],
["Quero vos eu, mha irmana, rogar","Bernardo de Bonaval","L","P","82103"],
["Questão de vaidade","Machado de Assis","L","C","17847"],
["Quincas Borba","Machado de Assis","L","R","1949","quincas-borba"],
["Quinhentos Contos","Machado de Assis","L","C","16973"],
["Quisera vosco falar de grado","Dom Dinis","L","P","86560"],
["Quix ben, amigos, e quer'e querrei","Dom Dinis","L","P","86581"],
["Recanto aprazível: poesias 2008","Valdecir de Oliveira Anselmo","L","P","86620"],
["Recendência - poesias","Valdecir de Oliveira Anselmo","L","P","42420"],
["Recordações do Escrivão Isaías Caminha","Afonso Henriques de Lima Barreto","L","R","1865","recordacoes-do-escrivao-isaias-caminha"],
["Recuerdo","Auta de Sousa","L","P","81961"],
["Redondilhas","Luís Vaz de Camões","L","P","1871"],
["Regina Coeli","Auta de Sousa","L","P","81959"],
["Regina Martyrum","Auta de Sousa","L","P","81966"],
["Relação do Piloto Anônimo","Anônimo","L","E","2288"],
["Reliquiae","Florbela Espanca","L","P","7533"],
["Relíquias da Casa Velha","Machado de Assis","L","C","1950","reliquias-da-casa-velha"],
["Reminiscências","Visconde de Taunay","L","M","43485"],
["Remissão de Pecados","Joaquim Manuel de Macedo","L","C","2159"],
["Renascimento","Auta de Sousa","L","P","81960"],
["Renato","Auta de Sousa","L","P","81962"],
["Ressureição","Machado de Assis","L","R","17848"],
["Retalhos","Rilvan Batista de Santana","L","C","121414"],
["Rimas","Auta de Sousa","L","P","81965"],
["Rimo quando calha","Alberto Caeiro","L","P","86518"],
["Ritmos e idéias","Luís Murat","L","P","43491"],
["Roga-m'hoje, filha, o voss'amigo","Dom Dinis","L","P","86614"],
["Romance de uma Velha","Joaquim Manuel de Macedo","L","C","2160"],
["Romance do Pavão Misterioso","João Melquíades Ferreira da Silva","C","D","5388"],
["Romances tocantinenses: uma abordagem crítica","Flávio Alves da Silva","L","E","86623"],
["Roques Mateus do Rio São Francisco","Leandro Gomes de Barros","C","D","5443"],
["Rosa murcha","Casimiro de Abreu","L","P","86486"],
["Rosas com espinhos (contos)","Rilvan Batista de Santana","L","C","166970"],
["Róseo menino","Auta de Sousa","L","P","81963"],
["Rozaura, a enjeitada","Bernardo Guimarães","L","C","43488"],
["Rui Barbosa","Crispiano Neto","C","D","167347"],
["Ruy de Leão","Machado de Assis","L","C","17849"],
["Ruy: o escudeiro","Luís da Silva Mouzinho de Albuquerque","L","C","86816"],
["Sabina","Artur Azevedo","L","C","7507"],
["Sales","Machado de Assis","L","C","17877"],
["Sancta Virgo Virginum: Prece","Auta de Sousa","L","P","81948"],
["Sangue de africano","Antônio Frederico de Castro Alves","L","P","86648"],
["São Cristóvão","José Maria Eça de Queirós","L","C","16237"],
["Sarças de Fogo","Olavo Bilac","L","P","17313"],
["Satíricos portugueses","João Ribeiro","L","C","43493"],
["Saudade","Auta de Sousa","L","P","81967"],
["Saudades","Casimiro de Abreu","L","P","86487"],
["Schopenhauer","Thomas Mann","L","C","2293","schopenhauer"],
["Se às vezes digo que as flores sorriem","Alberto Caeiro","L","P","86519"],
["Se depois de eu morrer","Alberto Caeiro","L","P","86520"],
["Se eu morrer novo","Alberto Caeiro","L","P","86521"],
["Se eu podess'ora meu coraçom","Dom Dinis","L","P","88495"],
["Se eu pudesse trincar a terra toda","Alberto Caeiro","L","P","86523"],
["Se gradoedes, amigo","Afonso Eanes de Coton","L","P","82040"],
["Se hoj'em vós há nenhum mal, senhor","Dom Dinis","L","P","86721"],
["Se o homem fosse, como deveria ser","Alberto Caeiro","L","P","86526"],
["Se quiserem que eu tenha um misticismo","Alberto Caeiro","L","P","86527"],
["Se veess'o meu amigo","Bernardo de Bonaval","L","P","82109"],
["Segredos","Casimiro de Abreu","L","P","86489"],
["Segundos Cantos e Sextilhas de Frei Antão","Antônio Gonçalves Dias","L","P","1824"],
["Seja o que for que esteja no centro do Mundo","Alberto Caeiro","L","P","86524"],
["Seleção de Obras Poéticas","Gregório de Matos","L","P","1827","selecao-de-obras-poeticas"],
["Seleção de Obras Poéticas II","Gregório de Matos","L","P","16659"],
["Sempr'eu, mia senhor, desejei","Dom Dinis","L","P","86579"],
["Sempre que penso uma coisa, traio-a","Alberto Caeiro","L","P","86525"],
["Sempre sonhos!...","Casimiro de Abreu","L","P","86490"],
["Sempre vos eu doutra rem mais amei","Afonso Sanches","L","P","82044"],
["Senhor fremosa e de mui loução","Dom Dinis","L","P","88506"],
["Senhor fremosa, nom poss'eu osmar","Dom Dinis","L","P","88504"],
["Senhor fremosa, pois me vej'aquí","Afonso Eanes de Coton","L","P","82041"],
["Senhor fremosa, pois no coraçom","Dom Dinis","L","P","88522"],
["Senhor fremosa, por qual vos Deus fez","Dom Dinis","L","P","88512"],
["Senhor, cuitad'é o meu coraçom","Dom Dinis","L","P","88514"],
["Senhor, des quando vos vi","Dom Dinis","L","P","86739"],
["Senhor, dizen-vos por meu mal","Dom Dinis","L","P","86576"],
["Senhor, en tan grave día","Dom Dinis","L","P","86590"],
["Senhor, hoj'houvesse eu vagar","Dom Dinis","L","P","88508"],
["Senhor, nom vos pês se me guisar Deus","Dom Dinis","L","P","88505"],
["Senhor, pois me nom queredes","Dom Dinis","L","P","88519"],
["Senhor, pois que m'agora Deus guisou","Dom Dinis","L","P","86734"],
["Senhor, que de grad'hoj'eu querría","Dom Dinis","L","P","86588"],
["Senhor, que mal vos nembrades","Dom Dinis","L","P","88526"],
["Senhora","José de Alencar","L","R","2026","senhora"],
["Senhora em cordel","Isabel Lima","L","C","121959"],
["Sentimental","Salomão Rovedo","L","P","17716"],
["Sentimental demais","Salomão Rovedo","L","P","70026"],
["Serenatas e saraus","Alexandre José de Melo Morais Filho","L","P","43494","serenatas-e-saraus"],
["Sermão da Dominga XIX depois do Pentecoste (1639)","Pe. Antônio Vieira","L","E","16405"],
["Sermão da Glória de Maria, Mãe de Deus","Pe. Antônio Vieira","L","E","16376"],
["Sermão da Primeira Dominga do Advento (1650)","Pe. Antônio Vieira","L","E","17381"],
["Sermão da Primeira Dominga do Advento (1655)","Pe. Antônio Vieira","L","E","16378"],
["Sermão da Primeira Oitava de Páscoa","Pe. Antônio Vieira","L","E","16381"],
["Sermão da Primeira Sexta-Feira da Quaresma (1644)","Pe. Antônio Vieira","L","E","16392"],
["Sermão da Primeira Sexta-Feira da Quaresma (1651)","Pe. Antônio Vieira","L","E","16390"],
["Sermão da Quinta Dominga da Quaresma","Pe. Antônio Vieira","L","E","1749"],
["Sermão da Segunda Dominga da Quaresma (1651)","Pe. Antônio Vieira","L","E","16399"],
["Sermão da Sexagésima","Pe. Antônio Vieira","L","E","1745"],
["Sermão das Cadeias de S. Pedro em Roma pregado na Igreja de S. Pedro.","Pe. Antônio Vieira","L","E","16402"],
["Sermão de Dia de Ramos (1656)","Pe. Antônio Vieira","L","E","16409"],
["Sermão de Nossa Senhora do Ó (1640)","Pe. Antônio Vieira","L","E","16397"],
["Sermão de S. Roque","Pe. Antônio Vieira","L","E","16384"],
["Sermão de Santa Catarina (1663)","Pe. Antônio Vieira","L","E","16393"],
["Sermão de Santa Catarina Virgem e Mártir","Pe. Antônio Vieira","L","E","17345"],
["Sermão de Santa Teresa","Pe. Antônio Vieira","L","E","16389"],
["Sermão de Santa Teresa e do Santíssimo Sacramento","Pe. Antônio Vieira","L","E","16387"],
["Sermão de Santo Antônio","Pe. Antônio Vieira","L","E","17349"],
["Sermão de São Pedro","Pe. Antônio Vieira","L","E","16379"],
["Sermão de Todos os Santos","Pe. Antônio Vieira","L","E","16385"],
["Sermão do Bom Ladrão (1655)","Pe. Antônio Vieira","L","E","16404"],
["Sermão do Espírito Santo","Pe. Antônio Vieira","L","E","16396"],
["Sermão do Mandato","Pe. Antônio Vieira","L","E","17361"],
["Sermão do Mandato (1643)","Pe. Antônio Vieira","L","E","16394"],
["Sermão do Quarto Sábado da Quaresma (1640)","Pe. Antônio Vieira","L","E","16411"],
["Sermão do Segundo Mandato","Pe. Antônio Vieira","L","E","16372"],
["Sermão dos Bons Anos","Pe. Antônio Vieira","L","E","17362"],
["Sermão Histórico e Panegírico nos Anos da Rainha D. Maria Francisca de Sabóia","Pe. Antônio Vieira","L","E","16375"],
["Sermão Histórico Panegírico nos Anos da Rainha D. Maria Francisca de Sabóia","Pe. Antônio Vieira","L","E","17385"],
["Sermão I - Maria, Rosa Mística","Pe. Antônio Vieira","L","E","1739"],
["Sermão II - Maria Rosa Mística","Pe. Antônio Vieira","L","E","17363"],
["Sermão III - Maria Rosa Mística","Pe. Antônio Vieira","L","E","17365"],
["Sermão IX - Maria Rosa Mística","Pe. Antônio Vieira","L","E","17366"],
["Sermão nas exéquias de D. Maria de Ataíde","Pe. Antônio Vieira","L","E","16382"],
["Sermão Nossa Senhora do Rosário com o Santíssimo Sacramento","Pe. Antônio Vieira","L","E","16413"],
["Sermão pelo Bom Sucesso das Armas de Portugal contra as da Holanda","Pe. Antônio Vieira","L","E","17378"],
["Sermão pelo Bom Sucesso das Armas de Portugal Contra as de Holanda","Pe. Antônio Vieira","L","E","1742","sermao-pelo-bom-sucesso-das-armas-de-portugal-contra-as-de-holanda"],
["Sermão Segundo do Mandato","Pe. Antônio Vieira","L","E","17367"],
["Sermão VI - Maria Rosa Mística","Pe. Antônio Vieira","L","E","17369"],
["Sermão VIII - Com o Santíssimo Sacramento Exposto Maria Rosa Mística","Pe. Antônio Vieira","L","E","17372"],
["Sermão X - Maria Rosa Mística","Pe. Antônio Vieira","L","E","17374"],
["Sermão XI Com o Santíssimo Sacramento Exposto","Pe. Antônio Vieira","L","E","16414"],
["Sermão XII (1639)","Pe. Antônio Vieira","L","E","16407"],
["Sermão XIII","Pe. Antônio Vieira","L","E","16408"],
["Sermão XIV (1633)","Pe. Antônio Vieira","L","E","16412"],
["Serões da província","Júlio Dinis","L","C","28815","seroes-da-provincia"],
["Sesmaria - Cruzeiro, o Quilombo das Luzes","Tarcísio José Martins","L","E","204196"],
["Sete de setembro","Casimiro de Abreu","L","P","86491"],
["Silvestre","Machado de Assis","L","C","17850"],
["Sim, talvez tenha razão","Alberto Caeiro","L","P","86529"],
["Sim: existo dentro do meu corpo","Alberto Caeiro","L","P","86528"],
["Símbolos","Emílio de Meneses","L","P","17327"],
["Simples","Auta de Sousa","L","P","81968"],
["Sinais de vida no planeta Minas","Fernando Gabeira","L","E","43550"],
["Singular Ocorrência","Machado de Assis","L","C","1907"],
["Singularidades de uma Rapariga Loura","José Maria Eça de Queirós","L","C","1795","singularidades-de-uma-rapariga-loura"],
["Só","António Nobre","L","C","38090"],
["Só","Machado de Assis","L","C","17883"],
["Só a natureza é divina","Alberto Caeiro","L","P","86530"],
["Sobre o amor, pensando sério...","Francisco Adua Esposito","L","C","197531"],
["Soledade","Auta de Sousa","L","P","81970"],
["Soneto (des)pejado","Manuel Maria de Barbosa du Bocage","L","P","84310"],
["Soneto anal","Manuel Maria de Barbosa du Bocage","L","P","84314"],
["Soneto anticlerical","Manuel Maria de Barbosa du Bocage","L","P","84315"],
["Soneto ao Árcade França","Manuel Maria de Barbosa du Bocage","L","P","84330"],
["Soneto ao Árcade Lereno","Manuel Maria de Barbosa du Bocage","L","P","84331"],
["Soneto ao leitão","Manuel Maria de Barbosa du Bocage","L","P","84328"],
["Soneto arcádico","Manuel Maria de Barbosa du Bocage","L","P","84318"],
["Soneto da amada gabada","Manuel Maria de Barbosa du Bocage","L","P","84332"],
["Soneto da beata esperta","Manuel Maria de Barbosa du Bocage","L","P","84333"],
["Soneto da cagada","Manuel Maria de Barbosa du Bocage","L","P","84334"],
["Soneto da cópula canina","Manuel Maria de Barbosa du Bocage","L","P","84337"],
["Soneto da cópula esculpida","Manuel Maria de Barbosa du Bocage","L","P","84339"],
["Soneto da donzela ansiosa","Manuel Maria de Barbosa du Bocage","L","P","84341"],
["Soneto da escultura escandalosa","Manuel Maria de Barbosa du Bocage","L","P","84343"],
["Soneto da mocetona pudibunda","Manuel Maria de Barbosa du Bocage","L","P","84345"],
["Soneto da porra burra","Manuel Maria de Barbosa du Bocage","L","P","84348"],
["Soneto da puta assombrosa","Manuel Maria de Barbosa du Bocage","L","P","84352"],
["Soneto da puta novata","Manuel Maria de Barbosa du Bocage","L","P","84354"],
["Soneto das glórias carnais","Manuel Maria de Barbosa du Bocage","L","P","84355"],
["Soneto do coito interrompido","Manuel Maria de Barbosa du Bocage","L","P","84357"],
["Soneto do corno choroso","Manuel Maria de Barbosa du Bocage","L","P","84361"],
["Soneto do corno interesseiro","Manuel Maria de Barbosa du Bocage","L","P","84362"],
["Soneto do diálogo conjugal","Manuel Maria de Barbosa du Bocage","L","P","84363"],
["Soneto do gozador coçador","Manuel Maria de Barbosa du Bocage","L","P","84364"],
["Soneto do gozo vitorioso","Manuel Maria de Barbosa du Bocage","L","P","84365"],
["Soneto do juramento","Manuel Maria de Barbosa du Bocage","L","P","84366"],
["Soneto do lascivo pezinho","Manuel Maria de Barbosa du Bocage","L","P","84367"],
["Soneto do membro monstruoso","Manuel Maria de Barbosa du Bocage","L","P","84368"],
["Soneto do mouro desmoralizado","Manuel Maria de Barbosa du Bocage","L","P","84369"],
["Soneto do padre patife","Manuel Maria de Barbosa du Bocage","L","P","84370"],
["Soneto do pau decifrado","Manuel Maria de Barbosa du Bocage","L","P","84509"],
["Soneto do prazer efêmero","Manuel Maria de Barbosa du Bocage","L","P","84514"],
["Soneto do prazer maior","Manuel Maria de Barbosa du Bocage","L","P","84522"],
["Soneto do pregador pecador","Manuel Maria de Barbosa du Bocage","L","P","84527"],
["Soneto do velho escandaloso","Manuel Maria de Barbosa du Bocage","L","P","84532"],
["Soneto dramático","Manuel Maria de Barbosa du Bocage","L","P","84320"],
["Soneto maçônico","Manuel Maria de Barbosa du Bocage","L","P","84324"],
["Soneto matinal","Manuel Maria de Barbosa du Bocage","L","P","84321"],
["Soneto Napoleônico","Manuel Maria de Barbosa du Bocage","L","P","84326"],
["Sonetos","Luís Vaz de Camões","L","P","1872"],
["Sonetos e Outros Poemas","Manuel Maria de Barbosa du Bocage","L","P","1777"],
["Sonetos Inéditos","Cláudio Manuel da Costa (Glauceste Satúrnio)","L","P","16556"],
["Sonhando","Casimiro de Abreu","L","P","86492"],
["Sonhos de virgem","Casimiro de Abreu","L","P","86493"],
["Sonja Sonrisal","Salomão Rovedo","L","P","70027"],
["Sonriendo","C. Wagner","L","E","43496"],
["Sou um guardador de rebanhos","Alberto Caeiro","L","P","86531"],
["Sova bem Merecida","Artur Azevedo","L","C","7508"],
["Stefan Zweig: pensamentos e perfis","Salomão Rovedo","L","P","65733"],
["Suje-Se, Gordo!","Machado de Assis","L","C","16975"],
["Súplica","Auta de Sousa","L","P","81969"],
["Suspiros Poéticos e Saudades","Domingos Gonçalves de Magalhães","L","P","2088","suspiros-poeticos-e-saudades"],
["Sylvio","Auta de Sousa","L","P","81973"],
["Tam muito mal mi fazedes, senhor","Dom Dinis","L","P","86735"],
["Tant'é Melión pecador","Dom Dinis","L","P","86592"],
["Tarde","Olavo Bilac","L","P","1999","tarde"],
["Tentação","Adolfo Caminha","L","R","2169","tentacao"],
["Teoria do Medalhão","Machado de Assis","L","C","1940","teoria-do-medalhao"],
["Terpsícore","Machado de Assis","L","C","17851","terpsicore"],
["Teus anos","Auta de Sousa","L","P","81976"],
["Textos críticos","Machado de Assis","L","M","17874"],
["Til","José de Alencar","L","R","1850"],
["Tipos Burlescos","Bruno Seabra","L","P","2104"],
["Tipos da atualidade","França Júnior","L","T","7538"],
["Tirana","Antônio Frederico de Castro Alves","L","P","86649"],
["Tiverton Tales","Alice Brown","L","C","44104","tiverton-tales"],
["To be or not to be","Machado de Assis","L","C","17852"],
["Toc, toc, toc, toc...","Artur Azevedo","L","C","7509"],
["Todas as opiniões que há sobre a natureza","Alberto Caeiro","L","P","86532"],
["Todas as teorias, todos os poemas","Alberto Caeiro","L","P","86533"],
["Todos os dias agora acordo com alegria e pena","Alberto Caeiro","L","P","86535"],
["Torrentes","Teófilo Braga","L","P","43474","torrentes"],
["Trança loura","Auta de Sousa","L","P","81975"],
["Tratado da Terra do Brasil","Pero de Magalhães Gândavo","L","E","17412","tratado-da-terra-do-brasil"],
["Tratado da Terra do Brasil: História da Província Santa Cruz a que Vulgarmente Chamamos Brasil","Pero de Magalhães Gândavo","L","E","2175","tratado-da-terra-do-brasil-historia-da-provincia-santa-cruz-"],
["Tratado descritivo do Brasil em 1587","Gabriel Soares de Sousa","L","E","38095","tratado-descritivo-do-brasil-em-1587"],
["Três cantos","Casimiro de Abreu","L","P","86494"],
["Três conseqüências","Machado de Assis","L","C","17892"],
["Três Gênios de Secretária","Afonso Henriques de Lima Barreto","L","C","16835"],
["Três tesouros perdidos","Machado de Assis","L","C","17853"],
["Trina e uma","Machado de Assis","L","C","17854"],
["Trio em Lá Menor","Machado de Assis","L","C","1974"],
["Triunfo da Morte","Francesco Petrarca","L","P","2287"],
["Troca de datas","Machado de Assis","L","C","17893"],
["Tropas e boiadas","Hugo de Carvalho Ramos","L","C","19650"],
["Tu, místico, vês uma significação em todas as cousas","Alberto Caeiro","L","P","86536"],
["Tu, só tu, puro amor","Machado de Assis","L","C","17855","tu-so-tu-puro-amor"],
["Tubarão com a faca nas costas. (Coleção literatura para todos; v.3)","Cezar Dias","L","E","50034"],
["Tudo passa","Auta de Sousa","L","P","81978"],
["Tudo se muda: o génio unicamente","Abade de Jazente","L","P","81619"],
["Types of Children's Literature","Walter Barnes","L","E","37582","types-of-children-s-literature"],
["U noutro día seve Don Foán","Dom Dinis","L","P","86594"],
["Ubirajara","José de Alencar","L","R","16679","ubirajara"],
["Um almoço","Machado de Assis","L","C","17856"],
["Um ambicioso","Machado de Assis","L","C","17857"],
["Um Apólogo","Machado de Assis","L","F","16978","um-apologo"],
["Um Assovio","Qorpo Santo","L","T","17432"],
["Um Cacete","Artur Azevedo","L","C","7510"],
["Um cão de lata ao rabo","Machado de Assis","L","C","17858"],
["Um Capitão de Voluntários","Machado de Assis","L","C","1956"],
["Um Capricho","Artur Azevedo","L","C","7511"],
["Um ciclone na Paulicéia: Oswald de Andrade e os limites da vida intelectual em São Paulo (1900 - 1950)","Rubens de Oliveira Martins","L","C","41393"],
["Um Credor da Fazenda Nacional","Qorpo Santo","L","T","17434"],
["Um dedo de prosa, um pouco de verso","William Henrique Stutz","L","C","171636"],
["Um Desastre","Artur Azevedo","L","C","7512"],
["Um dia de chuva","Alberto Caeiro","L","P","86538"],
["Um dia de entrudo","Machado de Assis","L","C","17859"],
["Um dístico","Machado de Assis","L","C","17879"],
["Um Don Juan de Província","Artur Azevedo","L","C","7513"],
["Um Erradio","Machado de Assis","L","C","1929"],
["Um Especialista","Afonso Henriques de Lima Barreto","L","C","16836"],
["Um esqueleto","Machado de Assis","L","C","17905"],
["Um estudo de relatos de pesquisa em análise de gênero","Patrícia Marcuzzo","L","E","88565"],
["Um Homem Célebre","Machado de Assis","L","C","1968"],
["Um homem superior","Machado de Assis","L","C","17864"],
["Um incêndio","Machado de Assis","L","C","17914"],
["Um melodrama em Santo Tirso","M. Pinheiro Chagas","L","T","7559"],
["Um parto","Qorpo Santo","L","T","7629"],
["Um quarto de século","Machado de Assis","L","C","17865"],
["Um Que Vendeu a Sua Alma","Afonso Henriques de Lima Barreto","L","C","16837"],
["Um raio de luar","Antônio Frederico de Castro Alves","L","P","86650"],
["Um renque de árvores lá longe, lá para a encosta","Alberto Caeiro","L","P","86540"],
["Um Sarau no Paço de São Cristóvão","Paulo Setúbal","L","C","7625"],
["Um sonho","Auta de Sousa","L","P","81979"],
["Um sonho e outro sonho","Machado de Assis","L","C","17866"],
["Um tal home sei eu, ai bem talhada","Dom Dinis","L","P","86740"],
["Um Tratado da Cozinha Portuguesa do Século XV","Anônimo","L","E","2120"],
["Uma águia sem asas","Machado de Assis","L","C","17867"],
["Uma Aposta","Artur Azevedo","L","C","7514"],
["Uma Campanha Alegre - Volume I","José Maria Eça de Queirós","L","C","14023"],
["Uma Carga de Sono","Artur Azevedo","L","C","7515"],
["Uma carta","Machado de Assis","L","C","17884"],
["Uma Estação no Inferno","Arthur Rimbaud","L","P","2260"],
["Uma excursão milagrosa","Machado de Assis","L","C","17908"],
["Uma gargalhada de rapariga soa do ar","Alberto Caeiro","L","P","86539"],
["Uma história","Casimiro de Abreu","L","P","86495"],
["Uma Lágrima de Mulher","Aluísio Azevedo","L","R","16538","uma-lagrima-de-mulher"],
["Uma loureira","Machado de Assis","L","C","17869"],
["Uma noite","Machado de Assis","L","C","17912"],
["Uma ode de anacreonte","Machado de Assis","L","T","17870"],
["Uma partida","Machado de Assis","L","C","17871"],
["Uma por Outra","Artur Azevedo","L","C","7516"],
["Uma por outra","Machado de Assis","L","C","17943"],
["Uma Praga Rogada nas Escadarias da Fôrca","Camilo Castelo Branco","L","C","1782"],
["Uma primavera adiantada","Barbara Ganizev Jimenez","L","C","162933"],
["Uma Pupila Rica","Joaquim Manuel de Macedo","L","C","2087"],
["Uma Senhora","Machado de Assis","L","C","1911","uma-senhora"],
["Uma tragédia no Amazonas","Raul Pompéia","L","P","7631"],
["Uma Véspera de Reis","Artur Azevedo","L","C","1771"],
["Uma Viagem ao Céu","Leandro Gomes de Barros","C","D","5453"],
["Uma Visita de Alcebíades","Machado de Assis","L","C","1952"],
["Umas Férias","Machado de Assis","L","C","1958"],
["Uns Braços","Machado de Assis","L","C","16981","uns-bracos"],
["Utopia","Thomas Morus","L","E","2301","utopia"],
["Vai alta no céu a lua da Primavera","Alberto Caeiro","L","P","86541"],
["Vai-s'o meu amig'alhur sem mim morar","Dom Dinis","L","P","86717"],
["Valer-vos-ia, amigo, se hoj'","Dom Dinis","L","P","86693"],
["Valério","Machado de Assis","L","C","17872"],
["Várias Histórias","Machado de Assis","L","C","1964","varias-historias"],
["Vedes, amigos, que de perdas hei","Afonso Sanches","L","P","82045"],
["Veeron-m'agora dizer","Afonso Eanes de Coton","L","P","82031"],
["Vênus! divina vênus!","Machado de Assis","L","C","17911"],
["Verba Testamentária","Machado de Assis","L","C","1953"],
["Verdade, mentira, certeza, incerteza","Alberto Caeiro","L","P","86542"],
["Verdades Singelas","Abade de Jazente","L","P","81621"],
["Verso e Reverso","José de Alencar","L","C","7549","verso-e-reverso"],
["Versos a Inah","Auta de Sousa","L","P","81988"],
["Versos Antigos (1885-1889)","Emílio de Meneses","L","P","17333"],
["Versos ligeiros","Auta de Sousa","L","P","81989"],
["Vesperal","Coelho Netto","L","C","43475","vesperal"],
["Vi-vos, madre, com meu amig'aqui","Dom Dinis","L","P","86682"],
["Via-Láctea","Olavo Bilac","L","P","2000"],
["Viagem à roda de mim mesmo","Machado de Assis","L","C","17881"],
["Viagem ao Parnaso","Artur Azevedo","L","C","16577"],
["Viagens de Gulliver","Jonathan Swift","L","R","2202","viagens-de-gulliver"],
["Viagens na Minha Terra","João Batista da Silva Leitão de Almeida Garrett","L","C","16525","viagens-na-minha-terra"],
["Vida Urbana","Afonso Henriques de Lima Barreto","L","C","2171"],
["Vidros quebrados","Machado de Assis","L","C","17891"],
["Vila Rica","Cláudio Manuel da Costa (Glauceste Satúrnio)","L","P","16557"],
["Violeta","Casimiro de Abreu","L","P","86496"],
["Violeta","Raul Pompéia","L","P","7633"],
["Virginius","Machado de Assis","L","C","17910"],
["Visão","Casimiro de Abreu","L","P","86497"],
["Vive","Alberto Caeiro","L","P","86543"],
["Viver","Machado de Assis","L","C","16983"],
["Volume 2: Adiós, Lite de Ratura","Paulo Vitor Grossi","L","P","117138"],
["Vós mi defendestes, senhor","Dom Dinis","L","P","86725"],
["Vós, que vos em vossos cantares meu","Dom Dinis","L","P","86613"],
["Vovó Andrade","Artur Azevedo","L","C","7517"],
["Vozes d'África","Antônio Frederico de Castro Alves","L","P","16725"],
["Vulcano e Minerva","José Cândido de Lacerda Coutinho","L","C","2172"],
["Woyzeck","George Büchner","L","T","16644","woyzeck"],
["X e W","Artur Azevedo","L","C","7518"]
];

/* ------------------------------------------------------------
   Prateleiras de data — o que a casa põe na vitrine em cada época
   ------------------------------------------------------------
   Cada prateleira guarda os códigos das obras do próprio acervo. Quando
   a data chega, a vitrine passa a sortear dali. Fora dessas semanas ela
   sorteia do acervo inteiro. Em qualquer caso a combinação muda todo dia.

   Para mexer numa prateleira, é só acrescentar ou tirar um código da
   lista. O código é o mesmo número que aparece no link do livro. */

window.ACERVO_DATAS = [
    { chave: "consciencia-negra", titulo: "Vozes que o Brasil precisa ler",
      eyebrow: "20 de novembro, Dia da Consciência Negra",
      sub: "Literatura negra e antiescravista, de Castro Alves a Luiz Gama e Cruz e Sousa.",
      mes: 11, dia: 20, janela: 4, obras: ["1786","16727","16725","1835","2121","2113","2069","2064","2024","1951","1775","86503","2101","86648"] },

    { chave: "natal", titulo: "Leituras de Natal",
      eyebrow: "Dezembro",
      sub: "Missa do galo, presépio e as histórias que a gente lê quando o ano está acabando.",
      mes: 12, dia: 25, janela: 5, obras: ["1931","16821","81879","81793","1771","81777","81873","81889","81959","81681"] },

    { chave: "ano-novo", titulo: "Para virar o ano lendo",
      eyebrow: "Réveillon",
      sub: "Crônicas sobre o tempo que passa, para começar o ano com outra cabeça.",
      mes: 1, dia: 1, janela: 4, obras: ["81649","1959","81960","17486","1930","17886","17893","17398","1937","17865"] },

    { chave: "livro-mundial", titulo: "Os livros que ninguém deveria morrer sem ler",
      eyebrow: "23 de abril, Dia Mundial do Livro",
      sub: "Os grandes da língua portuguesa, todos aqui de graça.",
      mes: 4, dia: 23, janela: 3, obras: ["86850","1802","1888","2038","1949","2020","1723","1792","16525","2101","1844","16937"] },

    { chave: "maes", titulo: "Para ler pensando nela",
      eyebrow: "Dia das Mães",
      sub: "Mães, avós e a infância que elas seguraram no colo.",
      domingo: [5, 2], janela: 3, obras: ["86447","81859","86637","7546","1951","81643","2147","86500","86441"] },

    { chave: "pais", titulo: "Para ler pensando nele",
      eyebrow: "Dia dos Pais",
      sub: "Pais, filhos e as famílias que a literatura brasileira desenhou.",
      domingo: [8, 2], janela: 3, obras: ["81857","17474","16827","16939","1768","1806","1876","16940","86441","86500"] },

    { chave: "folclore", titulo: "O Brasil que se conta de boca em boca",
      eyebrow: "22 de agosto, Dia do Folclore",
      sub: "Lendas, causos e cordel, a literatura que nasceu antes do papel.",
      mes: 8, dia: 22, janela: 3, obras: ["16665","1829","2142","17318","17325","16584","176167","5406","5388","5394","121959","176019"] },

    { chave: "independencia", titulo: "A nossa terra em palavras",
      eyebrow: "7 de setembro",
      sub: "Da carta de Caminha aos sertões de Euclides, o país sendo escrito.",
      mes: 9, dia: 7, janela: 3, obras: ["86491","2112","2106","1843","1844","16679","16642","2003","2163","17412","86829","16668"] },

    { chave: "criancas", titulo: "A estante da criançada",
      eyebrow: "12 de outubro, Dia das Crianças",
      sub: "Fábulas, bichos falantes e histórias para ler junto, em voz alta.",
      mes: 10, dia: 12, janela: 4, obras: ["28982","4978","145570","81624","105130","81625","124735","2147","36177","81627","81628","53489","5227","19437","132603","108081","14763","81629","176019","43230","121614","86500","86441"] },

    { chave: "livro-nacional", titulo: "Feito no Brasil, para ler sempre",
      eyebrow: "29 de outubro, Dia Nacional do Livro",
      sub: "Os romances e a poesia que fundaram a nossa literatura.",
      mes: 10, dia: 29, janela: 2, obras: ["86850","1802","1888","2038","1949","2020","1723","1792","16525","2101","1844","16937"] },

    { chave: "saci", titulo: "Assombração da boa",
      eyebrow: "31 de outubro, Dia do Saci",
      sub: "Bruxa, duende, diabo e cachorro dos mortos. O susto é nosso, não é importado.",
      mes: 10, dia: 31, janela: 1, obras: ["4978","17318","16522","81913","1903","20046","20049","5425","125933","127636","81797","121961"] }
];

/* ------------------------------------------------------------
   Acervo Digital — montagem da página
   ------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', function () {

    var PRATELEIRA = { L: 'Literatura', I: 'Literatura Infantil', C: 'Literatura de Cordel' };

    /* Os gêneros, na ordem em que aparecem no filtro. */
    var GENERO = {
        R: 'Romance',
        C: 'Conto e novela',
        P: 'Poesia',
        T: 'Teatro',
        M: 'Crônica e memórias',
        E: 'Ensaio e história',
        F: 'Fábula e conto de fadas',
        I: 'Infantojuvenil',
        D: 'Cordel'
    };
    var ORDEM_GENERO = ['R', 'C', 'P', 'T', 'M', 'E', 'F', 'I', 'D'];

    var LIVROS = (window.ACERVO_DIGITAL || []).map(function (x) {
        return { t: x[0], a: x[1], c: x[2], g: x[3], id: x[4], capa: x[5] || '' };
    });
    var grade = document.getElementById('acervo-grade');
    if (!grade) return;

    /* Link direto para o arquivo. O portal redireciona para o PDF. */
    var ARQUIVO = 'https://www.dominiopublico.gov.br/pesquisa/DetalheObraDownload.do?select_action=&co_obra=';
    var FIM = '&co_midia=2';
    function linkDo(l) { return ARQUIVO + l.id + FIM; }

    function semAcento(t) {
        return (t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    }

    /* ---------- CAPAS ----------
       Quando o livro tem capa digitalizada, ela entra como imagem. Quando
       não tem, a casa desenha uma: fundo de cor própria, título em League
       Gothic e o nome de quem escreveu. Nenhum livro fica sem capa. */

    var PALETAS = [
        ['#1A51A1', '#ffffff', '#FFC60D'],
        ['#EE3E41', '#ffffff', '#FFC60D'],
        ['#143B74', '#ffffff', '#7FB2F0'],
        ['#0E7C66', '#ffffff', '#FFC60D'],
        ['#5B3A8E', '#ffffff', '#FFC60D'],
        ['#B4431F', '#ffffff', '#FFD79A'],
        ['#27313D', '#ffffff', '#FFC60D'],
        ['#FFC60D', '#20303F', '#1A51A1'],
        ['#8C1B3A', '#ffffff', '#FFC60D'],
        ['#1C6E8C', '#ffffff', '#FFC60D']
    ];

    function digital(texto) {
        var n = 0;
        for (var i = 0; i < texto.length; i++) { n = (n * 31 + texto.charCodeAt(i)) >>> 0; }
        return n;
    }

    function capaDesenhada(el, livro) {
        var p = PALETAS[digital(livro.t + livro.a) % PALETAS.length];
        el.classList.add('capa--arte');
        el.style.setProperty('--capa-fundo', p[0]);
        el.style.setProperty('--capa-tinta', p[1]);
        el.style.setProperty('--capa-detalhe', p[2]);
        var t = document.createElement('span');
        t.className = 'capa-titulo';
        t.textContent = livro.t;
        var maiorPalavra = 0;
        livro.t.split(/[\s\-–—]+/).forEach(function (w) { if (w.length > maiorPalavra) maiorPalavra = w.length; });
        if (livro.t.length > 42 || maiorPalavra > 8) { t.classList.add('capa-titulo--longo'); }
        var risco = document.createElement('span');
        risco.className = 'capa-risco';
        var a = document.createElement('span');
        a.className = 'capa-autor';
        a.textContent = livro.a;
        var selo = document.createElement('span');
        selo.className = 'capa-selo';
        selo.textContent = 'Domínio Público';
        el.appendChild(t); el.appendChild(risco); el.appendChild(a); el.appendChild(selo);
    }

    function capa(livro, tag) {
        var el = document.createElement(tag || 'a');
        el.className = 'capa';
        if (el.tagName === 'A') {
            el.href = linkDo(livro);
            el.target = '_blank';
            el.rel = 'noopener';
            el.setAttribute('aria-label', 'Abrir ' + livro.t + ', de ' + livro.a);
        }
        if (!livro.capa) { capaDesenhada(el, livro); return el; }
        var img = document.createElement('img');
        img.src = 'img/acervo/capas/' + livro.capa + '.jpg';
        img.alt = 'Capa de ' + livro.t + ', de ' + livro.a;
        img.loading = 'lazy';
        img.addEventListener('error', function () {
            img.remove();
            capaDesenhada(el, livro);
        });
        el.appendChild(img);
        return el;
    }

    /* ---------- FERRAMENTA DE BUSCA ----------
       Três jeitos de garimpar, e eles funcionam juntos: escrever o que se
       procura, escolher o gênero e escolher a prateleira. */
    var POR_VEZ = 36;
    var mostrando = POR_VEZ;
    var filtros = { prateleira: 'todas', genero: 'todos', ordem: 'titulo' };
    var termo = '';
    var btnMais = document.getElementById('acervo-mais');
    var contador = document.getElementById('acervo-contador');
    var btnLimpar = document.getElementById('acervo-limpar');

    function semAcentoNome(l) {
        if (l._b === undefined) l._b = semAcento(l.t + ' ' + l.a);
        return l._b;
    }

    function filtrados() {
        var lista = LIVROS.filter(function (l) {
            if (filtros.prateleira !== 'todas' && l.c !== filtros.prateleira) return false;
            if (filtros.genero !== 'todos' && l.g !== filtros.genero) return false;
            if (termo && semAcentoNome(l).indexOf(termo) === -1) return false;
            return true;
        });
        if (filtros.ordem === 'autor') {
            lista.sort(function (a, b) {
                return a.a.localeCompare(b.a, 'pt-BR') || a.t.localeCompare(b.t, 'pt-BR');
            });
        } else if (filtros.ordem === 'capa') {
            lista.sort(function (a, b) {
                return (b.capa ? 1 : 0) - (a.capa ? 1 : 0) || a.t.localeCompare(b.t, 'pt-BR');
            });
        }
        return lista;
    }

    function temFiltro() {
        return !!termo || filtros.prateleira !== 'todas' || filtros.genero !== 'todos' || filtros.ordem !== 'titulo';
    }

    function desenhar() {
        var lista = filtrados();
        grade.innerHTML = '';
        if (btnLimpar) btnLimpar.hidden = !temFiltro();
        if (!lista.length) {
            grade.innerHTML = '<p class="acervo-vazio"><i class="fas fa-book"></i><br>' +
                'Não achamos nada com esses filtros. Tente o nome de quem escreveu, ou limpe os filtros e comece de novo.</p>';
            if (btnMais) btnMais.hidden = true;
            if (contador) contador.textContent = 'Nenhum livro encontrado';
            return;
        }
        var pedaco = document.createDocumentFragment();
        lista.slice(0, mostrando).forEach(function (l) {
            var box = document.createElement('article');
            box.className = 'livro';
            box.appendChild(capa(l, 'a'));
            var info = document.createElement('div');
            info.className = 'livro-info';
            info.innerHTML = '<h3></h3><p></p><span class="livro-genero"></span>';
            info.querySelector('h3').textContent = l.t;
            info.querySelector('p').textContent = l.a;
            info.querySelector('.livro-genero').textContent = GENERO[l.g] || PRATELEIRA[l.c] || 'Literatura';
            var link = document.createElement('a');
            link.className = 'livro-ler';
            link.href = linkDo(l);
            link.target = '_blank'; link.rel = 'noopener';
            link.innerHTML = 'Ler agora <i class="fas fa-arrow-right"></i>';
            info.appendChild(link);
            box.appendChild(info);
            pedaco.appendChild(box);
        });
        grade.appendChild(pedaco);
        if (btnMais) {
            btnMais.hidden = lista.length <= mostrando;
            btnMais.textContent = 'Ver mais ' + Math.min(POR_VEZ, lista.length - mostrando) + ' livros';
        }
        if (contador) {
            var txt = 'Mostrando ' + Math.min(mostrando, lista.length) + ' de ' + lista.length +
                      (lista.length === 1 ? ' livro' : ' livros');
            var marcas = [];
            if (filtros.genero !== 'todos') marcas.push(GENERO[filtros.genero]);
            if (filtros.prateleira !== 'todas') marcas.push(PRATELEIRA[filtros.prateleira]);
            if (termo) marcas.push('busca por "' + termo + '"');
            if (marcas.length) txt += ' · ' + marcas.join(' · ');
            contador.textContent = txt;
        }
    }

    function redesenhar() { mostrando = POR_VEZ; desenhar(); }

    /* Monta uma fileira de botões e devolve a função que marca o escolhido. */
    function fileira(caixa, itens, campo) {
        if (!caixa) return;
        itens.forEach(function (it) {
            if (!it[2]) return;
            var b = document.createElement('button');
            b.type = 'button';
            b.dataset.valor = it[0];
            b.innerHTML = it[1] + '<span class="qtd">' + it[2] + '</span>';
            if (it[0] === filtros[campo]) b.classList.add('ativo');
            b.addEventListener('click', function () {
                filtros[campo] = it[0];
                caixa.querySelectorAll('button').forEach(function (o) {
                    o.classList.toggle('ativo', o.dataset.valor === it[0]);
                });
                redesenhar();
            });
            caixa.appendChild(b);
        });
    }

    var contaG = {}, contaP = {};
    LIVROS.forEach(function (l) {
        contaG[l.g] = (contaG[l.g] || 0) + 1;
        contaP[l.c] = (contaP[l.c] || 0) + 1;
    });

    fileira(document.getElementById('acervo-generos'),
        [['todos', 'Todos os gêneros', LIVROS.length]].concat(
            ORDEM_GENERO.filter(function (g) { return contaG[g]; })
                        .map(function (g) { return [g, GENERO[g], contaG[g]]; })),
        'genero');

    fileira(document.getElementById('acervo-filtros'),
        [['todas', 'Todas', LIVROS.length],
         ['L', PRATELEIRA.L, contaP.L],
         ['I', PRATELEIRA.I, contaP.I],
         ['C', PRATELEIRA.C, contaP.C]],
        'prateleira');

    var campo = document.getElementById('acervo-busca');
    if (campo) {
        var espera = null;
        campo.addEventListener('input', function () {
            clearTimeout(espera);
            espera = setTimeout(function () {
                termo = semAcento(campo.value.trim()); redesenhar();
            }, 140);
        });
    }

    var ordenar = document.getElementById('acervo-ordem');
    if (ordenar) {
        ordenar.addEventListener('change', function () {
            filtros.ordem = ordenar.value; redesenhar();
        });
    }

    if (btnLimpar) {
        btnLimpar.addEventListener('click', function () {
            filtros = { prateleira: 'todas', genero: 'todos', ordem: 'titulo' };
            termo = '';
            if (campo) campo.value = '';
            if (ordenar) ordenar.value = 'titulo';
            document.querySelectorAll('#acervo-generos button, #acervo-filtros button')
                .forEach(function (b) { b.classList.toggle('ativo', b.dataset.valor === 'todos' || b.dataset.valor === 'todas'); });
            redesenhar();
            var alvo = document.getElementById('acervo');
            if (alvo) alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (btnMais) btnMais.addEventListener('click', function () { mostrando += POR_VEZ; desenhar(); });
    desenhar();

    /* ---------- RECOMENDADOS DE HOJE ----------
       Três livros por vez, passando sozinho. A combinação muda todo dia e,
       quando chega uma data que a casa marca, a vitrine inteira vira aquele
       tema. Sem botão de play e sem botão de pause. */
    var trilho = document.getElementById('rec-trilho');
    var pontos = document.getElementById('rec-pontos');
    if (!trilho || !LIVROS.length) return;

    var porId = {};
    LIVROS.forEach(function (l) { porId[l.id] = l; });

    var hoje = new Date();
    var diaDoAno = Math.floor((hoje - new Date(hoje.getFullYear(), 0, 0)) / 86400000);
    var semente = hoje.getFullYear() * 1000 + diaDoAno;

    /* Sorteio com semente: mesma data dá sempre a mesma vitrine, datas
       diferentes dão combinações diferentes. */
    function sorteio(s) {
        return function () {
            s |= 0; s = (s + 0x6D2B79F5) | 0;
            var t = Math.imul(s ^ (s >>> 15), 1 | s);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }
    function embaralhar(lista, s) {
        var r = sorteio(s), a = lista.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(r() * (i + 1));
            var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
        }
        return a;
    }

    /* Qual data está valendo hoje. Se duas se encostarem, vale a mais perto. */
    function segundoDomingo(ano, mes, ordem) {
        var d = new Date(ano, mes - 1, 1);
        var primeiro = 1 + ((7 - d.getDay()) % 7);
        return new Date(ano, mes - 1, primeiro + (ordem - 1) * 7);
    }
    function dataDeHoje() {
        var ano = hoje.getFullYear(), melhor = null, menor = 999;
        (window.ACERVO_DATAS || []).forEach(function (d) {
            var alvos = [];
            if (d.domingo) {
                alvos.push(segundoDomingo(ano, d.domingo[0], d.domingo[1]));
            } else {
                alvos.push(new Date(ano, d.mes - 1, d.dia));
                alvos.push(new Date(ano - 1, d.mes - 1, d.dia));
                alvos.push(new Date(ano + 1, d.mes - 1, d.dia));
            }
            alvos.forEach(function (alvo) {
                var dist = Math.abs(Math.round((hoje - alvo) / 86400000));
                if (dist <= d.janela && dist < menor) { menor = dist; melhor = d; }
            });
        });
        return melhor;
    }

    var QUANTOS = 9;
    var data = dataDeHoje();
    var escolhidos = [];

    if (data) {
        var doTema = data.obras.map(function (id) { return porId[id]; }).filter(Boolean);
        escolhidos = embaralhar(doTema, semente).slice(0, QUANTOS);
        var eb = document.getElementById('rec-eyebrow');
        var ti = document.getElementById('rec-titulo');
        var su = document.getElementById('rec-sub');
        if (eb) eb.textContent = data.eyebrow;
        if (ti) ti.textContent = data.titulo;
        if (su) su.textContent = data.sub;
    }

    /* Fora das datas marcadas, e para completar quando a prateleira do tema
       for curta, entra o acervo inteiro. Tem prioridade quem tem capa
       digitalizada, para a vitrine ficar bonita. */
    if (escolhidos.length < QUANTOS) {
        var jaEstao = {};
        escolhidos.forEach(function (l) { jaEstao[l.id] = 1; });
        var prateleira = LIVROS.filter(function (l) { return l.capa && !jaEstao[l.id]; });
        if (prateleira.length < QUANTOS) {
            prateleira = LIVROS.filter(function (l) { return !jaEstao[l.id]; });
        }
        escolhidos = escolhidos.concat(embaralhar(prateleira, semente + 7).slice(0, QUANTOS - escolhidos.length));
    }

    escolhidos.forEach(function (l) {
        var slide = document.createElement('div');
        slide.className = 'rec-slide';
        var cartao = document.createElement('article');
        cartao.className = 'rec-cartao';
        cartao.appendChild(capa(l, 'a'));
        var txt = document.createElement('div');
        txt.className = 'rec-texto';
        txt.innerHTML = '<span class="eyebrow"></span><h3></h3><p class="rec-autor"></p>';
        txt.querySelector('.eyebrow').textContent = GENERO[l.g] || PRATELEIRA[l.c] || 'Literatura';
        txt.querySelector('h3').textContent = l.t;
        txt.querySelector('.rec-autor').textContent = l.a;
        var btn = document.createElement('a');
        btn.className = 'livro-ler';
        btn.href = linkDo(l);
        btn.target = '_blank'; btn.rel = 'noopener';
        btn.innerHTML = 'Ler agora <i class="fas fa-arrow-right"></i>';
        txt.appendChild(btn);
        cartao.appendChild(txt);
        slide.appendChild(cartao);
        trilho.appendChild(slide);
    });

    function porPagina() {
        var l = window.innerWidth;
        if (l < 640) return 1;
        if (l < 980) return 2;
        return 3;
    }

    var pagina = 0;
    function paginas() { return Math.ceil(escolhidos.length / porPagina()); }

    function montarPontos() {
        if (!pontos) return;
        pontos.innerHTML = '';
        for (var i = 0; i < paginas(); i++) {
            (function (n) {
                var p = document.createElement('button');
                p.type = 'button';
                p.setAttribute('aria-label', 'Ver grupo ' + (n + 1));
                p.addEventListener('click', function () { ir(n); reiniciar(); });
                pontos.appendChild(p);
            })(i);
        }
    }

    function ir(n) {
        var total = paginas();
        pagina = (n + total) % total;
        trilho.style.transform = 'translateX(-' + (pagina * 100) + '%)';
        if (pontos) {
            pontos.querySelectorAll('button').forEach(function (p, i) {
                p.classList.toggle('ativo', i === pagina);
            });
        }
    }

    /* Passa sozinho. Sem botão de play ou pause: para ao passar o mouse
       ou ao focar pelo teclado, e volta a andar depois. */
    var relogio = null;
    function andar() { if (!relogio) relogio = setInterval(function () { ir(pagina + 1); }, 5500); }
    function parar() { if (relogio) { clearInterval(relogio); relogio = null; } }
    function reiniciar() { parar(); andar(); }

    var palco = trilho.parentElement;
    palco.addEventListener('mouseenter', parar);
    palco.addEventListener('mouseleave', andar);
    palco.addEventListener('focusin', parar);
    palco.addEventListener('focusout', andar);
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) { parar(); } else { andar(); }
    });

    var larguraAnterior = porPagina();
    window.addEventListener('resize', function () {
        if (porPagina() !== larguraAnterior) {
            larguraAnterior = porPagina();
            montarPontos(); ir(0);
        }
    });

    montarPontos();
    ir(0);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) andar();
});
