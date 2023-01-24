const {request} = require("./https.js");
const getrank = (username)=>{
    return new Promise((resolve,reject)=>{
        request("https://api.scratch.mit.edu/studios/29958336/").then(res=>{
            const raw = res.description.split("\n");
            let i=0;
            let ii=0;
            let str;
            let needstr =[[ "• – • Master intro makers • – •","• – • Advanced intro makers • – •","• – • Good intro makers • – •"],[null,"Master","Advanced","Good"]];
            while(true){
                
                if(i>raw.length-1){
                    resolve("visitor");
                    break;
                }
                const tmp =raw[i].toLowerCase();
                if(ii<3){
                    if(tmp.includes(needstr[0][ii].toLowerCase())){
                        ii++;
                    }
                }
                if(tmp.includes(username.toLowerCase())&&ii!=0){
                    resolve(needstr[1][ii]);
                    break;
                    
                }
                i++;
            }

        }).catch(res=>reject(res));

    })
}
//getrank("xX_Freezer_Xx").then(res=>console.log(res));
module.exports={getrank};