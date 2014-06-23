		/****************************************
		*	PlayerStats Script	   				*
		*	Created By: Justin Howell			*
		*	Date: 3 June, 2014  1843  			*
		*****************************************
		*	This script handles the players 	*
		*	stats. I.e, Health, Defense, and	*
		*	Inventory Items.	   				*
		*						   				*
		*						   				*
		****************************************/
		
@script RequireComponent(Rigidbody2D)
@script RequireComponent(BoxCollider2D)

	////////GUI Start////////
	var _lvl : GUIText;
	var _xp : GUIText;
	var _hp : GUIText;
	var _atk : GUIText;
	var _cFatigue : GUIText;
	/////////GUI End/////////

var IsAlive = true;
var Level : int = 1;
var XP : int = 0;		
var Hp : int = 20;
var MaxHp : int = 20;
var Atk : float = 1.0f;
var Fatigue : float = 10.0f;
var Cfatigue : float;   ////Current Fatigue; goes Down while shift is pressed.
var IsBusy = false;

var PlayerWeapon : GameObject;
var PlayerAnimation : Animator;

function Awake() 
{
	Cfatigue = Fatigue;
	
	if(PlayerAnimation == null)
	{
		Debug.LogError("Did not find Animator for attacking!");
		PlayerAnimation = GetComponent(Animator);
	}
}


function Update()
{
	////////GUI Start////////
	_lvl.text = Level.ToString();
	_xp.text = XP.ToString();
	_hp.text = Hp.ToString();
	_atk.text = Atk.ToString();
	_cFatigue.text = Cfatigue.ToString();
	/////////GUI End/////////
	
	if(Input.GetKeyDown(KeyCode.LeftControl) || Input.GetKeyDown(KeyCode.RightControl))
	{
		Attack();
	}
	
	if(IsBusy == true && Input.GetKeyDown(KeyCode.Escape))
	{
		IsBusy = false;
	}
	
	if(Hp <= 0)
	{
		IsAlive = false;
	}
	
	if(XP >= Level * 2)
	{
		Level += 1;
		Hp += 5;
		MaxHp += 5;
		Atk += 2 / Level;
		Fatigue += 1.5;
	}
}

function OnGUI()
{
	
}

function Attack()
{
	var Enemy : Collider2D = Physics2D.OverlapCircle(transform.position, 5.0f);
	var distance = Vector2.Distance(Enemy.transform.position, transform.position);
	
	if(Enemy.tag == "Enemy" && distance <= 1.0f)
	{
		Debug.Log("Attacking " + Enemy.name);
		Enemy.GetComponent(EnemyAI).Hp -= Atk;
	}
	
	else
	{
		return;
	}
}

function Hit() /////////////////////Add the effects of getting hit here!!  ////////////////////////////////////////////
{
	yield WaitForSeconds(0.1);
}

