function Keyboard () {
  var rightPressed = false;
	var leftPressed = false;

	document.addEventListener("keydown", keyDownHandler);
	document.addEventListener("keyup", keyUpHandler);
  document.addEventListener("mousemove", mouseMoveHandler);
}

Keyboard.prototype = {
  keyUpHandler: function(e) {
	  if(e.keyCode == 39) {
	    rightPressed = false;
	  }
	  else if(e.keyCode == 37) {
	    leftPressed = false;
	  }
	}

	mouseMoveHandler: function(e) {
	  var relativeX = e.clientX - canvas.offsetLeft;
	  if(relativeX > 0+paddleWidth/2 && relativeX < canvas.width-paddleWidth/2) {
	    paddleX = relativeX - paddleWidth/2;
	  }
	}

	keyDownHandler: function(e) {
	  if(e.keyCode == 39) {
	    rightPressed = true;
	  }
	  else if(e.keyCode == 37) {
	    leftPressed = true;
	  }
	}

}