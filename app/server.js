var express = require ('express');
var app = express();
app.use('/', express.static('./'));
app.listen(4040);
console.log('server ready at port 4040');
