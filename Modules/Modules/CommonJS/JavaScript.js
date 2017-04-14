var example = require(['./lib.js'], function (lib) {
    var h = lib.hello();
    document.getElementById("h").innerHTML = h;
});

//return;
