function arregloDeObjetos(nro,nombre){
		a=[]	
		objeto={}
		var n = nombre;	
		for (var i = 0; i <=nro; i++) {			
			objeto[n]=i
			a.push(objeto)			
		}
		console.log(a);
	}

arregloDeObjetos(12,"Hola")
