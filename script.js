

/* Mobile Menu */
var linha2 = document.querySelector('.linhaMenu2');
var linha1 = document.querySelector('.linhaMenu1');
var linha3 = document.querySelector('.linhaMenu3');
var menu = document.querySelector('.menu');
var btnGit = document.querySelector('.iconeGit img');
var btnWpp = document.querySelector('.iconeWpp img');
var btnLinkedin = document.querySelector('.iconeLinkedin img');
var fundoIconesDark = document.querySelector('.fundoIconesDark')



menu.addEventListener("click", () => {
	

	
	linha2.classList.toggle('transforma');
	linha1.classList.toggle('transforma');
	linha3.classList.toggle('transforma');
	menu.classList.toggle('aumentaMenu');	
	btnGit.classList.toggle('movimentaBotaoGit');
	btnWpp.classList.toggle('movimentaBotaoWpp');
	btnLinkedin.classList.toggle('movimentaBotaoLinkedin');
	fundoIconesDark.classList.toggle('mudaMenuFundoIconesDark')
	
	
		


})



/* ---- DarkMode ----*/
var lampadaAcesa = document.querySelector('.lampadaAcesa')
var lampadaApagada = document.querySelector('.lampadaApagada')
var perfil = document.querySelector('.perfilSessaoUm')
var perfilPB = document.querySelector('.perfilPB')
var bg = document.querySelector('main')
var tituloSessao1 = document.querySelector('.tituloSessao1 h2')
var fundoIconesDark=document.querySelector('.fundoIconesDark')
var sobreTitulo = document.querySelector('.sobre h2')
var sobreParagrafo = document.querySelector('.sobre p')
var projetosTitulo = document.querySelector('.projetos h2')
var habilidadesTitulo = document.querySelector('.habilidades h2')
var iconeMeio = document.querySelectorAll('.iconeMeio h1')
var iconeMeioFonteBranca = document.querySelectorAll('.iconeMeioFonteBranca h1')


function darkmode(){
	
	fundoIconesDark.classList.add('movimentaFundoIconesDark');
	lampadaAcesa.style.visibility='hidden';
	lampadaApagada.style.visibility='visible';
	perfil.style.display='none';
	perfilPB.style.display='block';
	bg.style.background='linear-gradient(to bottom ,#272c4f 0 40%  , #190c30 50% 100%)';
	tituloSessao1.style.color='#fce6a2';
	sobreTitulo.style.color='#fce6a2';
	sobreParagrafo.style.color='#fce6a2';
	textoCharada.style.color='#fce6a2';
	projetosTitulo.style.color='#fce6a2';
	habilidadesTitulo.style.color='#fce6a2';
	linha1.classList.add('mudaCorLinha');
	linha2.classList.add('mudaCorLinha');
	linha3.classList.add('mudaCorLinha');
	hab1.classList.add('habilidadesDarkMode');
	hab2.classList.add('habilidadesDarkMode');
	hab3.classList.add('habilidadesDarkMode');
	hab4.classList.add('habilidadesDarkMode');
	hab5.classList.add('habilidadesDarkMode');
	hab6.classList.add('habilidadesDarkMode');
	textoHabilidades.classList.add('habilidadesDarkMode');
	menu.style.opacity='80%'
	for (let i = 0; i < iconeMeio.length; i++) {
		
		iconeMeio[i].style.display='none';
		iconeMeioFonteBranca[i].style.display='inline-block';
		
	}
	
}

function lightmode(){
	fundoIconesDark.classList.remove('movimentaFundoIconesDark');
	lampadaAcesa.style.visibility='visible';
	lampadaApagada.style.visibility='hidden';
	perfil.style.display='block';
	perfilPB.style.display='none';
	bg.style.background='linear-gradient(to bottom ,#FFD369 0 5%  , #fce6a2 12% 100% )';
	tituloSessao1.style.color='#2D2D2D'
	sobreTitulo.style.color='#333333';
	sobreParagrafo.style.color='#333333';
	textoCharada.style.color='#333333';
	projetosTitulo.style.color='#2D2D2D';
	habilidadesTitulo.style.color='#2D2D2D';
	linha1.classList.remove('mudaCorLinha');
	linha2.classList.remove('mudaCorLinha');
	linha3.classList.remove('mudaCorLinha');
	hab1.classList.remove('habilidadesDarkMode');
	hab2.classList.remove('habilidadesDarkMode');
	hab3.classList.remove('habilidadesDarkMode');
	hab4.classList.remove('habilidadesDarkMode');
	hab5.classList.remove('habilidadesDarkMode');
	hab6.classList.remove('habilidadesDarkMode');
	textoHabilidades.classList.remove('habilidadesDarkMode');
	menu.style.opacity='50%'
	for (let i = 0; i < iconeMeio.length; i++) {
		
		iconeMeio[i].style.display='block';
		iconeMeioFonteBranca[i].style.display='none';
		
	}



}

