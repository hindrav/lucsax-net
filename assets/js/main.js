// Loader
window.onload = () => {
    let loader = document.getElementById('loader');
    loader.style.visibility = 'hidden';
    loader.style.opacity = 0;
}

// Navbar
// Toggler icon functionality
var button = document.querySelector('.navbar--toggler__icon');
var collapse = document.querySelector('.collapse');
var navbar = document.querySelector('.navbar');
collapse.style.display = 'block';

function myNav() {
    collapse.style.display == 'none';
    if (collapse.style.display == 'none') {
        collapse.style.display = 'block';
    } else {
        collapse.style.display = 'none';
    }
}
button.addEventListener('click', myNav());

// Media functions
const sm = window.matchMedia('(min-width: 319px)');
const mm = window.matchMedia('(min-width: 374px)');
const ml = window.matchMedia('(min-width: 424px)');
const tab = window.matchMedia('(min-width: 767px)');
const tabL = window.matchMedia('(min-width: 1023px)');
const gL = window.matchMedia('(min-width: 1279px)');
const lap = window.matchMedia('(min-width: 1439px)');
const k4 = window.matchMedia('(min-width: 2559px)');
// buttons
var navCollapse = document.querySelector('.navbar--collapse');
var services = document.querySelector('.dropdown--toggle');
var dropM = document.querySelector('.dropdown--menu');
var navLink2 = document.querySelector('.abo-bt');
var navLink3 = document.querySelector('.con-bt');

// sm to tab
if(sm.matches || mm.matches || ml.matches || tab.matches){
    // collapsing items on navbar
    function close(){
        let closing = () =>{
            navCollapse.style.display = 'none';
        }
        return closing;
    }
    try{
        navLink2.onclick = close();
        navLink3.onclick = close();
    }catch(e){}
    // Dropdown Menu
    function serviceDisplay(){
        if(dropM.style.display === 'none'){
            dropM.style.display = 'block';
        } else{
            dropM.style.display = 'none';
        }
    }

    services.addEventListener('click', serviceDisplay());
}

// Mision 'n vision container
var button2 = document.querySelector('.mnv');
var mnvContainer = document.querySelector('.misionVision--container');

function misionVision() {
    if (mnvContainer.style.display == 'none') {
        mnvContainer.style.display = 'block';
    } else {
        mnvContainer.style.display = 'none';
    }
}
try{
    button2.addEventListener('click', misionVision());
}catch(e){}

// Footer items
var dtf1 = document.querySelector('.nvd1');
var dtf2 = document.querySelector('.nvd2');
var dtf3 = document.querySelector('.nvd3');
var dfm1 = document.querySelector('.dfm1');
var dfm2 = document.querySelector('.dfm2');
var dfm3 = document.querySelector('.dfm3');

function dfmx1() {
    if (dfm1.style.display == 'none') {
        dfm1.style.display = 'block';
    } else {
        dfm1.style.display = 'none';
    }
}

function dfmx2() {
    if (dfm2.style.display == 'none') {
        dfm2.style.display = 'block';
    } else {
        dfm2.style.display = 'none';
    }
}

function dfmx3() {
    if (dfm3.style.display == 'none') {
        dfm3.style.display = 'block';
    } else {
        dfm3.style.display = 'none';
    }
}

dtf1.addEventListener('click', dfmx1());
dtf2.addEventListener('click', dfmx2());
dtf3.addEventListener('click', dfmx3());

dfm1.style.display = 'none';
dfm2.style.display = 'none';
dfm3.style.display = 'none';

// All about forms
// buttons
const next1 = document.querySelector('#next-button1');
const next2 = document.querySelector('#next-button2');
const next3 = document.querySelector('#next-button3');
const back2 = document.querySelector('#back-button2');
const back3 = document.querySelector('#back-button3');
// forms
const form1 = document.querySelector('#assistant1');
const form2 = document.querySelector('#assistant2');
const form3 = document.querySelector('#assistant3');

next1.onclick = () => {
    form1.style = "transform: translate(-100%, 0);"
    form2.style = "transform: translate(-100%, 0);"
    form3.style = "transform: translate(-100%, 0);"
}