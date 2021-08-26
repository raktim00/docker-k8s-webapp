function createPod() {
    var a = document.getElementById('createPodName').value;
    var b = document.getElementById('createPodImgName').value;
    var url = `http://192.168.99.101/cgi-bin/createPod.py?podname=${a}&imgname=${b}`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onload = function(){
        var op = xhr.responseText;
        var output = "Status : " + op;
        document.getElementById("op").innerHTML=output;
    }
  }