(function() {
  var palettes = [
    { // Peach & Sky (original)
      background:'#eef7f9', foreground:'#0e2433', card:'#feeadb', primary:'#16b3eb',
      secondary:'#6bcf9d', muted:'#d1e9f5', accent:'#ff9858', border:'#b4dbef'
    },
    { // Lavender & Rose
      background:'#f5f0fa', foreground:'#1f1a2e', card:'#fce4ec', primary:'#9c7cdb',
      secondary:'#f48fb1', muted:'#e8daf5', accent:'#ffab91', border:'#d1c4e9'
    },
    { // Mint & Coral
      background:'#f0faf6', foreground:'#1a2e26', card:'#fff3e0', primary:'#4db6ac',
      secondary:'#ff8a80', muted:'#c8e6c9', accent:'#ffcc80', border:'#b2dfdb'
    },
    { // Butter & Violet
      background:'#fffde7', foreground:'#2a1f0e', card:'#f3e5f5', primary:'#ba68c8',
      secondary:'#ffd54f', muted:'#fff9c4', accent:'#7e57c2', border:'#e1bee7'
    },
    { // Blush & Sage
      background:'#fdf2f0', foreground:'#2d1f1a', card:'#e8f5e9', primary:'#81c784',
      secondary:'#ef9a9a', muted:'#fce4ec', accent:'#a5d6a7', border:'#c8e6c9'
    }
  ];

  var p = palettes[Math.floor(Math.random() * palettes.length)];
  var root = document.documentElement;
  for (var key in p) {
    root.style.setProperty('--' + key, p[key]);
  }
})();
