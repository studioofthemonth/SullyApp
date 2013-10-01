var express = require('express')
  , app = express();

app.configure(function () {
    app.use(express.logger());
    app.use(express.bodyParser());
    app.use('/static', express.static(__dirname + '/frontend'));
});

app.listen(3000);
console.log('Listening on port 3000');