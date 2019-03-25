const orm = require("../config/orm");

const burger = {
    show: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    }
    // , 
    // add: function(){

    // },
    // update: function(){

    // }
}

module.exports = burger;