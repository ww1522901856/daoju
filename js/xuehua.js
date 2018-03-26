/**
 * Created by web-01 on 2018/2/28.
 */
(()=>{
    function snow(left, height, src) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        div.appendChild(img);
        img.className = "roll";
        img.src = src;
        div.style.left = left + "px";
        div.style.height = height + "px";
        div.className = "div";
        document.getElementById("snowzone").appendChild(div);
        setTimeout(function() {
            document.getElementById("snowzone").removeChild(div);
            // console.log(window.innerHeight);
        }, 5000);
    }
    setInterval(function() {
        var left = Math.random() * window.innerWidth;
        var height = Math.random() * window.innerHeight;
        var src = "s" + Math.floor(Math.random() * 2 + 1) + ".png"; //两张图片分别为"s1.png"、"s2.png"
        snow(left, height, src);
    }, 500);
})();