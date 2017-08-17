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
   if(arr[i][0]=="Agricultural Production Oilseeds" ||
    arr[i][0]=="Agricultural Production Oilseeds rabi" ||
    arr[i][0]=="Agricultural Production Oilseeds Kharif" ||
    arr[i][0]=="Agricultural Production Oilseeds Groundnut Kharif" ||
    arr[i][0]=="Agricultural Production Oilseeds Groundnut" ||
    arr[i][0]=="Agricultural Production Oilseeds Groundnut Rabi" ||
    arr[i][0]=="Agricultural Production Oilseeds Castorseed Kharif" ||
    arr[i][0]=="Agricultural Production Oilseeds Sesamun Kharif" || 
    arr[i][0]=="Agricultural Production Oilseeds Nigerseed Kharif" || 
    arr[i][0]=="Agricultural Production Oilseeds Rapeseed and Mustard Rabi" || 
    arr[i][0]=="Agricultural Production Oilseeds Linseed Rabi" )
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