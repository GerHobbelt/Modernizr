/*!
{
  "name": "XMLHttpRequest xhr.responseType='arraybuffer'",
  "property": "xhrresponsetypearraybuffer",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
/* DOC

Tests for XMLHttpRequest xhr.responseType='arraybuffer'.
*/
define(['Modernizr'], function( Modernizr ) {
  Modernizr.addTest('xhrresponsetypearraybuffer', (function(type) {
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
  }('arraybuffer')));
});
