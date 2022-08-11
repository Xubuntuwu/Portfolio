document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('content').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
        //    document.getElementById('interactive');
           document.getElementById('load').style.visibility="hidden";
           document.getElementById('content').style.visibility="visible";
           document.getElementById('content').style.display="block";
        },1000);
    }
}
