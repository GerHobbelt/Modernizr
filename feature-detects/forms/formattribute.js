define(['Modernizr', 'createElement', 'docElement'], function( Modernizr, createElement, docElement ) {
  // Detects whether input form="form_id" is available on the platform
  // E.g. IE 10 (and below), don't support this
  Modernizr.addTest('formattribute', function() {
    var form = createElement('form');
    var input = createElement('input');
    var div = createElement('div');
    var id = 'formtest' + (new Date()).getTime();
    var attr;
    var bool = false;

    form.id = id;

    //IE6/7 confuses the form idl attribute and the form content attribute, so we use document.createAttribute
    try {
      input.setAttribute("form", id);
    }
    catch( e ) {
      if( document.createAttribute ) {
        attr = document.createAttribute("form");
        attr.nodeValue = id;
        input.setAttributeNode(attr);
      }
    }

    div.appendChild(form);
    div.appendChild(input);

    docElement.appendChild(div);

    bool = form.elements.length === 1 && input.form == form;

    div.parentNode.removeChild(div);
    return bool;
  });
});
