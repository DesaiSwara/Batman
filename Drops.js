class Drops
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.1,
			density:1.2

			
			}
			
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options);

		if(this.rain.position.y > height) {
			Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
		}
	
		World.add(world, this.body);
	}
	display()
	{       
			var dropspos=this.body.position;
			
			

			push()
			translate(dropspos.x, dropspos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("blue");
			imageMode(CENTER)
	
			ellipse(0,0,this.r, this.r);
			pop()
			
    }
}