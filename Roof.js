class Roof {
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            isStatic:true

           
        }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = width;
    World.add(world,this.body);
}
display(){
        
    
   rectMode(CENTER);
   rect(pos.x,pos.y,1000,50,this.width, this.height);
 
 }
}
