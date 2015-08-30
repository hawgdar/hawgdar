// All the icons I've created so far are 48x48 with the anchor at the center.
// TODO: Consider using sprites?

// https://developers.google.com/maps/documentation/javascript/reference?hl=en#Icon
var Icon = function(url) {
    this.url = url;
    this.size = new google.maps.Size(48, 48);
    this.origin = new google.maps.Point(0, 0);
    this.anchor = new google.maps.Point(24, 24);
};

var icons = {
    'a-10c': {
        'red': new Icon('icons/icon_a-10c_red.png'),
        'blue': new Icon('icons/icon_a-10c_blue.png'),
    },
    'su-27': {
        'red': new Icon('icons/icon_su-27_red.png'),
        'blue': new Icon('icons/icon_su-27_blue.png'),
    }
}
