import time
from concurrent.futures import thread

import requests
import redis

r = redis.StrictRedis(host='localhost', port=6379, db=0)

INLINE = "inline"
WATING = "waiting"
WORKING = "working"
SUCCESS = "success"
FAIL = "fail"

waitMark = {}

def queryEnable(city, yimiaoName):
    return

def waitForEnableAndQiang(key):
    if waitMark[key]:
        return
    else:
        waitMark[key] = True
    keys = key.split("_")
    idCard = keys[1]
    city = keys[2]
    yimiaoName = keys[3]
    while queryEnable:
        pass
    r.set(key, WORKING)
    result = qiang(city, yimiaoName)
    if result:
        r.set(key, SUCCESS)
    else:
        r.set(key, FAIL)


def qiang(key):
    result = False
    while True:
        pass
    return result

def handle(status, key):
    if status == INLINE:
        r.set(key, WATING)
        return
    if status == WATING:
        waitForEnableAndQiang(key)
        return
    if status == WORKING:
        return
    if status == SUCCESS:
        return
    if status == FAIL:
        return

while True:
    keys = r.keys("JOB*")
    for key in keys:
        thread.start_new_thread(handle, str(r.get(key))[2:-1], key)
    time.sleep(0.01)

if __name__ == '__main__':
    pass