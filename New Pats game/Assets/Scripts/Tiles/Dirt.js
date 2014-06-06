#pragma strict
var timer : float; 
var _time : float;
var Grass : GameObject;
var Position : Vector2;

function Start()
{
	timer = Random.Range(60.0f, 80.0f);
	Position = this.transform.position;
}

function Update()
{
	 _time += Time.deltaTime;
	
	if(_time >= timer)
	{
		var go : GameObject = GameObject.Instantiate(Grass);
		go.transform.position = Position;
		Destroy(this.gameObject);
	}
}