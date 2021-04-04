class Ground{
    constructor(){
        var option = {
            isStatic:true
        }
        this.ground = Bodies.rectangle(450,390,900,20,options);
        World.add(world,this.ground);
    }
    display(){
        strokeWeight(2);
        fill("black");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.podition.y,900,20);
    }
}