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
	fundoIconesDark.classList.toggle('mudaFundoIconesDark')
	
		


})



/* ---- DarkMode ----*/
var lampadaAcesa = document.querySelector('.lampadaAcesa')
var lampadaApagada = document.querySelector('.lampadaApagada')
var perfil = document.querySelector('.perfilSessaoUm')
var bg = document.querySelector('main')
var tituloSessao1 = document.querySelector('.tituloSessao1 h2')
var fundoIconesDark=document.querySelector('.fundoIconesDark')
var sobreTitulo = document.querySelector('.sobre h2')
var sobreParagrafo = document.querySelector('.sobre p')
var projetosTitulo = document.querySelector('.projetos h2')
var habilidadesTitulo = document.querySelector('.habilidades h2')

function darkmode(){
	
	fundoIconesDark.classList.add('movimentaFundoIconesDark');
	lampadaAcesa.style.visibility='hidden';
	lampadaApagada.style.visibility='visible';
	perfil.style.visibility='hidden';
	bg.style.background='linear-gradient(to bottom ,#272c4f 0 40%  , #190c30 50% 100%)';
	tituloSessao1.style.color='#fce6a2';
	sobreTitulo.style.color='#fce6a2';
	sobreParagrafo.style.color='#fce6a2';
	projetosTitulo.style.color='#fce6a2';
	habilidadesTitulo.style.color='#fce6a2';
	linha1.classList.add('mudaCorLinha');
	linha2.classList.add('mudaCorLinha');
	linha3.classList.add('mudaCorLinha');

	

	
}
function lightmode(){
	fundoIconesDark.classList.remove('movimentaFundoIconesDark');
	lampadaAcesa.style.visibility='visible';
	lampadaApagada.style.visibility='hidden';
	perfil.style.visibility='visible';
	bg.style.background='linear-gradient(to bottom ,#FFD369 0 5%  , #fce6a2 12% 100% )';
	tituloSessao1.style.color='#2D2D2D'
	sobreTitulo.style.color='#333333';
	sobreParagrafo.style.color='#333333';
	projetosTitulo.style.color='#2D2D2D';
	habilidadesTitulo.style.color='#2D2D2D';
	linha1.classList.remove('mudaCorLinha');
	linha2.classList.remove('mudaCorLinha');
	linha3.classList.remove('mudaCorLinha');



}

/* ----- Balao -------*/
var balao = document.querySelector('.balao')


	function mostra(){
		balao.style.visibility= 'visible';
		
	}

window.sr = ScrollReveal({reset:false});

/* ---- Scroll smooth reveal ---- */

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

