#pragma strict
/********************************
*  		Player Movement		    *
*  Created by: Justin Howell    *
*  Date: June 01, 2014 : 1404   *
*							    *
********************************/

var Speed : float;
var WalkSpeed : float;
var RunSpeed : float;
var PlayerAnimation : Animator;
var rot : Quaternion;
var Stats : PlayerStats;


function Start() 
{
	if(PlayerAnimation == null || Stats == null)
	{
		Debug.LogWarning("Did not find Animator or Stats.  Adding now!");
		
		Stats = GetComponent(PlayerStats);
		PlayerAnimation = GetComponent(Animator);
	}
	
	rot = Quaternion.identity;
	
	PlayerAnimation.SetBool("Idle", true);
}

function Update() 
{
	transform.rotation = rot;

	if(Input.GetKey(KeyCode.UpArrow) || Input.GetKey(KeyCode.W))
	{
		transform.position.y += 1 * Time.deltaTime * Speed;
		PlayerAnimation.SetBool("WalkUp", true);
		PlayerAnimation.SetBool("Idle", false);
	}
	
	else
	{
		PlayerAnimation.SetBool("WalkUp", false);
		PlayerAnimation.SetBool("Idle", true);
	}
	
	if(Input.GetKey(KeyCode.DownArrow) || Input.GetKey(KeyCode.S))
	{
		transform.position.y -= 1 * Time.deltaTime * Speed;
		PlayerAnimation.SetBool("WalkDown", true);
		PlayerAnimation.SetBool("Idle", false);
	}
	
	else
	{
		PlayerAnimation.SetBool("Idle", true);
		PlayerAnimation.SetBool("WalkDown", false);
		
	}
	
	if(Input.GetKey(KeyCode.LeftArrow) || Input.GetKey(KeyCode.A))
	{
		transform.position.x -= 1 * Time.deltaTime * Speed;
		PlayerAnimation.SetBool("WalkLeft", true);
		PlayerAnimation.SetBool("Idle", false);
	}
	
	else
	{
		PlayerAnimation.SetBool("Idle", true);
		PlayerAnimation.SetBool("WalkLeft", false);
		
	}
	
	if(Input.GetKey(KeyCode.RightArrow) || Input.GetKey(KeyCode.D))
	{
		transform.position.x += 1 * Time.deltaTime * Speed;
		PlayerAnimation.SetBool("WalkRight", true);
		PlayerAnimation.SetBool("Idle", false);
	}
	
	else
	{
		PlayerAnimation.SetBool("Idle", true);
		PlayerAnimation.SetBool("WalkRight", false);
		
	}
	
	if(Input.GetKey(KeyCode.LeftShift))
	{
		if(Stats.Cfatigue >= 0)
		{
			Speed = RunSpeed;
			Stats.Cfatigue -= 1 * Time.deltaTime;
		}
		if(Stats.Cfatigue <= 0)
		{
			Stats.Cfatigue = 0;
			Speed = WalkSpeed;
		}
	}
	
	else
	{	
		Speed = WalkSpeed;
		Stats.Cfatigue += 1 * Time.deltaTime;
			
		if(Stats.Cfatigue >= Stats.Fatigue)
		{
			Stats.Cfatigue = Stats.Fatigue;
		}
	}
}