console.log('Welcome to MyGame.com')
let music = new Audio('music1.mp3')
let gameOver = new Audio('gameOver1.mp3')
let tap = new Audio('tap.mp3')

let turn = 'X'
let isGameOver = false

const changeTurn = () => {
    return turn === 'X'?'0':'X'
}

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxText')
    let wins = [
        [0,1,2,5, 5,0],
        [3,4,5,5,15,0 ],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
]

    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && boxtexts[e[2]].innerText === boxtexts[e[1]].innerText && boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerHTML = boxtexts[e[0]].innerHTML + " Won!!!"
            isGameOver = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '250px'

            document.querySelector('.line').style.width = '25vw'
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            gameOver.play()
        }    })
}


let boxex = document.getElementsByClassName('box')

Array.from(boxex).forEach( e => {
      

    let boxText = e.querySelector('.boxText')
    e.addEventListener('click' , () => {
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            
            
            if(turn === '0'){
                boxText.style.color = 'blue'
            }
            turn = changeTurn()
            tap.play()
            checkWin()
            if(!isGameOver){

                document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn
            }
        }
    }
    )

})

reset.addEventListener('click' , () => {
    let boxText = document.querySelectorAll('.boxText')
    Array.from(boxText).forEach(e => {
        e.innerText = ""
    })

    turn ='X'
    isGameOver = false
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px'
    document.querySelector('.line').style.width = '0'

})