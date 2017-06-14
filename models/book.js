var mongoose=require('mongoose');

//generate schema

var bookSchema = mongoose.Schema({
  title : {
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  },
  genre:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  publisher:{
    type:String,
    //required:true
  },
  pages:{
    type:String,
    //required:true
  },
  image_url:{
    type:String,
    //required:true
  },
  buy_url:{
    type:String,
    //required:true
  },
  description:{
    type:String
  }
});

var Book=module.exports= mongoose.model('Book',bookSchema);

module.exports.getBooks=function(callback,limit){
  Book.find(callback,limit).limit(limit);
}

module.exports.getBookbyId=function(id,callback){
  Book.findById(id,callback);
}

module.exports.addBook=function(book,callback){
  Book.create(book,callback);
}

module.exports.updateBook=function(id,book,options,callback){
  var query={_id:id};
  var update={
    title:book.title,
    author:book.author,
    publisher:book.publisher,
    genre:book.genre,
    pages:book.pages,
    description:book.description,
    image_url:book.image_url,
    buy_url:book.buy_url
  }
  Book.findOneAndUpdate(query,update,options,callback);
}
