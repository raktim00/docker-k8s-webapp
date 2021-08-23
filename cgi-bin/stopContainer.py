#!/usr/bin/python3
print("content-type: text/html")
print()

import cgi
import subprocess

F = cgi.FieldStorage()
con_name = F.getvalue("conname")
output = subprocess.getoutput("sudo docker stop {0}".format(con_name))
print("<pre>"+ output +"</pre")