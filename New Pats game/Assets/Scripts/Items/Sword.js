#pragma strict
var _player : GameObject;
var atkP : float = 2.0f;
var BuyPrice : float = 10.0f;
var SellPrice : float = 7.0f;

function OnTriggerEnter2D(col : Collider2D) 
{
	if(col.tag == "Player")
	{
		//Debug.Log("Picked up a sword!");
		col.GetComponent(PlayerStats).Inventory.Add(this.gameObject);
		_player = col.gameObject;
		//Debug.Log(_player.name);
	}
	gameObject.SetActive(false);;
}

function Equip()
{
	_player.GetComponent(PlayerStats).Atk += atkP;
}

function UnEquip()
{
	_player.GetComponent(PlayerStats).Atk -= atkP;
}