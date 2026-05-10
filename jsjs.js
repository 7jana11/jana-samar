var today = new Date();
var hournow = today.getHours();
var msg;

if (hournow < 12) {
    msg = "صباح الخير ";
}
else if (hournow > 18) {
    msg = "مساء الخير ";
}
else {
    msg = "مرحبا 👋";
}

document.getElementById("greeting").innerText = msg;