// https://developers.google.com/maps/documentation/javascript/reference?hl=en#Icon
var Icon = function(svgPathName, size, color, rotation) {
    this.path = svgpaths[svgPathName]['path'];
    var pathWidth = svgpaths[svgPathName]['width'];
    var pathHeight = svgpaths[svgPathName]['height'];
    var largerDim = pathWidth >= pathHeight ? pathWidth : pathHeight;

    this.anchor = new google.maps.Point(pathWidth / 2,
                                        pathHeight / 2);

    var intendedSize = size; // pixels
    this.scale = intendedSize / largerDim;

    this.rotation = rotation;
    this.fillColor = color;

    this.fillOpacity = 1;
    this.strokeColor = '#000000';
    this.strokeOpacity = 1;
    this.strokeWeight = 1;
};

var iconColors = {
    'red': '#dc322f',
    'blue': '#268bd2'
}

var defaultSize = 30; // pixels
var icons = {
    'a-10c': {
        'red': new Icon('a-10c', defaultSize, '#dc322f', 0),
        'blue': new Icon('a-10c', defaultSize, '#268bd2', 0),
    },
    'su-27': {
        'red': new Icon('su-27', defaultSize, '#dc322f', 0), // for now, until i get the su-27 path
        'blue': new Icon('su-27', defaultSize, '#268bd2', 0),
    }
}
