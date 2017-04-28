/*  Return actual working days
    Common function to check both employee holidays and public holidays
* */

const moment = require('moment');


function Common() {

}


Common.prototype.checkHolidays = function(work_date,holidays){
    let date_format = 'DD-MM-YYYY';
    let array = holidays;


    for (let i = 0; i < array.length; i++) {

        let leave_date = moment(array[i].date,date_format);

        /* check for weekends
        to be written
        */


        if (+leave_date === +work_date){

            return true;
        }
    }
    return false;
};


//check employee holidays from forecast.json input file
Common.prototype.checkEmpHolidays =  function (range_date,emp_holidays) {
//for loop to check date exists. If false return date
    let date_format = 'DD-MM-YYYY';
    let array = emp_holidays;

    for (let i = 0; i < array.length; i++) {
        let leave_date = moment(array[i],date_format);
        //console.log(leave_date);
        if (+leave_date === +range_date){

            return true;
        }
    }
    return false;

};




module.exports = Common;
