function removeCont() {
    var a = document.getElementById('removeContName').value;
    var url = `http://192.168.99.101/cgi-bin/removeContainer.py?conname=${a}`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onload = function(){
        var op = xhr.responseText;
        var output = "Container removed : " + op
        document.getElementById("op").innerHTML=output;
    }
  }