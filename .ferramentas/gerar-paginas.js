// Gera as páginas de segmento/região do majexsites.com.br (HTML estático, rápido, mesma identidade do site).
// Uso: node .ferramentas/gerar-paginas.js   (na pasta majex-site-repo). Depois atualiza o sitemap.xml sozinho.
const fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, "..");
const SITE = "https://www.majexsites.com.br";
const ZAP = "5555996241177";
const HOJE = new Date().toISOString().slice(0, 10);

const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const zap = (msg) => `https://wa.me/${ZAP}?text=${encodeURIComponent(msg)}`;

const PASSOS = [
  ["Conversa", "A gente conversa pelo WhatsApp sobre o seu negócio, o que você vende e como atende hoje."],
  ["Design", "Eu monto o visual e te mostro antes de programar. Ajustamos juntos até ficar com a sua cara."],
  ["Desenvolvimento", "Páginas, funções, WhatsApp e otimização para o Google, tudo testado no celular e no computador."],
  ["No ar e suporte", "Publico com domínio e e-mail próprios e sigo à disposição para o que você precisar."],
];

const PAGINAS = [
  {
    slug: "sites-para-revenda-de-veiculos",
    menu: "Revenda de veículos",
    title: "Site para revenda de veículos e garagem | MAJEX",
    desc: "Site para revenda de carros com estoque com fotos, busca pela parcela, comparador, simulador e WhatsApp em cada carro. A MAJEX atualiza o estoque para você.",
    kicker: "Revenda de veículos · garagem · concessionária",
    h1: "Site para revenda de veículos que leva o cliente direto pro seu WhatsApp.",
    lead: "Estoque com fotos, busca pela parcela, comparador e simulador. O cliente escolhe o carro no celular e chega no seu WhatsApp já falando do modelo certo. E você não precisa mexer em nada: a MAJEX atualiza o estoque para você.",
    msg: "Olá MAJEX! Vi a página de sites para revenda de veículos e quero um orçamento.",
    hero: { desk: "img/shot-1-1280.webp", deskSet: "img/shot-1-640.webp 640w, img/shot-1-1280.webp 1280w", cel: "img/shot-5-320.webp", host: "veiculomodel2.vercel.app", alt: "Modelo de site para revenda de veículos, versão computador" },
    recursos: [
      ["Estoque com fotos e filtros", "Cada carro com galeria de fotos, ano, quilometragem e preço. Filtro por marca, faixa de preço e ano."],
      ["Busca pela parcela", "O cliente diz quanto pode pagar por mês e vê os carros que cabem no bolso dele."],
      ["Comparador e simulador", "Compara dois carros lado a lado e simula a entrada e as parcelas antes de chamar."],
      ["WhatsApp em cada carro", "O botão já manda a mensagem com o modelo, o ano e o preço do carro que ele estava vendo."],
      ["Estoque sempre em dia", "Chegou carro novo? Manda as fotos no WhatsApp e a MAJEX coloca no site. Vendeu, sai do ar."],
      ["Seu domínio, sua marca", "Endereço .com.br próprio, e-mail profissional e identidade da sua loja, sem cara de classificado."],
    ],
    casos: [
      { nome: "Sua Revenda", tag: "Modelo · tema escuro", txt: "Tipografia forte, vitrine de destaques e senso de urgência. Estoque com fotos, busca pela parcela, comparador, simulador e WhatsApp em cada carro.", url: "https://veiculomodel2.vercel.app/", img: "img/shot-1-1280.webp", set: "img/shot-1-640.webp 640w, img/shot-1-1280.webp 1280w" },
      { nome: "Sua Loja", tag: "Modelo · tema claro", txt: "As mesmas funções com outra personalidade: clara, arredondada, próxima. Prova de que o mesmo sistema vira dois sites completamente diferentes.", url: "https://veiculomodel1.vercel.app/", img: "img/shot-2-1280.webp", set: "img/shot-2-640.webp 640w, img/shot-2-1280.webp 1280w" },
    ],
    notaCasos: "Os dois são modelos de demonstração que você pode abrir e navegar agora. O seu sai com a marca, as cores e os carros da sua loja.",
    faq: [
      ["Eu preciso cadastrar os carros sozinho?", "Não. Você manda as fotos e os dados do carro pelo WhatsApp e a MAJEX coloca no site. Quando vender, é só avisar que ele sai do estoque."],
      ["Serve para garagem pequena?", "Serve. O site funciona igual com 5 ou com 200 carros, e a vitrine se organiza sozinha conforme o estoque."],
      ["Como o cliente fala comigo?", "Pelo WhatsApp, em um toque. A mensagem já chega com o carro que ele estava vendo, então você não perde tempo perguntando qual era."],
      ["Quanto tempo leva para ficar pronto?", "Na maioria dos casos, de 2 a 7 dias, dependendo de quando chegam as fotos e as informações da loja."],
      ["O site aparece no Google?", "Sim. Ele sai com título, descrição, mapa do site e os dados da loja prontos para o Google, e no seu próprio domínio."],
    ],
  },
  {
    slug: "sites-para-imobiliaria",
    menu: "Imobiliária",
    title: "Site para imobiliária com catálogo e painel próprio | MAJEX",
    desc: "Site para imobiliária com catálogo de imóveis com filtros, página para cada imóvel, simulador de financiamento, WhatsApp com o código do imóvel e painel para a equipe cadastrar sozinha.",
    kicker: "Imobiliária · corretor · loteamento",
    h1: "Site para imobiliária com catálogo, filtros e painel da própria equipe.",
    lead: "Uma página para cada imóvel, busca com filtros, simulador de financiamento e WhatsApp já com o código do imóvel. E um painel só seu: a equipe cadastra, edita e marca como vendido sem depender de ninguém.",
    msg: "Olá MAJEX! Vi a página de sites para imobiliária e quero um orçamento.",
    hero: { desk: "img/kiesel-desk-1280.webp", deskSet: "img/kiesel-desk-640.webp 640w, img/kiesel-desk-1280.webp 1280w", cel: "img/kiesel-cel-320.webp", host: "imobiliariakiesel.com.br", alt: "Site da Imobiliária Kiesel, versão computador" },
    recursos: [
      ["Catálogo com filtros", "Compra ou aluguel, tipo, cidade, bairro e quartos. O cliente acha o imóvel certo em poucos toques."],
      ["Uma página por imóvel", "Fotos, descrição, características e localização. Cada imóvel com endereço próprio para compartilhar e aparecer no Google."],
      ["Simulador de financiamento", "O cliente vê a entrada e a parcela antes de chamar, e chega mais decidido."],
      ["WhatsApp com o código", "A mensagem já chega com o código do imóvel. O corretor sabe na hora do que se trata."],
      ["Painel da equipe", "Cadastrar, editar, trocar foto e marcar como vendido ou alugado, pelo computador ou pelo celular."],
      ["Capa que mostra a cidade", "Vídeo ou fotos da região na abertura, para o site ter a cara do lugar onde vocês atuam."],
    ],
    casos: [
      { nome: "Imobiliária Kiesel", tag: "São Martinho/RS · no ar", txt: "A primeira imobiliária de São Martinho ganhou site próprio: filme de drone da cidade na capa, catálogo completo com filtros, uma página para cada imóvel, simulador de financiamento e WhatsApp com o código do imóvel. A equipe cadastra, edita e marca como vendido sozinha, pelo painel.", url: "https://www.imobiliariakiesel.com.br/", img: "img/kiesel-desk-1280.webp", set: "img/kiesel-desk-640.webp 640w, img/kiesel-desk-1280.webp 1280w" },
    ],
    notaCasos: "Site real, publicado e em uso. Pode abrir e navegar.",
    faq: [
      ["A equipe consegue cadastrar imóveis sem programador?", "Sim. O painel é feito para quem não é da área de tecnologia: preencher os campos, subir as fotos e salvar. Funciona no celular também."],
      ["Os imóveis que já tenho entram no site novo?", "Entram. Na entrega, todas as suas informações já vão para o site, sem cobrar a mais."],
      ["Cada imóvel aparece no Google?", "Cada imóvel tem a sua própria página, com título e descrição, o que ajuda o Google a mostrar o imóvel para quem procura."],
      ["Dá para usar o domínio da imobiliária?", "Sim. O site fica no seu .com.br, com e-mail profissional. A MAJEX cuida do registro e da publicação."],
      ["Serve para corretor autônomo?", "Serve. A estrutura é a mesma, só muda o tamanho do catálogo e a identidade."],
    ],
  },
  {
    slug: "cardapio-digital-com-pedido-no-whatsapp",
    menu: "Cardápio digital",
    title: "Cardápio digital com pedido no WhatsApp para lancheria e restaurante | MAJEX",
    desc: "Cardápio digital para lancheria, restaurante, pizzaria e bar: personalização por item, cupom, taxa por bairro, forma de pagamento e o pedido chega pronto no seu WhatsApp, sem comissão por pedido.",
    kicker: "Lancheria · restaurante · pizzaria · bar",
    h1: "Cardápio digital com o pedido chegando pronto no seu WhatsApp.",
    lead: "O cliente monta o pedido no celular: escolhe, personaliza, aplica o cupom, vê a taxa do bairro e a forma de pagamento. Você recebe tudo escrito no WhatsApp, sem app para baixar e sem comissão por pedido, porque o site é seu.",
    msg: "Olá MAJEX! Vi a página de cardápio digital e quero um orçamento.",
    hero: { desk: "img/shot-3-1280.webp", deskSet: "img/shot-3-640.webp 640w, img/shot-3-1280.webp 1280w", cel: "img/shot-7-360.webp", host: "restaurante-model-wheat.vercel.app", alt: "Modelo de cardápio digital, versão computador" },
    recursos: [
      ["Feito para o celular", "Abre rápido no 4G, com fotos dos pratos e categorias fáceis de navegar com o dedo."],
      ["Personalização por item", "Tirar a cebola, ponto da carne, adicionais e observações, tudo sem confusão."],
      ["Sugestão na hora certa", "Ofereça a bebida e a porção junto com o lanche e aumente o valor de cada pedido."],
      ["Cupom e taxa por bairro", "Desconto por cupom e taxa de entrega calculada pelo bairro do cliente."],
      ["Pagamento combinado antes", "Pix, cartão ou dinheiro, com troco, já escolhidos no pedido."],
      ["Pedido pronto no WhatsApp", "Chega organizado, com itens, endereço e total. É só confirmar e mandar para a cozinha."],
    ],
    casos: [
      { nome: "Lancheria do Bairro", tag: "Modelo · pedido no WhatsApp", txt: "Cardápio para celular com personalização por item, sugestão de bebida e batata, cupom, taxa por bairro e pagamento. O pedido chega pronto no WhatsApp do dono.", url: "https://restaurante-model-wheat.vercel.app/", img: "img/shot-3-1280.webp", set: "img/shot-3-640.webp 640w, img/shot-3-1280.webp 1280w" },
    ],
    notaCasos: "Modelo de demonstração: dá para montar um pedido de teste agora mesmo. O seu sai com os seus pratos, preços e cores.",
    faq: [
      ["Tem comissão por pedido?", "Não. O cardápio é seu, no seu endereço, e o pedido vai direto para o seu WhatsApp. Não existe intermediário cobrando por pedido."],
      ["O cliente precisa baixar aplicativo?", "Não. Ele abre o link no navegador do celular e faz o pedido ali mesmo."],
      ["Consigo mudar preço e tirar item que acabou?", "Sim. As mudanças de preço e de itens são feitas rápido, e dá para combinar um pacote de manutenção para isso."],
      ["Serve para pizzaria e bar?", "Serve. A estrutura se adapta a sabores, tamanhos, meia a meia, combos e porções."],
      ["Quanto tempo leva?", "Na maioria dos casos, de 2 a 7 dias depois de receber o cardápio e as fotos."],
    ],
  },
  {
    slug: "site-com-catalogo-e-orcamento-no-whatsapp",
    menu: "Catálogo e orçamento",
    title: "Site com catálogo de produtos e orçamento pelo WhatsApp | MAJEX",
    desc: "Site com catálogo de produtos para loja, distribuidora e indústria: preço por quantidade, integração com fornecedor, painel para a equipe e orçamento montado no site e enviado pelo WhatsApp.",
    kicker: "Loja · distribuidora · indústria · brindes",
    h1: "Site com catálogo de produtos e orçamento direto no WhatsApp.",
    lead: "O cliente navega pelo catálogo, escolhe os produtos e as quantidades e manda o orçamento pronto no seu WhatsApp. Com painel para a equipe atualizar preços e destaques e, quando dá, integração com o fornecedor para o estoque se atualizar sozinho.",
    msg: "Olá MAJEX! Vi a página de site com catálogo e orçamento e quero um orçamento.",
    hero: { desk: "img/khaus-desk-1280.webp", deskSet: "img/khaus-desk-640.webp 640w, img/khaus-desk-1280.webp 1280w", cel: "img/khaus-cel-320.webp", host: "khausbrindes.com.br", alt: "Site da Khaus Brindes, versão computador" },
    recursos: [
      ["Catálogo com busca e categorias", "Do primeiro ao milésimo produto, organizado em categorias, com busca e fotos."],
      ["Preço por quantidade", "Faixas de preço à mostra: o cliente vê quanto o valor cai quando pede mais."],
      ["Orçamento no WhatsApp", "O cliente monta a lista no site e envia. Você recebe com produtos, quantidades e contato."],
      ["Integração com fornecedor", "Quando o fornecedor tem integração, produtos, fotos e estoque se atualizam sozinhos todo dia."],
      ["Painel da equipe", "Mudar preço, margem, destaque e o que aparece no site, sem programador."],
      ["Uma página por produto", "Cada produto com endereço próprio, que ajuda a aparecer no Google para quem procura."],
    ],
    casos: [
      { nome: "Khaus Brindes", tag: "Brindes corporativos · no ar", txt: "Mais de 3.000 produtos com estoque do fornecedor por integração, simulador da logo no produto, preço por quantidade e prazo de produção. No painel, a Khaus define margens, destaques e o que aparece no site.", url: "https://khausbrindes.com.br/", img: "img/khaus-desk-1280.webp", set: "img/khaus-desk-640.webp 640w, img/khaus-desk-1280.webp 1280w" },
      { nome: "Grupo Larssen", tag: "Indústria madeireira · no ar", txt: "Cinco empresas num site só, catálogo de produtos com painel e romaneio de pedido no WhatsApp. O endereço antigo passou para o novo sem perder o Google nem os e-mails.", url: "https://grupolarssen.com.br/", img: "img/larssen-desk-1280.webp", set: "img/larssen-desk-640.webp 640w, img/larssen-desk-1280.webp 1280w" },
    ],
    notaCasos: "Sites reais, publicados e em uso. Pode abrir e navegar.",
    faq: [
      ["Preciso cadastrar todos os produtos na mão?", "Não necessariamente. Se o fornecedor tiver integração, os produtos entram sozinhos. Se for planilha, a gente importa. Na entrega, as suas informações já vão para o site sem custo a mais."],
      ["O cliente consegue comprar e pagar pelo site?", "O foco aqui é o orçamento pelo WhatsApp, que é como a maioria das empresas da região fecha venda. Se você precisa de pagamento online, isso entra no projeto."],
      ["Serve para indústria e distribuidora?", "Serve. O Grupo Larssen, por exemplo, reúne cinco empresas e manda o pedido como romaneio no WhatsApp."],
      ["Tenho site antigo. Perco o Google se trocar?", "Não, se a troca for bem feita. Fazemos o redirecionamento do endereço antigo para o novo e mantemos os e-mails funcionando."],
      ["A equipe consegue mudar preços?", "Sim, pelo painel, no computador ou no celular."],
    ],
  },
  {
    slug: "sistemas-sob-medida",
    menu: "Sistemas sob medida",
    title: "Sistemas sob medida e automação para empresas | MAJEX",
    desc: "Sistemas sob medida para empresas: financeiro, estoque, departamento pessoal, central de mensagens no WhatsApp, orçamentos com projeto em 3D e integrações. Tudo no navegador, no computador e no celular.",
    kicker: "Sistemas · automação · integrações",
    h1: "Sistemas sob medida que tiram o trabalho repetitivo da sua equipe.",
    lead: "A gente entende como a sua empresa trabalha hoje e transforma o que é repetitivo em sistema: menos planilha, menos retrabalho e a informação certa na hora certa. Roda no navegador, no computador e no celular, sem instalar nada.",
    msg: "Olá MAJEX! Vi a página de sistemas sob medida e quero conversar sobre um projeto.",
    hero: { desk: "img/sis-erp-fin-1280.webp", deskSet: "img/sis-erp-fin-1280.webp 1280w, img/sis-erp-fin-2560.webp 2560w", cel: null, host: "sistema de gestão", alt: "Tela de um sistema de gestão sob medida, módulo financeiro" },
    recursos: [
      ["Financeiro", "Contas a pagar e a receber, fluxo de caixa, conciliação bancária e aviso antes de vencer."],
      ["Estoque", "Entradas e saídas, estoque mínimo com aviso e transferência entre unidades."],
      ["Departamento pessoal", "Férias, exames e EPIs com alerta antes do prazo, e a folha lançada no financeiro."],
      ["Mensagens no WhatsApp", "Avisos e lembretes para muitos contatos, cada um com o próprio nome, no dia e na hora marcados."],
      ["Orçamento com projeto em 3D", "Entram as medidas, saem o 3D, o desenho técnico, a lista de materiais e o orçamento em PDF."],
      ["Integrações", "Conexão com fornecedores, planilhas, lojas e sistemas que você já usa, sem digitar duas vezes."],
    ],
    casos: [
      { nome: "Gestão por módulos", tag: "ERP sob medida", txt: "Financeiro, estoque e pessoal, cada um no seu módulo e conversando entre si: a venda baixa o estoque, a folha entra no financeiro e o sistema avisa antes de vencer conta, férias ou exame. Com uma ou várias unidades.", url: null, img: "img/sis-erp-est-1280.webp", set: "img/sis-erp-est-1280.webp 1280w, img/sis-erp-est-2560.webp 2560w" },
      { nome: "Central de mensagens", tag: "Comunicação · WhatsApp", txt: "Feito para uma instituição que precisava avisar centenas de associados sem passar o dia no celular. Escreve uma vez, cada pessoa recebe com o próprio nome, e os lembretes saem sozinhos.", url: null, img: "img/sis-wa-desk-1280.webp", set: "img/sis-wa-desk-640.webp 640w, img/sis-wa-desk-1280.webp 1280w" },
      { nome: "Projetos e orçamentos em 3D", tag: "Indústria · estruturas metálicas", txt: "Para uma serralheria que fazia todo orçamento no papel. Entram as medidas, saem o 3D da obra, o desenho técnico cotado, a lista de corte com os quilos de aço e o orçamento em PDF.", url: null, img: "img/sis-3d-desk-1280.webp", set: "img/sis-3d-desk-640.webp 640w, img/sis-3d-desk-1280.webp 1280w" },
    ],
    notaCasos: "Sistemas reais, mostrados com nomes genéricos para preservar os clientes.",
    faq: [
      ["Preciso instalar alguma coisa?", "Não. O sistema roda no navegador, no computador e no celular. É só entrar com o seu usuário."],
      ["E se eu já uso planilhas ou outro sistema?", "Melhor ainda: aproveitamos o que já existe. Importamos as planilhas e, quando o sistema atual permite, fazemos a integração para os dados conversarem."],
      ["Dá para começar pequeno?", "Dá. Começa pelo módulo que mais dói hoje e os outros se encaixam depois, quando você quiser."],
      ["Quanto custa?", "Depende do tamanho do processo. A gente conversa, entende como a equipe trabalha e manda uma proposta com escopo, prazo e valor fechados antes de começar."],
      ["Quanto tempo leva?", "Depende do tamanho. Na proposta já vai o prazo de cada etapa, e você acompanha o andamento."],
    ],
  },
  {
    slug: "criacao-de-sites-santa-rosa-rs",
    menu: "Santa Rosa e região",
    title: "Criação de sites em Santa Rosa e no noroeste do RS | MAJEX",
    desc: "Criação de sites e sistemas para empresas de Santa Rosa, Três de Maio, Horizontina, São Martinho, Santo Cristo, Giruá, Tuparendi, Ijuí, Panambi e Cruz Alta. Sites rápidos, no Google e com WhatsApp.",
    kicker: "Santa Rosa · Três de Maio · Horizontina · noroeste do RS",
    h1: "Criação de sites e sistemas em Santa Rosa e no noroeste do RS.",
    lead: "A MAJEX é de São Martinho e faz sites e sistemas para empresas da região: rápidos, no seu domínio, prontos para o Google e com o WhatsApp em todo lugar. Tudo combinado por WhatsApp, sem termo técnico e com prazo fechado antes de começar.",
    msg: "Olá MAJEX! Sou da região e quero um orçamento de site.",
    hero: { desk: "img/kiesel-desk-1280.webp", deskSet: "img/kiesel-desk-640.webp 640w, img/kiesel-desk-1280.webp 1280w", cel: "img/kiesel-cel-320.webp", host: "imobiliariakiesel.com.br", alt: "Site da Imobiliária Kiesel, de São Martinho/RS" },
    recursos: [
      ["Perto de você", "Empresa da região, que conhece o comércio daqui e responde no WhatsApp."],
      ["Aparece no Google", "Título, descrição, mapa do site e dados da empresa prontos, com a sua cidade onde importa."],
      ["Feito para o celular", "Testado do celular pequeno ao monitor grande, porque a maioria dos clientes chega pelo telefone."],
      ["WhatsApp em todo lugar", "O cliente fala com você em um toque, com a mensagem já escrita."],
      ["Domínio e e-mail próprios", "Registro do .com.br, e-mail profissional e publicação. Você não mexe em nada."],
      ["Sistemas também", "Financeiro, estoque, mensagens automáticas e orçamentos, quando o site não é o único problema."],
    ],
    casos: [
      { nome: "Imobiliária Kiesel", tag: "São Martinho/RS · no ar", txt: "Site próprio com filme de drone da cidade, catálogo com filtros, página para cada imóvel, simulador e painel para a equipe.", url: "https://www.imobiliariakiesel.com.br/", img: "img/kiesel-desk-1280.webp", set: "img/kiesel-desk-640.webp 640w, img/kiesel-desk-1280.webp 1280w" },
      { nome: "Grupo Larssen", tag: "Indústria madeireira · no ar", txt: "Cinco empresas num site só, catálogo com painel e pedido pelo WhatsApp, com o endereço antigo migrado sem perder o Google.", url: "https://grupolarssen.com.br/", img: "img/larssen-desk-1280.webp", set: "img/larssen-desk-640.webp 640w, img/larssen-desk-1280.webp 1280w" },
      { nome: "Khaus Brindes", tag: "Brindes corporativos · no ar", txt: "Mais de 3.000 produtos com estoque do fornecedor, preço por quantidade e orçamento pronto no WhatsApp.", url: "https://khausbrindes.com.br/", img: "img/khaus-desk-1280.webp", set: "img/khaus-desk-640.webp 640w, img/khaus-desk-1280.webp 1280w" },
    ],
    notaCasos: "Sites reais, publicados e em uso.",
    cidades: ["Santa Rosa", "São Martinho", "Horizontina", "Três de Maio", "Santo Cristo", "Giruá", "Tuparendi", "Ijuí", "Panambi", "Cruz Alta"],
    faq: [
      ["Vocês atendem só Santa Rosa?", "Não. A MAJEX atende todo o noroeste do RS, como Três de Maio, Horizontina, Santo Cristo, Giruá, Tuparendi, Ijuí, Panambi e Cruz Alta. Como tudo é online, também atende qualquer cidade do Brasil."],
      ["Preciso me deslocar para fazer o site?", "Não. A conversa, a aprovação do visual e os ajustes são feitos pelo WhatsApp, no seu tempo."],
      ["Meu site vai aparecer quando procurarem na minha cidade?", "O site sai preparado para o Google, com a cidade e os serviços nos lugares certos. Para aparecer no mapa, também orientamos o cadastro do Perfil da Empresa no Google, que é gratuito."],
      ["Quanto tempo leva?", "Na maioria dos casos, de 2 a 7 dias para um site, dependendo de quando chegam os textos e as fotos."],
      ["Quanto custa?", "Cada projeto tem o seu valor, combinado antes de começar, com proposta de escopo, prazo e preço fechados. O orçamento é gratuito."],
    ],
  },
];

