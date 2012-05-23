$(function() {
  var $panel = $('#panel');
  var api = $panel.dictate('Is this a pen?', 'No, it isn\'t.', 'It\'s an apple.', {
    exposed: ".',?!",
    caseInsentive: true,    
    complete: function() {
      $panel.next().show();
    }
  }).data('dictate').start();
});