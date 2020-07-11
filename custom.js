// JavaScript Document
$(document).ready(function(){

    $("header").sticky({topSpacing:0});
	
	$('.the-page').prepend('<header><div class="container"><div class="row"><div class="col-3"><i onclick="openNav()" class="bx bx-menu-alt-left"></i></div><div class="col-6"><a href="index.html"><img src="img/logotipo.png" alt="" /></a></div><div class="col-3"><a href="minha-conta.html"><i class="bx bxs-user-circle"></i></a></div></div></div></header><div class="container"><div class="row"><div class="col-10"><form action="pesquisar.html" method="get"><input type="text" placeholder="Pesquisar" class="search-top" /></form></div><div class="col-2"><i class="bx bx-barcode" id="barcode" ></i></div></div></div>');
	
	$('.the-page').append('<div id="mySidenav" class="sidenav"><a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><div class="row"><div class="col-12 user-dsk"><img src="img/user-dummy-pic.png" alt="" />	<a href="minha-conta.html">Entrar | Cadastre-se</a>	</div>	<div class="col-12 side-menu"><h3>MENU</h3>	<a href="index.html"><i class="bx bx-home-alt" ></i> Home</a><a href="pedidos.html"><i class="bx bxs-package"></i> Meus Pedidos</a><a href="carrinho.html"><i class="bx bx-cart-alt" ></i> Carrinho</a>	<a href="categorias.html"><i class="bx bx-list-ul" ></i> Categorias</a><a href="promocoes.html"><i class="bx bxs-purchase-tag"></i> Promoções</a></div></div></div>');
	
	//<a href="favoritos.html"><i class="bx bx-heart" ></i> Favoritos</a>
	//<a href="configuracoes.html"><i class="bx bx-cog" ></i> Configurações</a>
	
	$('.the-page').append('<footer><div class="container"><div class="row"><div class="col-2"><a href="index.html"><i class="bx bxs-store"></i></a></div><div class="col-2"><a href="promocoes.html"><i class="bx bxs-discount"></i></a></div><div class="col-4"><a href="carrinho.html" class="big"><i class="bx bxs-shopping-bag"></i></a></div><div class="col-2"><a href="favoritos.html"><i class="bx bxs-heart"></i></a></div><div class="col-2"><a href="minha-conta.html"><i class="bx bxs-user-circle"></i></a></div></div></div></footer>');
	
	$("header").sticky({topSpacing:0});
	
	var qty = $( this ).closest( 'form.cart' ).find( '.qty' );
	var val   = parseFloat(qty.val());
	var max = parseFloat(qty.attr( 'max' ));
	var min = parseFloat(qty.attr( 'min' ));
	var step = parseFloat(qty.attr( 'step' ));

	// Change the value if plus or minus
	if ( $( this ).is( '.plus' ) ) {
	   if ( max && ( max <= val ) ) {
		  qty.val( max );
	   } 
	else {
	   qty.val( val + step );
		 }
	} 
	else {
	   if ( min && ( min >= val ) ) {
		  qty.val( min );
	   } 
	   else if ( val > 1 ) {
		  qty.val( val - step );
	   }
	}

});

$(document).on('click tap touchstart', '#logout', function() {"use strict"; Cookies.remove('nome'); Cookies.remove('cpf'); Cookies.remove('email');	Cookies.remove('id');window.location.replace("index.html");});

$( document ).ajaxStart(function() {   "use strict";  $( "#loader" ).show(); $( "#loader" ).css('display', 'block'); $( "#loader" ).css('margin', '0 auto');});
$( document ).ajaxStop(function() {	"use strict";  $( "#loader" ).hide(); 	
	

});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.addEventListener('load', function () {    
    $(document).on('click', 'a[target="_system"],a[target="_blank"]', function (e) {
            e.preventDefault();
            var url = this.href;
            window.open(url,"_system");                    
    });
    //}
}, false);

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "330px";
	document.getElementById("app").style.marginLeft = "330px";
  }
  
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("app").style.marginLeft = "0";
} 

function cutString(s, n){
    var cut= s.indexOf(' ', n);
    if(cut== -1) return s;
    return s.substring(0, cut)
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(
window,document,'script','https://www.google-analytics.com/analytics.js','gaU');
gaU('create','UA-167870129-1',{'storage':'none','clientId':Cookies.get('player')});
gaU('set','checkProtocolTask',null);
gaU('set','anonymizeIp',true);
gaU('set','forceSSL',true);

//gaU('send','event',{'eventCategory':'My_Category','eventAction':'My_Action','eventLabel':'Event_Label','eventValue':11});

$(function() {			
    //Keep track of how many swipes
    var count=0;

    //Enable swiping...
    $("#mySidenav").swipe( {
        //Single swipe handler for left swipes
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            closeNav();
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:50
    });
});
 
// This is a functions that scrolls to #{blah}link
function goToByScroll(id) {
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top
    }, 'slow');
}
