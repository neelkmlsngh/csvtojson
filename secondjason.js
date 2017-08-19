var a = [];
var b = [];
var fs = require('fs')
var readline=require('readline')
var lineReader = readline.createInterface({
    input: require('fs').createReadStream('Production-Department_of_Agriculture_and_Cooperation_1.csv', 'UTF-8')
});
var writableFormat = require('fs').createWriteStream('jsonfile.json')
lineReader.on('line', function(line) {
    var jsonFromLine = {}
    var lineSplit = line.split(',')
    jsonFromLine.Particulars = lineSplit[0];
    jsonFromLine.year = lineSplit[16]

    if (jsonFromLine.year == "NA") {
        jsonFromLine.year = 0
    }
    a.push(jsonFromLine)
});
lineReader.on('close', function(line) {
    b = a.filter(function(data) {
        return data.Particulars.includes("Agricultural Production Commercial Crops")
    });
    b.sort((c, d) => (d.year - c.year));
    console.log(b)
});
lineReader.on('close', function(line) {

    x = b.reduce((c, data) => {

        c += parseFloat(data.year)
        return c
    }, 0)
    
    console.log("Aggregated Value for 2005 : "+x)
});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(b, null, 2))
});