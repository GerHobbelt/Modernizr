
// https://gist.github.com/2636061
//
// Add a Modernizr check for VML

Modernizr.addTest('vml', function() {
    // Adapted from http://stackoverflow.com/questions/654112/how-do-you-detect-support-for-vml-or-svg-in-a-browser
    var a = document.body.appendChild(document.createElement('div'));
    a.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
    var b = a.firstChild;
    b.style.behavior = "url(#default#VML)";
    var supportsVml = b ? typeof b.adj == "object": true;
    a.parentNode.removeChild(a);
    return supportsVml;
});
