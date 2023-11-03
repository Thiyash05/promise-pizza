//Robin orders the pizza
// The app notes down the order
// PizzaHub prepares the pizza, and it is ready after a while.
// The app notifies Robin, confirming the pizza is on the way.
// The mechanism of notifying Robin about the pizza works by 
//using the callback function.


let res=new Promise((resolve,reject)=>{
	let isDeliver=true;
	if(isDeliver){
		setTimeout(function(){
		   document.write("Robin orders the pizza,<br>")
	   })
	   
	   setTimeout(function(){
		   document.write("PizzaHub prepares the pizza, and it is ready after a while.,<br>")
	   },2000)
	   
	   setTimeout(function(){
		   document.write("confirming the pizza is on the way.,<br>")
	   },3000) 
		
		setTimeout(function(){
            alert("The order has been delivered")
	   },5000)
	   resolve()
	}
	else{
		reject("delivered")
	}
})
res.then((msg)=>{
	document.write(msg);
}).catch((err)=>{
	document.write(err);
})
