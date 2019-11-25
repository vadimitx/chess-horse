let chess = [
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0]
];

function draw() {
	let out = '';
	let m = 0;
	for (let i = 0; i< chess.length; i++){
		let arr = chess[i];
		for (let k = 0; k < arr.length; k++){
			if(m%2 == 0) {
			out += `<div class="chess-block" data-x="${k}" data-y="${i}"></div>`; //createElement
			}
			else {
				out += `<div class="chess-block bg-black" data-x="${k}" data-y="${i}"></div>`;
			}
			m++;
		}
		m++;
	}
	document.querySelector('#field').innerHTML = out;
	document.querySelectorAll('.chess-block').forEach(function(element){
		element.onclick = horse;
	});
}
draw();

function horse(){
	document.querySelectorAll('.chess-block').forEach(function(element){
		element.classList.remove('start');
		element.classList.remove('active')
	})
	let x = this.dataset.x;
	let y = this.dataset.y;
	console.log(x + ' ' + y);
	//this.classList.all('start');
	if (+x + 2 < 8 && +y + 1 < 8){
		document.querySelector(`.chess-block[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.add('active');
	}
	if (+x + 2 < 8 && +y - 1 >= 0){
		document.querySelector(`.chess-block[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.add('active');
	}
	if (+x - 2 >= 0 && +y + 1 < 8){
		document.querySelector(`.chess-block[data-x="${+x - 2}"][data-y="${+y + 1}"]`).classList.add('active');
	}
	if (+x - 2 >= 0 && +y - 1 >= 0){
		document.querySelector(`.chess-block[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.add('active');
	}
	if (+x + 1 < 8 && +y - 2 >= 0){
		document.querySelector(`.chess-block[data-x="${+x + 1}"][data-y="${+y - 2}"]`).classList.add('active');
	}
	if (+x - 1 >= 0 && +y - 2 >= 0){
		document.querySelector(`.chess-block[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.add('active');
	}
	if (+x + 1 < 8 && +y + 2 < 8){
		document.querySelector(`.chess-block[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.add('active');
	}
	if (+x - 1 >= 0 && +y + 2 < 8){
		document.querySelector(`.chess-block[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.add('active');
	}
}


