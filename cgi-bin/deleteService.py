#!/usr/bin/python3
print("content-type: text/html")
print()

import cgi
import subprocess

F = cgi.FieldStorage()
svc_name = F.getvalue("svcname")
output = subprocess.getoutput("sudo kubectl delete svc {0}".format(svc_name))
print("<pre>"+ output +"</pre")