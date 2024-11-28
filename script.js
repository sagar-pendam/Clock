let a = new Date()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let d = a.getDate()
console.log(h,m,s,d)

let c = document.getElementById('container');
c.insertAdjacentHTML('afterbegin',`<div class = 'items'></div>`)
c.insertAdjacentHTML('afterbegin',`<div class = 'items'></div>`)
c.insertAdjacentHTML('afterbegin',`<div class = 'items'></div>`)
c.insertAdjacentHTML('afterbegin',`<div class = 'items'></div>`)



// let items = document.getElementsByClassName('items');

// items[1].innerHTML =`<b>${h}</b>`
//   items[2].innerHTML =`<b>${m}</b>`
//   items[3].innerHTML =`<b>${s}</b>`
//   items[0].innerHTML =`<b>${d}</b>`
let x = () =>{
  let t = document.getElementsByClassName('titles')[0];
  t.classList.toggle('c')
  t.classList.toggle('d')
  let a = new Date();
  let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let d = a.getDate()
  
  let items = document.getElementsByClassName('items');
items[0].innerHTML =`<div class= 'text-size'>Date</div><div><b>${d}</b></div>`
  items[1].innerHTML =`<div class= 'text-size'>Hours</div><div><b>${h}</b></div>`
  items[2].innerHTML =`<div class= 'text-size'>Minutes</div><div><b>${m}</b></div>`;
  items[3].innerHTML =`<div class= 'text-size'>Seconds</div><div><b>${s}</b></div>`
  // console.log('Hello')
}

let ti = setInterval(x,1000);