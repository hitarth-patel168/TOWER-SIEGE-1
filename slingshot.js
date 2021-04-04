class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:20
        }
        this.point = pointB
        this.sling = Constraint.create(options);
        world.add(world,this,sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var point = this.pointB;

            strokeWeight(4)
            fill("red");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    
    
    
    
}