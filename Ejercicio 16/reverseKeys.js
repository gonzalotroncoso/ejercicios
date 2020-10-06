function reverseKeys(valor){
	nuevoObjeto = {}
	if (typeof(valor)=="object"){
		for (const property in valor) {
			if(typeof(valor[property])=="string"){
				nuevoObjeto[valor[property]] = property 
			}else{
				nuevoObjeto[property] = valor[property]
			}
		}
		console.log(nuevoObjeto)	

	}else{
		console.log("error, input cant be a " + typeof(valor))
	}
	
}

var prueba = {
	nombre: "santi",
	edad: 22,
	nacionalidad: "de otro planeta",
	documento: 44444444
	
}

reverseKeys(prueba)


	
			
				
			 		

