/*add hover, write a function that loops through the array & takes data,
how to add parameters to a function using v-on
	
 build a board component with template, link event handlers to the board, write onclick fn to 
change the state of the box clicked accordingly, write a fn that adds an X or O randomly as computer
write winning combination and function that checks if you have won from array

*/ 

var app = new Vue({
	el:"#tic-tac-toe-board",
	data:{
		currentMove:"X",
		board:['','','','','','','','','']
	},
	methods:{
		write:function(index){	 
			this.board[index] = this.currentMove
			this.currentMove = "X" ? this.currentMove = "0" : this.currentMove 
			return this.board
		}
	}
})
