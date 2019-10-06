var express = require('./node_modules/express');

var app = express();
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
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
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(8000, () =>console.log("listning on port 8000"));
module.exports = app;
