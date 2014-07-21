using UnityEngine;
using System.Collections;

public class PlayerStats : MonoBehaviour {

	public float Gold = 0.0f;
	public float hp;
	public string Quest = "";
	public bool hasQuest = false;

	public float ZoomTime = 10.0f;
	public Camera zoomed;
	public Camera mainCameraPoint;

	//public Transform z;
	//public Transform m;

	private bool showDeBug = false;

	// Use this for initialization
	void Start ()
	{
		hp = 100.0f;
	}
	
	// Update is called once per frame
	void Update ()
	{
		if( hp <= 0)
		{
			Debug.Log ("Player died");
			hp = 100.0f;
		}

		CheckZoom();
	}

	void CheckZoom()
	{
		RaycastHit hit;
		Ray ray = new Ray(transform.position, Vector3.forward);

		if(Input.GetMouseButton(1))
		{
			Debug.Log ("Fire1");
			mainCameraPoint.enabled = false;
			zoomed.enabled = true;
		}
		else 
		{
			Debug.Log ("Fire2");
			zoomed.enabled = false;
			mainCameraPoint.enabled = true;
		}
	}

	void OnGUI()
	{
		if(hasQuest)
		{
			GUI.Box(new Rect(Screen.width * 0, Screen.height * 0,  150, 25), Quest);
		}
	}
}
