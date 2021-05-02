class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,	
		    restitution:0.3,
			friction:0,
			density:1.2

			}

            
			this.body=Bodies.circle(x, y, r, options);
		this.x=x;
		this.y=y;
		this.r=r;

		World.add(world, this.body)
	
	}
	display()
	{
		push();
		var pos = this.body.position;
		
			fill("orange");
			
            ellipse(pos.x, pos.y, 60, 60);
			pop();
 }
}