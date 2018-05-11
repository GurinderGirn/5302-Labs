//Play/Pause Solar System Animation
function playPauseToggle(){
	//mercury
	var mercury = document.getElementsByClassName("mercury")[0];
    mercury.classList.toggle('pause');
	//venus
	var venus = document.getElementsByClassName("venus")[0];
    venus.classList.toggle('pause');
	//earth
	var earth = document.getElementsByClassName("earth")[0];
    earth.classList.toggle('pause');
	//moon
	var moon = document.getElementsByClassName("moon")[0];
    moon.classList.toggle('pause');
	//mars
	var mars = document.getElementsByClassName("mars")[0];
    mars.classList.toggle('pause');
	//jupiter
	var jupiter = document.getElementsByClassName("jupiter")[0];
    jupiter.classList.toggle('pause');
	//saturn
	var saturn = document.getElementsByClassName("saturn")[0];
    saturn.classList.toggle('pause');
	//uranus
	var uranus = document.getElementsByClassName("uranus")[0];
    uranus.classList.toggle('pause');
	//neptune
	var neptune = document.getElementsByClassName("neptune")[0];
    neptune.classList.toggle('pause');
}
//Day and Night simulation
function dayNightToggle()
{
	//change background color of whole body
	var htmlBack = document.getElementsByClassName("wrapper")[0];
	 htmlBack.classList.toggle("day");
	
	// toggle moon and sun
	var getSunMoon =  document.getElementsByClassName("sunORmoon")[0];
	getSunMoon.classList.toggle("sunMoon");
	
	
	//get buttons
	var getPlaybtn = document.getElementsByClassName("playpause")[0];
	getPlaybtn.classList.toggle("btnDay");
	var getSimulate = document.getElementsByClassName("daynight")[0];
	getSimulate.classList.toggle("btnDay");
	
	//get hover over me circle
	var getCircle = document.getElementsByClassName("circle");
	for(var i=0;i<4;i++)
	{
	getCircle[i].classList.toggle("btnDay"); 
	}
	
	//change color of solar system description links
	var getlink = document.getElementsByClassName("a-link");
	for(var j=0;j<9 ;j++)
	{
	getlink[j].classList.toggle("linkDay");
	}
	
	//get text description paragragh
	   for(var m=0;m<9;m++)
	    {
	      var getPara = document.getElementsByClassName("para-text");
	      getPara[m].classList.toggle("pDay");
		}
	//get solar system circle
	getDottedCircle = document.getElementsByClassName("dottedCircle");
	for(var k=0;k<8;k++)
	{
		getDottedCircle[k].classList.toggle("solarCircle");
	}
	
}
