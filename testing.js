var fs=require('fs')

var readline=require('readline')
var s=readline.createInterface({
	input:fs.createReadStream('Production-Department_of_Agriculture_and_Cooperation_1.csv', 'UTF-8')
})
var writableFormat = require('fs').createWriteStream('jsonfile2.json')
lineReader.on('line', function(line) {
    var jsonFromLine = {}
    var lineSplit = line.split(',')
    jsonFromLine.Particulars = lineSplit[0];
    jsonFromLine.Unit = lineSplit[24];
    a.push(jsonFromLine)
});