function Pet(words)  {
	this.words = words
	this.speak = function(){
		console.log(this.words)
	}
}
// pet.speak('Speak')

function Dog(words){
	Pet.call(this,words)
}
var dog = new Dog('wang')
dog.speak()