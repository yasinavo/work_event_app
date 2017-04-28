const mongoose = require('mongoose');
const WorkEvent = require('./workevents.js');
const jsonfile = require('jsonfile');


let Events = function() {
    let getEvents= function(id,forecast) {

        let fs = require('fs');

        //Read input json files
        let holiday = fs.readFileSync('./public/holidays.json');


        let holiday_data = JSON.parse(holiday);
        //console.log(forecast);
        let forecast_data = forecast;
        console.log(id);

        // Pass holiday data to generate work days
        let event = new WorkEvent(forecast_data.empName,forecast_data.forecastHolidays,forecast_data.dateRange,holiday_data.days);
        let workdays = event.generate();

        //save to file
        let file = './emp/' +id+ '_event_data.json';
        let work_days_json = {days:workdays};
        jsonfile.writeFile(file, work_days_json, function (err) {
            console.error(err)
        });


        //return JSON.stringify(work_days_json);
        //console.log(workdays);
        return true;
    };



    return {
        getEvents: getEvents

    }
}();

module.exports = Events;