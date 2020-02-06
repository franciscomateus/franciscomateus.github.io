// ON SCROLL

window.onscroll = function() { onScroll() };

function onScroll () {

    if (document.body.scrollTop >= 298 || document.documentElement.scrollTop >= 298) {

        document.getElementById('goToTop').style.bottom = "15px";

    } else {

        document.getElementById('goToTop').style.bottom = "-75px";

    }
}

// TRANSLATION

var current_language = 'en';

function changeLanguage () {

	current_language == 'pt' ? current_language = 'en' : current_language = 'pt';

	// TRANSLATE BUTTON
	document.getElementById('translateButton').innerHTML = translateButton[current_language];

	// PAGE TITLE
	document.getElementById('pageTitle').innerHTML = pageTitle[current_language];

	// SUBTITLE UNDER NAME
	document.getElementById('subtitle').innerHTML = subtitle[current_language];

	// TITLES 
	document.getElementById('aboutTitle').innerHTML = aboutTitle[current_language];
	document.getElementById('technologiesTitle').innerHTML = technologiesTitle[current_language];
	document.getElementById('projectsTitle').innerHTML = projectsTitle[current_language];

	// BUTTONS
	document.getElementById('aboutTitle_btn').innerHTML = aboutTitle[current_language];
	document.getElementById('technologiesTitle_btn').innerHTML = technologiesTitle[current_language];
	document.getElementById('projectsTitle_btn').innerHTML = projectsTitle[current_language];
	document.getElementById('contactTitle_btn').innerHTML = contactTitle[current_language];

	// ABOUT
	document.getElementById('textAbout').innerHTML = textAbout[current_language];

	// TECHNOLOGIES
	document.getElementById('textTechnologies').innerHTML = textTechnologies[current_language];

	// PROJECTS

	// myMarket
	document.getElementById('myMarketText').innerHTML = myMarketText[current_language];
	document.getElementById('myMarketStatus').innerHTML = myMarketStatus[current_language];
	document.getElementById('myMarket_modalText_1').innerHTML = myMarket_modalText_1[current_language];

	// RealStand
	document.getElementById('realstandText').innerHTML = realstandText[current_language];
	document.getElementById('realStand_modalText_1').innerHTML = realStand_modalText_1[current_language];
	document.getElementById('realStand_modalText_2').innerHTML = realStand_modalText_2[current_language];
	document.getElementById('realStand_modalText_3').innerHTML = realStand_modalText_3[current_language];
	document.getElementById('realStand_modalText_4').innerHTML = realStand_modalText_4[current_language];
	document.getElementById('realStand_modalText_5').innerHTML = realStand_modalText_5[current_language];

	// GoFish!
	document.getElementById('goFishText').innerHTML = goFishText[current_language];
	document.getElementById('goFish_modalText_1').innerHTML = goFish_modalText_1[current_language];
	document.getElementById('goFish_modalText_2').innerHTML = goFish_modalText_2[current_language];
	document.getElementById('goFish_modalText_3').innerHTML = goFish_modalText_3[current_language];
	document.getElementById('goFish_modalText_4').innerHTML = goFish_modalText_4[current_language];
	document.getElementById('goFish_modalText_5').innerHTML = goFish_modalText_5[current_language];
	document.getElementById('goFish_modalText_6').innerHTML = goFish_modalText_6[current_language];

	// Moviyo
	document.getElementById('moviyoText').innerHTML = moviyoText[current_language];
	document.getElementById('moviyo_modalText_1').innerHTML = moviyo_modalText_1[current_language];
	document.getElementById('moviyo_modalText_2').innerHTML = moviyo_modalText_2[current_language];
	document.getElementById('moviyo_modalText_3').innerHTML = moviyo_modalText_3[current_language];
	document.getElementById('moviyo_modalText_4').innerHTML = moviyo_modalText_4[current_language];

}

// TRANSLATE BUTTON
var translateButton = [];
translateButton['pt'] = 'Translate To English';
translateButton['en'] = 'Traduzir para Português';

// PAGE TITLE
var pageTitle = [];
pageTitle['pt'] = 'Francisco Mateus | Portefólio';
pageTitle['en'] = 'Francisco Mateus | Portfolio';


