#!/usr/bin/python3
print("content-type: text/html")
print()

import cgi
import subprocess

F = cgi.FieldStorage()
con_name = F.getvalue("conname")
cmd_name = F.getvalue("cmdname")
output = subprocess.getoutput("sudo docker exec {0} {1}".format(con_name,cmd_name))
print("<pre>"+ output +"</pre")