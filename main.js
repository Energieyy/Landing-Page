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

function homeiconf() {
  let itoday = new Date(),
    ihour = itoday.getHours();
  if (ihour < 20 && ihour > 8) {
    homeicon = false;
    document.getElementById('menübtnimg').src = 'images//menü.png';
  } else {
    homeicon = true;
    document.getElementById('menübtnimg').src = 'images//menünight.png';
  }
}
function homeicont() {
  let itoday = new Date(),
    ihour = itoday.getHours();
  if (ihour < 20 && ihour > 8) {
    document.getElementById('menübtnimg').src = 'images//menü.png';
  } else {
    document.getElementById('menübtnimg').src = 'images//menünight.png';
  }
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
    document.getElementById('tbody').classList.add('inputday');
    document.getElementById('tbody').classList.remove('inputnight');
    document.getElementById('sbody').classList.add('inputday');
    document.getElementById('sbody').classList.remove('inputnight');
    document.getElementById('rbody').classList.add('inputday');
    document.getElementById('rbody').classList.remove('inputnight');
    iconday();
    if (homeicon === false) {
      document.getElementById('menübtnimg').src = 'images//menü.png';
      homeicon = true;
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
    document.getElementById('tbody').classList.add('inputnight');
    document.getElementById('tbody').classList.remove('inputday');
    document.getElementById('sbody').classList.add('inputnight');
    document.getElementById('sbody').classList.remove('inputday');
    document.getElementById('rbody').classList.add('inputnight');
    document.getElementById('rbody').classList.remove('inputday');
    iconnight();
    if (homeicon === true) {
      document.getElementById('menübtnimg').src = 'images//menünight.png';
      homeicon = false;
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
const readmarklist = document.getElementById('rbody');
const shoppinglist = document.getElementById('sbody');
const todoslist = document.getElementById('tbody');
const listbtn = document.getElementById('listbtn');
const mainmenübtns = document.getElementById('mainmenübtns');
const settingbtn = document.getElementById('settingbtn');
const listbackbtn = document.getElementById('back');

let showmenü = false;
//addeventlistener

menübtn.addEventListener('click', onmenüclick);
listbtn.addEventListener('click', omlistbtnclick);
listbackbtn.addEventListener('click', onlistbackclick);
btnS.addEventListener('click', onmenübtnSclick);
btnT.addEventListener('click', onmenübtnTclick);
btnR.addEventListener('click', onmenübtnRclick);

function onmenüclick(e) {
  if (showmenü == false) {
    mainmenübtns.classList.remove('notdisplay');
    document.querySelector('.menübtnbgc').classList.remove('notdisplay');
    showmenü = true;
    document.getElementById('menübtnimg').src = 'images//menünight.png';
    document.getElementById('horizontalline').classList.remove('notdisplay');
  } else {
    document.querySelector('.menümainbgc').classList.add('notdisplay');
    document.querySelector('.menübtnbgc').classList.add('notdisplay');
    menü.classList.add('notdisplay');
    mainmenübtns.classList.add('notdisplay');
    menübtnlist.classList.add('notdisplay');
    readmarklist.classList.add('notdisplay');
    todoslist.classList.add('notdisplay');
    shoppinglist.classList.add('notdisplay');
    menü.classList.add('notdisplay');
    showmenü = false;
    listbackbtn.classList.add('notdisplay');
    homeicont();
    document.getElementById('horizontalline').classList.add('notdisplay');
  }
}

function omlistbtnclick(e) {
  menübtnlist.classList.remove('notdisplay');
  mainmenübtns.classList.add('notdisplay');
  listbackbtn.classList.remove('notdisplay');
}

function onlistbackclick(e) {
  menübtnlist.classList.add('notdisplay');
  mainmenübtns.classList.remove('notdisplay');
  menü.classList.add('notdisplay');
  readmarklist.classList.add('notdisplay');
  todoslist.classList.add('notdisplay');
  shoppinglist.classList.add('notdisplay');
  listbackbtn.classList.add('notdisplay');
  document.querySelector('.menümainbgc').classList.add('notdisplay');
}

function onmenübtnSclick(e) {
  shoppinglist.classList.remove('notdisplay');
  todoslist.classList.add('notdisplay');
  readmarklist.classList.add('notdisplay');
  menü.classList.remove('notdisplay');
  document.querySelector('.menümainbgc').classList.remove('notdisplay');
}
function onmenübtnTclick(e) {
  todoslist.classList.remove('notdisplay');
  shoppinglist.classList.add('notdisplay');
  readmarklist.classList.add('notdisplay');
  menü.classList.remove('notdisplay');
  document.querySelector('.menümainbgc').classList.remove('notdisplay');
}
function onmenübtnRclick(e) {
  readmarklist.classList.remove('notdisplay');
  shoppinglist.classList.add('notdisplay');
  todoslist.classList.add('notdisplay');
  menü.classList.remove('notdisplay');
  document.querySelector('.menümainbgc').classList.remove('notdisplay');
}

menü.classList.add('notdisplay');
mainmenübtns.classList.add('notdisplay');
menübtnlist.classList.add('notdisplay');
readmarklist.classList.add('notdisplay');
todoslist.classList.add('notdisplay');
shoppinglist.classList.add('notdisplay');
listbackbtn.classList.add('notdisplay');
document.getElementById('horizontalline').classList.add('notdisplay');
document.querySelector('.menümainbgc').classList.add('notdisplay');
document.querySelector('.menübtnbgc').classList.add('notdisplay');

// run
showTime();
homeiconf();
backgroundl();
onwidthchange();
onheightchange();
