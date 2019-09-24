// Variables
const rinput = document.getElementById('rinput');
const routput = document.getElementById('routput');
const rtbody = document.getElementById('readmarktbody');
const rnameinput = document.getElementById('rnameinput');
let rwhilenum = 0;
let readlsf;
let read = [];
let renum;
// array
if (localStorage.getItem('readls') === null) {
} else {
  readlsf = localStorage.getItem('readls');
  read = JSON.parse(readlsf);
}

//addEvent Listener
rinput.addEventListener('keypress', roninput);
rnameinput.addEventListener('keypress', roninput);
// show local storage

function showread() {
  while (read.length > rwhilenum) {
    //show
    renum = read[rwhilenum];
    const tr = routput.insertRow();
    const cell1 = tr.insertCell(0);
    const cell2 = tr.insertCell(1);
    tr.id = rwhilenum;
    cell1.innerHTML = `<a href="${renum.link}" target="_blank">${renum.name}</a>`;
    cell2.innerHTML = `<button id='readbtn ${rwhilenum}'>remove</button>`;
    //id
    cell1.id = 'textid';
    //look for click
    let rbtn = document.getElementById(`readbtn ${rwhilenum}`);
    rbtn.addEventListener('click', rondelete);
    rwhilenum++;
  }
  rwhilenum = 0;
}

function deleteallread() {
  rtbody.innerHTML = '';
}

//delete
function rondelete(e) {
  //new todo
  const readdelete = [];
  const relghted = read.length;
  while (rwhilenum < relghted) {
    if (
      read[rwhilenum].name !==
      e.target.parentNode.parentNode.firstChild.textContent
    ) {
      readdelete.push(read[rwhilenum]);
    }
    rwhilenum++;
  }
  rwhilenum = 0;
  read = readdelete;
  localStorage.setItem('readls', JSON.stringify(read));
  //delete from DOM
  deleteallread();
  showread();
}

//add
function roninput(a) {
  if (a.which == 13 || a.keycode == 13) {
    if (rinput.value !== '') {
      if (rnameinput.value === '') {
        //add to array
        if (rinput.value.slice(0, 5) === 'https') {
          read.push({
            link: `${rinput.value}`,
            name: `${rinput.value}`
          });
        } else {
          read.push({
            link: `https://${rinput.value}`,
            name: `https://${rinput.value}`
          });
        }
        //add to local Storage
        localStorage.setItem('readls', JSON.stringify(read));
        // input = null
        rinput.value = '';
        rnameinput.value = '';
        //show
        deleteallread();
        showread();
      } else {
        //add to array
        if (rinput.value.slice(0, 5) === 'https') {
          read.push({
            link: `${rinput.value}`,
            name: `${rnameinput.value}`
          });
        } else {
          read.push({
            link: `https://${rinput.value}`,
            name: `${rnameinput.value}`
          });
        }
        //add to local Storage
        localStorage.setItem('readls', JSON.stringify(read));
        // input = null
        rinput.value = '';
        //show
        deleteallread();
        showread();
      }
    }
    rnameinput.value = '';
  }
}
// call functions
showread();
