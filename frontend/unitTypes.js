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
        '12': 'ship',
        '13': 'airport',
        '14': 'explosion',
        '15': 'container',
        '16': 'SAM',
        '17': 'ground unit',
        '18': 'airport part',
        '19': 'wing part'
    },
    {
        // level 3
        '1': 'fighter',
        '2': 'bomber',
        '3': 'interceptor',
        '4': 'strategic bomber',
        '5': 'cargo',
        '6': 'attacker'
    },
        // level 4
    {
        // pre-indexed by level 2 type (i.e. airplane, missile)
        '1': {
            '1': 'MiG-23',
            '2': 'MiG-29',
            '3': 'Su-27',
            '4': 'Su-33',
            '5': 'F-14',
            '6': 'F-15',
            '7': 'F-16',
            '8': 'MiG-25',
            '9': 'MiG-31',
            '10': 'F-2',
            '11': 'MiG-27',
            '12': 'Su-24',
            '13': 'Su-30',
            '14': 'F/A-18',
            '15': 'F-111',
            '16': 'Su-25',
            '17': 'A-10A',
            '18': 'Tu-160',
            '19': 'B-1',
            '20': 'Su-34',
            '21': 'Tu-95',
            '22': 'Tu-142',
            '23': 'B-52',
            '24': 'MiG-25P',
            '25': 'Tu-22M3',
            '26': 'A-50',
            '27': 'E-3',
            '28': 'IL-78',
            '29': 'KC-10',
            '30': 'IL-76',
            '31': 'C-130',
            '32': 'MIG-29K',
            '33': 'S-3R',
            '34': 'Mirage',
            '35': 'Tu-143',
            '36': 'Tu-141',
            '37': 'F-117',
            '38': 'Su-39',
            '39': 'AN-26B',
            '40': 'AN-30M',
            '41': 'E-2C',
            '42': 'S-3A',
            '43': 'AV-8B',
            '44': 'EA-6B',
            '45': 'F-4E',
            '46': 'F-5E',
            '47': 'C-17',
            '48': 'SU-17M4',
            '49': 'MiG-29G',
            '50': 'MiG-29C',
            '51': 'Su-24MR',
            '52': 'F-16A',
            '53': 'F/A-18C',
            '54': 'Su-25T',
            '55': 'RQ-1A Predator',
            '56': 'Tornado IDS',
            '57': 'Yak-40',
            '58': 'A-10C',
            '59': 'F-15E',
            '60': 'KC-135',
            '61': 'L-39ZA',
            '62': 'P-51B',
            '63': 'P-51D',
            '65': 'TF-51D'
        },
        '4': {
            '1': 'R-550',
            '2': 'MICA-T',
            '3': 'MICA-R',
            '4': 'Super-530F',
            '5': 'P-98',
            '6': 'P-4R',
            '7': 'P-40R',
            '9': 'P-24R',
            '10': 'P-60',
            '11': 'P-33E',
            '12': 'P-27AE',
            '13': 'P-27P',
            '14': 'P-27PE',
            '15': 'P-27T',
            '16': 'P-27TE',
            '17': 'P-27EM',
            '18': 'P-73',
            '19': 'P-77',
            '20': 'P-37',
            '21': 'AIM-7',
            '22': 'AIM-9',
            '23': 'AIM-54',
            '24': 'AIM-120',
            '26': 'P-24T',
            '27': 'P-40T',
            '28': 'SeaSparrow',
            '30': 'C-8CM',
            '31': 'C-5',
            '32': 'C-8',
            '33': 'C-13',
            '34': 'C-24',
            '35': 'C-25',
            '36': 'HYDRA-70',
            '37': 'Zuni-127',
            '38': 'Zuni-127CM',
            '39': 'AGM-114K',
            '40': 'AGM-119',
            '41': 'X-22',
            '42': 'X-29TE',
            '43': 'X-23',
            '44': 'X-28',
            '45': 'X-25ML',
            '46': 'X-58',
            '47': 'X-25MP',
            '48': 'AT-6',
            '49': 'X-29L',
            '50': 'X-55',
            '51': 'X-65',
            '52': 'X-15',
            '53': 'X-31A',
            '54': 'X-59M',
            '55': 'X-35',
            '56': 'X-41',
            '57': 'Vikhr',
            '58': 'Vikhr-M',
            '59': 'AGM-114',
            '60': 'AGM-45',
            '61': 'AGM-65K',
            '62': 'AGM-84A',
            '63': 'AGM-84E',
            '64': 'AGM-86',
            '65': 'AGM-88',
            '66': 'Sea-Eagle',
            '67': 'SAV611',
            '68': 'AGM-122',
            '69': 'AGM-123',
            '70': 'AGM-65E',
            '71': 'AGM-130',
            '72': 'ALARM',
            '73': 'X-23L',
            '74': 'X-25MR',
            '75': 'X-29T',
            '76': 'X-31P',
            '77': 'AGM-65D',
            '78': 'Kormoran',
            '79': 'SM-2',
            '80': 'SA5B55',
            '81': 'SA48H6E2',
            '82': 'SA9M82',
            '83': 'SA9M83',
            '84': 'SA3M9M',
            '85': 'SA9M33',
            '86': 'SA9M31',
            '87': 'SA9M38M1',
            '88': 'SA9M333',
            '89': 'SA9M330',
            '90': 'SA9M311',
            '91': 'Igla-1E',
            '92': 'MIM-104',
            '93': 'FIM-92C',
            '94': 'GRAD-9M22U',
            '179': 'URAGAN-9M27F',
            '95': 'SMERCH-9M55K',
            '97': 'SA5B27',
            '98': 'HAWK-RAKETA',
            '99': 'ROLAND-R',
            '106': 'AIM-120C',
            '118': 'P-35',
            '119': 'P-500',
            '120': 'P-700',
            '121': 'P-15U',
            '122': 'P-120',
            '123': 'R-85',
            '124': 'R-85U',
            '125': 'BGM-109B',
            '126': 'AGM-84S',
            '127': 'MALUTKA',
            '128': 'KONKURS',
            '129': 'P-9M117',
            '130': 'TOW',
            '131': 'M26',
            '132': 'AGM-154',
            '133': 'S-25L',
            '96': 'SCUD-RAKETA',
            '135': 'AIM-9P',
            '136': 'AIM-9X',
            '137': 'MIM-72G',
            '138': 'AGM-65H',
            '139': 'AGM-65G',
            '140': 'TGM-65G',
            '141': 'TGM-65D',
            '142': 'CATM-65K',
            '143': 'CATM-9',
            '144': 'HYDRA-70-MK1',
            '145': 'HYDRA-70-MK5',
            '146': 'HYDRA-70-MK61',
            '147': 'HYDRA-70-M151',
            '148': 'HYDRA-70-M156',
            '149': 'HYDRA-70-WTU1B',
            '150': 'HYDRA-70-M274',
            '151': 'HYDRA-70-M257',
            '152': 'HYDRA-70-M278',
            '153': 'P-9M133',
            '154': 'TGM-65H',
            '155': 'C-8OFP2',
            '156': 'REFLEX',
            '157': 'SVIR',
            '158': 'C-8OM',
            '159': 'HVAR',
            '160': 'TOW2'
        }
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
    }

    var l2Type = unitTypeObj['level2'].toString();
    var l4Type = unitTypeObj['level4'].toString();
    if (unitTypes[3].hasOwnProperty(l2Type)) {
        var l4 = unitTypes[3][l2Type];
        if (l4.hasOwnProperty(l4Type)) {
            bestDescription = l4[l4Type];
        }
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