// texto curto da imagem de compartilhamento (og/<slug>.jpg, feita por gerar-og.js)
const OG = {
  "sites-para-revenda-de-veiculos": { titulo: "Site para revenda de veículos", frase: "Estoque com fotos, busca pela parcela e WhatsApp em cada carro.", kicker: "Revenda · garagem", desk: "img/shot-1-1280.webp", cel: "img/shot-5-320.webp" },
  "sites-para-imobiliaria": { titulo: "Site para imobiliária", frase: "Catálogo com filtros, página para cada imóvel e painel da equipe.", kicker: "Imobiliária · corretor", desk: "img/kiesel-desk-1280.webp", cel: "img/kiesel-cel-320.webp" },
  "cardapio-digital-com-pedido-no-whatsapp": { titulo: "Cardápio digital com pedido no WhatsApp", frase: "Sem app e sem comissão por pedido.", kicker: "Lancheria · restaurante", desk: "img/shot-3-1280.webp", cel: "img/shot-7-360.webp" },
  "site-com-catalogo-e-orcamento-no-whatsapp": { titulo: "Catálogo e orçamento no WhatsApp", frase: "Preço por quantidade, painel e integração com fornecedor.", kicker: "Loja · indústria · brindes", desk: "img/khaus-desk-1280.webp", cel: "img/khaus-cel-320.webp" },
  "sistemas-sob-medida": { titulo: "Sistemas sob medida", frase: "Financeiro, estoque, pessoal, WhatsApp e orçamentos em 3D.", kicker: "Sistemas · automação", desk: "img/sis-erp-fin-1280.webp", cel: null },
  "criacao-de-sites-santa-rosa-rs": { titulo: "Sites em Santa Rosa e região", frase: "Sites e sistemas para empresas do noroeste do RS.", kicker: "Noroeste do RS", desk: "img/larssen-desk-1280.webp", cel: "img/kiesel-cel-320.webp" },
};

