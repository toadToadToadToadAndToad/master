const axios = require('axios');

module.exports.addCalendar = function(){
const accessToken = this.req.user.accessToken;
  axios({
    method: 'post',
    url: 'https://www.googleapis.com/calendar/v3/calendars?access_token=' + accessToken,
    data: {
      summary: "Numbers Game"
    }

  }).then(function(res){
    console.log(res);
  }).catch(function(res){
    console.log(res);
  })
}
module.exports.addEvent = function(){
  const accessToken = this.req.user.accessToken;
  axios({
  method: 'post',
  data: {
    "end" : {
      "date": "2016-04-02"
    },
    "start" : {
      "date": "2016-04-01"
    }
  },
  data: this.data,
  url:"https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token=" + accessToken}).then(function(res){
    console.log(res);
  }).catch(function(res){
    console.log(res)
  })
}
