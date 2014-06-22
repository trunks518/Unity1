#pragma strict
/********************************
*  		Player Movement		    *
*  Created by: Justin Howell    *
*  Date: June 01, 2014 : 1404   *
*							    *
********************************/

@script RequireComponent(Animator)

var Speed : float;
var WalkSpeed : float;
var RunSpeed : float;
var PlayerAnimation : Animator;
var rot : Quaternion;
var Stats : PlayerStats;

var currentBlock : GameObject;
var currentSound : AudioClip;
var GrassSound : AudioClip;
var DirtSound : AudioClip;
var SandSound : AudioClip;


function Awake()
{
	PlayerAnimation.SetBool("IdleDown", true);
}

function Start() 
{
	if(PlayerAnimation == null || Stats == null)
	{
		Debug.LogError("Did not find Animator or Stats!");
		
		Stats = GetComponent(PlayerStats);
		PlayerAnimation = GetComponent(Animator);
	}
	rot = Quaternion.identity;
}

function Update() 
{
	transform.rotation = rot;
	
	if(Stats.IsBusy == false)
	{
	
		if(Input.GetKey(KeyCode.UpArrow) || Input.GetKey(KeyCode.W))
		{			
			transform.position.y += 1 * Time.deltaTime * Speed;
			PlayerAnimation.SetBool("WalkUp", true);
			PlayerAnimation.SetBool("IdleRight", false);
			PlayerAnimation.SetBool("IdleLeft", false);
			PlayerAnimation.SetBool("IdleUp", false);
			PlayerAnimation.SetBool("IdleDown", false);
		}
		
		else if(Input.GetKeyUp(KeyCode.UpArrow) || Input.GetKeyUp(KeyCode.W))
		{
			PlayerAnimation.SetBool("WalkUp", false);
			PlayerAnimation.SetBool("IdleRight", false);
			PlayerAnimation.SetBool("IdleLeft", false);
			PlayerAnimation.SetBool("IdleUp", true);
			PlayerAnimation.SetBool("IdleDown", false);
		}
		
		if(Input.GetKey(KeyCode.DownArrow) || Input.GetKey(KeyCode.S))
		{
			transform.position.y -= 1 * Time.deltaTime * Speed;
			PlayerAnimation.SetBool("WalkDown", true);
			PlayerAnimation.SetBool("IdleRight", false);
			PlayerAnimation.SetBool("IdleLeft", false);
			PlayerAnimation.SetBool("IdleUp", false);
			PlayerAnimation.SetBool("IdleDown", false);
		}
		
		else if(Input.GetKeyUp(KeyCode.DownArrow) || Input.GetKeyUp(KeyCode.S))
		{
			PlayerAnimation.SetBool("IdleRight", false);
			PlayerAnimation.SetBool("IdleLeft", false);
			PlayerAnimation.SetBool("IdleUp", false);
			PlayerAnimation.SetBool("IdleDown", true);
			PlayerAnimation.SetBool("WalkDown", false);
		}
		
		if(Input.GetKey(KeyCode.LeftArrow) || Input.GetKey(KeyCode.A))
		{
			transform.position.x -= 1 * Time.deltaTime * Speed;
			PlayerAnimation.SetBool("WalkLeft", true);
			PlayerAnimation.SetBool("IdleRight", false);
			PlayerAnimation.SetBool("IdleLeft", false);
			PlayerAnimation.SetBool("IdleUp", false);
			PlayerAnimation.SetBool("IdleDown", false);
		}
		
		else if(Input.GetKeyUp(KeyCode.LeftArrow) || Input.GetKeyUp(KeyCode.A))
		{
			PlayerAnimation.SetBool("IdleRight", false);
			PlayerAnimation.SetBool("IdleLeft", true);
			PlayerAnimation.SetBool("IdleUp", false);
			PlayerAnimation.SetBool("IdleDown", false);
			PlayerAnimation.SetBool("WalkLeft", false);
		}
		
		if(Input.GetKey(KeyCode.RightArrow) || Input.GetKey(KeyCode.D))
		{
			transform.position.x += 1 * Time.deltaTime * Speed;
			PlayerAnimation.SetBool("WalkRight", true);
			PlayerAnimation.SetBool("IdleRight", false);
			PlayerAnimation.SetBool("IdleLeft", false);
			PlayerAnimation.SetBool("IdleUp", false);
			PlayerAnimation.SetBool("IdleDown", false);
		}
		
		else if(Input.GetKeyUp(KeyCode.RightArrow) || Input.GetKeyUp(KeyCode.D))
		{
			PlayerAnimation.SetBool("IdleRight", true);
			PlayerAnimation.SetBool("IdleLeft", false);
			PlayerAnimation.SetBool("IdleUp", false);
			PlayerAnimation.SetBool("IdleDown", false);
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