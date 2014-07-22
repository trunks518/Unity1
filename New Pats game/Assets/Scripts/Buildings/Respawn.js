var Players : GameObject[];
var RespawnPointy : float;
var RespawnPointx : float;

function Start()
{
	RespawnPointx = transform.position.x;
	RespawnPointy = transform.position.y - 0.35f;
}

function Update()
{
	Players = GameObject.FindGameObjectsWithTag("Player");
	
	for(var p = 0; p < Players.length; p++)
	{
		if(Players[p].GetComponent(PlayerStats).IsAlive == false)
		{
			Players[p].transform.position.x = RespawnPointx;
			Players[p].transform.position.y = RespawnPointy;
			Players[p].GetComponent(PlayerStats).IsAlive = true;
			Players[p].GetComponent(PlayerStats).Hp = Players[p].GetComponent(PlayerStats).MaxHp;
		}
	}
}