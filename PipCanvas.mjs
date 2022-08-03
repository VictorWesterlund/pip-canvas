export class PipCanvas {
	constructor(source) {
		this.source = source;
		const canvas = document.createElement("canvas");
		this.ctx = canvas.getContext("2d");

		// Call method with same constructor name if exists
		if (this.source.constructor.name in this) {
			this[this.source.constructor.name]();
		}

		this.video = document.createElement("video");
		this.video.srcObject = canvas.captureStream(0);
	}

	// Create from image
	HTMLImageElement() {
		this.ctx.width = this.ctx.canvas.width = this.source.width;
		this.ctx.height = this.ctx.canvas.height = this.source.height;

		this.ctx.drawImage(this.source, 0, 0);
	}

	// Open PIP
	open() {
		this.video.play();
		this.video.requestPictureInPicture();
	}
}