# uptimrobot API v2

See the doc at [uptimerobot.com/api](https://uptimerobot.com/api/). All methods of the v2 API are available here. Each methods return a promise, wich resolve when uptime robot request is a success and catch otherwise.

## How to use?

All the functions here have the same name as methods on uptimerobot and required params are put as arguments of the functions in the same order.  

Add uptimerobot to your project :

```javascript
const UptimeRobot = require('@lazydb_community/uptimerobot');
const UptimeRobotClient = new UptimeRobot('your-api-key');
```

Then you can use any methods of the uptimerobot.com API v2 like that :  

```javascript
UptimeRobotClient.newMonitor("friendly name","https://mywebsite.com","1", {}).then(data => {
  const monitor_id = data.monitor.id;
  console.log("New monitor created with id ", monitor_id);
}).catch(error => {
  console.log(error);
})
```
