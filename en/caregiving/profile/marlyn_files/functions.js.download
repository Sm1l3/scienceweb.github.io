function swapDisplay(theId)
{
	if($("#" + theId).css("display") == "block")
	{
		$("#" + theId).css("display", "none")
	}
	else
	{
		$("#" + theId).css("display", "block")
	}
}

activeTopic = "1";

function swapTopic(theId)
{
	if(theId != activeTopic)
	{
		x=1;
		while($("#topic" + x).length != 0)
		{
			$("#topic" + x).css("display", "none");
			$("#arrow" + x).css("display", "none");
			$("#a" + x).css("color", "#8BD7F7");
			x++;
		}
		
		$("#topic" + theId).css("display", "block");
		$("#arrow" + theId).css("display", "block");
		$("#a" + theId).css("color", "#ffffff");
		activeTopic = theId;
	}
}

function swapTopic_bc(theId)
{
	if(theId != activeTopic)
	{
		x=1;
		while($("#topic" + x).length != 0)
		{
			$("#topic" + x).css("display", "none");
			$("#arrow" + x).css("display", "none");
			$("#a" + x).css("color", "#B9E3BF");
			x++;
		}
		
		$("#topic" + theId).css("display", "block");
		$("#arrow" + theId).css("display", "block");
		$("#a" + theId).css("color", "#ffffff");
		activeTopic = theId;
	}
}


