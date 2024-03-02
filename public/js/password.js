// // step 1
// const ipnElement = document.querySelector('#ipnPassword')
// const btnElement = document.querySelector('#btnPassword')

// // step 2
// btnElement.addEventListener('click', function() {
//   // step 3
//   const currentType = ipnElement.getAttribute('type')
//   // step 4
//   ipnElement.setAttribute(
//     'type',
//     currentType === 'password' ? 'text' : 'password'
//   )
// })


const passField = document.querySelector("input");
const showBtn = document.querySelector("span i");
showBtn.onclick = (()=>{
  if(passField.type === "password"){
    passField.type = "text";
    showBtn.classList.add("hide-btn");
  }else{
    passField.type = "password";
    showBtn.classList.remove("hide-btn");
  }
});