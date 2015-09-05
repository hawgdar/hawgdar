import bottle
import Queue
from threading import Thread
import requests

app = bottle.default_app()

q = Queue.Queue()

@bottle.post('/proxy')
def proxy():
    # Read HTTP POST request, put it in the queue, and return (quickly).
    body = dict(bottle.request.forms)
    q.put(body)

def queue_consumer(queue):
    print "Started queue consumer thread"
    while True:
        body = queue.get() # blocks until something's there
        url = "https://hawgdar.com/data"
        r = requests.post(url, data=body)

if __name__ == '__main__':
    th = Thread(target=queue_consumer, args=(q,))
    th.daemon = True
    th.start()
    bottle.run(app, host='0.0.0.0', port=8080)
