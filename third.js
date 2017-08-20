var fs=require('fs')
var result = []
fs.readFile('Production-Department_of_Agriculture_and_Cooperation_1.csv','UTF-8',function(err,usedData)
{
const writefile= fs.createWriteStream('GraphData.json')
var arr=usedData
.split('\n')
.map((usedData)=>{
return usedData.split(',')
})

for(var i=1;i<arr.length;i++)
 {  
   if(arr[i][0]=="Agricultural Production Foodgrains Rice Area Andhra Pradesh" ||
    arr[i][0]=="Agricultural Production Foodgrains Rice Area Karnataka" ||
    arr[i][0]=="Agricultural Production Foodgrains Rice Area Kerala" ||
    arr[i][0]=="Agricultural Production Foodgrains Rice Area Tamil Nadu" ||
    arr[i][0]=="Agricultural Production Foodgrains Rice Volume Andhra Pradesh" ||
    arr[i][0]=="Agricultural Production Foodgrains Rice Volume Karnataka" ||
    arr[i][0]=="Agricultural Production Foodgrains Rice Volume Kerala" ||
    arr[i][0]=="Agricultural Production Foodgrains Rice Volume Tamil Nadu" || 
    arr[i][0]=="Agricultural Production Foodgrains Rice Yield Andhra Pradesh" || 
    arr[i][0]=="Agricultural Production Foodgrains Rice Yield Karnataka" || 
    arr[i][0]=="Agricultural Production Foodgrains Rice Yield Kerala"||
    arr[i][0]=="Agricultural Production Foodgrains Rice Yield Tamil Nadu" )
   {
  var1=arr[i][0];
   var2=arr[i][24];
   var argument =new Object;
    argument.name = var1
   argument.value = var2
   result.push(argument)
 
   var x=result.sort(function(a,b){
   return b.value-a.value
 })
   }
 }
   
  console.log(result);
 
 writefile.write(JSON.stringify(result, null, 2), 'UTF8');
   })