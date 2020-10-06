function validarPrefijos(numero){	
	telefono = {}
	var prefijos = [54, 55, 56, 57, 58]
 	var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
	for (var i = 0; i <= prefijos.length; i++) {
		parametro = prefijos[i]
		telefono[parametro] = paises[i]
	}
	
	if(telefono[numero.slice(0,2)]){
		console.log("Este numero pertenece a: "+telefono[numero.slice(0,2)])
	}else{
		console.log("El numero no pertenece a nuestros países")
	}
	
}

validarPrefijos("543434069902")