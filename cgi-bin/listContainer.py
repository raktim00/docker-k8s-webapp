#!/usr/bin/python3
print("content-type: text/html")
print()

import subprocess
output = subprocess.getoutput("sudo docker ps -a")
print("<pre>"+ output +"</pre")