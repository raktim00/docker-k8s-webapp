function listCon() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.99.101/cgi-bin/listContainer.py", true);
    xhr.send();

    xhr.onload = function(){
        var op = xhr.responseText;
        document.getElementById("op").innerHTML=op;
    }
   
}