// Variables
const snameinput = document.getElementById('snameinput');
const spriceinput = document.getElementById('spriceinput');
const slinkinput = document.getElementById('slinkinput');
const soutput = document.getElementById('soutput');
const stbody = document.getElementById('shoppingtbody');
let swhilenum = 0;
let shoppinglsf;
let shopping = [];
let shnum;
const result = document.getElementById('calcresult');
let resultcalc = 0;

// array
if (localStorage.getItem('shoppingls') === null) {
} else {
  shoppinglsf = localStorage.getItem('shoppingls');
  shopping = JSON.parse(shoppinglsf);
}

//addEvent Listener
snameinput.addEventListener('keypress', soninput);
spriceinput.addEventListener('keypress', soninput);
slinkinput.addEventListener('keypress', soninput);

//show
//result
function showresultcalc() {
  result.innerHTML = `${resultcalc}€`;
}
//table
function showshopping() {
  while (shopping.length > swhilenum) {
    shnum = shopping[swhilenum];
    const tr = soutput.insertRow();
    const cell1 = tr.insertCell(0);
    const cell2 = tr.insertCell(1);
    tr.id = swhilenum;
    if (shnum.Link == '' && shnum.Price == '') {
      cell1.innerHTML = `${shnum.Name}`;
      cell2.innerHTML = `<button id='shoppingbtn ${swhilenum}'>remove</button>`;
    } else if (shnum.Link == '' && shnum.Price != '') {
      cell1.innerHTML = `${shnum.Name}|${shnum.Price}€`;
      cell2.innerHTML = `<button id='shoppingbtn ${swhilenum}'>remove</button>`;
      const reshnum = parseFloat(shnum.Price);
      resultcalc = resultcalc + reshnum;
    } else if (shnum.Link != '' && shnum.Price == '') {
      cell1.innerHTML = `${shnum.Name}`;
      const cell3 = tr.insertCell(2);
      cell2.innerHTML = `<a href='${shnum.Link}' target='_blank'><button>go to page</button></a>`;
      cell3.innerHTML = `<button id='shoppingbtn ${swhilenum}'>remove</button>`;
    } else if (shnum.link != '' && shnum.Price != '') {
      cell1.innerHTML = `${shnum.Name}|${shnum.Price}€`;
      const cell3 = tr.insertCell(2);
      cell2.innerHTML = `<a href='${shnum.Link}' target='_blank'><button>go to page</button></a>`;
      cell3.innerHTML = `<button id='shoppingbtn ${swhilenum}'>remove</button>`;
      const reshnum = parseFloat(shnum.Price);
      resultcalc = resultcalc + reshnum;
    }
    //id
    cell1.id = 'textid';
    //look for click
    const btn = document.getElementById(`shoppingbtn ${swhilenum}`);
    btn.addEventListener('click', sondelete);
    swhilenum++;
  }
  swhilenum = 0;
  showresultcalc();
  resultcalc = 0;
}

function deleteallshopping() {
  stbody.innerHTML = '';
}

//delete
function sondelete(e) {
  //new list
  const shoppingdelete = [];
  const shlghted = shopping.length;
  while (swhilenum < shlghted) {
    if (
      e.target.parentNode.parentNode.firstChild.textContent.slice(-1) == '€'
    ) {
      if (
        `${shopping[swhilenum].Name}|${shopping[swhilenum].Price}€` !=
        e.target.parentNode.parentNode.firstChild.textContent
      ) {
        shoppingdelete.push(shopping[swhilenum]);
      }
    } else {
      if (
        `${shopping[swhilenum].Name}` !=
        e.target.parentNode.parentNode.firstChild.textContent
      ) {
        shoppingdelete.push(shopping[swhilenum]);
      }
    }

    swhilenum++;
  }
  swhilenum = 0;
  shopping = shoppingdelete;
  localStorage.setItem('shoppingls', JSON.stringify(shopping));
  //delete from DOM
  deleteallshopping();
  showshopping();
}

//add
function soninput(a) {
  if (a.which == 13 || a.keycode == 13) {
    if (snameinput.value !== '') {
      if (slinkinput.value !== '') {
        if (slinkinput.value.slice(0, 5) === 'https') {
          //add to array
          shopping.push({
            Name: `${snameinput.value}`,
            Price: `${spriceinput.value}`,
            Link: `${slinkinput.value}`
          });
          //add to local Storage
          localStorage.setItem('shoppingls', JSON.stringify(shopping));
          // input = null
          snameinput.value = '';
          slinkinput.value = '';
          spriceinput.value = '';
          //show
          deleteallshopping();
          showshopping();
        } else {
          //add to array
          shopping.push({
            Name: `${snameinput.value}`,
            Price: `${spriceinput.value}`,
            Link: `https://${slinkinput.value}`
          });
          //add to local Storage
          localStorage.setItem('shoppingls', JSON.stringify(shopping));
          // input = null
          snameinput.value = '';
          slinkinput.value = '';
          spriceinput.value = '';
          //show
          deleteallshopping();
          showshopping();
        }
      } else {
        shopping.push({
          Name: `${snameinput.value}`,
          Price: `${spriceinput.value}`,
          Link: ``
        });
        //add to local Storage
        localStorage.setItem('shoppingls', JSON.stringify(shopping));
        // input = null
        snameinput.value = '';
        slinkinput.value = '';
        spriceinput.value = '';
        //show
        deleteallshopping();
        showshopping();
      }
    }
  }
}

// call functions
showshopping();
