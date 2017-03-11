function Colisor (ctx) {
  
}

Colisor.prototype = {
  collisionDetection: function () {
    for(c=0; c<brickColumnCount; c++){
      for(r=0; r<brickRowCount; r++){
        var b = bricks[c][r];
        if(b.status  == 1) {
          if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
            dy = -dy;
            b.status = 0;
            score++;
            if(score == brickRowCount*brickColumnCount) {
              alert("YOU WIN, CONGRADULATIONS!");
              document.location.reload();
            }
          }
        }
      }
    } 
  }
}