function start() {
    console.log("request handler 'start' war called.");
    return "Hello Start";
}

function upload() {
    console.log("request handler 'start' war called.");
    return "Hello Upload";
}


exports.start = start;
exports.upload = upload;
