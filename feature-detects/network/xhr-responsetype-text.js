/*!
{
  "name": "XMLHttpRequest xhr.responseType='text'",
  "property": "xhrresponsetypetext",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
/* DOC

Tests for XMLHttpRequest xhr.responseType='text'.
*/
define(['Modernizr'], function( Modernizr ) {
  Modernizr.addTest('xhrresponsetypetext', (function(type) {
    if (typeof XMLHttpRequest == 'undefined') {
      return false;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/', true);
    try {
      xhr.responseType = type;
    } catch(error) {
      return false;
    }
    return 'response' in xhr && xhr.responseType == type;
  }('text')));
});
