let xhtpHead = new XMLHttpRequest();

xhtpHead.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        drawHeader(this.responseText);
    }
}

xhtpHead.open("GET", "https://gitcdn.link/cdn/wondr1and/sysadm_tutorial/main/header.html", true)
xhtpHead.send();

function drawHeader(data) {
    document.getElementById("siteheader").innerHTML = data;
}