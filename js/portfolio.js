$(document).ready(function() {
	var overlay = document.getElementById('overlay');
	
	overlay.style.backgroundColor = "rgba(0,0,0,.8)";//"#000";
	//overlay.style.opacity = .8;
	overlay.style.position = "absolute";
	overlay.style.width = "100%";
	overlay.style.height = "100%";
	overlay.style.zIndex ="25";
	overlay.style.display = "none";
	overlay.className = "overlay";
	
	var iDiv = document.createElement("div");
	iDiv.style.width = "1200px";
	iDiv.style.height = "270px";
	iDiv.style.backgroundColor = "#fff";
	iDiv.style.zIndex = "27";
	iDiv.style.opacity = 1.0;
	iDiv.style.position = "fixed";
	iDiv.style.top = "30%";
	iDiv.style.left = "12%";
	iDiv.style.textAlign = "left";
	iDiv.id = "iDiv";
	
	var specialBox = document.createElement("div");
	specialBox.style.height = "100%";
	specialBox.style.width = "100%";
	specialBox.style.position = "absolute";
	specialBox.style.zIndex = "26";
	specialBox.id = "specialBox";
	
	specialBox.appendChild(iDiv);
	overlay.appendChild(specialBox);
});

$(document).ready(function() {
  $("#specialBox").click(toggleOverlay);
});

function toggleOverlay(portfolioName){
	var overlay = document.getElementById('overlay');
	var contentDiv = document.getElementById('iDiv');
	
	if(overlay.style.display == "block")
	{
		while (contentDiv.firstChild) {
    		contentDiv.removeChild(contentDiv.firstChild);
		}
		overlay.style.display = "none";
	} 
	else 
	{
		var content = getHtmlContent(portfolioName);
		contentDiv.appendChild(content);
		
		overlay.style.display = "block";
	}
}

function getHtmlContent(portfolioName)
{
	var contentDiv = document.createElement("div");
	contentDiv.style.height = "100%";
	contentDiv.style.width = "100%";
	contentDiv.style.padding = "5px";
	
	var image = document.createElement("img");
	image.align ="left";
	
	var infoDiv = document.createElement("div");
	infoDiv.style.marginLeft = "auto";
	infoDiv.style.marginRight = "0px";
	infoDiv.style.width = "840px";
	infoDiv.style.padding = "10px";
	
	var title = document.createElement("h1");
	title.style.fontSize = "30pt";
	title.style.fontWeight = "400";
	
	
	var subTitle = document.createElement("h2");
	subTitle.style.fontWeight = "200";
	subTitle.style.fontSize = "14pt";
	subTitle.style.padding = "5px";
	
	infoDiv.appendChild(title);
	infoDiv.appendChild(subTitle);
	
	switch(portfolioName)
	{
		case "RAH":		
			image.src = "images/RAH.png";
			title.textContent = "Remote Automated Horticulture";
			subTitle.textContent = "Control, monitor and automate your garden from anywhere";
			var para = document.createElement("p");
			para.innerHTML = "Repository:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a target=\"_blank\" href=\"https://bitbucket.org/DYGAZ/rah\">Bitbucket</a><br>Technology:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arduino, RaspberryPi, Android, <a target=\"_blank\"href=\"https://parse.com/\">Parse.com</a>, <a target=\"_blank\" href=\"http://pusher.com/\">Pusher.com</a>";
			infoDiv.appendChild(para);
			break;
		case "Quad":
			image.src = "images/quadcopter.jpg";
			title.textContent = "Quadcopter";
			subTitle.textContent = "Propelled by four motors and powered by a Beagle Bone Black";
			break;
		case "BFF":
			image.src = "images/RaspArdBFF.png";
			title.textContent = "Raspberry Pi & Arduino BFF";
			subTitle.textContent = "Control Arduino circuits from your RaspberryPi";
			break;
		case "CRM":
			image.src = "images/CRMWebIDE.PNG";
			title.textContent = "CRM Web IDE";
			subTitle.textContent = "Edit your GitHub repository from Google Chrome";
			break;
		case "PRVR":
			image.src = "images/prvrPort.png";
			title.textContent = "PRVR";
			subTitle.textContent = "Realtime graphics demonstration placed 2nd at The Gathering 2013";
			break;
		case "REM":
			image.src = "images/REM.png";
			title.textContent = "REM";
			subTitle.textContent = "Realtime graphics demonstration placed 3rd at The Gathering 2012";
			break;
		case "Nitesco":
			image.src = "images/nitesco.png";
			title.textContent = "Nitesco";
			subTitle.textContent = "Realtime graphics demonstration placed 5th at The Gathering 2011";
			break;
			
	}

	contentDiv.appendChild(image);
	contentDiv.appendChild(infoDiv);
	
	return contentDiv;
}

