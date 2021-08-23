#!/usr/bin/python3
print("content-type: text/html")
print()

import cgi
import subprocess

F = cgi.FieldStorage()
pod_name = F.getvalue("podname")
output = subprocess.getoutput("sudo kubectl delete po {0}".format(pod_name))
print("<pre>"+ output +"</pre")