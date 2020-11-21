/////////////////////////    ttt     /////////////////////////////////////////
function ttt() {
  if (by % 1 != 0 || check(bx, by + 1)) {
    console.log(box_up, bx, by);
    key();
    xdwidth();
    box_up = 0;

    ctx.clearRect(0, 0, 400, 800);
    setcolor();
    draw();
    by = by + 0.1;
    by = Math.round(by * 10) / 10;
    left = false;
    right = false;
    requestAnimationFrame(ttt);
    ////////////////////////////////////////////////////////////////
  } else {
    console.log("sssss", bx, by);
    ctx.clearRect(0, 0, 400, 800);
    setcolor();
    draw();
    var time2s = setInterval(function () {
      demday++;
      key();
      box_up = 0;

      xdwidth();
      ctx.clearRect(0, 0, 400, 800);
      setcolor();
      draw();
      if (check(bx, by + 1)) {
        clearInterval(time2s);
        demday = 0;
        ttt();
      }
      if (demday == 40) {
        dem++;
        demday = 0;
        addcolor();
        for (let i = 0; i < 4 - a; i++) clear(by + i);
        if (box != 7) clear(by + 4 - a);
        if (gameover()) {
          alert("game over");
          location.reload();
        } else {
          bx = 3;
          by = -2;
          clearInterval(time2s);
          run();
        }
      }
    }, 50);
  }
}
function run() {
  random();
  dem % 2 == 0 ? (box = next1) : (box = next2); // xác định box là gì
  if (box == 7) bx = 4;
  else if (box == 6) by = -1;
  else if (box == 16) by = -4;
  xdwidth(); // xac dinh a,b,c,d,e
  stop = false;
  ttt();
  box_up = 0;
}
