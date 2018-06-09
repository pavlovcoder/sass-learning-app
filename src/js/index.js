const flexCtn = Array.from(document.getElementsByClassName('flexbox-ctn'));
let counter = 0;

//Object with mini-titles values:
let titleObject = {
  0 : [
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ],
  1 : [
    'order',
    'flex-grow',
    'align-self',
    'flex-basis'
  ],
}

for (const x of flexCtn) {
  x.childNodes.forEach(child => {
    for(let i = 1; i <= 4; i++) {
      let subItem = document.createElement('div');
      subItem.classList.add(`subitem-${i}`);
      subItem.innerHTML = `${i}`;
      child.appendChild(subItem);
    }
    let miniTitle = document.createElement('h4');
    miniTitle.classList.add('mini-title');
    child.appendChild(miniTitle);
  });
  console.log(x);
  appendTitle(counter, x)
  counter++;
}

function appendTitle(counter, miniTitle) {
  let getTitles = Array.from(miniTitle.getElementsByClassName('mini-title'));
  let getCtn = miniTitle.children;
  for (let i = 0; i < 4; i++) {
    getTitles[i].innerHTML = titleObject[counter][i];
    appendFlexStyle(counter, getCtn[i], i);
  }
}

function appendFlexStyle(counter, selector, index) {
  switch (counter) {
    case 0:
      selector.style.flexDirection = titleObject[counter][index];
    break;
  }
}
