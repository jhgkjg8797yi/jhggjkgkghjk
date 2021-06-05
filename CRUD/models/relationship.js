const Food = require('./food');
const Order = require('./Order');
const Table = require('./Table');

// relationship or association
const foods = Order.hasMany(Food);
Food.belongsTo(Order);

// const table = Order.hasOne(Table);
// Table.belongsTo(Order);



module.exports.foods = foods;
// module.exports.table = table;