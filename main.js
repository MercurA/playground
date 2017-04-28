var botton = document.getElementById('btn')
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

function swipeEvent(x,y,z){
    var panelSwipe = document.getElementById(x);
    var upBotton = document.getElementById(y);
    var arrow = document.getElementById(z)
    if(panelSwipe.style.height == 100 + '%'){
        panelSwipe.style.height = 0;
        upBotton.style.top = 0;
        arrow.style.transform = 'rotate(0)';
       }else{
       panelSwipe.style.height = 100 + '%';
       upBotton.style.top = 90 + '%';
       arrow.style.transform = 'rotate(180deg)';
       }
}