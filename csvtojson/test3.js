var output=[];
var fs=require('fs');

fs.readFile('Production-Department_of_Agriculture_and_Cooperation_1.csv','UTF-8',function(err,data){
const writefile= fs.createWriteStream('Data.json')

var array=data
.split('\n')
.map((data)=>{
 return data.split(',')
})

for(var i=1;i<46;i++){

	var1=array[i][0];
	var2=array[i][24];
	var jsonArg =new Object;
	jsonArg.name = var1
	jsonArg.year = var2
	output.push(jsonArg)
	var x=output.sort(function(a,b){
     return b.year-a.year
	});
	
	console.log(output);
	writefile.write(JSON.stringify(jsonArg, null, 2), 'UTF8');

}

});