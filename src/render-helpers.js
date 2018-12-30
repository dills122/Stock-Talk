const prettyJson = require('prettyjson');

const options = {
    noColor: false
};

function RenderHeader(stringInput, padValue) {
    var length = stringInput.length;
    padValue = padValue ? padValue : '-';
    //Five is for padding 
    var stripHeader = new Array(length + 5).join( padValue );
    var headerText = (padValue === '|' ? padValue : '|' ).padEnd(2,' ') + stringInput.padEnd(length + 1,' ') + (padValue === '|' ? padValue : '|');

    console.log(prettyJson.render(stripHeader, options));
    console.log(prettyJson.render(headerText, options));
    console.log(prettyJson.render(stripHeader, options));

    return {
        stripHeader,
        headerText
    };
}

module.exports = {
    RenderHeader
}