$(document).ready(function () {

	//Adds the black background and box to the page
	$("body").prepend("<div id='popupBox' class='popupDiv'></div>")
	$("body").append("<div id='backgroundPopup'></div>")
	
	//Disable on background click
	$("#backgroundPopup").click(function(e){  
		disablePopup(popupBox);  
	}); 

	//Esc Key
	$(document).keypress(function(e){  
		if(e.keyCode==27 && popupStatus==1){  
			disablePopup(popupBox); 
		}
	}); 
	
	
});

//SETTING UP OUR POPUP  
//0 means disabled; 1 means enabled;  
var popupStatus = 0; 

//loading popup
function loadPopup(theDiv){  
	//loads popup only if it is disabled  
	if(popupStatus==0)
	{
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$(theDiv).fadeIn("slow");
		popupStatus = 1;
	}
} 

//disabling popup
function disablePopup(theDiv){  
	//disables popup only if it is enabled  
	if(popupStatus==1)
	{
		$(theDiv).html("");  
		$("#backgroundPopup").fadeOut("slow");  
		$(theDiv).fadeOut("slow");  
		popupStatus = 0;  
	}
}

//centering popup  
function centerPopup(theDiv){  
	//request data for centering  
	var windowWidth = document.documentElement.clientWidth;  
	var windowHeight = document.documentElement.clientHeight;  
	var popupHeight = $(theDiv).height();  
	var popupWidth = $(theDiv).width();  
}


function shadowPopup(theId, theWidth, theHeight, theIframe) {
	activePopup = "#" + theId
	$html = $(activePopup).html();
	$width = theWidth + "px";
	$height = theHeight + "px";
	$marginL = (theWidth/2)*(-1) + "px";
	$marginT = (theHeight/2)*(-1) + "px";
	
	$("#popupBox").css("width", $width);
	$("#popupBox").css("height", $height);
	$("#popupBox").css("margin-left", $marginL);
	$("#popupBox").css("margin-top", $marginT);
	
	if(theIframe != undefined)
	{
		$("#popupBox").html("<a href='javascript:disablePopup(popupBox); void(0);' class='closeShadow'></a><div><iframe id='popupIframe' width='"+$width+"' height='"+$height+"' src='"+theIframe+"'></iframe></div>")
	}
	else
	{
		
		$("#popupBox").html("<a href='javascript:disablePopup(popupBox); void(0);' class='closeShadow'></a><div>" + $html + "</div>")
	}
	centerPopup("#popupBox");  
	loadPopup("#popupBox");  
}