exports.encode64 = function(data){
    let buff = new Buffer(data);  
    return buff.toString('base64');
}

