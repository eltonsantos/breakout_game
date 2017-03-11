function Animation(ctx) {
	this.ctx = ctx;
}

Animation.prototype = {
	clearScreen: function() {
		var ctx = this.ctx;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	}
}