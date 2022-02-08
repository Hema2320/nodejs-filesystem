const http=require('http')
const fs=require('fs')
const PORT=9000
const timestamp = new Date().getTime().toString();
//const result=Math.round(new Date().getTime()/1000).toString();
//const result=Math.round(new Date()).toString;
//const res= new Date().valueOf().toString()
fs.writeFileSync("sample/date-time.txt",timestamp)
http.createServer((req,res)=>{
   res.writeHeader(200,{"Content-type":"text/html"})
   fs.readFile('sample/date-time.txt',(err,data)=>{

       res.write(data);
       res.end();

   })

}).listen(PORT,()=>{
   console.log('Listening tot ',PORT);
})