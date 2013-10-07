Google Cast Receiver Bootstrap Plugin
================

This plugin is a simple jQuery plugin that binds to an existing Boostrap button dropdown and populates it with all available Google Cast receivers.

## Basic Initialization

Assuming HTML of
```html
<div class="btn-group" id="cast-list">
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    <span class="selectedReceiver">Choose a receiver...</span> <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu"></ul>
</div>
```

your initialization will look like:

```javascript
var YOUR_APP_ID = "your_cast_app_id_from_google";
var cast_api = new cast.Api();

$("#cast-list").castReceiverList({
    api : cast_api,
    appId : YOUR_APP_ID,
    onSelect : function(receiver) {}
});
```

The jQuery selector must be to the `.btn-group` for the button dropdown.

## Options

During initialization, the following options are available:

<table>
<thead><tr><th>Property</th><th>Required?</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
  <td>api</td>
  <td>Yes</td>
  <td>cast.Api</td>
  <td>Reference to your cast.Api object</td>
</tr>
<tr>
  <td>appId</td>
  <td>Yes</td>
  <td>string</td>
  <td>Value of your Cast App ID</td>
</tr>
<tr>
  <td>onSelect</td>
  <td>No</td>
  <td>function</td>
  <td>Callback function that will receive as its sole argument the cast.Receiver that was selected</td>
</tr>
</tbody>
</table>

If you have an element with class `selectedReceiver` in the dropdown button, that value will automatically be replaced with the selected receivers name.

## Example Usage

```
var APP_ID = "some-app-id";
var selectedReceiver = null;
$(".receiverSelectedOptions").hide();

initializeApi = function() {
  var cast_api = new cast.Api();
  $("#cast-list").castReceiverList({
    api: cast_api,
    appId : APP_ID,
    onSelect : function(receiver) {
      selectedReceiver = receiver;
      $(".receiverSelectedOptions").show();
    }
  });
};
```
