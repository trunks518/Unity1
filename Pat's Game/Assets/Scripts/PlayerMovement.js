#pragma strict
/******************************
*  		Player Movement		  *
*  Created by: Justin Howell  *
*  Date: June 01, 2014 : 1404 *
*							  *
******************************/

var Speed : float;

////////Animations///////////
var PlayerAnimation : Animator;
///////End Animations/////////

function Awake() 
{
	PlayerAnimation = GetComponent(Animator);
	PlayerAnimation.SetInteger("Idle", 1);
	PlayerAnimation.SetInteger("WalkUp", 0);
	PlayerAnimation.SetInteger("WalkDown", 0);
	PlayerAnimation.SetInteger("WalkLeft", 0);
	PlayerAnimation.SetInteger("WalkRight", 0);
}

function Update() 
{

	if(Input.GetKey(KeyCode.UpArrow))
	{
		transform.position.y += 1 * Time.deltaTime * Speed;
		PlayerAnimation.SetInteger("Idle", 0);
		PlayerAnimation.SetInteger("WalkUp", 2);

	}
	if(Input.GetKey(KeyCode.DownArrow))
	{
		transform.position.y -= 1 * Time.deltaTime * Speed;
		PlayerAnimation.SetInteger("Idle", 0);
		PlayerAnimation.SetInteger("WalkDown", 3);
	}
	if(Input.GetKey(KeyCode.LeftArrow))
	{
		transform.position.x -= 1 * Time.deltaTime * Speed;
		PlayerAnimation.SetInteger("Idle", 0);
		PlayerAnimation.SetInteger("WalkLeft", 4);
	}
	if(Input.GetKey(KeyCode.RightArrow))
	{
		transform.position.x += 1 * Time.deltaTime * Speed;
		PlayerAnimation.SetInteger("Idle", 0);
		PlayerAnimation.SetInteger("WalkRight", 5);
	}
	else
	{
		PlayerAnimation.SetInteger("Idle", 1);
		PlayerAnimation.SetInteger("WalkUp", 0);
		PlayerAnimation.SetInteger("WalkDown", 0);
		PlayerAnimation.SetInteger("WalkLeft", 0);
		PlayerAnimation.SetInteger("WalkRight", 0);
	}
	
}