const orm = require("../config/orm");

const burger = {
    show: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    // add: function(){

    // },
    update: function(newBoolean, condition, cb){
        orm.updateOne('burgers', newBoolean, condition, function(res){
            cb(res);
        })
    }
}

module.exports = burger;