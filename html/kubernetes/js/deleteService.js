function deleteService() {
    var a = document.getElementById('deleteServiceName').value;
    var url = `http://192.168.99.101/cgi-bin/deleteService.py?svcname=${a}`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onload = function(){
        var op = xhr.responseText;
        var output = "Status : " + op
        document.getElementById("op").innerHTML=output;
    }
  }