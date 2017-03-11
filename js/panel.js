function Panel (ctx) {
  var score = 0;
  var lives = 3;
}

Panel.prototype = {

	drawScore: function () {
		ctx.font = "16px Arial";
  	ctx.fillStyle = "#0095DD";
  	ctx.fillText("Score: "+score, 8, 20);
	},
  drawLives: function () {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
  }

}