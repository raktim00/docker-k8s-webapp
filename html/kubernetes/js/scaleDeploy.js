function scaleDeploy() {
    var a = document.getElementById('scaleDeployName').value;
    var b = document.getElementById('replicaCount').value;
    var url = `http://192.168.99.101/cgi-bin/scaleDeploy.py?deployname=${a}&replicacount=${b}`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onload = function(){
        var op = xhr.responseText;
        var output = "Status : " + op;
        document.getElementById("op").innerHTML=output;
    }
  }