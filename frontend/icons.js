// https://developers.google.com/maps/documentation/javascript/reference?hl=en#Icon
var Icon = function(svgPathName, size, color, rotation) {
    this.path = svgpaths[svgPathName]['path'];

    if (svgpaths[svgPathName].hasOwnProperty('width') && svgpaths[svgPathName].hasOwnProperty('height')) {
        var pathWidth = svgpaths[svgPathName]['width'];
        var pathHeight = svgpaths[svgPathName]['height'];
        var largerDim = pathWidth >= pathHeight ? pathWidth : pathHeight;

        this.anchor = new google.maps.Point(pathWidth / 2,
                                            pathHeight / 2);

        var intendedSize = size; // pixels
        this.scale = intendedSize / largerDim;
        if (svgpaths[svgPathName].hasOwnProperty('scale')) {
            this.scale *= svgpaths[svgPathName]['scale'];
        }
    } else if (svgpaths[svgPathName].hasOwnProperty('scale')) {
        this.scale = svgpaths[svgPathName]['scale'];
    }

    this.rotation = rotation;
    this.fillColor = color;

    //this.fillOpacity = 1;
    this.fillOpacity = 0.5;
    this.strokeColor = '#000000';
    this.strokeOpacity = 1;
    this.strokeWeight = 1;
};

var iconColors = {
    'red': '#dc322f',
    'blue': '#268bd2',
    'gray': '#b4b4b4'
}

var defaultSize = 30; // pixels
var icons = {
    'A-10C': {
        'red': new Icon('A-10C', defaultSize, '#dc322f', 0),
        'blue': new Icon('A-10C', defaultSize, '#268bd2', 0),
    },
    'Su-27': {
        'red': new Icon('Su-27', defaultSize, '#dc322f', 0),
        'blue': new Icon('Su-27', defaultSize, '#268bd2', 0),
    }
}

function categoryIcon(category) {
    // Return the proper svgPathName for this category.
    switch (category) {
        case 'air':
            return 'arrowhead';
        case 'ground': 
            return 'circle';
        case 'weapon':
            //return 'agm-65';
            return 'circle';
        default:
            return 'circle';
    }
}

function bestIcon(unitTypeObj) {
    // unitTypeObj is like {'level1': 1, 'level2': 1, 'level3': 6, 'level4': 58}
    var bestIcon = categoryIcon(unitCategory(unitTypeObj));

    var description = describe(unitTypeObj);
    if (svgpaths.hasOwnProperty(description)) {
        bestIcon = description;
    }

    // ES6 fuzzier matching (e.g. Maverick variants)
    for (pathName in svgpaths) {
        if (pathName.startsWith(description) || description.startsWith(pathName)) {
            if (svgpaths.hasOwnProperty(description)) {
                bestIcon = description;
            } else {
                bestIcon = pathName;
            }
            break;
        }
    }

    return bestIcon;
}

var coalitionColors = {
    'Allies': iconColors['red'],
    'Enemies': iconColors['blue'],
}

function coalitionColor(coalition) {
    if (coalitionColors.hasOwnProperty(coalition)) {
        return coalitionColors[coalition];
    }

    return iconColors['gray'];
}
