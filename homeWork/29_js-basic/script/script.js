const outUserName = document.querySelector('.outName')
const inpNameUser = document.querySelector('.inputName')
const btnAddName= document.querySelector('.addName')

btnAddName.onclick = () => {
  outUserName.innerHTML = inpNameUser.value
}

//2
const outUserAge = document.querySelector('.outAge')
const inpYear = document.querySelector('.inputYear')
const btnAddYear= document.querySelector('.addYear')
const nowYear = 2023

btnAddYear.onclick = () => {
  outUserAge.innerHTML = nowYear - inpYear.value
}

//3
const outLength = document.querySelector('.outLength')
const outP = document.querySelector('.outP')
const inpLength = document.querySelector('.inpLength')
const btnAddLength = document.querySelector('.addLength')

btnAddLength.onclick = () => {
  outLength.innerHTML = inpLength.value
  outP.innerHTML = 4 * inpLength.value
}

//4 
const outArea = document.querySelector('.outArea')
const outR = document.querySelector('.outR')
const inpR = document.querySelector('.inpR')
const btnAddR = document.querySelector('.addR')
const piValue = Math.PI.toFixed(2)

btnAddR.onclick = () => {
  outR.innerHTML = inpR.value
  outArea.innerHTML = 2 * piValue * inpR.value
}

//5
const outSpeed = document.querySelector('.outSpeed')
const inpDistance = document.querySelector('.inpDistance')
const inpTime = document.querySelector('.inpTime')
const btnAddDate = document.querySelector('.addDate')

btnAddDate.onclick = () => {
  const distance = inpDistance.value
  const time = inpTime.value
  outSpeed.innerHTML = distance / time
}

//6
const outUAH = document.querySelector('.outUAH')
const inpEUR = document.querySelector('.inpEUR')
const btnCalc = document.querySelector('.btnCalc')

const valueEUR = 40
btnCalc.onclick = () => {
  console.log(outUAH)
  outUAH.innerHTML = valueEUR * inpEUR.value
}
