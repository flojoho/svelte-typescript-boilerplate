
const fps = 30;

let x = 0;
let y = 0;
let vx = 1.2;
let vy = 1.2;

const sideLength = 30;

const startAnimation = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d')!;
  
  const interval = setInterval(() => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'white';
    ctx.lineWidth = 1;
    ctx.fillRect(x, y, sideLength, sideLength);

    if(x > canvas.width - sideLength && vx > 0) vx = -vx;
    if(x < 0 && vx < 0) vx = -vx;
    if(y > canvas.height - sideLength && vy > 0) vy = -vy;
    if(y < 0 && vy < 0) vy = -vy;

    x += vx;
    y += vy;
  }, 1000/fps);

  return {
    destroy() {
      clearInterval(interval);
    }
  };
};

export default startAnimation;
