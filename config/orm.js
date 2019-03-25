const connection = require("./connection");

const orm = {
    selectAll: function(table, cb){
        let queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err,result){
            if(err) throw err;
            cb(result);
        })
    }
    // ,
    // insertOne: function(){

    // }
    ,
    updateOne: function(table, newBoolean, condition, cb){
        let queryString = `UPDATE ${table} SET ${newBoolean} WHERE ${condition}`
        console.log(queryString)
        connection.query(queryString, function(err,result){
            if(err) throw err;
            cb(result);
        })
    }
}

module.exports = orm