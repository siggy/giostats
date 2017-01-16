# giostats
Display additional stats in http://generals.io

## Instructions

1. Browse to http://generals.io
2. Paste this into your address bar:

    ```javascript
    javascript:(function () {
      var newScript = document.createElement('script');
      newScript.type = 'text/javascript';
      newScript.src = 'http://sig.gy/giostats/giostats.js';
      document.getElementsByTagName('body')[0].appendChild(newScript);
    })();
    ```

    ![address_bar.png](http://sig.gy/giostats/address_bar.png)

    Note if you are in Chrome, it may cutoff the `javascript:` part, you will need to retype that in manually.

3. Open the Replays window

    ![replays_window.png](http://sig.gy/giostats/replays_window.png)

### Note: It's never safe to follow instructions like this

If you do not trust executing random scripts in your address bar (and you probably should not), have a look at the contents of [giostats.js](http://sig.gy/giostats/giostats.js). You can paste that code directly into your JavaScript console.

## Open issues

* Only works with 8-player games
