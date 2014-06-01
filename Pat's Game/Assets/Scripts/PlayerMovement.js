#pragma strict
/******************************
*  		Player Movement		  *
*  Created by: Justin Howell  *
*  Date: June 01, 2014 : 1404 *
*							  *
******************************/

var Speed : float;

////////Animations///////////
var Idle : Animation;
var WalkFront : Animation;
var WalkLeft : Animation;
var WalkRight : Animation;
var WalkBack : Animation;
///////End Animations/////////

function Awake() 
{
	animation.Play("Idle");
}

function Update() 
{

	if(Input.GetKey(KeyCode.UpArrow))
	{
		transform.position.y += 1 * Time.deltaTime * Speed;
		animation.Play("WalkFront", PlayMode.StopAll);
	}
	if(Input.GetKey(KeyCode.DownArrow))
	{
		transform.position.y -= 1 * Time.deltaTime * Speed;
		animation.Play("WalkBack", PlayMode.StopAll);
	}
	if(Input.GetKey(KeyCode.LeftArrow))
	{
		transform.position.x -= 1 * Time.deltaTime * Speed;
		animation.Play("WalkLeft", PlayMode.StopAll);
	}
	if(Input.GetKey(KeyCode.RightArrow))
	{
		transform.position.x += 1 * Time.deltaTime * Speed;
		animation.Play("WalkRight", PlayMode.StopAll);
	}
	else
	{
		animation.Play("Idle", PlayMode.StopAll);
	}
	
}