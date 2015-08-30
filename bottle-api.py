#!/usr/bin/env python

import bottle
from datetime import datetime, timedelta
import json
from pprint import pprint

app = bottle.default_app()

latest_data = {}
latest_gather_time = None
timeout = timedelta(seconds=5)

@bottle.get('/hawgdar/')
def index():
    return static('index.html')

@bottle.get('/hawgdar/data')
def report_data():
    global latest_data, latest_gather_time
    if latest_gather_time is None:
        #return {} # It's already {}
        pass
    elif latest_gather_time + timeout < datetime.now():
        print "[DEBUG] Marker timed out"
        latest_data = {}
        latest_gather_time = None

    print "[DEBUG] Reporting latest data: {}; gathered at {}".format(latest_data, latest_gather_time)
    return latest_data

@bottle.post('/hawgdar/data')
def update_data():
    print
    for item in bottle.request.body:
        print item
    print
    global latest_data, latest_gather_time

    player_id = bottle.request.forms.get('player_id')
    full_details_str = bottle.request.forms.get('full_details')
    try:
        print full_details_str
        full_details = json.loads(full_details_str)
        pprint(full_details)
    except:
        print 'Unable to deserialize json'
        pass

    latest_data = {'player_id': player_id, 'full_details': full_details}
    latest_gather_time = datetime.now()
    print "[DEBUG] Updated latest data: {}".format(latest_data)

@bottle.get('/hawgdar/<filename:re:.*\.(js|css|html|json|png|svg)>')
def static(filename):
    return bottle.static_file(filename, root='frontend')

if __name__ == '__main__':
    bottle.run(app=app, host='0.0.0.0', port=8080)
