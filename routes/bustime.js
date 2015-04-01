var express = require('express');
var router = express.Router();

var request = require("request");

var API_KEY = process.env.BUS_TIME_API_KEY;

if (!API_KEY) {
  throw new Error("BUS_TIME_API_KEY is a required environment variable");
}

var makeBusTimeRequest = function(req, path) {
  var newQuerystring = req.query;
  newQuerystring.key = API_KEY;
  return request.get({
    url: "http://bustime.mta.info/api/" + path,
    qs: newQuerystring
  });
};

/* GET users listing. */
router.get('/where/stops-for-location.json', function(req, res) {
  makeBusTimeRequest(req, "where/stops-for-location.json").pipe(res);
});

router.get('/siri/stop-monitoring.json', function(req, res) {
  makeBusTimeRequest(req, "siri/stop-monitoring.json").pipe(res);
});

module.exports = router;
