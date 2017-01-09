/*add hover, write a function that loops through the array & takes data,
how to add parameters to a function using v-on
	
 build a board component with template, link event handlers to the board, write onclick fn to 
change the state of the box clicked accordingly, write a fn that adds an X or O randomly as computer
write winning combination and function that checks if you have won from array

*/ 

Vue.component('box', {
	template:'<div>{{value}}</div>',
	data:function(){
		board:['','','X','O','','','','','']
	}
})

new Vue({
	el:"#tic-tac-toe-board",
	data:{
		
		currentMove:"X"
	},
})

