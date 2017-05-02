var pet = {
	words:'....',
	speak:function(say){

		console.log(this.words)
	}
}
// pet.speak('Speak')

var dog = {
	words:'Wangwang'
}
pet.speak.call(dog,'Speak')