﻿#pragma strict
var Items : GameObject[];
var item : int;
var Position : Vector3;

function Start() 
{
	Position = transform.position;
	item = Random.Range(0, 10);
	SpawnItem();
}

function SpawnItem() 
{
	if(item == 0)
	{
		var go : GameObject = GameObject.Instantiate(Items[0]);
		go.transform.position = Position;
	}
}