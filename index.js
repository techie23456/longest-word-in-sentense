
//image-finder-007.vercel.app
import express from 'express'
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

let longestWord = 0;
let longestWordInSentense;

 app.post('/api/submit', async(req,res)=>{ 

   const str = req.body.question

   const strArr = str.split(' ');

   for(let i=0;i<strArr.length;i++){
      if(strArr[i].length > longestWord){
         longestWord = strArr[i].length
      }
   }

    for(let i=0;i<strArr.length;i++){
       if(strArr[i].length == longestWord){
          longestWordInSentense = strArr[i]
       }
    }



   res.send({received:longestWordInSentense})
/*
   if(req.body.question === "dragon")
   {
      res.send({received:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRdxh9j9A6MwsayxAIkwRZTLiucT1KYOPKDEP85TL-uhWqHayj3'})
      str="ghghgh"
   }
   else if(req.body.question === "avinash")
   {
      res.send({received:'https://raw.githubusercontent.com/techie23456/ai-images/refs/heads/main/Avinash.jpg'})
      str="ghghgh"
   }
    else if(req.body.question === "aadhaar Card" || req.body.question === "aadhaar"||req.body.question === "aadhaarCard" )
   {
      res.send({received:'https://raw.githubusercontent.com/techie23456/ai-images/refs/heads/main/AADHAAr_Card.png'})
      str="ghghgh"
   }
    else if(req.body.question === "pan card" || req.body.question === "pancard"||req.body.question === "panCard" )
   {
      res.send({received:'https://raw.githubusercontent.com/techie23456/ai-images/refs/heads/main/PAN_Card.jpg'})
      str="ghghgh"
   }
   else{
     res.send({received:'https://raw.githubusercontent.com/techie23456/burgerZoom/refs/heads/main/burgetScan.png'})
   }  */
})

app.listen(8000,()=>{

    console.log(">>>>>>>Server started at port 8000")

})