const ICONE = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><path d="M8.5 12.2l2.4 2.4 4.8-5"/></svg>';
const LOGO = '<svg class="logo" viewBox="0 0 48 48" aria-hidden="true"><defs><linearGradient id="mjxg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22E7CE"/><stop offset=".55" stop-color="#3FD6E8"/><stop offset="1" stop-color="#8B6BFF"/></linearGradient></defs><rect x="3" y="3" width="42" height="42" rx="13" fill="#0A0B12" stroke="url(#mjxg)" stroke-width="1.6"/><g stroke-linecap="round" stroke-width="4.4" fill="none"><path d="M17 16 L31 32" stroke="#8B6BFF" opacity=".85" transform="translate(2 -1)"/><path d="M31 16 L17 32" stroke="#8B6BFF" opacity=".85" transform="translate(2 -1)"/><path d="M17 16 L31 32" stroke="url(#mjxg)"/><path d="M31 16 L17 32" stroke="#22E7CE"/></g><circle cx="24" cy="24" r="1.7" fill="#EAFBF8"/></svg>';
const ZAPI = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.1.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.2-.2-.5-.3z"/></svg>';

// botão de WhatsApp que acompanha a rolagem; some quando o botão do fim da página aparece
function flutuante(msg) {
  return `<a class="zap-flutua" href="${zap(msg)}" target="_blank" rel="noopener" aria-label="Falar com a MAJEX no WhatsApp">${ZAPI}<span>Orçamento</span></a>
<script>(function(){ var f=document.querySelector('.zap-flutua'), alvos=document.querySelectorAll('.cta .btn-zap, .hero .btn-zap'); if(!f||!('IntersectionObserver' in window)) return; var vis=new Set();
  var io=new IntersectionObserver(function(es){ es.forEach(function(e){ e.isIntersecting? vis.add(e.target) : vis.delete(e.target); }); f.classList.toggle('some', vis.size>0); }); alvos.forEach(function(a){ io.observe(a); }); })();</script>`;
}

