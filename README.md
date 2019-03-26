## Fitbit Webconfig Demo
This example demonstrates a settings view that opens a new web view, collects input from the user, and then returns this input to the settings view. In the demo, the user inputs their name in the web view, which is then displayed when the user returns to the settings view. This serves as a proof of concept; any information could be collected or processed in the web view and then returned to the settings view.

### Redirecting
Below is a PHP example of a web form that will redirect the user back to the settings view in the Fitbit app.
```
<form action="https://app-settings.fitbitdevelopercontent.com/simple-redirect.html">
  <input type="hidden" name="state" value="<?php echo $_GET["state"] ?>">
  <input name="name" placeholder="Enter your name">
  <button type="submit">SUBMIT</button>
</form>
```

Demo link: https://gam.fitbit.com/gallery/app/6023bbf5-5999-4b36-a380-1218548f699d
