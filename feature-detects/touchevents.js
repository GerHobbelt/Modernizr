define(['Modernizr', 'prefixes', 'testStyles'], function( Modernizr, prefixes, testStyles ) {
  //
  // The Modernizr.touch test only indicates if the browser supports
  //    touch events, which does not necessarily reflect a touchscreen
  //    device, as evidenced by tablets running Windows 7 or, alas,
  //    the Palm Pre / WebOS (touch) phones.
  //
  // Additionally, Chrome (desktop) used to lie about its support on this,
  //    but that has since been rectified: crbug.com/36415
  //
  // We also test for Firefox 4 Multitouch Support.
  //
  // For more info, see: modernizr.github.com/Modernizr/touch.html
  //

  Modernizr.addTest('touchevents', function() {
    var bool;
    if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
      bool = true;
    } else if (window.navigator.msMaxTouchPoints > 0) {
      // http://blogs.msdn.com/b/ie/archive/2011/10/19/handling-multi-touch-and-mouse-input-in-all-browsers.aspx      
      // http://msdn.microsoft.com/en-us/library/ie/hh920754(v=vs.85).aspx
      // http://blog.stevelydford.com/2012/03/detecting-touch-hardware-in-ie-10/
      bool = true;
    } else {
      var query = ['@media (',prefixes.join('touch-enabled),('),'heartz',')','{#modernizr{top:9px;position:absolute}}'].join('');
      testStyles(query, function( node ) {
        bool = node.offsetTop === 9;
      });
    }
    return bool;
  }, {
    aliases : ['touch']
  });
});
