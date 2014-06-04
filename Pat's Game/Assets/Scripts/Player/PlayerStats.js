#pragma strict
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

	////////GUI Start////////
	var _hp : GUIText;
	var _atk : GUIText;
	var _cFatigue : GUIText;
	var ShowInventory = false;
	/////////GUI End/////////
		
var Inventory : ArrayList;
var Hp : float = 100.0f;
var Atk : float = 1.0f;
var Fatigue : float = 10.0f;
var Cfatigue : float;   ////Current Fatigue; goes Down while shift is pressed.

function Start() 
{
	Cfatigue = Fatigue;
	Inventory = new ArrayList();
}


function Update()
{
	////////GUI Start////////
	_hp.text = Hp.ToString();
	_atk.text = Atk.ToString();
	_cFatigue.text = Cfatigue.ToString();
	/////////GUI End/////////
	
	if(Hp <= 0)
	{
		Destroy(this.gameObject);
	}
}

function OnGUI()
{
	
}


