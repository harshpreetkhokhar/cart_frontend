
const path = require('path')

const _dirname = path.dirname("")
const buildPath = path.join(_dirname  , "/dist");

app.use(express.static(buildPath))

app.get("/*", function(req, res){

    res.sendFile(
        path.join(__dirname, "/dist/index.html"),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );

})