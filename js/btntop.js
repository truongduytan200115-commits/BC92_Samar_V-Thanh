// nút cuộn trang (back to top)

let btn = document.getElementById("btnTop");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
