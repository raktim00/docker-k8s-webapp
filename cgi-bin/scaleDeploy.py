#!/usr/bin/python3
print("content-type: text/html")
print()

import cgi
import subprocess

F = cgi.FieldStorage()
deploy_name = F.getvalue("deployname")
replica_count = F.getvalue("replicacount")
output = subprocess.getoutput("sudo kubectl scale deploy {0} --replicas={1}".format(deploy_name,replica_count))
print("<pre>"+ output +"</pre")