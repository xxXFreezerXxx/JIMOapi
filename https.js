const https = require("https");
const request = (link)=>{
    return new Promise((resolve,reject)=>{
        const req = https.get(link,res=>{
            let chunks = [];
            res.on("data",a=>{
                chunks.push(a);
            })
            res.on("end",()=>{
                if(res.statusCode==200){
                    const re = Buffer.concat(chunks);
                    const reg = JSON.parse(Buffer.from(re,"utf-8").toString());
                    resolve(reg);
                } else{
                    reject(res.statusCode);
                }
            })
        })
        req.on("error",()=>reject("error"));
    })
}
module.exports={request};