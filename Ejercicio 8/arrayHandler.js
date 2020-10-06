function arrayHandler (arreglo1, arreglo2){
	if(arreglo1.length===arreglo2.length){
		for (var i =0 ; i <= arreglo1.length-1; i++) {
			console.log("soy "+arreglo1[i]+" y yo soy "+arreglo2[i])
		}
	}else{
		console.log("Los arreglos no tienen la misma longitud")
	}
}


arrayHandler(a=[1,2,3,4], "hola")
