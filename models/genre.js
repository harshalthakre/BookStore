var mongoose=require('mongoose');

//generate schema

var genreSchema = mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Genre=module.exports= mongoose.model('Genre',genreSchema);

// get Genres

module.exports.getGenres=function(callback,limit){
  Genre.find(callback).limit(limit);
}

module.exports.getGenrebyId=function(id,callback){
  Genre.findById(id,callback);
}


//Add genre
module.exports.addGenre=function(genre,callback){
  Genre.create(genre,callback);
}

//update genre
module.exports.updateGenre=function(id,genre,options,callback){
  var query={_id: id};
  var update={
    name: genre.name
  } // here you can just update what is present in schema and u r updating
  //only , but not inserting new field what if new field you have to addGenre
  // you have to change schema too right? or will it be added
  Genre.findOneAndUpdate(query,update,options,callback);
  // here we are just updating whatever we update in var update rest remains same
  //or else you can use set to for specific and the limited which they send only that will be updated
}

module.exports.removeGenre=function(id,callback){
  var query={_id:id};
  Genre.remove(query,callback);

}
