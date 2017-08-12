var names=["salman","james","khan","Jhon"];

alert("Hello");

for(var i=0;i<names.length;i++){

     var first_char=names[i].charAt(0);
     

	if ((first_char==="j")||(first_char==="J")){
		console.log("Goodbye "+names[i]);
  //    } 
  //   else if (first_char==="J"){
		// console.log("Goodbye "+names[i]);
     } else{
 	console.log("Hello "+names[i]);
    }
  };