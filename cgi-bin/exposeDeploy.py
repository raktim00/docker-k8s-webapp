#!/usr/bin/python3
print("content-type: text/html")
print()

import cgi
import subprocess

F = cgi.FieldStorage()
deploy_name = F.getvalue("deployname")
port_number = F.getvalue("portnumber")
output = subprocess.getoutput("sudo kubectl expose deploy {0} --port={1} --type=NodePort".format(deploy_name,port_number))
print("<pre>"+ output +"</pre")