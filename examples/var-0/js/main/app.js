/*
 - funcția distance primește ca parametrii două array-uri
 - fiecare element poate apărea cel mult o dată într-un array; orice apariții suplimentare sunt ignorate 
 - distanța dintre cele 2 array-uri este numărul de elemente diferite dintre ele
 - dacă parametrii nu sunt array-uri se va arunca o excepție ("InvalidType")
*/
/*
 - the distance function receives as parameters two arrays
 - each element can appear in each array at most once; any duplicates are ignored
 - the distance between the 2 arrays is the number of different elements between them
 - if the parameters are not arrays an exception is thrown ("InvalidType")
*/

function distance(first, second){
	//TODO: implementați funcția
	if(!Array.isArray(first) || !Array.isArray(second)){
		throw new Error("InvalidType")
	}

	const uniqueFirst = Array.from(new Set(first));
	const uniqueSecond = Array.from(new Set(second));
	
	let diff=0;
	for(const [element,index] of uniqueFirst){
		if(uniqueSecond.indexOf(element)===-1){
			diff++;
		}
		else{
			uniqueSecond.splice(index,1);
		}
	}
	
	diff+=uniqueSecond.length;
	
	return diff;
}


module.exports.distance = distance