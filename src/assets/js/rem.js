! function() { 
    function setFontSize() {
        var _w = document.documentElement.clientWidth; 
        document.documentElement.style.fontSize = _w / 15+ "px";
    }
    var _t = null;
    window.addEventListener("resize", function() {
        clearTimeout(_t);
        _t = setTimeout(setFontSize, 100);
    }, false);
    setFontSize();
}(window);