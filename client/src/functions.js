String.prototype.count=function(char) {
	const without_length = this.replace(new RegExp(`[${char}]`,"g"), '').length;
	return (this.length - without_length) / char.length;
}
