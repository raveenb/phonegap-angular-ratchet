'use strict';

app.service('alarmService', function () {
  
  console.log('alarmService');

  this.getAlarms = function () {
    console.log('alarmService getAlarms');
    return alarms;
  };

  this.addAlarm = function (d, t, m) {
    console.log('alarmService addAlarm')
    var i = alarms.length + 1;
    alarms.push({
      id: i,
      date: d,
      time:t,
      msg:m
    });
  };

  this.deleteAlarm = function (id) {
    console.log('alarmService deleteAlarm ' + id);
    for (var i = alarms.length - 1; i >= 0; i--) {
      if (alarms[i].id === id) {
        alarms.splice(i, 1);
        break;
      };
    };
  };

  this.getAlarm = function (id) {
    console.log('alarmService getAlarm ' + id);
    for (var i = 0; i < alarms.length; i++) {
      if (alarms[i].id === id) {
        return alarms[i];
      }
    };
  };

  var alarms = [
    { id : 0, date : '01/01/2013', time : '01:00', msg : 'Happy Birthday A'},
    { id : 1, date : '02/02/2013', time : '02:00', msg : 'Happy Birthday B'},
    { id : 2, date : '03/03/2013', time : '03:00', msg : 'Happy Birthday C'},
    { id : 3, date : '04/04/2013', time : '04:00', msg : 'Happy Birthday D'}
  ];
});