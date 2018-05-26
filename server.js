//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/productview'));

app.get('/*', function(req,res) {
    console.log('__dirname:'+__dirname);
res.sendFile(path.join(__dirname+'/dist/productview/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8010);