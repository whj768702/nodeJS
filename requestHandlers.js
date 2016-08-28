var exec = require("child_process").exec;

function start(response) {
    console.log("request handler 'start' war called.");

    exec("ls -lah", function(error, stdout, stderr){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });
    return "Hello Start";
}

function upload(response) {
    console.log("request handler 'start' war called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}


exports.start = start;
exports.upload = upload;
