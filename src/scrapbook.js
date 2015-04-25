// Generated by CoffeeScript 1.9.2
(function() {
  var Scrap, containsIgnoreCase, scraps;

  scraps = [];

  $(document).ready(function() {
    $('button#submit').click(function() {
      var scrap;
      scrap = new Scrap(scraps.length + 1, $('#email').val(), $('#name').val(), $('#message').val(), $.now());
      $('#scraps tr:last').after("<tr id='scrap-row-" + scrap.scrapNo + "'><td>" + scrap.scrapNo + "</td><td>" + scrap.name + "</td><td>" + scrap.email + "</td><td>" + scrap.message + "</td><td>" + (moment(scrap.timestamp).format('MMMM Do YYYY, h:mm:ss a')) + "</td></tr>");
      return scraps.push(scrap);
    });
    return $('#search').keyup(function() {
      var i, j, len, results, scrap, searchText;
      searchText = $('#search').val();
      results = [];
      for (i = j = 0, len = scraps.length; j < len; i = ++j) {
        scrap = scraps[i];
        if (scrap.containsText(searchText)) {
          results.push($('#scrap-row-' + (i + 1)).show());
        } else {
          results.push($('#scrap-row-' + (i + 1)).hide());
        }
      }
      return results;
    });
  });

  Scrap = (function() {
    function Scrap(scrapNo, email, name, message, timestamp) {
      this.scrapNo = scrapNo;
      this.email = email;
      this.name = name;
      this.message = message;
      this.timestamp = timestamp;
    }

    Scrap.prototype.containsText = function(s) {
      return containsIgnoreCase(this.scrapNo.toString(), s) || containsIgnoreCase(this.email, s) || containsIgnoreCase(this.name, s) || containsIgnoreCase(moment(this.timestamp).format('MMMM Do YYYY'), s);
    };

    return Scrap;

  })();

  containsIgnoreCase = function(string, substring) {
    if (string != null) {
      if (substring != null) {
        return string.toUpperCase().indexOf(substring.toUpperCase()) > -1;
      } else {
        return false;
      }
    } else {
      return substring == null;
    }
  };

}).call(this);