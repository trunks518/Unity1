#pragma strict

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

	if(transform.position.y)
	{
		anim.SetBool("WalkUp", true);
		anim.SetBool("Idle", false);
	}
	
	else
	{
		anim.SetBool("WalkUp", false);
		anim.SetBool("Idle", true);
	}
	
	if(Input.GetKey(KeyCode.DownArrow))
	{
		anim.SetBool("WalkDown", true);
		anim.SetBool("Idle", false);
	}
	
	else
	{
		anim.SetBool("Idle", true);
		anim.SetBool("WalkDown", false);
		
	}
	
	if(Input.GetKey(KeyCode.LeftArrow))
	{
		anim.SetBool("WalkLeft", true);
		anim.SetBool("Idle", false);
	}
	
	else
	{
		anim.SetBool("Idle", true);
		anim.SetBool("WalkLeft", false);
		
	}
	
	if(Input.GetKey(KeyCode.RightArrow))
	{
		anim.SetBool("WalkRight", true);
		anim.SetBool("Idle", false);
	}
	
	else
	{
		anim.SetBool("Idle", true);
		anim.SetBool("WalkRight", false);
	}
}