// página de erro (404.html): a Vercel serve sozinha para endereços que não existem
function pagina404() {
  const msg = "Olá MAJEX! Vim pelo site e quero um orçamento.";
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Página não encontrada | MAJEX Digital Solutions</title>
<meta name="robots" content="noindex">
<meta name="theme-color" content="#07080D">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="stylesheet" href="/css/paginas.css">
<script>try{var t=localStorage.getItem('majex-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}</script>
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};</script>
<script defer src="/_vercel/insights/script.js"></script>
<script defer src="/js/cliques.js"></script>
</head>
<body>
<header class="topo">
  <div class="wrap topo-in">
    <a class="marca" href="/" aria-label="MAJEX Digital Solutions, página inicial">${LOGO}<span><b>MAJEX</b><small>DIGITAL SOLUTIONS</small></span></a>
    <nav class="topo-nav" aria-label="Principal"><a href="/#portfolio">Portfólio</a><a href="/#sistemas">Sistemas</a><a href="/#faq">Dúvidas</a></nav>
    <a class="btn btn-zap btn-p" href="${zap(msg)}" target="_blank" rel="noopener">${ZAPI}<span>Orçamento</span></a>
  </div>
</header>
<main class="erro">
  <div class="wrap estreito">
    <p class="kicker">Erro 404 · página não encontrada</p>
    <h1>Esse endereço não existe, mas o seu site pode existir.</h1>
    <p class="lead">O link pode estar errado ou a página mudou de lugar. Escolha por onde continuar:</p>
    <div class="acoes"><a class="btn btn-sec" href="/">Ir para a página inicial</a><a class="btn btn-sec" href="/#portfolio">Ver o portfólio</a><a class="btn btn-zap" href="${zap(msg)}" target="_blank" rel="noopener">${ZAPI}<span>Falar no WhatsApp</span></a></div>
    <p class="rotulo erro-rot">Soluções por segmento</p>
    <ul class="erro-links">${PAGINAS.map((x) => `<li><a href="/${x.slug}/">${esc(x.menu)}<span aria-hidden="true">→</span></a></li>`).join("")}</ul>
  </div>
</main>
<footer class="rodape"><div class="wrap"><p>MAJEX Digital Solutions · São Martinho, RS · <a href="https://wa.me/${ZAP}" target="_blank" rel="noopener">(55) 99624-1177</a></p></div></footer>
</body>
</html>
`;
}

function pagina(P) {
  const url = `${SITE}/${P.slug}/`;
  const outras = PAGINAS.filter((x) => x.slug !== P.slug);
  const ld = [
    { "@context": "https://schema.org", "@type": "Service", name: P.h1.replace(/\.$/, ""), serviceType: P.menu, description: P.desc, url,
      provider: { "@type": "ProfessionalService", name: "MAJEX Digital Solutions", url: SITE + "/", telephone: "+55 55 99624-1177", address: { "@type": "PostalAddress", addressLocality: "São Martinho", addressRegion: "RS", addressCountry: "BR" } },
      areaServed: ["Santa Rosa", "São Martinho", "Horizontina", "Três de Maio", "Santo Cristo", "Giruá", "Tuparendi", "Ijuí", "Panambi", "Cruz Alta", "Noroeste do Rio Grande do Sul", "Brasil"] },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: SITE + "/" }, { "@type": "ListItem", position: 2, name: P.menu, item: url }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: P.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ];
  const H = P.hero;
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(P.title)}</title>
<meta name="description" content="${esc(P.desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(P.title)}">
<meta property="og:description" content="${esc(P.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/og/${P.slug}.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(OG[P.slug].titulo)} · MAJEX">
<meta name="twitter:image" content="${SITE}/og/${P.slug}.jpg">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="MAJEX Digital Solutions">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#07080D">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preload" href="/fonts/chakra-petch-700-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/manrope-400-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" as="image" href="/${H.desk}" fetchpriority="high">
<link rel="stylesheet" href="/css/paginas.css">
<script>try{var t=localStorage.getItem('majex-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}</script>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};</script>
<script defer src="/_vercel/insights/script.js"></script>
<script defer src="/js/cliques.js"></script>
</head>
<body>
<a class="pular" href="#conteudo">Pular para o conteúdo</a>
<header class="topo">
  <div class="wrap topo-in">
    <a class="marca" href="/" aria-label="MAJEX Digital Solutions, página inicial">${LOGO}<span><b>MAJEX</b><small>DIGITAL SOLUTIONS</small></span></a>
    <nav class="topo-nav" aria-label="Principal"><a href="/#portfolio">Portfólio</a><a href="/#sistemas">Sistemas</a><a href="/#faq">Dúvidas</a></nav>
    <a class="btn btn-zap btn-p" href="${zap(P.msg)}" target="_blank" rel="noopener">${ZAPI}<span>Orçamento</span></a>
  </div>
</header>
<main id="conteudo">
  <section class="hero">
    <div class="wrap hero-grid">
      <div class="hero-tx">
        <nav class="trilha" aria-label="Você está em"><a href="/">Início</a><span aria-hidden="true">/</span><span>${esc(P.menu)}</span></nav>
        <p class="kicker">${esc(P.kicker)}</p>
        <h1>${esc(P.h1)}</h1>
        <p class="lead">${esc(P.lead)}</p>
        <div class="acoes">
          <a class="btn btn-zap" href="${zap(P.msg)}" target="_blank" rel="noopener">${ZAPI}<span>Pedir orçamento no WhatsApp</span></a>
          <a class="btn btn-sec" href="#casos">Ver trabalhos</a>
        </div>
        <p class="miudo">Orçamento gratuito · valor e prazo combinados antes de começar</p>
      </div>
      <div class="hero-vis">
        <div class="janela"><div class="barra"><i></i><i></i><i></i><b>${esc(H.host)}</b></div><img src="/${H.desk}" srcset="${H.deskSet.split(", ").map((x) => "/" + x).join(", ")}" sizes="(max-width:900px) 92vw, 560px" width="1280" height="800" alt="${esc(H.alt)}" fetchpriority="high"></div>
        ${H.cel ? `<div class="cel"><img src="/${H.cel}" width="320" height="692" alt="" loading="lazy" decoding="async"></div>` : ""}
      </div>
    </div>
  </section>

  <section class="sec">
    <div class="wrap">
      <p class="rotulo">O que vem no projeto</p>
      <h2>Feito para vender, não só para enfeitar.</h2>
      <div class="grade">
        ${P.recursos.map(([t, d]) => `<article class="item">${ICONE}<h3>${esc(t)}</h3><p>${esc(d)}</p></article>`).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="sec sec-alt" id="casos">
    <div class="wrap">
      <p class="rotulo">Trabalhos</p>
      <h2>${P.casos.length > 1 ? "Projetos que já estão funcionando." : "Um projeto que já está funcionando."}</h2>
      <p class="sub">${esc(P.notaCasos)}</p>
      <div class="casos">
        ${P.casos.map((c) => `<article class="caso">
          <div class="caso-img"><img src="/${c.img}" srcset="${c.set.split(", ").map((x) => "/" + x).join(", ")}" sizes="(max-width:900px) 92vw, 600px" width="1280" height="800" alt="${esc(c.nome)}" loading="lazy" decoding="async"></div>
          <div class="caso-tx"><p class="tag">${esc(c.tag)}</p><h3>${esc(c.nome)}</h3><p>${esc(c.txt)}</p>${c.url ? `<a class="link" href="${c.url}" target="_blank" rel="noopener">Abrir o site ↗</a>` : ""}</div>
        </article>`).join("\n        ")}
      </div>
    </div>
  </section>
${P.cidades ? `
  <section class="sec">
    <div class="wrap">
      <p class="rotulo">Onde a MAJEX atende</p>
      <h2>Do noroeste do RS para qualquer cidade.</h2>
      <ul class="cidades">${P.cidades.map((c) => `<li>${esc(c)}</li>`).join("")}<li>e todo o Brasil, online</li></ul>
      <p class="sub">Soluções por segmento: ${PAGINAS.filter((x) => x.slug !== P.slug).map((x) => `<a href="/${x.slug}/">${esc(x.menu)}</a>`).join(" · ")}</p>
    </div>
  </section>
` : ""}
  <section class="sec">
    <div class="wrap">
      <p class="rotulo">Como funciona</p>
      <h2>Da conversa ao ar em 4 passos.</h2>
      <ol class="passos">
        ${PASSOS.map(([t, d], i) => `<li><span>0${i + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join("\n        ")}
      </ol>
    </div>
  </section>

  <section class="sec sec-alt">
    <div class="wrap estreito">
      <p class="rotulo">Dúvidas</p>
      <h2>Perguntas frequentes</h2>
      <div class="faq">
        ${P.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="cta">
    <div class="wrap cta-in">
      <h2>Vamos conversar sobre o seu projeto?</h2>
      <p>Me conta como a sua empresa trabalha hoje. Eu te mando uma proposta com escopo, prazo e valor fechados, sem compromisso.</p>
      <a class="btn btn-zap" href="${zap(P.msg)}" target="_blank" rel="noopener">${ZAPI}<span>Chamar no WhatsApp</span></a>
    </div>
  </section>
</main>
<footer class="rodape">
  <div class="wrap">
    <nav class="rod-links" aria-label="Soluções"><a href="/">Página inicial</a>${outras.map((x) => `<a href="/${x.slug}/">${esc(x.menu)}</a>`).join("")}</nav>
    <p>MAJEX Digital Solutions · São Martinho, RS · <a href="https://wa.me/${ZAP}" target="_blank" rel="noopener">(55) 99624-1177</a> · <a href="https://www.instagram.com/majexds/" target="_blank" rel="noopener">Instagram</a></p>
    <p class="miudo">Atendemos Santa Rosa, São Martinho, Horizontina, Três de Maio, Santo Cristo, Giruá, Tuparendi, Ijuí, Panambi, Cruz Alta e todo o noroeste do RS. Este site conta visitas de forma anônima, sem cookies. <a href="/#privacidade">Política de privacidade</a></p>
  </div>
</footer>
${flutuante(P.msg)}
</body>
</html>
`;
}

for (const P of PAGINAS) {
  const d = path.join(RAIZ, P.slug); fs.mkdirSync(d, { recursive: true });
  fs.writeFileSync(path.join(d, "index.html"), pagina(P));
}
// estilo: fontes usadas (só latin/latin-ext) + base
const FONTES = fs.readFileSync(path.join(RAIZ, "index.html"), "utf8").match(/@font-face\{font-family:'(Chakra Petch|Manrope|JetBrains Mono)'[^}]*\}/g)
  .filter((f) => !/Chakra Petch';font-style:normal;font-weight:500|JetBrains Mono';font-style:normal;font-weight:700/.test(f));
fs.mkdirSync(path.join(RAIZ, "css"), { recursive: true });
fs.writeFileSync(path.join(RAIZ, "css", "paginas.css"), FONTES.join("\n") + "\n" + fs.readFileSync(path.join(__dirname, "paginas-base.css"), "utf8"));
// sitemap: página inicial + as páginas geradas
const urls = [`${SITE}/`].concat(PAGINAS.map((P) => `${SITE}/${P.slug}/`));
fs.writeFileSync(path.join(RAIZ, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` + urls.map((u, i) => `  <url><loc>${u}</loc><lastmod>${HOJE}</lastmod><priority>${i ? "0.8" : "1.0"}</priority></url>`).join("\n") + "\n</urlset>\n");
fs.writeFileSync(path.join(RAIZ, "404.html"), pagina404());
// lista para o rodapé da página inicial e para as imagens de compartilhamento
fs.writeFileSync(path.join(__dirname, "paginas.json"), JSON.stringify(PAGINAS.map((P) => ({ slug: P.slug, menu: P.menu, og: OG[P.slug] })), null, 1));
console.log("geradas:", PAGINAS.map((P) => "/" + P.slug + "/").join(" "));
