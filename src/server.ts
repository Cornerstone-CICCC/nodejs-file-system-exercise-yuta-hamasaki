// Check the README.md file for instructions to the exercise
import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 3000;

const app = http.createServer((req, res)=>{
  if(req.url === '/view-image'){
    const imagePath = path.join(__dirname, '/images/veryhappydog.jpg')

    fs.readFile(imagePath,(err, data)=>{
      if(err){
        console.error("error", err)
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end('error')
        return 
      }

      res.writeHead(200, {'Content-Type': 'image/jpeg'})
      res.end(data)
    })
  }else {
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.end('404')
  }
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});