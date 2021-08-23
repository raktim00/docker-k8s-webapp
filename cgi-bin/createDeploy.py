#!/usr/bin/python3
print("content-type: text/html")
print()

import cgi
import subprocess

F = cgi.FieldStorage()
deploy_name = F.getvalue("deployname")
img_name = F.getvalue("imgname")
output = subprocess.getoutput("sudo kubectl create deploy {0} --image={1}".format(deploy_name,img_name))
print("<pre>"+ output +"</pre")