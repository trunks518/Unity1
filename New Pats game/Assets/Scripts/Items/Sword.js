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
		for(var i = 0; i < col.GetComponent(InventorySys).Inventory.length; i++)
		{
			//Debug.Log("Looping through the Inventory.");
		
			if(col.GetComponent(InventorySys).Inventory[i] == null)
			{
				//Debug.Log("Found a null Inventory slot!");				
				col.GetComponent(InventorySys).Inventory[i] = this.gameObject.name;
				break;
			}
		}
		
		_player = col.gameObject;
		//Debug.Log(_player.name);
		Destroy(this.gameObject);
	}
	
}

function Equip()
{
	_player.GetComponent(PlayerStats).Atk += atkP;
}

function UnEquip()
{
	_player.GetComponent(PlayerStats).Atk -= atkP;
}