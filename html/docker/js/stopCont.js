function stopCont() {
    var a = document.getElementById('stopContName').value;
    var url = `http://192.168.99.101/cgi-bin/stopContainer.py?conname=${a}`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onload = function(){
        var op = xhr.responseText;
        var output = "Container stopped : " + op
        document.getElementById("op").innerHTML=output;
    }
  }