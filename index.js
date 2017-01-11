
/*add hover, write a function that loops through the array & takes data,
how to add parameters to a function using v-on
	
 build a board component with template, link event handlers to the board, write onclick fn to 
change the state of the box clicked accordingly, 
write a fn that adds an X or O randomly as computer
write winning combination according to 2 dimensional mapping and function that checks if you have won from array
Refer to other program for how to check for winner
Find way to add machine learning to project
*/ 


var app = new Vue({
	el:"#board",
	data:{
		board:[[{val:''},{val:''},{val:''}],
		[{val:''},{val:''},{val:''}],
		[{val:''},{val:''},{val:''}]],
		turn:"X"
	},
	computed:{
		/*
			var winArr  = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
		*/
	},
	methods:{
		mark(box){
			if(box.val == ''){
				box.val = this.turn;
				this.turn = this.turn == 'X' ? 'O':'X';
				this.computerPlay();
			}
		},
		computerPlay(){
				const board = this.board;
				let row = Math.floor(Math.random() * 2);
				let col = Math.floor(Math.random() * 2);
				if(board[row][col].val == ''){
					board[row][col].val = this.turn
					this.turn = this.turn == 'X' ? 'O':'X';
				}else setTimeout(this.computerPlay(), 1000)
			},
			/* 3= board[0][2]
				check(){
					forEach(combo in winArr){
						if(board[row][col].val == combo[1])
					}
					
				}
			*/
		}
})

