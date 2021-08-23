#!/usr/bin/python3
print("content-type: text/html")
print()

import subprocess
output = subprocess.getoutput("sudo kubectl get pods")
print("<pre>"+ output +"</pre")