// SUBTITLE UNDER NAME
var subtitle = [];
subtitle['pt'] = 'Curso Técnico Superior Profissional em Programação de Sistemas de Informação | Politécnico de Leiria';
subtitle['en'] = 'Technical Course in Programming of Information Systems | Polytechnic of Leiria';

// TITLES
var aboutTitle = [];
aboutTitle['pt'] = 'Sobre';
aboutTitle['en'] = 'About';

var technologiesTitle = [];
technologiesTitle['pt'] = 'Tecnologias';
technologiesTitle['en'] = 'Technologies';

var projectsTitle = [];
projectsTitle['pt'] = 'Projetos';
projectsTitle['en'] = 'Projects';

var contactTitle = [];
contactTitle['pt'] = 'Contacto';
contactTitle['en'] = 'Contact';

// ABOUT
var textAbout = [];
textAbout['pt'] = 'Olá, eu sou o Francisco, e frequento atualmente o segundo e último ano do CTeSP em Programação de Sistemas de Informação,'
+ ' e interesso-me especialmente por desenvolvimento Web. Gosto de novos desafios e de aprender novas tecnologias, ferramentas e metodologias'
+ ' a fim de melhor tanto o processo de desenvolvimento, como o produto a desenvolver.';
textAbout['en'] = 'Hi, I\'m Francisco, and I currently attend the second and last year of the Technical Course in Programming of Information Systems,'
+ ' I\'m especially interested in Web Development. I like new challenges and to learn new technologies, tools and methodologies to subsequently improve'
+ ' both the final product, as the whole development process.'

// TECHNOLOGIES
var textTechnologies = [];
textTechnologies['pt'] = 'Tecnologias com as quais já trabalhei e/ou trabalho atualmente.';
textTechnologies['en'] = 'Technologies that I\'m working with and/or have worked with in the past.';

// PROJECTS

// myMarket
var myMarketText = [];
myMarketText['pt'] = 'Desenvolvimento de Website de comércio online, com dois colegas. Mais informação assim que o projeto estiver desenvolvido.';
myMarketText['en'] = 'Development of a e-commerce Website, with two colleagues. More info when the Website is fully developed.';

var myMarketStatus = [];
myMarketStatus['pt'] = 'Em Desenvolvimento';
myMarketStatus['en'] = 'In Development';

var myMarket_modalText_1 = [];
myMarket_modalText_1['pt'] = 'Imagens a disponibilizar assim que seja possível.';
myMarket_modalText_1['en'] = 'Images to be made available as soon as possible.';

// RealStand
var realstandText = [];
realstandText['pt'] = 'Desenvolvimento de software em C# .NET, em conjunto com um colega, de um sistema de gestão de um stand de vendas, alugueres e oficina de carros, no âmbito da cadeira de Desenvolvimento de Aplicações. <br><br><i>(Para mais informação clicar na imagem)</i>';
realstandText['en']  = 'Software development in C# .NET, with one colleague, of a car stand, car renting and car workshop management system, for the Applications Development class. <br><br><i>(For more info click on the image)</i>';

var realStand_modalText_1 = [];
realStand_modalText_1['pt'] = 'Menu inicial, inclui ainda algumas estatísticas.';
realStand_modalText_1['en'] = 'Home menu, also includes some statistics.';

var realStand_modalText_2 = [];
realStand_modalText_2['pt'] = 'Gestão de Clientes, para depois seream lhes associados vendas, alugueres e serviços na oficina.';
realStand_modalText_2['en']= 'Clients Management, to be associated with sales, rents and services in the workshop. You can also generate invoices to a PDF file';

var realStand_modalText_3 = [];
realStand_modalText_3['pt'] = 'Gestão de Oficina, gerir os serviços e parcelas de um serviço aplicado a um carro de um cliente na oficina. Dá ainda para gerar faturas para PDF.';
realStand_modalText_3['en'] = 'Workshop Management, managing the services and installments of a service applied to a customer\'s car in the workshop.';

var realStand_modalText_4 = [];
realStand_modalText_4['pt'] = 'Gestão de Alugueres, gerir os carros disponíveis para alugar, os alugueres ativos e passados. Dá ainda para gerar faturas para PDF.';
realStand_modalText_4['en'] = 'Rental Management, managing the cars available for rent, active and past leases. You can also generate invoices to a PDF file';

