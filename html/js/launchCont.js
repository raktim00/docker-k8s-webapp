function launchCont() {
    var a = document.getElementById('conName').value;
    var b = document.getElementById('imgName').value;
    var url = `http://192.168.99.101/cgi-bin/runContainer.py?conname=${a}&imgname=${b}`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onload = function(){
        var op = xhr.responseText;
        var output = "Container launched : " + op
        document.getElementById("op").innerHTML=output;
    }
  }