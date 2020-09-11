const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 600
canvas.height= 400
const start = document.querySelector('.start')
const text = document.querySelector('.btn')
const audio = new Audio('flappy frog.wav')

let spacePressed = false
let angle = 0
let hue = 0
let frame = 0
let score = 0
let gamespeed = 5

 

function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    handleObstacles()
    bird.update()
    bird.draw()
    ctx.fillStyle = 'red'
    ctx.font= '90px Georgia'
    ctx.strokeText(score,450 , 70)
    ctx.fillText(score,450, 70 )
    handleCollisions()
    if (handleCollisions()) return
    handleParticles()
    
    requestAnimationFrame(animate)
    angle +=0.12
    hue++
    frame++
}
 

start.addEventListener('click',function(){
    animate()
    this.remove()
    text.textContent= "Use SPACE to jump"
    audio.play()
    
})


window.addEventListener('keydown',function(e){
    if (e.code === 'Space') spacePressed = true
     
})
window.addEventListener('keyup',function(e){
    if (e.code === 'Space') spacePressed = false
})

function handleCollisions(){
    for (let i=0; i< obstaclesArray.length; i++){
        if ( bird.x <obstaclesArray[i].x + obstaclesArray[i].width && bird.x+bird.width >obstaclesArray[i].x &&
            ((bird.y <0 +obstaclesArray[i].top && bird.y +bird.height> 0) ||
            (bird.y >canvas.height - obstaclesArray[i].bottom &&
                bird.y +bird.height <canvas.height))){
                    ctx.font= "25px Georgia"
                    ctx.fillStyle= 'black'
                    ctx.fillText('Game Over, your score is ' + score , 160, canvas.height/2 -10)
                    audio.pause()
                    return true
                    


                }
    }
}