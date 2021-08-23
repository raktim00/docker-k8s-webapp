#!/usr/bin/python3
print("content-type: text/html")
print()

import cgi
import subprocess

F = cgi.FieldStorage()
deploy_name = F.getvalue("deployname")
output = subprocess.getoutput("sudo kubectl delete deploy {0}".format(deploy_name))
print("<pre>"+ output +"</pre")