function runCont() {
    var a = document.getElementById('runConName').value;
    var url = `http://192.168.99.101/cgi-bin/startContainer.py?conname=${a}`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onload = function(){
        var op = xhr.responseText;
        var output = "Container started : " + op
        document.getElementById("op").innerHTML=output;
    }
  }