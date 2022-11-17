
						// Enonse #11
						// Nan yon tablo nonb, 
			// kreye pwòp fason pa w pou w afiche sa ki pi gran, ak sa ki piti a.

   let myArray = [100, 56, 6, 32, 53,130, 516, 26, 332, 53];						

	let max=myArray[0], min=myArray[0];

	for(let i=0; i<myArray.length; i++){
	    if(myArray[i]<min){
	        min=myArray[i]
	    }
	    
	}

	console.log("Pi piti a se: "+ min)

	for(let j=0; j<myArray.length; j++){
	    
	    if(myArray[j]>max){
	        max=myArray[j]
	    }
	}


	console.log("Pi gran nonb lan se: " + max)


