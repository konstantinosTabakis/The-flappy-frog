const sprite =new Image()
sprite.src= 'frog.png'
class Bird{
    constructor(){
        this.x =150
        this.y =200
        this.vy=0
        this.originalWidth = 130
        this.originalHeight = 144
        this.width = this.originalWidth/8
        this.height = this.originalHeight/8
        this.weight =1
    }

    update(){
        let curve =Math.sin(angle)
        if(this.y> canvas.height - ((this.height*2)+curve )){
            this.y = canvas.height - (this.height*2)
            this.vy = 0     
        } else{
            this.vy +=this.weight
            this.vy *=0.9
            this.y +=this.vy
        }
        if (this.y <  this.height){
            this.y =  this.height
            this.vy = 0
        }
        if (spacePressed) this.flap()

    }
    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width,this.height)
        ctx.drawImage(sprite,0,0,this.originalWidth,this.originalHeight,this.x-8,this.y -10,this.width * 1.7,this.height*1.7) 
    }
    flap(){
        this.vy -=2
    }
}
const bird = new Bird()