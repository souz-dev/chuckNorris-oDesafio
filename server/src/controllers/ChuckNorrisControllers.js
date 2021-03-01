const apiChuckNorris = require('../services/apiChuckNorris')



module.exports = {
 
    async random(req , res){
      apiChuckNorris
        .get("jokes/random")
        .then(function (response) {
          return res.status(200).json(response.data);
        })
        .catch(function (error) {
          return res.status(400).json({"ERROR":error});
        })     
    },

    async categories(req, res, ){
      
      apiChuckNorris
        .get("jokes/categories")
        .then(function(response){
          return res.status(200).json(response.data)
        })
        .catch(function (error) {
          return res.status(400).json({"ERROR":error});

        })
    },
    
    async search(req , res ){
      let searchTerm = req.params.term;
      console.log(searchTerm);
        apiChuckNorris
          .get(`jokes/search?query=${searchTerm}`)
          .then(function (response) {
            if(response.data.total == 0){
            return res.status(400).json({"ERRO":"Nao obteve nenhum resutado"});
          }
            return res.status(200).json(response.data);
        })
           .catch(function (error) {
            return res.status(400).json({"ERROR":error});
        })

    },
    async category(req , res ){
      let categoryTerm = req.params.term;
      console.log(categoryTerm);
        apiChuckNorris
          .get(`jokes/random?category=${categoryTerm}`)
          .then(function (response) {
            if(response.data.total == 0){
            return res.status(400).json({"ERRO":"Nao obteve nenhum resutado"});
          }
            return res.status(200).json(response.data);
        })
           .catch(function (error) {
            return res.status(400).json({"ERROR":error});
        })

    }
}