import React, {
    Component
} from "react";
window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }
    render() {
        return ( 
            <div>
                <canvas id = "canvas"
                    width = "1920"
                    height = "600"
                    style = "position:absolute;opacity: 0.5;" 
                > 
                </canvas> 
            </div>
        )
    }
    componentWillMount() {
        window.requestAnimationFrame =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame;

        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        let w = (canvas.width = 1920);
        let h = (canvas.height = 600);
        let circles = [];
        let current_circle = new currentCirle(0, 0);
        // this.draw()
    }
     draw = ()=> {
         console.log(this.state.ctx)
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < circles.length; i++) {
          circles[i].move(w, h);
          circles[i].drawCircle(ctx);
          for (let j = i + 1; j < circles.length; j++) {
            circles[i].drawLine(ctx, circles[j]);
          }
        }
        if (current_circle.x) {
          current_circle.drawCircle(ctx);
          for (var k = 1; k < circles.length; k++) {
            current_circle.drawLine(ctx, circles[k]);
          }
        }
        requestAnimationFrame(draw);
    }

    // init = (num) => {
    //     for (var i = 0; i < num; i++) {
    //       circles.push(new Circle(Math.random() * w, Math.random() * h));
    //     }
    //     draw();
    // };
}
class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = Math.random() * 4;
        this._mx = Math.random();
        this._my = Math.random();
    }
    drawCircle(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 360);
        ctx.closePath();
        ctx.fillStyle = "#6771FF"; //dot_color
        ctx.fill();
    }

    drawLine(ctx, _circle) {
        let dx = this.x - _circle.x;
        let dy = this.y - _circle.y;
        let d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y); //start
            ctx.lineTo(_circle.x, _circle.y); //end
            ctx.closePath();
            ctx.strokeStyle = "#205cff"; //line_color
            ctx.stroke();
        }
    }
    move(w, h) {
        this._mx = this.x < w && this.x > 0 ? this._mx : -this._mx;
        this._my = this.y < h && this.y > 0 ? this._my : -this._my;
        this.x += this._mx / 2;
        this.y += this._my / 2;
    }
}
class currentCirle extends Circle {
    constructor(x, y) {
        super(x, y);
    }

    drawCircle(ctx) {
        ctx.beginPath();
        this.r = 3;
        ctx.arc(this.x, this.y, this.r, 0, 360);
        ctx.closePath();
        ctx.fillStyle = "#205cff";
        ctx.fill();
    }
}

export default Login;