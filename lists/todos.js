// Variables
const tinput = document.getElementById('tinput');
const toutput = document.getElementById('toutput');
const ttbody = document.getElementById('todostbody');
let twhilenum = 0;
let todoslsf;
let todos = [];
let tonum;
// array
if (localStorage.getItem('todosls') === null) {
} else {
  todoslsf = localStorage.getItem('todosls');
  todos = JSON.parse(todoslsf);
}

//addEvent Listener
tinput.addEventListener('keypress', toninput);
// show local storage

function showtodos() {
  while (todos.length > twhilenum) {
    //show
    const tonum = todos[twhilenum];
    const tr = toutput.insertRow();
    const cell1 = tr.insertCell(0);
    const cell2 = tr.insertCell(1);
    tr.id = twhilenum;
    cell1.innerHTML = `${tonum}`;
    cell2.innerHTML = `<button id='todosbtn ${twhilenum}'>remove</button>`;
    //id
    cell1.id = 'textid';
    //look for click
    const btn = document.getElementById(`todosbtn ${twhilenum}`);
    btn.addEventListener('click', tondelete);
    twhilenum++;
  }
  twhilenum = 0;
}

function deletealltodos() {
  ttbody.innerHTML = '';
}

//delete
function tondelete(e) {
  //new todo
  const todosdelete = [];
  const tolghted = todos.length;
  while (twhilenum < tolghted) {
    if (
      todos[twhilenum] !== e.target.parentNode.parentNode.firstChild.textContent
    ) {
      todosdelete.push(todos[twhilenum]);
    }
    twhilenum++;
  }
  twhilenum = 0;
  todos = todosdelete;
  localStorage.setItem('todosls', JSON.stringify(todos));
  //delete from DOM
  deletealltodos();
  showtodos();
}

//add
function toninput(a) {
  if (a.which == 13 || a.keycode == 13) {
    if (tinput.value !== '') {
      //add to array
      todos.push(tinput.value);
      //add to local Storage
      localStorage.setItem('todosls', JSON.stringify(todos));
      // input = null
      tinput.value = '';
      //show
      deletealltodos();
      showtodos();
    }
  }
}
// call functions
showtodos();
