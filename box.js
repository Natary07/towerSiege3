class Block {
  constructor(x, y, width, height) {
    var options = {
        
        'restitution':0.4,
        'friction':0
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility=255
    this.image = loadImage("Gold.png");
    World.add(world, this.body);
  }
  score(){
    if(this.Visibility<0 && this.Visibility>-105){
      score++
    }
  }
  display(){
    if (this.body.speed<4){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility=this.Visibility-5
      console.log(this.Visibility);
      tint(255,this.Visibility);
      //Do I need this?
      image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
      pop();
    }
  }
  
  }