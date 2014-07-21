using UnityEngine;
using System.Collections;

public class DayNight1 : MonoBehaviour 
{
	public enum TimeOfDay
	{
		Idle,
		SunRise,
		SunSet,
	}

	public Transform[] sun;
	public float dayCycleInMinutes = 1;
	public float sunRise;
	public float sunSet;
	public float SkyboxBlend;

	public Color ambLightMax;		// These two hold ambient lighting colors for morning - night.
	public Color ambLightMin;		//

	public float MorningLights;
	public float EveningLights;
	private bool _isMorning = false;

	private const float SECOND = 1;
	private const float MINUTE = 60 * SECOND;
	private const float HOUR = 60 * MINUTE;
	private const float DAY = 24 * HOUR;

	private SunLight[] _sunScript;
	private const float DEGREES_PER_SECOND = 360 /DAY;
	private float _dayCycleInSeconds;

	private float _dgreeRotation;
	private float _timeOfDay;

	private TimeOfDay _tod;
	private float _noon;

	private float _morninglength;
	private float _eveninglength;

	// Use this for initialization
	void Start () 
	{
		_sunScript = new SunLight[sun.Length];

		for(int cnt = 0; cnt < sun.Length; cnt++)
		{
			SunLight temp = sun[cnt].GetComponent<SunLight>();

			if(temp == null)
			{
				Debug.LogWarning("No SunLight found.  Adding now!");
				sun[cnt].gameObject.AddComponent<SunLight>();
				temp = sun[cnt].GetComponent<SunLight>();
			}
			_sunScript[cnt] = temp;
		}

		_tod = TimeOfDay.Idle;
		_dayCycleInSeconds = dayCycleInMinutes * MINUTE;

		RenderSettings.skybox.SetFloat("_Blend", 0);
		_timeOfDay = 0;
		_dgreeRotation = DEGREES_PER_SECOND * DAY  / (_dayCycleInSeconds);

		sunRise *= _dayCycleInSeconds;
		sunSet *= _dayCycleInSeconds;
		_noon = _dayCycleInSeconds / 2;
		_morninglength = _noon - sunRise;
		_eveninglength = sunSet - _noon;
		MorningLights *= _dayCycleInSeconds;
		EveningLights *= _dayCycleInSeconds;

		Lighting();
	}
	
	// Update is called once per frame
	void Update () 
	{
		_timeOfDay += Time.deltaTime;

		for(int cnt = 0; cnt < sun.Length; cnt++)
		{
			sun[cnt].Rotate( new Vector3(_dgreeRotation, 0, 0) * Time.deltaTime);
		}

		if(_timeOfDay > _dayCycleInSeconds)
			_timeOfDay -= _dayCycleInSeconds;


		if(_timeOfDay > sunRise && _timeOfDay < _noon)
			AdjustLighting(true);

		else if (_timeOfDay > _noon && _timeOfDay < sunSet)
			AdjustLighting(false);

		if (_timeOfDay > sunRise && _timeOfDay < sunSet && RenderSettings.skybox.GetFloat("_Blend") < 1)
		{
			_tod = DayNight1.TimeOfDay.SunRise;
			BlendSky();
		}

		else if (_timeOfDay > sunSet && RenderSettings.skybox.GetFloat("_Blend") > 0)
		{
			_tod = DayNight1.TimeOfDay.SunSet;
			BlendSky();
		}

		else
		{
			_tod = DayNight1.TimeOfDay.Idle;
		}

//		Debug.Log (_timeOfDay);
//		Debug.LogWarning (_tod);
	}

	private void BlendSky()
	{
		float temp = 0; 

		switch (_tod)
		{
		case TimeOfDay.SunRise:
			temp = (_timeOfDay - sunRise) / _dayCycleInSeconds * SkyboxBlend;
			break;
		case TimeOfDay.SunSet:
			temp = (_timeOfDay - sunSet) / _dayCycleInSeconds * SkyboxBlend;
			temp = 1 - temp;
			break;
		}

		RenderSettings.skybox.SetFloat("_Blend",temp);
	}

	private void Lighting()
	{
		RenderSettings.ambientLight = ambLightMin;

		for (int cnt = 0; cnt < _sunScript.Length; cnt++)
		{
			if(_sunScript[cnt].giveLight)
			{
				sun[cnt].GetComponent<Light>().intensity = _sunScript[cnt].minLight;
			}
		}
	}

	private void AdjustLighting(bool brighten)
	{
		float pos = 1;

		if(brighten)
		{
			pos = (_timeOfDay - sunRise) / _morninglength;
			for (int cnt = 0; cnt < _sunScript.Length; cnt++)
			{
				_sunScript[cnt].GetComponent<Light>().intensity = _sunScript[cnt].minLight;
			//	_sunScript[0].giveLight = true;
			}
		}

		else
		{
			pos = (_timeOfDay - sunSet) / _eveninglength;
			for (int cnt = 0; cnt < _sunScript.Length; cnt++)
			{
				_sunScript[cnt].GetComponent<Light>().intensity = _sunScript[cnt].maxLight;
			//	_sunScript[0].giveLight = false;
			}
		}

	    // blends ambient colors to make lighting effects.
		RenderSettings.ambientLight = new Color ( ambLightMin.r + ambLightMax.r * pos,
		                                          ambLightMin.g + ambLightMax.g * pos,
		                                          ambLightMin.b + ambLightMax.b * pos );

		for(int cnt = 0; cnt < _sunScript.Length; cnt++)
		{
			if(_sunScript[cnt].giveLight)
			{
				_sunScript[cnt].GetComponent<Light>().intensity = _sunScript[cnt].maxLight * pos;
			}
		}
	}
}
