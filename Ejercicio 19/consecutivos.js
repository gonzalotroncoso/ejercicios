function consecutivosSimilares(palabra){
	f=false
	j=0
	count=0
	for (var i = 0; i <= palabra.length -1; i++) {		
		if(j<=palabra.length-1){
		if(f===true){
			c = palabra[j+1]//			
			if(b===c){//
				j++//
				count++//
				b = c// 
			}else{
				f = false
			}

		}	
		if(f===false){
			a = palabra[i]// 			
			b = palabra[j+1]//		
			if(a===b){ //
				f=true //
				j++//
				count++//
			}else{
				j++
			}
		}
		
		}
		
	}
	console.log(count)
}

consecutivosSimilares("AAABBB")
