#pragma strict
@script RequireComponent(Animator)

var anim : Animator;
var rot : Quaternion;

function Start()
{
	rot = Quaternion.identity;
	anim = GetComponent(Animator);
}

function Update() 
{
	transform.rotation = rot;

	if(rigidbody2D.velocity.y > 0.1)
	{
		anim.SetBool("WalkUp", true);
		anim.SetBool("WalkDown", false);
		anim.SetBool("WalkLeft", false);
		anim.SetBool("WalkRight", false);
		anim.SetBool("Idle", false);
	}
	
	if(rigidbody2D.velocity.y < -0.1)
	{
		anim.SetBool("WalkDown", true);
		anim.SetBool("WalkUp", false);
		anim.SetBool("WalkLeft", false);
		anim.SetBool("WalkRight", false);
		anim.SetBool("Idle", false);
	}
	
	if(rigidbody2D.velocity.x < -0.1)
	{
		anim.SetBool("WalkUp", false);
		anim.SetBool("WalkDown", false);
		anim.SetBool("WalkLeft", true);
		anim.SetBool("WalkRight", false);
		anim.SetBool("Idle", false);
	}
	
	if(rigidbody2D.velocity.x > 0.1)
	{
		anim.SetBool("WalkUp", false);
		anim.SetBool("WalkDown", false);
		anim.SetBool("WalkLeft", false);
		anim.SetBool("WalkRight", true);
		anim.SetBool("Idle", false);
	}
	
	else if(rigidbody2D.velocity.x == 0 && rigidbody2D.velocity.y == 0 )
	{
		anim.SetBool("Idle", true);
		anim.SetBool("WalkUp", false);
		anim.SetBool("WalkDown", false);
		anim.SetBool("WalkLeft", false);
		anim.SetBool("WalkRight", false);
	}
}