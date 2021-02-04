class SlingShot{
    constructor(bodyA, pointB){
        var option = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.19,
            length:15
        }
        this.pointB = pointB;
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        this.sling = Constraint.create(option);
        World.add(world, this.sling); 
    }
    display(){
        image(this.sling1, 200,20);
        image(this.sling2, 170,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            stroke(49, 20, 10)
            if(pointA.x < 200){
            strokeWeight(8);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y)
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y)
            image(this.sling3,pointA.x-25,pointA.y-10,15,30)
            }
            else if(pointA.x>220){
                 strokeWeight(3)
                 line(pointA.x+25, pointA.y, pointB.x-10, pointB.y)
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y)
            image(this.sling3,pointA.x+25,pointA.y-10,15,30)
            }
            
        }
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body
    }
}