// https://developers.google.com/maps/documentation/javascript/reference?hl=en#Icon
var Icon = function(url) {
    this.url = url;
    //this.size = new google.maps.Size(48, 48);
    this.origin = new google.maps.Point(0, 0);
    this.anchor = new google.maps.Point(24, 24);
    this.scaledSize = new google.maps.Size(48, 48);
};

var icons = {
    'a-10c': {
        'red': new Icon('icons/a-10c_red.svg'),
        'blue': new Icon('icons/a-10c_blue.svg'),
    },
    'su-27': {
        'red': new Icon('icons/su-27_red.svg'),
        'blue': new Icon('icons/su-27_blue.svg'),
    }
}
