var FlashingLight : Light;
var WaitTime : float;

var RangeMax : float = 10.0f;
var RangeMin : float = 5.0f;

var BrightnessMax : float = 4.0f;
var BrightnessMin : float = 2.88f;

var CanDamage = false;

function Update()
{
	Fire();
}

function Fire() 
{
	var RanNum = Random.Range(RangeMin, RangeMax);
	var Intinse = Random.Range(BrightnessMin, BrightnessMax);
	var Counter = Random.Range(1, WaitTime);
	
	if(Counter >= (.85 * WaitTime))
	{
		FlashingLight.range = RanNum;
		FlashingLight.intensity = Intinse;
	}
}

function OnTriggerStay(col : Collider)
{
	if( col.tag == "Player")
	{
		col.GetComponent("PlayerStats").hp -= Time.deltaTime * 10;
	}
}