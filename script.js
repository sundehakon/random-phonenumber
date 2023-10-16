const andorranPhoneNumber = [];

    for (i = 0; i < 6; i += 1) {
        andorranPhoneNumber[i] = Math.round(Math.random() * 9)
    }

        andorranPhoneNumber.splice(3, 0, ' ')

const norwegianPhoneNumber = [];
const danishPhoneNumber = [];
        
    for (i = 0; i < 8; i += 1) {
        norwegianPhoneNumber[i] = Math.round(Math.random() * 9)
        danishPhoneNumber[i] = Math.round(Math.random() * 9)
    }

        norwegianPhoneNumber.splice(3, 0, ' ');
        norwegianPhoneNumber.splice(6, 0, ' ');

        danishPhoneNumber.splice(2, 0, ' ');
        danishPhoneNumber.splice(5, 0, ' ');
        danishPhoneNumber.splice(8, 0, ' ');

const usPhoneNumber = [];
const antiguaandbarbudaPhoneNumber = [];

    for (i = 0; i < 7; i += 1) {
        usPhoneNumber[i] = Math.round(Math.random() * 9)
        antiguaandbarbudaPhoneNumber[i] = Math.round(Math.random() * 9)
    }

        usPhoneNumber.splice(3, 0, '-')

        antiguaandbarbudaPhoneNumber.splice(3, 0, '-')

const swedishPhoneNumber = [];
const afghanistanPhoneNumber = [];
const albanianPhoneNumber = [];
const algerianPhoneNumber = [];
const angolanPhoneNumber = [];

    for (i = 0; i < 9; i += 1) {
        swedishPhoneNumber[i] = Math.round(Math.random() * 9)
        afghanistanPhoneNumber[i] = Math.round(Math.random() * 9)
        albanianPhoneNumber[i] = Math.round(Math.random() * 9)
        algerianPhoneNumber[i] = Math.round(Math.random() * 9)
        angolanPhoneNumber[i] = Math.round(Math.random() * 9)
    }

        swedishPhoneNumber.splice(1, 0, ' ')

        afghanistanPhoneNumber.splice(2, 0, ' ')
        afghanistanPhoneNumber.splice(6, 0, ' ')

        albanianPhoneNumber.splice(2, 0, ' ')
        albanianPhoneNumber.splice(6, 0, ' ')

        algerianPhoneNumber.splice(2, 0, ' ')

        angolanPhoneNumber.splice(3, 0, ' ')
        angolanPhoneNumber.splice(7, 0, ' ')

const usAreaCodes = ['201', '202', '203', '205', '206', '207', '208', 
    '209', '210', '212', '213', '214', '215', '216', '217', '218', '219', '220', '223',
     '224', '225', '228', '229', '231', '234', '239', '240', '248', '251', '252', '253', 
     '254', '256', '260', '262', '267', '269', '270', '272', '276', '281', '301', '302', 
     '303', '304', '305', '307', '308', '309', '310', '312', '313', '314', '315', '316', 
     '317', '318', '319', '320', '321', '323', '325', '330', '331', '334', '336', '337', 
     '339', '346', '347', '351', '352', '360', '361', '364', '380', '385', '386', '401', 
     '402', '403', '404', '405', '406', '407', '408', '409', '410', '412', '413', '414', 
     '415', '416', '417', '418', '419', '423', '424', '425', '430', '432', '434', '435', 
     '438', '440', '442', '443', '447', '458', '463', '469', '470', '475', '478', '479', 
     '480', '484', '501', '502', '503', '504', '505', '507', '508', '509', '510', '512', 
     '513', '515', '516', '517', '518', '520', '530', '531', '534', '539', '540', '541', 
     '551', '559', '561', '562', '563', '564', '567', '570', '571', '573', '574', '575', 
     '580', '581', '585', '586', '587', '601', '602', '603', '604', '605', '606', '607', 
     '608', '609', '610', '612', '613', '614', '615', '616', '617', '618', '619', '620', 
     '623', '626', '628', '629', '630', '631', '636', '639', '641', '646', '647', '650', 
     '651', '657', '660', '661', '662', '664', '669', '678', '681', '682', '684', '701', 
     '702', '703', '704', '705', '706', '707', '708', '709', '712', '713', '714', '715', 
     '716', '717', '718', '719', '720', '724', '725', '726', '727', '730', '731', '732', 
     '734', '737', '740', '743', '747', '754', '757', '758', '760', '762', '763', '764', 
     '765', '769', '770', '772', '773', '774', '775', '778', '779', '780', '781', '782', 
     '785', '786', '787', '801', '802', '803', '804', '805', '806', '807', '808', '809', 
     '810', '812', '813', '814', '815', '816', '817', '818', '819', '820', '828', '829', 
     '830', '831', '832', '843', '844', '845', '847', '848', '850', '855', '856', '857', 
     '858', '859', '860', '862', '863', '864', '865', '866', '867', '868', '869', '870', 
     '872', '873', '878', '901', '902', '903', '904', '905', '906', '907', '908', '909', 
     '910', '912', '913', '914', '915', '916', '917', '918', '919', '920', '925', '927', 
     '928', '929', '930', '931', '934', '936', '937', '938', '939', '940', '941', '947', 
     '949', '951', '952', '954', '956', '959', '970', '971', '972', '973', '975', '978', 
     '979', '980', '984', '985', '986', '989'];

const randomAreaCodeIndex = Math.floor(Math.random() * usAreaCodes.length);

const randomAreaCode = usAreaCodes[randomAreaCodeIndex];

    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('#norwegian-body').textContent = `+47 ${norwegianPhoneNumber.join("")}`;
        document.querySelector('#usa-body').textContent = `+1 (${randomAreaCode}) ${usPhoneNumber.join("")}`;
        document.querySelector('#sweden-body').textContent = `+46 ${swedishPhoneNumber.join("")}`;
        document.querySelector('#danish-body').textContent = `+45 ${danishPhoneNumber.join("")}`;
        document.querySelector('#afghanistan-body').textContent = `+93 ${afghanistanPhoneNumber.join("")}`;
        document.querySelector('#albanian-body').textContent = `+355 ${albanianPhoneNumber.join("")}`;
        document.querySelector('#algeria-body').textContent = `+213 ${algerianPhoneNumber.join("")}`;
        document.querySelector('#andorra-body').textContent = `+376 ${andorranPhoneNumber.join("")}`;
        document.querySelector('#angolan-body').textContent = `+244 ${angolanPhoneNumber.join("")}`;
        document.querySelector('#antiguanbarbuda-body').textContent = `+1 (268) ${antiguaandbarbudaPhoneNumber.join("")}`;
    })
