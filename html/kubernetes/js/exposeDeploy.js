function exposeDeploy() {
    var a = document.getElementById('exposeDeployName').value;
    var b = document.getElementById('portNumber').value;
    var url = `http://192.168.99.101/cgi-bin/exposeDeploy.py?deployname=${a}&portnumber=${b}`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onload = function(){
        var op = xhr.responseText;
        var output = "Status : " + op;
        document.getElementById("op").innerHTML=output;
    }
  }