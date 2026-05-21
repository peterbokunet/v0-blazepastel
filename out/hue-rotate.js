(function() {
  var offset = Math.floor(Math.random() * 360);
  var root = document.documentElement;
  var sheets = document.styleSheets;
  
  function hexToHsl(hex) {
    var r = parseInt(hex.slice(1,3),16)/255;
    var g = parseInt(hex.slice(3,5),16)/255;
    var b = parseInt(hex.slice(5,7),16)/255;
    var max = Math.max(r,g,b), min = Math.min(r,g,b);
    var h, s, l = (max+min)/2;
    if (max === min) { h = s = 0; }
    else {
      var d = max - min;
      s = l > 0.5 ? d/(2-max-min) : d/(max+min);
      if (max === r) h = ((g-b)/d + (g < b ? 6 : 0))/6;
      else if (max === g) h = ((b-r)/d + 2)/6;
      else h = ((r-g)/d + 4)/6;
    }
    return [h*360, s, l];
  }
  
  function hslToHex(h, s, l) {
    h = ((h % 360) + 360) % 360;
    var c = (1 - Math.abs(2*l - 1)) * s;
    var x = c * (1 - Math.abs((h/60) % 2 - 1));
    var m = l - c/2;
    var r, g, b;
    if (h < 60) { r=c; g=x; b=0; }
    else if (h < 120) { r=x; g=c; b=0; }
    else if (h < 180) { r=0; g=c; b=x; }
    else if (h < 240) { r=0; g=x; b=c; }
    else if (h < 300) { r=x; g=0; b=c; }
    else { r=c; g=0; b=x; }
    r = Math.round((r+m)*255).toString(16).padStart(2,'0');
    g = Math.round((g+m)*255).toString(16).padStart(2,'0');
    b = Math.round((b+m)*255).toString(16).padStart(2,'0');
    return '#' + r + g + b;
  }

  var skip = {'--radius':1,'--font-sans':1,'--font-mono':1};
  
  for (var i = 0; i < sheets.length; i++) {
    try {
      var rules = sheets[i].cssRules;
      for (var j = 0; j < rules.length; j++) {
        if (rules[j].selectorText === ':root') {
          var style = rules[j].style;
          for (var k = 0; k < style.length; k++) {
            var prop = style[k];
            if (skip[prop]) continue;
            var val = style.getPropertyValue(prop).trim();
            if (/^#[0-9a-f]{6}$/i.test(val)) {
              var hsl = hexToHsl(val);
              if (hsl[1] > 0.05) {
                var newHex = hslToHex(hsl[0] + offset, hsl[1], hsl[2]);
                root.style.setProperty(prop, newHex);
              }
            }
          }
        }
      }
    } catch(e) {}
  }
})();
