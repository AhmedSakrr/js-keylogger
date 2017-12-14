# js-keylogger
A simple javascript keylogger.
It can be used in association with a man-in-the-middle attack, forcing the loading of the keylogger inside a web page through a proxy.

In order to enable the keylogger on a web page you need to insert the code at the bottom of the body tag in the HTML page:
```html
<html>
  <body>
  
  <!-- <body> content -->
  
  <script type="text/javascript">
    // keylogger.js code
  </script>
  
  </body>
</html>
```

Node.js server dependencies:
 - nodejs-websocket
 - fs