var realStand_modalText_5 = [];
realStand_modalText_5['pt'] = 'Gestão de Vendas, gerir os carros disponíveis para vender e gerir as vendas realizadas aos clientes. Dá ainda para gerar faturas para PDF.';
realStand_modalText_5['en'] = 'Sales Management, manage the cars available to sell and also manage past sales. You can also generate invoices to a PDF file.';

// GoFish!
var goFishText = [];
goFishText['pt'] = 'Desenvolvimento de um Website em PHP com uma framework interna com o padrão MVC (WebLogic MVC), no âmbito da cadeira de Programação para a Web - Servidor, em conjunto com dois colegas, que permite jogar o jogo do peixinho aos jogadores registados, e ainda possui um back office para a gestão dos mesmos. <br><br><i>(Para mais informação clicar na imagem)</i>';
goFishText['en'] = 'Development of a PHP Website with an in-house MVC based framework (WebLogic MVC), for the Web Programming - Server class, with two colleagues, which allows to play the game go fish to registered players, and even has a back office to manage the players accounts. <br><br><i>(For more info click on the image)</i>';

var goFish_modalText_1 = [];
goFish_modalText_1['pt'] = 'Página inicial com login realizado.';
goFish_modalText_1['en'] = 'Initial page, for a logged in user';

var goFish_modalText_2 = [];
goFish_modalText_2['pt'] = 'Top 10 de jogadores com mais pontos.';
goFish_modalText_2['en'] = 'Top 10 players with the most points.';

var goFish_modalText_3 = [];
goFish_modalText_3['pt'] = 'No back office, opção para gerir utilizadores (podendo bloquear o acesso, fazendo com que não possam realizar login).';
goFish_modalText_3['en'] = 'Back office, option to manage users (where you can block their access, making them unable to login).';

var goFish_modalText_4 = [];
goFish_modalText_4['pt'] = 'No back office, opções para configurar o jogo em como irá aparecer a imagem em jogo e o número de cartas inicial.';
goFish_modalText_4['en'] = 'Back office, options to choose the cards apparence and the initial number of cards.';

var goFish_modalText_5 = [];
goFish_modalText_5['pt'] = 'Durante um jogo de peixinho.';
goFish_modalText_5['en'] = 'During a go fish game.';

var goFish_modalText_6 = [];
goFish_modalText_6['pt'] = 'Final de um jogo de peixinho.';
goFish_modalText_6['en'] = 'End of a go fish game.';

// Moviyo
var moviyoText = [];
moviyoText['pt'] = 'Desenvolvimento de Website de gestão de filmes (adicionar filmes aos favoritos, a ver ou vistos) no âmbito da cadeira de Programação Web - Cliente, em conjunto com dois colegas, com HTML, CSS, JavaScript, Bootstrap e jQuery. Recorrendo a API REST (The Movie DB) para obtenção de conteúdos. <br><br><i>(Para mais informação clicar na imagem)</i>';
moviyoText['en'] = 'Development of a movie management Website (add movies to a wishlist, to a currently watching list or a seen list), for the Web Programming - Client class, with two colleagues, with HTML, CSS, JavaScript, Bootstrap e jQuery. Using a REST API (The Movie DB) to obtain content. <br><br><i>(For more info click on the image)</i>';

var moviyo_modalText_1 = [];
moviyo_modalText_1['pt'] = 'Página inicial, em que são mostrados os filmes em destaque. Tendo ainda o menu lateral (aberta) para poder navegar no Website.';
moviyo_modalText_1['en'] = 'Initial page, where are shown featured movies. Having the side menu (open) to navigate the website.';

var moviyo_modalText_2 = [];
moviyo_modalText_2['pt'] = 'Listagem de filmes, onde se pode fazer pesquisa baseada em alguns parâmetros à escolha, adicionar filmes a listagem de a ver, vistos, ou para ver.';
moviyo_modalText_2['en'] = 'Movie list, where you can search based on some parameters to choose from, add movie to a currently watching list, wishlist, or the seen list.';

var moviyo_modalText_3 = [];
moviyo_modalText_3['pt'] = 'Detalhes de um filme (Parte 1/2)';
moviyo_modalText_3['en'] = 'Movie details (Part 1/2)';

var moviyo_modalText_4 = [];
moviyo_modalText_4['pt'] = 'Detalhes de um filme (Parte 2/2)';
moviyo_modalText_4['en'] = 'Movie details (Part 2/2)';

changeLanguage();