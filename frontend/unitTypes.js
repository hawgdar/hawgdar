// From wsTypes.lua

var unitTypes = [
    // Number values aren't necessarily contiguous, hence the use of objects
    {
        // level 1
        '1': 'air',
        '2': 'ground',
        '3': 'navy',
        '4': 'weapon',
        '5': 'static',
        '6': 'destroyed'
    },
    {
        // level 2
        '1': 'airplane',
        '2': 'helicopter',
        '3': 'free fall',
        '4': 'missile',
        '5': 'bomb',
        '6': 'shell',
        '7': 'rockets',
        '8': 'moving',
        '9': 'standing',
        //'10': 'blank',
        //'11': 'blank',
        '12': 'ship',
        '13': 'airport',
        '14': 'explosion',
        '15': 'container',
        '16': 'SAM',
        '17': 'tank',
        '18': 'airport part',
        '19': 'wing part'
    },
    {
        '1': 'fighter',
        '2': 'bomber',
        '3': 'interceptor',
        '4': 'strategic bomber',
        '5': 'cargo',
        '6': 'attacker'
    }
];

// This one actually has well-behaved indices
var aircraft = [
    '', // they start indexing at 1
    'MiG-23', 'MiG-29', 'Su-27', 'Su-33',
    'F-14', 'F-15', 'F-16', 'MiG-25', 'MiG-31',
    'F-2', 'MiG-27', 'Su-24', 'Su-30', 'F/A-18',
    'F-111', 'Su-25', 'A-10A', 'Tu-160', 'B-1',
    'Su-34', 'Tu-95', 'Tu-142', 'B-52', 'MiG-25P',
    'Tu-22M3', 'A-50', 'E-3', 'IL-78', 'KC-10',
    'IL-76', 'C-130', 'MIG-29K', 'S-3R', 'Mirage',
    'Tu-143', 'Tu-141', 'F-117', 'Su-39', 'AN-26B',
    'AN-30M', 'E-2C', 'S-3A', 'AV-8B', 'EA-6B',
    'F-4E', 'F-5E', 'C-17', 'SU-17M4', 'MiG-29G',
    'MiG-29C', 'Su-24MR', 'F-16A', 'F/A-18C', 'Su-25T',
    'RQ-1A Predator', 'Tornado IDS', 'Yak-40', 'A-10C', 'F-15E',
    'KC-135', 'L-39ZA', 'P-51B', 'P-51D', 'TF-51D'
];

function describeIcon(unitTypeObj) {
    // unitTypeObj is like {'level1': 1, 'level2': 1, 'level3': 6, 'level4': 58}
    //var bestIcon = 'arrowhead';
    var bestIcon = 'circle';
    return bestIcon;
}

function describe(unitTypeObj) {
    // unitTypeObj is like {'level1': 1, 'level2': 1, 'level3': 6, 'level4': 58}
    var bestDescription = '';

    // TODO: DRY?
    if (unitTypes[0].hasOwnProperty(unitTypeObj['level1'].toString())) {
        bestDescription = unitTypes[0][unitTypeObj['level1']];
    } else {
        return bestDescription;
    }

    if (unitTypes[1].hasOwnProperty(unitTypeObj['level2'].toString())) {
        bestDescription = unitTypes[1][unitTypeObj['level2']];
    } else {
        return bestDescription;
    }

    if (bestDescription == 'airplane' && unitTypes[2].hasOwnProperty(unitTypeObj['level3'].toString())) {
        bestDescription = unitTypes[2][unitTypeObj['level3']];
    } else {
        return bestDescription;
    }

    if (aircraft[unitTypeObj['level4']]) {
        bestDescription = aircraft[unitTypeObj['level4']];
    }

    return bestDescription;
}

function unitCategory(unitTypeObj) {
    var categories = unitTypes[0];
    var categoryKey = unitTypeObj['level1'].toString();
    if (categories.hasOwnProperty(categoryKey)) {
        switch (categories[categoryKey]) {
            case 'air':
                return 'air';
            case 'ground':
            case 'navy':
                return 'ground';
            case 'weapon':
                return 'weapon';
            default:
                return 'generic'
        }
    }
    return 'generic';
}

function categoryIcon(category) {
    // Return the proper svgPathName for this category.
    switch (category) {
        case 'air':
            return 'arrowhead';
        case 'ground': 
            return 'circle';
        case 'weapon':
            return 'agm-65';
        default:
            return 'circle';
    }
}
