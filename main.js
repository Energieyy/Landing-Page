//set Variables

const ecosia = document.getElementById('ecosia');
const youtube = document.getElementById('youtube');
const amazon = document.getElementById('amazon');
let savezahl = 0;

//get save zahl

if (localStorage.getItem('savezahl') === null) {
  localStorage.setItem('savezahl', savezahl);
} else {
  savezahl = localStorage.getItem('savezahl');
}
//get savezahlout
const zahlout = document.getElementById('zahlout');

//set savezahlout
zahlout.innerHTML = `You searched ${savezahl} things`;

//add event listener

ecosia.addEventListener('keypress', onkeypressecosia);
youtube.addEventListener('keypress', onkeypressyoutube);
amazon.addEventListener('keypress', onkeypressamazon);

//functions

function onkeypressecosia(e) {
  if (e.which == 13 || e.keycode == 13) {
    if (ecosia.value === '') {
      window.open('https://www.ecosia.org', `ecosia ${savezahl}`);
      savezahl++;
    } else {
      window.open(
        `https://www.ecosia.org/search?q=${ecosia.value}`,
        `ecosia ${savezahl}`
      );
      ecosia.value = '';
      savezahl++;
      localStorage.setItem('savezahl', savezahl);
      //set savezahlout
      zahlout.innerHTML = `You searched ${savezahl} things`;
    }
  }
}

function onkeypressyoutube(e) {
  if (e.which == 13 || e.keycode == 13) {
    if (youtube.value === '') {
      window.open('https://www.youtube.com', `youtube ${savezahl}`);
      savezahl++;
    } else {
      window.open(
        `https://www.youtube.com/results?search_query=${youtube.value}`,
        `youtube ${savezahl}`
      );
      youtube.value = '';
      savezahl++;
      localStorage.setItem('savezahl', savezahl);
      //set savezahlout
      zahlout.innerHTML = `You searched ${savezahl} things`;
    }
  }
}

function onkeypressamazon(e) {
  if (e.which == 13 || e.keycode == 13) {
    if (amazon.value === '') {
      window.open('https://www.amazon.de', `amazon ${savezahl}`);
      savezahl++;
    } else {
      window.open(
        `https://www.amazon.de/s?k=${amazon.value}&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_2`,
        `amazon ${savezahl}`
      );
      amazon.value = '';
      savezahl++;
      localStorage.setItem('savezahl', savezahl);
      //set savezahlout
      zahlout.innerHTML = `You searched ${savezahl} things`;
    }
  }
}

//Name

//get name
const name = document.getElementById('name');
const nameh3 = document.getElementById('h3name');
//save Name
name.addEventListener('keypress', onkeypressname);

function onkeypressname(a) {
  if (a.which == 13 || a.keycode == 13) {
    if (name.value == '') {
      //placeholder
      name.placeholder = `Your Name`;
      name.value = '';
      //set local storage
      localStorage.setItem('namels', `Your Name`);
      name.blur();
    } else {
      localStorage.setItem('namels', name.value);
      name.value = '';
      //placeholder
      name.placeholder = localStorage.getItem('namels');
      name.blur();
      nameh3add();
    }
  }
}

//Name as place holder
if (localStorage.getItem('namels') === null) {
  name.placeholder = `Your Name`;
} else if (localStorage.getItem('namels') == '') {
  name.placeholder = `Your Name`;
} else {
  name.placeholder = localStorage.getItem('namels');
  nameh3add();
}
// name h3
function nameh3add() {
  nameh3.innerHTML = localStorage.getItem('namels');
}
//change placeholder by window change

function onwidthchange(a) {
  if (window.innerWidth < 400) {
    ecosia.placeholder = 'Ecosia';
    youtube.placeholder = 'YouTube';
    amazon.placeholder = 'Amazon';
    uhr.style.fontSize = '50px';
    zahlout.style.fontSize = '30px';
    document.getElementById('headline').style.fontSize = '35px';
    btnR.style.marginTop = '80px';
    btnS.style.marginTop = '80px';
    btnT.style.marginTop = '90px';
  } else if (window.innerWidth < 530 && window.innerWidth > 300) {
    ecosia.placeholder = 'Ecosia';
    youtube.placeholder = 'YouTube';
    amazon.placeholder = 'Amazon';
    uhr.style.fontSize = '70px';
    zahlout.style.fontSize = '37px';
    document.getElementById('headline').style.fontSize = '50px';
    btnR.style.marginTop = '80px';
    btnS.style.marginTop = '80px';
    btnT.style.marginTop = '90px';
  } else if (window.innerWidth > 530 && ecosia.placeholder == 'Ecosia') {
    ecosia.placeholder = 'search on Ecosia';
    youtube.placeholder = 'search on YouTube';
    amazon.placeholder = 'search on Amazon';
    uhr.style.fontSize = '100px';
    zahlout.style.fontSize = '50px';
    document.getElementById('headline').style.fontSize = '50px';
  }
  setTimeout(onwidthchange, 1000);
}
function onheightchange() {
  if (window.innerHeight < 490) {
    btnR.style.marginTop = '50px';
    btnS.style.marginTop = '50px';
    btnT.style.marginTop = '65px';
  } else if (window.innerHeight < 625 && window.innerHeight > 490) {
    btnR.style.marginTop = '80px';
    btnS.style.marginTop = '80px';
    btnT.style.marginTop = '90px';
  } else if (window.innerHeight > 625) {
    btnR.style.marginTop = '120px';
    btnS.style.marginTop = '120px';
    btnT.style.marginTop = '150px';
  }
  setTimeout(onheightchange, 1000);
}

