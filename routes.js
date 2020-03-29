  const fs = require("fs");

  const requestListener = (req, res) => {
    const url = req.url;
    if (url === "/") {
      res.write("<html>");
      res.write("<head><title>Node App</title></head><body>");
      res.write(
        '<form method="post" action="/create-user"><input name="name" /><button type="submit">Submit</button></form>'
      );
      res.write("</body></html>");

      res.end();
    }
    if (url === "/create-user" && req.method === "POST") {
      const body = [];
      req.on("data", chunk => {
        body.push(chunk);
      });
      req.on("end", () => {
        const username = Buffer.concat(body)
          .toString()
          .split("=")[1];
        fs.writeFile("username.txt", username, err => {
          console.log("Username - ", username);
          res.statusCode = 302;
          res.setHeader("Location", "/");
          res.end();
        });
      });
    }
    if (url === "/users") {
      res.write("<h4>List of Users</h4>");
      res.write("<ul>");
      res.write("<li>Leanne Graham</li>");
      res.write("<li>Ervin Howell</li>");
      res.write("<li>Clementine Bauch</li>");
      res.write("<li>Patricia Lebsack</li>");
      res.write("</ul>");
      res.end();
    }
  };

  module.exports = requestListener;
