#!/usr/bin/python3
print("content-type: text/html")
print()

import cgi
import subprocess

F = cgi.FieldStorage()
pod_name = F.getvalue("podname")
img_name = F.getvalue("imgname")
output = subprocess.getoutput("sudo kubectl run {0} --image={1}".format(pod_name,img_name))
print("<pre>"+ output +"</pre")