//Uhr

//variables
const uhr = document.getElementById('uhr');
//funktion
function showTime() {
  let heute = new Date(),
    hours = heute.getHours(),
    minutes = heute.getMinutes(),
    seconds = heute.getSeconds();
  //output time
  uhr.innerHTML = `${addzero(hours)}:${addzero(minutes)}:${addzero(seconds)}`;
  setTimeout(showTime, 1000);
}
//ad zero
function addzero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//icon

//night
function iconnight() {
  const link = document.querySelector("link[rel*='icon']");
  link.href = 'images/moon.png';
}
//day
function iconday() {
  const link = document.querySelector("link[rel*='icon']");
  link.href = 'images/sun.png';
}

//set Background

let homeicon;

let icontoday = new Date(),
  iconhour = icontoday.getHours();
if (iconhour < 20 && iconhour > 8) {
  homeicon = false;
} else {
  homeicon = true;
}

function backgroundl() {
  // get Time
  let today = new Date(),
    hour = today.getHours();

  if (hour < 20 && hour > 8) {
    //day
    document.getElementById('body').classList.add('bodybgd');
    document.body.style.backgroundImage = "url('images/background white.jpg')";
    document.body.style.color = 'black';
    document.getElementById('name').classList.remove('inputnight');
    document.getElementById('name').classList.add('inputday');
    document.getElementById('ecosia').classList.remove('inputnight');
    document.getElementById('ecosia').classList.add('inputday');
    document.getElementById('youtube').classList.remove('inputnight');
    document.getElementById('youtube').classList.add('inputday');
    document.getElementById('amazon').classList.remove('inputnight');
    document.getElementById('amazon').classList.add('inputday');
    document.getElementById('thover').classList.add('inputday');
    document.getElementById('thover').classList.remove('inputnight');
    document.getElementById('shover').classList.add('inputday');
    document.getElementById('shover').classList.remove('inputnight');
    document.getElementById('rhover').classList.add('inputday');
    document.getElementById('rhover').classList.remove('inputnight');
    iconday();
    if (homeicon == false) {
      homeicon = true;
      document.getElementById('menübtnimg').src = 'images//menü.png';
    }
  } else {
    //night
    document.body.style.backgroundImage = "url('images/background.jpg')";
    document.body.style.color = 'white';
    document.getElementById('body').classList.remove('bodybgd');
    document.getElementById('name').classList.remove('inputday');
    document.getElementById('name').classList.add('inputnight');
    document.getElementById('ecosia').classList.remove('inputday');
    document.getElementById('ecosia').classList.add('inputnight');
    document.getElementById('youtube').classList.remove('inputday');
    document.getElementById('youtube').classList.add('inputnight');
    document.getElementById('amazon').classList.remove('inputday');
    document.getElementById('amazon').classList.add('inputnight');
    document.getElementById('thover').classList.add('inputnight');
    document.getElementById('thover').classList.remove('inputday');
    document.getElementById('shover').classList.add('inputnight');
    document.getElementById('shover').classList.remove('inputday');
    document.getElementById('rhover').classList.add('inputnight');
    document.getElementById('rhover').classList.remove('inputday');
    iconnight();
    if (homeicon == true) {
      homeicon = false;
      document.getElementById('menübtnimg').src = 'images//menünight.png';
    }
  }
  setTimeout(backgroundl, 1000);
}

//Menü

//variables
const menübtn = document.getElementById('menübtn');
const menü = document.getElementById('menü');
const menüitems = document.getElementById('menüitems');
const menübtnlist = document.getElementById('menülistbtns');
const btnS = document.getElementById('btnS');
const btnT = document.getElementById('btnT');
const btnR = document.getElementById('btnR');
const readmarklist = document.getElementById('rhover');
const shoppinglist = document.getElementById('shover');
const todoslist = document.getElementById('thover');

let showmenü = false;
//addeventlistener

