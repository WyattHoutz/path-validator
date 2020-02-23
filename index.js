var { exec } = require("child_process");

exec("find ../20* | sort > files.txt");

var fs = require("fs");
var results = new Map();
var text = fs.readFileSync("./files.txt", "utf-8");
var textByLine = text.split("\n").filter(val => {
  var found = (val.match('20[12][0-9]-[0-9][0-9]-[0-9][0-9]'));
    if (found) {
      var match = found.input.match(found[0] + '.*' + found[0])
      if (!match) {
        var match_dir = found.input.match(found[0] + '$')
        if (!match_dir) {
          var four_years = found.input.match('20[12][0-9].*20[12][0-9].*20[12][0-9]')
          if (four_years) {
            results.set(found[0], found.input);
            // console.log(found.input);
          }
        }
      }
    }
  }
);



console.log(results);
console.log(results.size);

