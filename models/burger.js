const orm = require("../config/orm");

const burger = {
    show: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    add: function(col1, val1, cb){
        orm.insertOne('burgers', col1, val1, function(res){
            cb(res);
        });
    },
    update: function(newBoolean, condition, cb){
        orm.updateOne('burgers', newBoolean, condition, function(res){
            cb(res);
        });
    },
    delete: function(col1,val1,cb){
        orm.deleteOne('burgers', col1, val1, function(res){
            cb(res);
        })
    }
}

module.exports = burger;