 let out = document.querySelector('.out')
 let btn = document.querySelector('.search')



 function createCart(res, color) {
  return (
    `<div class="cart">
      <h2 class="${color}">User ${res}</h2>
    </div>
    `
  )
 }

 btn.onclick = () => {
  for (let i = 0; i <10; i++) {
    if (i == 5) {
      out.innerHTML += createCart(i, "red")
    } else {
      out.innerHTML += createCart(i)
    }
   }
 }