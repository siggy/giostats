# giostats
Display additional stats in https://generals.io

## Instructions

1. Browse to https://generals.io
2. Paste this into your address bar:

```javascript
javascript:(function () {
  var newScript = document.createElement('script');
  newScript.type = 'text/javascript';
  newScript.src = 'http://sig.gy/giostats/giostats.js';
  document.getElementsByTagName('body')[0].appendChild(newScript);
})();
```

3. Open the Replays window


## Open issues

* Only works with 8-player games