/* ----- Charada -------*/
var balao = document.querySelector('.balao')
var modoSecreto =document.querySelector('.modoSecreto')
var interrogacao = document.querySelector('.interrogacao')
var textoCharada = document.querySelector('.textoCharada')
var entradaUsuario = document.querySelector('.entradaUsuario')

var btnCharada = document.querySelector('.btnCharada')
var downloadIcon = document.querySelector('.downloadIcon')
var flag =0;

	function mostra(){
			if(flag=='0'){
				
				flag++;
				
				balao.classList.add('opacidadeFull');
				modoSecreto.classList.add('opacidadeFull');
				
				
			
			
			var typedModoSecreto = new Typed(".modoSecreto", {
				
				strings: [" ^1000 <br>[MODO SECRETO ATIVADO] ^500",". EXPERIMENTO MENTAL <br><br><br>  . . . INICIADO . . . ^500","<br><br> . . . RESPONDA:^500"],
				
				typeSpeed: 30,
				
				backSpeed: 0,
				
				loop: false,
				
				loopCount: 1,

				showCursor: false,
				
				onComplete: (self)=>{
					
					interrogacao.classList.add('opacidadeInterrogacao');
					sobreParagrafo.classList.add('opacidadeSobreParagrafo');

					textoCharada.classList.add('opacidadeFull');
					var typedTextoCharada = new Typed(".textoCharada", {
					
					strings: [" ^500 Alguns dizem que já existo, outros que não.<br><br> Posso ser revolução ou destruição. <br><br> Sou um protótipo de algo que todos já possuem. <br><br>Quem sou eu?"],
					
					typeSpeed: 10,
					
					backSpeed: 0,
					
					loop: false	,	

					showCursor: false,
					
					onComplete: (self)=>{
						
						typedModoSecreto.destroy();

						entradaUsuario.style.display='inline-block';
						btnCharada.style.display='inline-block';
						
						setTimeout(() => {
							entradaUsuario.classList.add('opacidadeFull');
							
							btnCharada.classList.add('opacidadeFull');
							
							
						}, 1000);

					}
					
				})

				}
				
			})
			
			
			
			
			
		
			}

		}
	function resposta(){
		
		entradaUsuario.value = entradaUsuario.value.toUpperCase();
		if(entradaUsuario.value=="INTELIGÊNCIA ARTIFICIAL" || entradaUsuario.value=="INTELIGENCIA ARTIFICIAL" || entradaUsuario.value=="IA"){
			
			var typed = new Typed(".modoSecreto", {

				strings: ["^500 = > ACERTOU! ^1000", "^500 DOWNLOAD DO CURRÍCULO <br><br> . . . LIBERADO . . . ^300"],
			
				typeSpeed: 50,
			
				backSpeed: 0,
			
				loop: false,

				loopCount: 1,

				showCursor: false,

				onComplete: (self)=>{
					downloadIcon.style.display='inline-block';
					setTimeout(() => {
						
						downloadIcon.classList.add('opacidadeFull');
					}, 500);
					typed.destroy();
				
				

			}
				

				
			})

			

		}
		else{
			var typed = new Typed(".modoSecreto", {

				strings: ["^1000 <br><br>  = >  EROU!! ^5000"],
			
				typeSpeed: 50,
			
				backSpeed: 0,
			
				loop: false,

				showCursor: false,

				onComplete: (self)=>{
					typed.destroy();
			}
			})
		}
	}



function transformaIconeDl(){
	setTimeout(() => {
	interrogacao.classList.remove('opacidadeInterrogacao');
	textoCharada.classList.remove('opacidadeFull');
	btnCharada.style.display='none';
	entradaUsuario.style.display='none';
	
		sobreParagrafo.classList.remove('opacidadeSobreParagrafo');
		downloadIcon.classList.add('movimentaDownloadIcon');
		balao.classList.remove('opacidadeFull');
		modoSecreto.classList.remove('opacidadeFull');
		interrogacao.classList.remove('opacidadeInterrogacao');
		sobreParagrafo.classList.remove('opacidadeSobreParagrafo');
	}, 2000);
}
	



/* HABILIDADES 

Criado uma funcao mouseover e mouseout para controle do cursor, timeOuts criados 
utilização da classe de opacidade com transição.

*/

var hab1 = document.querySelector('.hab-1')
var hab2 = document.querySelector('.hab-2')
var hab3 = document.querySelector('.hab-3')
var hab4 = document.querySelector('.hab-4')
var hab5 = document.querySelector('.hab-5')
var hab6 = document.querySelector('.hab-6')
var textoHabilidades = document.querySelector('.textoHabilidades')

