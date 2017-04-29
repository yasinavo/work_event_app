
## Work Event Generator 2017 - Node.js

Genearate work events considering public holidays and employee holidays in Estonia for 2017.  
    Public holidays in Estonia:
    https://www.eesti.ee/eng/topics/too_ja_ettevotlus/tooaeg_ja_puhkus/riiklikud_puhad_ja_lipupaevad


This app gives the actual working days (events) of a specific employee for a given time period, with holidays excluded to feed future payroll.

## Running

<br/>

Enter following url as PUT method (I used POSTMAN client )to test and use provided sample JSON data in body.

Example URL:

http://localhost:4000/api/employee/work_event/10

Enter any number as employee number to test and it will generate data for specific employee. Then in the body enter data in the following format.

Sample JSON data and format:


{
  "empName": "Yoda",
  "forecastHolidays": ["02-05-2017","08-05-2017"],
  "dateRange":
  {
    "startDate": "01-05-2017",
    "endDate": "08-05-2017"
  }




## TODO

## High Priority
* Check for weekends
* Create tests
* Push events to remote server
* Support multi country work event generation.
* Use a DB





