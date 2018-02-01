//Javascript for drawing and calculating quadratics 2017
var a, b, c, context, w, h, k = 10;

function init() {
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    w = canvas.width = 600;
    h = canvas.height = 400;
    graphpaper();
    console.log('canvas is loaded into context', w);
} // close init

function QF() {
    // getting values to do quadratic formula
    a = $("#quadA").val();
    b = $("#linB").val();
    c = $("#constant").val();
    x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    x1 = Math.round(x1 * 10000) / 10000
    x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    x2 = Math.round(x2 * 10000) / 10000
    $("#solution1").text("X intercept is at" + x1);
    $("#solution2").text("X intercept is at" + x2);
    console.log(a, b, c);
    results();
    graphQuad();

} // close QF

function results() {
    // finding vertext and displaying symline and yint results
    vX = -(b * 1) / (2 * a);
    vY = a * Math.pow(vX, 2) + b * vX + c * 1;
    $("#vertex").text("Vertex is at (" + vX + "," + vY + ")");
    $("#y-Int").text("Y intercept is at ( 0 ," + c + ")");
    $("#correspondingPoint").text("The Corresponding Point intercept is at (" + 2 * vX + "," + c + ")");


} // close results()

function graphpaper() {
    // the x and y axis drawn
    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";

    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2, h);
    ctx.stroke();

    // thin line with a 50% opacity using rgba() 


    //using the direct variation constant, k
    //  here are the vertical and horizontal lines

    for (i = 0; i < h / (2 * k); i++) {
        ctx.beginPath();
        ctx.moveTo(0, h / 2 - i * k);
        ctx.lineTo(w, h / 2 - i * k);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, h / 2 + i * k);
        ctx.lineTo(w, h / 2 + i * k);
        ctx.stroke();

    }

    for (i = 0; i < w / (2 * k); i++) {
        ctx.beginPath();
        ctx.moveTo(w / 2 + i * k, 0);
        ctx.lineTo(w / 2 + i * k, h);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(w / 2 - i * k, 0);
        ctx.lineTo(w / 2 - i * k, h);
        ctx.stroke();



    }


   


}
 function graphQuad() {
        for (var i = 0; i < w; i++) {
            x = (w / 2 - i) / k;
            y = c * 1 + b * x + a * Math.pow(x, 2);
            nx = (w / 2 - (i+1)) / k; 
            ny = c * 1 + b * nx + a * Math.pow(nx, 2);
            console.log(x,y,nx,ny);
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "black";
            ctx.moveTo(w/2+x*k,h/2-y*k);
            ctx.lineTo(w/2+nx*k,h/2-ny*k);
            ctx.stroke();
        }
    }