btnS.addEventListener('click', onmenübtnSclick);
btnT.addEventListener('click', onmenübtnTclick);
btnR.addEventListener('click', onmenübtnRclick);
menübtn.addEventListener('click', onmenüclick);

function onmenüclick(e) {
  if (showmenü === false) {
    e.preventDefault();
    menü.classList.remove('notdisplay');
    menübtnlist.classList.remove('notdisplay');
    btnS.classList.remove('notdisplay');
    btnT.classList.remove('notdisplay');
    btnR.classList.remove('notdisplay');
    menüitems.classList.add('notdisplay');
    showmenü = true;
    document.getElementById('menü').style.background = 'none';
    document.getElementById('menübtnimg').src = 'images//menünight.png';
  } else {
    e.preventDefault();
    menü.classList.add('notdisplay');
    menübtnlist.classList.add('notdisplay');
    btnS.classList.add('notdisplay');
    btnT.classList.add('notdisplay');
    btnR.classList.add('notdisplay');
    showmenü = false;
    document.getElementById('menü').style.background = 'none';
    let picontoday = new Date(),
      piconhour = picontoday.getHours();
    if (piconhour < 20 && piconhour > 8) {
      document.getElementById('menübtnimg').src = 'images//menü.png';
    } else {
      document.getElementById('menübtnimg').src = 'images//menünight.png';
    }
  }
}

function onmenübtnSclick(e) {
  e.preventDefault();
  shoppinglist.classList.remove('notdisplay');
  soutput.classList.remove('notdisplay');
  snameinput.classList.remove('notdisplay');
  slinkinput.classList.remove('notdisplay');
  spriceinput.classList.remove('notdisplay');

  readmarklist.classList.add('notdisplay');
  routput.classList.add('notdisplay');
  rinput.classList.add('notdisplay');
  rnameinput.classList.add('notdisplay');

  todoslist.classList.add('notdisplay');
  toutput.classList.add('notdisplay');
  tinput.classList.add('notdisplay');

  menüitems.classList.remove('notdisplay');
  document.getElementById('menü').style.backgroundColor = 'black';
}

function onmenübtnTclick(e) {
  e.preventDefault();
  todoslist.classList.remove('notdisplay');
  toutput.classList.remove('notdisplay');
  tinput.classList.remove('notdisplay');

  readmarklist.classList.add('notdisplay');
  routput.classList.add('notdisplay');
  rinput.classList.add('notdisplay');
  rnameinput.classList.add('notdisplay');

  shoppinglist.classList.add('notdisplay');
  soutput.classList.add('notdisplay');
  snameinput.classList.add('notdisplay');
  slinkinput.classList.add('notdisplay');
  spriceinput.classList.add('notdisplay');

  menüitems.classList.remove('notdisplay');
  document.getElementById('menü').style.backgroundColor = 'black';
}

function onmenübtnRclick(e) {
  e.preventDefault();
  readmarklist.classList.remove('notdisplay');
  routput.classList.remove('notdisplay');
  rinput.classList.remove('notdisplay');
  rnameinput.classList.remove('notdisplay');

  todoslist.classList.add('notdisplay');
  toutput.classList.add('notdisplay');
  tinput.classList.add('notdisplay');

  shoppinglist.classList.add('notdisplay');
  soutput.classList.add('notdisplay');
  snameinput.classList.add('notdisplay');
  slinkinput.classList.add('notdisplay');
  spriceinput.classList.add('notdisplay');

  menüitems.classList.remove('notdisplay');
  document.getElementById('menü').style.backgroundColor = 'black';
}

readmarklist.classList.add('notdisplay');
routput.classList.add('notdisplay');
rinput.classList.add('notdisplay');
rnameinput.classList.add('notdisplay');

shoppinglist.classList.add('notdisplay');
soutput.classList.add('notdisplay');
snameinput.classList.add('notdisplay');
slinkinput.classList.add('notdisplay');
spriceinput.classList.add('notdisplay');

todoslist.classList.add('notdisplay');
toutput.classList.add('notdisplay');
tinput.classList.add('notdisplay');

menü.classList.add('notdisplay');
menübtnlist.classList.add('notdisplay');
btnS.classList.add('notdisplay');
btnT.classList.add('notdisplay');
btnR.classList.add('notdisplay');

//start animation

const startmain = document.getElementById('startmainunset');
const main = document.getElementById('startunset');

function animationstart() {
  setTimeout(function pageshowdelay() {
    main.classList.add('notdisplay');
    startmain.classList.add('notdisplay');
  }, 4000);
}

if (window.innerWidth > 530) {
  startmain.classList.add('startmain');
  main.classList.add('start');
  animationstart();
} else {
  main.classList.add('notdisplay');
  startmain.classList.add('notdisplay');
}

// run
showTime();
backgroundl();
onwidthchange();
onheightchange();
