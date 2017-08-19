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
	jsonArg.value = var2  
	console.log(jsonArg);
	writefile.write(JSON.stringify(jsonArg, null, 2), 'UTF8');

}

});