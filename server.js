const http = require("http")
const fs = require("fs")
const port = 3000

const server = http.createServer(function(req,res){
    if(req.url == "/"){
        fs.readFile("./public/home.html", function(err,data){
            if(err){
                res.writeHead(404,{"Content-Type":"text/html"})
                res.write("File not found")
                res.end(" ")
            } else {
                res.writeHead(200,{"Content-Type":"text/html"})
                res.write(data)
                res.end(" ")
            }


        })

    } else if (req.url == "/About"){
        fs.readFile("./public/about.html", function(err,data){
            if(err){
                res.writeHead(200,{"Content-Type":"text/html"})
                res.write("File not found")
                res.end(" ")
            } else {
                res.writeHead(404,{"Content-Type":"text/html"})
                res.write(data)
                res.end(" ")
            }


        })

    } else if (req.url == "/Contact"){
        fs.readFile("./public/contact.html", function(err,data){
            if(err){
                res.writeHead(200,{"Content-Type":"text/html"})
                res.write("File not found")
                res.end(" ")
            } else {
                res.writeHead(404,{"Content-Type":"text/html"})
                res.write(data)
                res.end(" ")
            }


        })

    } else if(req.url == "/Error"){
        fs.readFile("./public/error.html", function(err,data){
            if(err){
                res.writeHead(404,{"Content-Type":"text/html"})
                res.write("File not found")
                res.end(" ")
            } else {
                res.writeHead(200,{"Content-Type":"text/html"})
                res.write(data)
                res.end(" ")
            }


        })
    }else {
        const data = fs.readFileSync("./public/error.html");
        res.writeHead(404,{"Content-Type" : "text/html"});
        res.write(data);
        res.end();
    }
})

server.listen(port, function() {
    console.log(`server running at port ${port}`)
})