hab1.addEventListener('mouseover',()=>{
	textoHabilidades.classList.add('opacidadeZero');
	
	setTimeout(() => {
		
		textoHabilidades.classList.remove('opacidadeZero');
		textoHabilidades.innerHTML='Aprendi durante meu tecnólogo. Hoje possuo um projeto de calculadora nesta língua';
		
	}, 300);
})
hab1.addEventListener('mouseout',()=>{

	textoHabilidades.classList.add('opacidadeZero');
setTimeout(() => {
	textoHabilidades.classList.remove('opacidadeZero');
	textoHabilidades.innerHTML='Linguagens e FrameWorks  que tenho contato';
}, 300);
})

hab2.addEventListener('mouseover',()=>{
	textoHabilidades.classList.add('opacidadeZero');
	setTimeout(() => {
		textoHabilidades.classList.remove('opacidadeZero');
		textoHabilidades.innerHTML='Este site é fruto dos meus estudos nessas 3 linguagens. Estou sempre estudando para integrar mais funcionalidades. ';
		
	}, 300);
})
hab2.addEventListener('mouseout',()=>{

	textoHabilidades.classList.add('opacidadeZero');
setTimeout(() => {
	textoHabilidades.classList.remove('opacidadeZero');
	textoHabilidades.innerHTML='Linguagens e FrameWorks que tenho contato';
}, 300);
})

hab3.addEventListener('mouseover',()=>{
	textoHabilidades.classList.add('opacidadeZero');
	setTimeout(() => {
		textoHabilidades.classList.remove('opacidadeZero');
		textoHabilidades.innerHTML='Meu primeiro contato com programação foi através desta, onde aprendi os conceitos basilares.';
		
	}, 300);
})
hab3.addEventListener('mouseout',()=>{

	textoHabilidades.classList.add('opacidadeZero');
setTimeout(() => {
	textoHabilidades.classList.remove('opacidadeZero');
	textoHabilidades.innerHTML='Linguagens e FrameWorks que tenho contato';
}, 300);
})

hab4.addEventListener('mouseover',()=>{
	textoHabilidades.classList.add('opacidadeZero');
	setTimeout(() => {
		textoHabilidades.classList.remove('opacidadeZero');
		textoHabilidades.innerHTML='Iniciei meu contato dentro de  sala onde construí meu primeiro banco. Prentendo elaborar um projeto no futuro';
		
	}, 300);
})
hab4.addEventListener('mouseout',()=>{

	textoHabilidades.classList.add('opacidadeZero');
setTimeout(() => {
	textoHabilidades.classList.remove('opacidadeZero');
	textoHabilidades.innerHTML='Linguagens e FrameWorks que tenho contato';
}, 300);
})

hab5.addEventListener('mouseover',()=>{
	textoHabilidades.classList.add('opacidadeZero');
	setTimeout(() => {
		textoHabilidades.classList.remove('opacidadeZero');
		textoHabilidades.innerHTML='Aprendi bastante com um curso do alura. Hoje faço uso diário da plataforma';
		
	}, 300);
})
hab5.addEventListener('mouseout',()=>{

	textoHabilidades.classList.add('opacidadeZero');
setTimeout(() => {
	textoHabilidades.classList.remove('opacidadeZero');
	textoHabilidades.innerHTML='Linguagens e FrameWorks que tenho contato';
}, 300);
})

hab6.addEventListener('mouseover',()=>{
	textoHabilidades.classList.add('opacidadeZero');
	setTimeout(() => {
		textoHabilidades.classList.remove('opacidadeZero');
		textoHabilidades.innerHTML='Conheci a Xamarin pela vontade de desenvolver meu primeiro app em C#, logo adicionarei ao site.';
		
	}, 300);
})
hab6.addEventListener('mouseout',()=>{

	textoHabilidades.classList.add('opacidadeZero');
setTimeout(() => {
	textoHabilidades.classList.remove('opacidadeZero');
	textoHabilidades.innerHTML='Linguagens e FrameWorks que tenho contato';
}, 300);
})

	/* ---- Scroll smooth reveal ---- */
window.sr = ScrollReveal({reset:false});


ScrollReveal().reveal('.tituloSessao1',{

	distance: '50px',
	duration: 2000,

	delay: 50
});
ScrollReveal().reveal('.perfilSessaoUm',{
	
	distance: '50px',
	duration: 2000,

	delay: 300
});
ScrollReveal().reveal('.sobre',{
	
	distance: '50px',
	duration: 2000,

	delay: 50
});
ScrollReveal().reveal('.projetos',{
	
	distance: '50px',
	duration: 2000,

	delay: 50
});
ScrollReveal().reveal('.habilidades',{
	distance: '50px',
	duration: 2000,

	delay: 50
});


ScrollReveal().reveal('.iconeMeio',{
	distance: '50px',
	duration: 2000,

	delay: 50
});

/* Text typing Effect */


var typed = new Typed(".auto-type", {

	strings: ["BARBUTO" ," ROMANELLI", "DEV."],

	typeSpeed: 130,

	backSpeed: 100,

	loop: true

	
})