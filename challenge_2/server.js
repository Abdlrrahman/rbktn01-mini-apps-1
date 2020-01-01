const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;
var jsonParser = bodyParser.json();
app.use(express.static('client'));
app.use(jsonParser);
var fs = require('fs');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/something', urlencodedParser, (req, res) => {
  var parsed = JSON.parse(req.body.input);
  var anything = children(parsed);
  fs.writeFile('result.csv', anything, (error, data) => {
    if (error) {
      console.log(error);
    }
  })
  res.send(anything);
})
function children(data) {
  var array = [];

  function iter(data) {
    var obj = {};
    for (var key in data) {
      if (key !== 'children') {
        obj[key] = data[key];
      }
    }
    array.push(obj);
    for (var i = 0; i < data['children'].length; i++) {
      iter(data['children'][i]);
    }
  }
  iter(data)
  var names = [];
  var values = [];
  var valuesWithNewLine = [];

  for (var i = 0; i < array.length; i++) {
    names.push(Object.keys(array[i]));
    values.push(Object.values(array[i]) + '\n');
  }

  return names[0] + '\n' + values;
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))