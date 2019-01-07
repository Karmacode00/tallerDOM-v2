/**
 * 
 * Acá va el manejo del DOM
 *
 */
//console.table(DATA)

const containerRoot = document.getElementById('root');
const showData = (DATA) => {
  DATA.forEach(element => {
    if(element.house === '' && element.patronus === ''){
      const container = document.createElement('div');
      container.classList.add('container-fluid');
      const card = document.createElement('div');
      card.classList.add('card');
      const box = document.createElement('div');
      box.classList.add('box');
      //hijos de box
      const img = document.createElement('div');
      img.classList.add('img');
      const photo = document.createElement('img');
      photo.setAttribute('src', element.image) // tipo de atributo, parametro valor del atributo

      const h2 = document.createElement('h2');
      const h2Text =  document.createTextNode(element.name);
      const br = document.createElement('br');
      const span = document.createElement('span');
      const spanText = document.createTextNode('No Aplica')
      const p = document.createElement('p');
      const pText = document.createTextNode('Patronus: No Aplica')

      p.appendChild(pText);
      span.appendChild(spanText);
      h2.appendChild(h2Text);
      h2.appendChild(br);
      h2.appendChild(span);
      box.appendChild(img);
      box.appendChild(h2);
      box.appendChild(p);
      img.appendChild(photo);
      card.appendChild(box);
      container.appendChild(card);
      containerRoot.appendChild(container);
    } else if(element.house !== '' && element.patronus === ''){
      const container = document.createElement('div');
      container.classList.add('container-fluid');
      const card = document.createElement('div');
      card.classList.add('card');
      const box = document.createElement('div');
      box.classList.add('box');
      //hijos de box
      const img = document.createElement('div');
      img.classList.add('img');
      const photo = document.createElement('img');
      photo.setAttribute('src', element.image) // tipo de atributo, parametro valor del atributo

      const h2 = document.createElement('h2');
      const h2Text =  document.createTextNode(element.name);
      const br = document.createElement('br');
      const span = document.createElement('span');
      const spanText = document.createTextNode(element.house)
      const p = document.createElement('p');
      const pText = document.createTextNode('Patronus: No Aplica')

      p.appendChild(pText);
      span.appendChild(spanText);
      h2.appendChild(h2Text);
      h2.appendChild(br);
      h2.appendChild(span);
      box.appendChild(img);
      box.appendChild(h2);
      box.appendChild(p);
      img.appendChild(photo);
      card.appendChild(box);
      container.appendChild(card);
      containerRoot.appendChild(container);
    } else if(element.house === '' && element.patronus !== ''){
      const container = document.createElement('div');
      container.classList.add('container-fluid');
      const card = document.createElement('div');
      card.classList.add('card');
      const box = document.createElement('div');
      box.classList.add('box');
      //hijos de box
      const img = document.createElement('div');
      img.classList.add('img');
      const photo = document.createElement('img');
      photo.setAttribute('src', element.image) // tipo de atributo, parametro valor del atributo

      const h2 = document.createElement('h2');
      const h2Text =  document.createTextNode(element.name);
      const br = document.createElement('br');
      const span = document.createElement('span');
      const spanText = document.createTextNode('No Aplica')
      const p = document.createElement('p');
      const pText = document.createTextNode('Patronus: ' + element.patronus)

      p.appendChild(pText);
      span.appendChild(spanText);
      h2.appendChild(h2Text);
      h2.appendChild(br);
      h2.appendChild(span);
      box.appendChild(img);
      box.appendChild(h2);
      box.appendChild(p);
      img.appendChild(photo);
      card.appendChild(box);
      container.appendChild(card);
      containerRoot.appendChild(container);
    } else {
      const container = document.createElement('div');
      container.classList.add('container-fluid');
      const card = document.createElement('div');
      card.classList.add('card');
      const box = document.createElement('div');
      box.classList.add('box');
      //hijos de box
      const img = document.createElement('div');
      img.classList.add('img');
      const photo = document.createElement('img');
      photo.setAttribute('src', element.image) // tipo de atributo, parametro valor del atributo

      const h2 = document.createElement('h2');
      const h2Text =  document.createTextNode(element.name);
      const br = document.createElement('br');
      const span = document.createElement('span');
      const spanText = document.createTextNode(element.house)
      const p = document.createElement('p');
      const pText = document.createTextNode('Patronus: ' + element.patronus)

      p.appendChild(pText);
      span.appendChild(spanText);
      h2.appendChild(h2Text);
      h2.appendChild(br);
      h2.appendChild(span);
      box.appendChild(img);
      box.appendChild(h2);
      box.appendChild(p);
      img.appendChild(photo);
      card.appendChild(box);
      container.appendChild(card);
      containerRoot.appendChild(container);
    }
  });
}
/*const showData = (DATA) => {
  let result = '';
  //console.log(DATA)
  DATA.forEach(element => {
    //element --> DATA[i]
    if(element.house === '' && element.patronus === ''){
      result = containerRoot.innerHTML += `<div class="container-fluid">
      <div class="card">
        <div class="box">
          <div class="img">
              <img src=${element.image}>
          </div>
          <h2>${element.name}<br><span>No tiene</span></h2>
          <p>Patronus: No aplica</p>
        </div>
      </div>
    </div>`
    } else  if(element.house !== '' && element.patronus === ''){
      result = containerRoot.innerHTML += `<div class="container-fluid">
      <div class="card">
        <div class="box">
          <div class="img">
              <img src=${element.image}>
          </div>
          <h2>${element.name}<br><span>${element.house}</span></h2>
          <p>Patronus: No aplica</p>
        </div>
      </div>
    </div>`
    } else  if(element.house === '' && element.patronus !== ''){
      result = containerRoot.innerHTML += `<div class="container-fluid">
      <div class="card">
        <div class="box">
          <div class="img">
              <img src=${element.image}>
          </div>
          <h2>${element.name}<br><span>No aplica</span></h2>
          <p>Patronus: ${element.patronus}</p>
        </div>
      </div>
    </div>`
    } else { 
    result = containerRoot.innerHTML += `<div class="container-fluid">
    <div class="card">
      <div class="box">
        <div class="img">
            <img src=${element.image}>
        </div>
        <h2>${element.name}<br><span>${element.house}</span></h2>
        <p>Patronus: ${element.patronus}</p>
      </div>
    </div>
  </div>`
    }
  })
  return result;
}*/

 window.onload = showData(DATA);