function loopDeImpares(n,str){
	for (var i = 0 ; i <= 100; i++) {
		let s = i+n
		let r = s%2
		if(r===1){
			console.log("Interacion: "+i+" la suma es "+s+" es impar y la palabra asociada es "+ str)
		}else{
			console.log("Interacion: "+i+" la suma es "+s)
		}
	}
}

loopDeImpares(5,"Hola Mundo")