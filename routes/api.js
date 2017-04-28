const express = require('express');
const router = express.Router();
const work_events = require('../events');


router.put('/employee/work_event/:id',function (req,res,next) {

    res.send(work_events.getEvents(req.params.id,req.body));

})




module.exports = router;