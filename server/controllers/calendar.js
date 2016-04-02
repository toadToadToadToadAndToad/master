const axios = require('axios');
const parse = require('co-body');

module.exports.addCalendar = function() {
  const accessToken = this.req.user.accessToken;
  axios({
    method: 'post',
    url: 'https://www.googleapis.com/calendar/v3/calendars?access_token=' + accessToken,
    data: {
      summary: 'Numbers Game',
    },
  }).then(res => {
    console.log(res);
  }).catch(res => {
    console.log(res);
  });
};

module.exports.addEvent = function() {
  const accessToken = this.req.user.accessToken;
  axios({
    method: 'post',
    data: {
      end: {
        date: '2016-04-02',
      },
      start: {
        date: '2016-04-01',
      },
    },
    data: this.data,
    url: 'https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token=' + accessToken,
  })
    .then(res => {
      console.log(res);
    }).catch(res => {
      console.log(res);
    });
  this.status = 200;
  } catch (e){
    console.log(e);
  }
};
