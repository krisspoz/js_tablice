var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName ='Marian';

if (allNames.indexOf(newName) === -1) {
	alert('Brak imienia w tablicy, imię zostało dodane.');
    console.log(allNames.push(newName));
} else if (allNames.indexOf(newName) != -1) {
    alert('Imię już istnieje w tablicy i nie zostało dodane.');
    console.log('Imię już istnieje w tablicy i nie zostało dodane.');
}

console.log(allNames);