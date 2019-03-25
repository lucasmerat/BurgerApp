const connection = require("./connection");

const orm = {
    selectAll: function(table, cb){
        let queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err,result){
            if(err) throw err;
            cb(result)
        })
    }
    // ,
    // insertOne: function(){

    // },
    // updateOne: function(){

    // }
}

module.exports = orm