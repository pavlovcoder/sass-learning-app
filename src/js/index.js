const flexCtn = Array.from(document.getElementsByClassName('flexbox-ctn'));
let counter = 0;

//Object with mini-titles values:
let titleObject = {
  0 : [
    'row',
    'row-reverse',
    'column',
    'column-revers'
  ]
}

for (const x of flexCtn) {
  console.log(counter);
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
  appendTitle(counter, x)
  counter++;
}

function appendTitle(counter, miniTitle) {
  console.log(miniTitle.children);
  let getTitles = Array.from(miniTitle.getElementsByClassName('mini-title'));
  for (let i = 0; i < 4; i++) {
    getTitles[i].innerHTML = titleObject[counter][i];
  }
}
