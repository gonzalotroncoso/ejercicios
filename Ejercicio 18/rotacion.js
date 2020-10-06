function rotar(arreglo,desplazamiento){
	nuevoArreglo=[]
	largo = arreglo.length
	while (desplazamiento>largo){
		desplazamiento = desplazamiento-largo
	}
	for (var i = 0; i <=arreglo.length-1; i++) {
		if(largo>(desplazamiento+i)){
			nuevoArreglo[i+desplazamiento] = arreglo[i]		
		}else{
			nuevoArreglo[(i+desplazamiento)-largo] = arreglo[i]		
		}
		
	}
	console.log(nuevoArreglo)
}

rotar([1, 2, 3, 4, 5], 123456)

