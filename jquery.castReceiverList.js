$.fn.castReceiverList = function(options) {
  var defaults = {
    api : null,
    appId : null,
    onSelect : function(receiver) {}
  };
  var settings = $.extend({}, defaults, options);
  var errorOut = function(message) {
    console.error(message);
  };

  if (settings.api == null)
    return errorOut("The api must be provided for castReceiverList");
  if (settings.appId == null)
    return errorOut("The appId must be provided for castReceiverList");
  
  return this.each(function() {
    var $this = $(this);
    var $ul = $this.find("ul").html('');
    var receivers = [];
    
    var onReceiverEvent = function(list) {
      receivers = list;
      for (var i = 0; i < list.length; i++) {
        var r = list[i];
        $ul.append("<li data-id='" + r.id + "'><a href='javascript:void(0)'>" + r.name + "</a></li>") ;
      }
    };
    
    var onItemSelect = function() {
      var receiverId = $(this).parent().data("id");
      for (var i = 0; i < receivers.length; i++) {
        if (receivers[i].id == receiverId) {
          settings.onSelect(receivers[i]);
          $this.find(".selectedReceiver").text(receivers[i].name);
          return;
        }
      }
    };
  
    settings.api.addReceiverListener(settings.appId, onReceiverEvent );
    $ul.on("click", "li a", onItemSelect);
  });
};

