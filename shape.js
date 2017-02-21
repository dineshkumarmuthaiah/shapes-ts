var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var shape = (function () {
    function shape() {
    }
    return shape;
}());
var square = (function (_super) {
    __extends(square, _super);
    function square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    square.prototype.draw = function () {
        this.canvas = document.getElementById('myCanvas');
        var ctx = this.canvas.getContext("2d");
        ctx.rect(50, 50, 50, 50);
        ctx.stroke();
    };
    return square;
}(shape));
var rectangle = (function (_super) {
    __extends(rectangle, _super);
    function rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    rectangle.prototype.draw = function () {
        this.canvas = document.getElementById('myCanvas');
        var ctx = this.canvas.getContext("2d");
        ctx.rect(20, 20, 150, 100);
        ctx.stroke();
    };
    return rectangle;
}(shape));
var circle = (function (_super) {
    __extends(circle, _super);
    function circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    circle.prototype.draw = function () {
        this.canvas = document.getElementById('myCanvas');
        var ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    };
    return circle;
}(shape));
function drawShape() {
    var get = document.getElementById("shape").value;
    switch (get) {
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
