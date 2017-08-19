const fs = require('fs');
var argument=[]

var lineReader = require('readline').createInterface({

    input: fs.createReadStream('Production-Department_of_Agriculture_and_Cooperation_1.csv')
});
var result = [];
lineReader.on('line', function(line) {
    var jasonData = {};

    var lineSplit = line.split(',');

    jasonData.Particulars = lineSplit[0];
    jasonData.production = lineSplit[23];
    var lineSplit1 = line.split('\n');
        var i=1;
        argument[i]=result.push(jasonData);;

        //if(jasonData.Particulars=='Agricultural Production Oilseeds'){

        
    
    //result.sort(function(a,b){
    // return b.production-a.production

    //}
    //);
});
lineReader.on('close', function() {
    console.log(result);
    //var json=JSON.stringify(result, null, 2);
    //fs.writeFileSync('part_a.json',json);

});