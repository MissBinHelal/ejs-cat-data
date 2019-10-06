const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/cats', function(request, response) {
    response.render('cats');
  });
  app.get('/cat1', function(request, response) {
  cat = {
      name: "cat1",
      url: "/images/cat1.jpg",
      age: 5,
      games: ["doll", "ball"],
  
  }
  response.render('display', {cat: cat});
  });
  app.get('/cat2', function(request, response) {
  cat = {
      name: "cat2",
      url: "/images/cat2.jpg",
      age: 6,
      games: ["doll", "ball"]
  }
  response.render('display', {cat: cat});
  });
  app.get('/cat3', function(request, response) {
  cat = {
      name: "cat3",
      url: "/images/cat3.jpg",
      age: 6,
      games: ["doll", "ball"]
  }
  response.render('display', {cat: cat});
  });
app.get('/', (request, response) => {
   response.send("Hello Express");
});
app.listen(3000, () => console.log("listening on port 3000"));
