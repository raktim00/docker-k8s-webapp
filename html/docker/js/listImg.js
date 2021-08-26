function listImg() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.99.101/cgi-bin/listImage.py", true);
    xhr.send();

    xhr.onload = function(){
        var output = xhr.responseText;
        document.getElementById("op").innerHTML=output;
    }
   
}