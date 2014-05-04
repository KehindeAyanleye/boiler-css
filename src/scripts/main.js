(function() {
  var doc = document || window.document;

  var $ = function(selector) {
    var els;

    switch(selector[0]) {
        case '.':
            els = doc.getElementsByClassName(selector);
            break;
        case '#':
            els = doc.getElementById(selector);
            break;
        case '<':
            els = doc.getElementsByTagName(selector);
            break;
        case '=':
            els = doc.getElementsByName(selector);
            break;
    };

    return els;
  };

}());
