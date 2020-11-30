
function funk() {
    var btn = document.getElementById('btn');
    var nav = document.getElementById('nav');
    
    if(btn.classList.length == 1 || btn.classList[1] == 'button-unclicked'){
        btn.classList.remove('button-unclicked');
        nav.classList.remove('hide');
        
        btn.classList.add('button-clicked');
        nav.classList.add('show');
    }
    else {
        btn.classList.remove('button-clicked');
        nav.classList.remove('show');
        
        btn.classList.add('button-unclicked');
        nav.classList.add('hide');
    }
}



function big(){
    var src = event.target.getAttribute('src');
    var popup = document.getElementById("myPopup");
    popup.style.visibility = "visible";

    var img = document.createElement("IMG");
    img.src = src;
    img.id = "img";

    popup.appendChild(img);
}

function small(){
    var popup = document.getElementById("myPopup");
    var img = document.getElementById('img');
    popup.style.visibility = "hidden";
    popup.removeChild(img);
}
   

function GotoPers(event){
    var persPage = event.target.id.toString();
    console.log(persPage);
    persPage = persPage + ".html"
    document.location.href = persPage;
}