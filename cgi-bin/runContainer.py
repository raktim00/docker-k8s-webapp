#!/usr/bin/python3
print("content-type: text/html")
print()

import cgi
import subprocess

F = cgi.FieldStorage()
con_name = F.getvalue("conname")
img_name = F.getvalue("imgname")
output = subprocess.getoutput("sudo docker run -d --name {0} {1}".format(con_name,img_name))
if "Error" in output:
    print(con_name + " already in use.")
else:
    print(output + " contaniner launched successfully.")