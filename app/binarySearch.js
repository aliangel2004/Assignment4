module.exports= function binarySearch (){
	Array.prototype.toTwenty  = function () {
		for (var i = 1; i <= 20; i++){
			this.push([i]);
		}
		return this;
	};

	Array.prototype.toForty= function () {
		for (var i = 2; i <= 40; i+=2){
			this.push(i);
		}
		return this;
	};

	Array.prototype.toOneThousand = function () {
		for (var i = 10; i <= 1000; i+=10){
			this.push(i);
		}
		return this;
	}

	Array.prototype.search = function binarySearch(pickRandom) {
		var begin = 0;
		var close = this.length -1;
		var collect = {count: 0, index: null, length: this.length};
		while(begin <= close) {
			var mid = Math.floor((begin + close) /2);
			if(this[close] === pickRandom) {
				collect.index = close;
				return collect;
			}
			else {
				close = close - 1;
			}
			if(this[begin] === pickRandom) {
				collect.index = begin;
				return collect;
			}
			else {
				begin = begin + 1;
			}
			if(this[mid] === pickRandom) {
				collect.index = mid;
				return collect;
			}
			else if (this[mid] > pickRandom) close = mid -1;
			else if (this[mid] < pickRandom) begin = mid + 1;
			collect.count ++;

		}
		collect.index = -1;
		return collect;
	}
};

