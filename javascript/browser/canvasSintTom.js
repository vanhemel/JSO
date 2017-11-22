'use strict';
var canvas, context, topx;

window.onload = function(){
    setInterval(drawSint, 1000);
};

function drawSint() {
    canvas = document.getElementById("mijnCanvas");
    context = canvas.getContext("2d");
    topx = canvas.clientWidth / 2;
    //er is nog geen 3D canvas, maar de makers van deze functie zijn toekomst gericht.

    // context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight); //alles wissen
    context.fillStyle = "#ccffff";
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    drawFace();
}

function drawFace() {
    drawCircle("pink", topx, 320, 70);
    drawEyes();
    drawBeard();
    drawMouth();
    drawMiter();
    drawCross();
    drawImage("c://Data Javascript/docu oefeningen/sint.gif",
        Math.floor(Math.random() * canvas.clientHeight - 150),
        Math.floor(Math.random() * canvas.clientHeight - 150), 150, 150);
    drawText("yellow","Dag sinterklaasje!", topx, canvas.clientHeight-50);
    drawSnoepje();
   drawMeerSnoepjes();
}

function drawCircle(color, x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
}

function drawPolygon(color, vertices) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(vertices[0], vertices[1]);
    for (var i = 2; i < vertices.length; i += 2) {
        context.lineTo(vertices[i], vertices[i + 1]);
    }
    context.lineTo(vertices[0], vertices[1]);
    context.fill();
}

function drawLine(color, x1, y1, x2, y2, width) {
    context.strokeStyle = color;
    context.lineWidth = width;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function drawImage(imgName, x, y, width, height) {
    var img = new Image();
    img.src = imgName;
    // images zijn niet altijd snel geladen, daarom wachten we tot de prent 
    // helemaal geladen is voor we ze op het canvas tekenen
    img.onload = function () {
        context.drawImage(img, x, y, width, height);
    }
}

function drawText(color,text,x,y){
    context.fillStyle=color;
    context.font="bold 2em sans-serif";
    context.textAlign="center";
    context.fillText(text,x,y);
}

function drawEyes() {
    context.beginPath();
    context.arc(topx - 25, 315, 10, 0, 2 * Math.PI);
    context.fillStyle = "white";
    context.fill();
    context.beginPath();
    context.arc(topx + 25, 315, 10, 0, 2 * Math.PI);
    context.fillStyle = "white";
    context.fill();
    context.beginPath();
    context.arc(topx - 25, 315, 5, 0, 2 * Math.PI);
    context.fillStyle = "blue";
    context.fill();
    context.beginPath();
    context.arc(topx + 25, 315, 5, 0, 2 * Math.PI);
    context.fillStyle = "blue";
    context.fill();
}

function drawMouth() {
    context.beginPath();
    context.arc(topx, 350, 20, Math.PI / 16, Math.PI - Math.PI / 16);
    context.fillStyle = "darkred";
    context.fill();
}

function drawBeard() {
    drawPolygon("White", [topx - 60, 360, topx + 60, 360, topx, 520])
}

function drawMiter() {
    drawPolygon("Red", [topx - 60, 300, topx - 120, 180, topx, 60, topx + 120, 180, topx + 60, 300])
}

function drawCross() {
    drawLine("gold", topx - 120, 180, topx + 120, 180, 10)
    drawLine("gold", topx, 60, topx, 300, 10)
}

function drawSnoepje(){
    var middepuntx=Math.floor(Math.random() * (canvas.clientHeight - 10));
    var middepunty=Math.floor(Math.random() * (canvas.clientHeight - 10));
    var straal=10;
    var kleuren=["green","blue","lila","orange","purple","violet"];
    var kleurKeuze=kleuren[Math.floor(Math.random() * (6-1))];
    drawCircle(kleurKeuze,middepuntx ,middepunty, straal) 
    drawPolygon(kleurKeuze, [middepuntx+straal,middepunty,middepuntx+straal+7,middepunty-straal,middepuntx+straal+7,middepunty+straal] )
    drawPolygon(kleurKeuze, [middepuntx-straal,middepunty,middepuntx-straal-7,middepunty+straal,middepuntx-straal-7,middepunty-straal] )
}

function drawMeerSnoepjes(){
    for (var i=0; i< 20; i++) {
        drawSnoepje();
    }
}
