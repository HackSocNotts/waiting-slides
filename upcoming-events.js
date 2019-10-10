upcoming_events = [
	{
		"line1": "Saturday 12th October 1:00pm, A32:",
		"line2": "MLH Local Hack Day (Learn)",
		"line3": ""
	},
	{
		"line1": "Monday October 14th 6:00pm, Antenna:",
		"line2": "TechNottingham",
		"line3": "Depart from Exchange @ 17:45"
	},
	{
		"line1": "Tuesday October 15th 6:30pm:",
		"line2": "Intro to Linux",
		"line3": ""
	},
	{
		"line1": "Tuesday October 22nd 6:30pm:",
		"line2": "Cyber Security - Cross Site Scripting",
		"line3": ""
	}
]
for (i = 0; i < upcoming_events.length; i++) {
	upcoming_events[i] = {
		"line1": upcoming_events[i].line1.replace("@", "<span style=\"font-family: 'Arial', sans-serif;\">@</span>"),
		"line2": upcoming_events[i].line2.replace("@", "<span style=\"font-family: 'Arial', sans-serif;\">@</span>"),
		"line3": upcoming_events[i].line3.replace("@", "<span style=\"font-family: 'Arial', sans-serif;\">@</span>")
	};
}