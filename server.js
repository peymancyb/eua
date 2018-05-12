var express = require('express');
var app = express();
const port = 5000;


app.get('/api/data',function(req,res){
  var data = [
    {id: 1, firstName: 'john', lastName: 'joe'}
  ];
  res.json(data);
});

app.listen(port,function(){
  console.log(`server listening to ${port}`);
});
