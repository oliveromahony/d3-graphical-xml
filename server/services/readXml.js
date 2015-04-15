// require
var fs = require('fs');
var xml2js = require('xml2js');

// variables
var RESOURCES = "./server/resources";
var fileName = "sample.xml";
var parser = new xml2js.Parser();

// public method returnJSONResults
var returnJSONResults = function (callback) {
    var rawJSON = loadXMLDoc(RESOURCES + '/' + fileName);
    function loadXMLDoc(filePath) {
        var json;
        try {
            var fileData = fs.readFileSync(filePath, 'ascii');
            parser.parseString(fileData.substring(0, fileData.length), function (err, result) {
                json = result;
                console.log(JSON.stringify(result, null, 4));
            });
            
            console.log("File '" + filePath + "/ was successfully read.\n");
            callback(json);
        } catch (ex) {
            console.log(ex)
        }
    }
};

module.exports.getPlan = returnJSONResults;