using UnityEngine;
using System.Collections;

public class Quest1 : MonoBehaviour {

	public GameObject player;
	public float lookRange;
	public float dist = 10.0f;
	bool questAcepted = false;
	float cTime = 10.0f;
	public float coolDown;
	string text;

	// Use this for initialization
	void Start ()
	{
		if(player == null)
		{
			player = GameObject.Find ("First Person Controller");
		}
	}
	
	// Update is called once per frame
	void Update ()
	{
		dist = Vector3.Distance(player.transform.position, transform.position);
	
		if(coolDown > cTime)
		{
			coolDown -= Time.deltaTime;
		}

		else
		{
			coolDown = 0.0f;
		}
	}

	void OnGUI()
	{
		if(dist <= lookRange && coolDown == 0.0f && questAcepted == false)
		{
			text = "Sailor will you grab the supplies off the ship for me?";
			GUI.Box(new Rect(10,10,320,25), text);
			if(GUI.Button(new Rect(10, 40, 50, 25), "Yes"))
			{
				questAcepted = true;
				text = "Thanks";
				coolDown = cTime;
				player.GetComponent<PlayerStats>().Quest = "Fetch Supplies";
				player.GetComponent<PlayerStats>().hasQuest = true;
			}
			if(GUI.Button(new Rect(80, 40, 50, 25), "No"))
			{
				GUI.Box(new Rect(50,50,200,25), "Too bad");
				coolDown = cTime;
			}
		}
//
//		if(dist <= lookRange && coolDown == 0.0f && questAcepted == true)
//		{
//			GUI.Box(new Rect(10,10,200,25), "Did you get the supplies yet?");
//			if(GUI.Button(new Rect(10, 40, 50, 25), "Yes"))
//			{
//				questAcepted = false;
//				coolDown = cTime;
//			}
//			if(GUI.Button(new Rect(80, 40, 50, 25), "No"))
//			{
//				GUI.Box(new Rect(10,10,200,25), "Get going then!");
//				coolDown = cTime;
//			}
//		}
	}
}
