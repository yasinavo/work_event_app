const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create employee Schema and model - still not used
// const EmpSchema = new Schema({
//    name:{
//        type: String,
//        required: [true,'Name field is required']
//    },
//     id: {
//        type: String,
//     },
//     available:{
//        type: Boolean,
//         default: false
//     },
//
// });
//
//
// const Employee = mongoose.model('employee', EmpSchema);
//
// module.exports = Employee;