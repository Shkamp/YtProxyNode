var http = require('http');
var youtubedl = require('@microlink/youtube-dl');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var params = req.url.split("/");
    if (params[1] === "getId") {
        var id = req.url.split("/")[2];
        var url = "https://www.youtube.com/watch?v=" + id;

        youtubedl.getInfo(url, function (err, info) {
            if (err) throw err;
            returnUrl = info.url;
            res.end(returnUrl);
        })
        
        //res.end();
    }else{
    res.end('Hello World!')};
}).listen(8080);
var returnUrl = "";

// Optional arguments passed to youtube-dl.
var options = ['--format=18'];
function getUrl(url) {
    youtubedl.getInfo(url, options, function (err, info) {
        if (err) throw err;
        res = info;
        console.log(info.url)
        console.log(res);
        returnUrl = info.url;
    })

}
