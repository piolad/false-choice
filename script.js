good_choice_div = document.getElementById("good_choice_div");
btn2 = document.getElementById('btn2');
mouse_over_btn1 = false;

function open_good_choice(){
    good_choice_div.setAttribute('style', 'display: block;')
}

function close_good_choice(){
    good_choice_div.setAttribute('style', 'display: none;')
}
function btn1_mouse_status(n){
    mouse_over_btn1  =n;
}


//=======
//copied from user brainjam from stack overflow:
function getNumericStyleProperty(style, prop){
    return parseInt(style.getPropertyValue(prop),10) ;
}

function element_position(e) {
    var x = 0, y = 0;
    var inner = true ;
    do {
        x += e.offsetLeft;
        y += e.offsetTop;
        var style = getComputedStyle(e,null) ;
        var borderTop = getNumericStyleProperty(style,"border-top-width") ;
        var borderLeft = getNumericStyleProperty(style,"border-left-width") ;
        y += borderTop ;
        x += borderLeft ;
        if (inner){
        var paddingTop = getNumericStyleProperty(style,"padding-top") ;
        var paddingLeft = getNumericStyleProperty(style,"padding-left") ;
        y += paddingTop ;
        x += paddingLeft ;
        }
        inner = false ;
    } while (e = e.offsetParent);
    return { x: x, y: y };
}
//===============================================================================

function tp_btn2(){

    var body = document.body,
    html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                    html.clientHeight, html.scrollHeight, html.offsetHeight );
    var width = Math.max( body.scrollWidth, body.offsetWidth,
                    html.clientWidth, html.scrollWidth, html.offsetWidth);

    top_size = Math.random() * height-20-50;
    left_size = Math.random() * width-10-125;
    
    btn2.setAttribute('style', ("top:"+top_size+"px; left:"+left_size+"px;"));
}

addEventListener('mousemove', (e)=>{
    pos = element_position(btn2);
    pos_difference = {x: e.pageX- pos.x - btn2.offsetWidth/2, y: e.pageY- pos.y-btn2.offsetHeight/2};
    
    distance = Math.sqrt( Math.pow(pos_difference.x, 2) + Math.pow(pos_difference.y, 2));


    max_size_btn2 = btn2.offsetWidth < btn2.offsetHeight ? btn2.offsetWidth : btn2.offsetHeight;
    if((distance < 1.4*max_size_btn2)&&!mouse_over_btn1){
        tp_btn2();
    }
});