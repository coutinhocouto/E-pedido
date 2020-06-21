// JavaScript Document
$(document).ready(function(){

    

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
	document.getElementById("main").style.marginLeft = "330px";
  }
  
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
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
