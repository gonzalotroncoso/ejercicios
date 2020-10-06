function warWord(p1, p2){
 var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,
 			o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
 totalp1=0
 totalp2=0
 for (var i = 0; i < p1.length; i++) {
 			var parametro = p1[i]
 			n = abc[parametro] 		
 			totalp1= n+totalp1; 			
 }

  for (var i = 0; i < p2.length; i++) {
 			var parametro = p2[i]
 			n = abc[parametro] 			
 			totalp2= n+totalp2; 			
 }

  if(totalp1>totalp2){
 	console.log(p1+" "+totalp1+" > "+totalp2)
  }else if (totalp1<totalp2){
 	console.log(p2+" "+totalp2+" > "+totalp1)
  }else{
 	console.log("Las palabras suman lo mismo")
  }


}

warWord("hola","chau")