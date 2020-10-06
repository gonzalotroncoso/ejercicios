function mezclarArreglos(a,b){
	n = [];
	i = 0;
	if(a.length ===b.length){
		for (var j = 0 ; j <= a.length-1; j++) {
			n.push(a[j]);
			n.push(b[j]);
		}
	}else if(a.length>b.length){
		for (var j = 0 ; j <= a.length-1; j++) {
			
			if (i<b.length){
				n.push(a[j]);
				n.push(b[j]);				
				i++
			}else{
				n.push(a[j]);
			}
			
		}
	}else{
		for (var j = 0 ; j <= b.length-1; j++) {
			
			if (i<a.length){
				n.push(a[j]);
				n.push(b[j]);				
				i++
			}else{
				n.push(b[j]);
			}
			
		}

	}
	console.log(n);
}

mezclarArreglos("HP",a=[1,2,3,4])