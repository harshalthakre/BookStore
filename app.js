var express= require('express');
var app=express();

var bodyParser=require('body-parser');

app.use(bodyParser.json());

var mongoose=require('mongoose');

Genre= require('./models/genre');
Book= require('./models/book');
//connnect to mongodb database
mongoose.connect('mongodb://localhost/bookstore');
var db=mongoose.connection;

app.get('/',function(req,res){
  res.send('Please use following urls /api/books OR /api/genre');
});

app.get('/api/genres',function(req,res){
  // function you defined in genre
    Genre.getGenres(function(err,genres){
      if(err) throw err;
      res.json(genres);
    })
})

app.get('/api/genres/:_id',function(req,res){
  Genre.getGenrebyId(req.params._id,function(err,genre){
    if(err) throw err;
    res.json(genre);
  })
})

app.get('/api/books',function(req,res){
  Book.getBooks(function(err,books){
    if(err) throw err;
    res.json(books);
  })
})

app.get('/api/books/:id',function(req,res){
  Book.getBookbyId(req.params.id,function(err,book){
    if(err) throw err;
    res.json(book);
  })
})

app.post('/api/genres',function(req,res){
  var genre=req.body;
  Genre.addGenre(genre,function(err,genre){
    if(err) throw err;
    res.json(genre);
  })
})

app.post('/api/books',function(req,res){
  // to use security and authentication use/refer mongoose api
  var book=req.body;
  Book.addBook(book,function(err,book){
    if(err) throw err;
    res.json(book);
  })
})

app.put('/api/genres/:_id',function(req,res){
  var id=req.params._id;
  var genre=req.body;
  Genre.updateGenre(id,genre,{},function(err,genre){
    if(err) throw err;
    res.json(genre);
  })
})

app.put('/api/books/:_id',function(req,res){
  var id=req.params._id;
  var book=req.body;
  Book.updateBook(id,book,{},function(err,book){
    if(err) throw err;
    res.json(book);
  })
})

app.delete('/api/genres/:_id',function(req,res){
  var id=req.params._id;
  Genre.removeGenre(id,function(err,genre){
    if(err) throw err;
    res.json(genre)
  })
})

app.listen(3000);
console.log("listening to port 3000");
