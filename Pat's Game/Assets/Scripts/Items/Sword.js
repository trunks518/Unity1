#pragma strict
var atkP : float = 2.0f;

function Start() 
{

}

function OnTriggerEnter2D(col : Collider2D) 
{
	if(col.tag == "Player")
	{
		Debug.Log("Player touched this sword!");
		col.GetComponent(PlayerStats).Inventory.Add(this.gameObject);
	}
	
	Destroy(this.gameObject);
}