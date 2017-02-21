abstract class shape{
    public canvas : HTMLCanvasElement;
    abstract draw() :void;

}
class square extends shape{
    draw(){
        this.canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
        var ctx = <CanvasRenderingContext2D> this.canvas.getContext("2d");
        ctx.rect(50,50,50,50);
        ctx.stroke();
    }
}
class rectangle extends shape{
     draw(){
         this.canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
        var ctx = <CanvasRenderingContext2D> this.canvas.getContext("2d");
        ctx.rect(20, 20, 150, 100);
        ctx.stroke();   
 }
}
class circle extends shape{
    draw(){
        this.canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
        var ctx = <CanvasRenderingContext2D> this.canvas.getContext("2d");
       /*  ctx.beginPath();*/
        ctx.arc(95,50,40,0,2*Math.PI);
        ctx.stroke();
    } 
}
function drawShape(){
    var get =  (<HTMLInputElement>document.getElementById("shape")).value;
    switch(get){
        case "square":
        {
            var squ = new square();
            squ.draw();
            break;
        }
        case "rectangle":
        {
            var rec = new rectangle();
            rec.draw();
            break;
        }
        case "circle":
        {
            var cir = new circle();
            cir.draw();
            break;
        }
    }
}