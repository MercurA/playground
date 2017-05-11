//This will be the event to slide the menu in/out
//from the left side
function clickEvent(x,y,z){
    var panel = document.getElementById(x);
    var botton = document.getElementById(y);
    var list = document.getElementById(z);
    if(panel.style.width == 200 + 'px'){
        panel.style.width = 0;
        botton.style.left = 0;
        list.style.transform = 'translateX(-200px)'
        
    }else{
        panel.style.width = 200 + 'px';
        botton.style.left = 200 + 'px';
        list.style.transform = 'translateX(0)'
    }
}
//function dedicated for the swipe butoon on the top
//Once clicked it will go down and be clickable again
//to go back up
//The idea is to insert a background in the near  future
function swipeEvent(x,y,z,t){
    var panelSwipe = document.getElementById(x);
    var upBotton = document.getElementById(y);
    var arrow = document.getElementById(z);
	var text = document.getElementById(t);
    if(panelSwipe.style.height == 100 + '%'){
        panelSwipe.style.height = 0;
        upBotton.style.top = 0;
        arrow.style.transform = 'rotate(0)';
		text.style.top = '-200px'
		text.style.opacity = 0;
       }else{
       panelSwipe.style.height = 100 + '%';
       upBotton.style.top = 90 + '%';
       arrow.style.transform = 'rotate(180deg)';
	   text.style.top = '50%';
	   text.style.opacity = 1;
       }
}