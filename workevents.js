/*  Return actual working days
 Common function to check both employee holidays and public holidays
 * */

const express = require('express');
const moment = require('moment');
const mongodb = require('mongodb');
const clone = require('clone');
const business = ('moment-business');
const Utilities = require('./common.js');


function WorkEvent(empName,empHolidays,dateRange,holidays) {
    this.empname = empName;
    this.emp_holidays = empHolidays;
    this.time_period = dateRange;
    this.public_holidays = holidays;

    this.workdays=[];
    this.holidays =[];
}


WorkEvent.prototype.generate =  function () {
    let date_format = 'DD-MM-YYYY';
    let start_date = moment(this.time_period.startDate, date_format);
    let end_date = moment(this.time_period.endDate, date_format);
    let workdays = [];
    let util = new Utilities();

    //business.isWeekDay(start_date);

    //Loop through each day of work event date range
    while(start_date<=end_date){

        //call checkEmpHolidays - remove this
        //let isEmpHoliday = this.checkEmpHolidays(start_date);
        //var isPublicHoliday = this.checkPublicHoliday(start_date);


        //check each day is a employee/public holiday
        let isPublicHoliday = util.checkHolidays(start_date,this.public_holidays);
        var isEmpHoliday = util.checkEmpHolidays(start_date,this.emp_holidays);


        if(!(isEmpHoliday || isPublicHoliday)){
            workday = clone(start_date);
            workdays.push(workday.format(date_format));
        }

        start_date.add(1, 'days');
    }
    return workdays;

};






//check public holidays from holidays.json
// WorkEvent.prototype.checkPublicHoliday = function (range_date){
//
//     var date_format = 'DD-MM-YYYY';
//     var array = this.publi_holidays;
//
//     for (var i = 0; i < array.length; i++) {
//         var leave_date = moment(array[i].date,date_format);
//         //console.log(leave_date);
//         if (+leave_date === +range_date){
//
//             return true;
//         }
//     }
//     return false;
//
// };





// getting data from DB - not u
// WorkEvent.prototype.checkPublicHoliday = function (range_date) {
//
//     var formattedDate = moment(range_date).format('DD-MM-YYYY');
//
//     mongodb.connect("mongodb://localhost:27017/payroll", function(err, db) {
//         if(err) { return console.dir(err); }
//
//         var collection = db.collection('holiday');
//
//         collection.find({'date':formattedDate}).toArray(function(err, holidays) {
//             //console.log(holidays);
//             return holidays;
//         });
//     })
//     console.log(formattedDate);
//
// };


module.exports = WorkEvent;