const input = document.getElementById('input')
const roll = document.getElementById('roll')
const restart = document.getElementById('restart')
const message = document.getElementById('message')
const score = document.getElementById('score')
let tentativas = 5
let n = ''
let s = 0

const randonNumber = () => {
    n = Math.floor(Math.random() * 50) + 1

    return n
}

const playGame = () => {
    const nu = Number(input.value)

    if (nu < n){
        message.textContent = 'O número é maior'
        tentativas--
        input.value = ''
        }
    else if (nu > n){
        message.textContent = 'O número é menor'
        tentativas--
        input.value = ''
        }
    else{
        message.textContent = `Parabens você ganhou! O número era ${n}` 
        input.disabled = true
        restart.disabled = false
        roll.disabled = true
        s++   
        score.textContent = `Score : ${s}`}

         
    if (tentativas === 0 && nu !== n){
        message.textContent = `Você perdeu! O número era ${n}.`
        input.disabled = true
        restart.disabled = false
        roll.disabled = true}
}

const play = () => {
    randonNumber()  
    tentativas = 5
    
    message.textContent = 'Tente adivinhar o número'
    console.log(n)

    input.value = ''
    input.disabled = false
    restart.disabled = true
    roll.disabled = false
}