
let valData = [
    {id: '036', name: 'Australian Dollar', code: 'AUD'},
    {id: '040', name: 'Austrian Schilling', code: 'ATS'},
    {id: '056', name: 'Belgian Franc', code: 'BEF'},
    {id: '826', name: 'British Pound', code: 'GBP'},
    {id: '124', name: 'Canadian Dollar', code: 'CAD'},
    {id: '203', name: 'Czech Koruna', code: 'CZK'},
    {id: '208', name: 'Danish Krone', code: 'DKK'},
    {id: '528', name: 'Dutch Guilder', code: 'NLG'},
    {id: '233', name: 'Estonian Kroon', code: 'EEK'},
    {id: '978', name: 'Euro', code: 'EUR'},
    {id: '246', name: 'Finnish Mark', code: 'FIM'},
    {id: '250', name: 'French Franc', code: 'FRF'},
    {id: '276', name: 'German Mark', code: 'DEM'},
    {id: '300', name: 'Greek Drachma', code: 'GRD'},
    {id: '344', name: 'Hong Kong Dollar', code: 'HKD'},
    {id: '348', name: 'Hungarian Forint', code: 'HUF'},
    {id: '372', name: 'Irish Punt', code: 'IEP'},
    {id: '380', name: 'Italian Lira', code: 'ITL'},
    {id: '392', name: 'Japanese Yen', code: 'JPY'},
    {id: '428', name: 'Latvian Lat', code: 'LVL'},
    {id: '440', name: 'Lithuanian Lita', code: 'LTL'},
    {id: '484', name: 'Mexican Peso', code: 'MXN'},
    {id: '554', name: 'New Zealand Dollar', code: 'NZD'},
    {id: '578', name: 'Norway Krone', code: 'NOK'},
    {id: '985', name: 'Polish Zloty', code: 'PLN'},
    {id: '620', name: 'Portuguese Escudo', code: 'PTE'},
    {id: '702', name: 'Singapore Dollar', code: 'SGD'},
    {id: '703', name: 'Slovak Koruna', code: 'SKK'},
    {id: '710', name: 'South African Rand', code: 'ZAR'},
    {id: '724', name: 'Spanish Peseta', code: 'ESP'},
    {id: '752', name: 'Swedish Krona', code: 'SEK'},
    {id: '756', name: 'Swiss Franc', code: 'CHF'},
    {id: '980', name: 'Ukraine Hryvnia', code: 'UAH'},
    {id: '840', name: 'United States Dollar', code: 'USD'},
]

// set data sources
let dataSet = valData;

function addFields() {

    for (i = 0; i < dataSet.length; i++ ) {

        let addTagId = (`<div class="item-data id">${dataSet[i].id}</div>`);
        let addTagName = (`<div class="item-data name">${dataSet[i].name}</div>`);
        let addTagCode = (`<div class="item-data code">${dataSet[i].code}</div>`);

        $('.table-data').append(addTagId + addTagName + addTagCode);
    }
}

$('.addRecord').click(function() { addFields(); });



