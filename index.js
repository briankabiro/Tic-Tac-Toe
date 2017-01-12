

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
	el:"#app",
	data:{
		board:[[{val:''},{val:''},{val:''}],
		[{val:''},{val:''},{val:''}],
		[{val:''},{val:''},{val:''}]],
		turn:"X",
		winner:"",
		finalMessage:"",
		windex:[
			[[0,0], [0,1], [0,2]],
      		[[1,0], [1,1], [1,2]],
    		[[2,0], [2,1], [2,2]],
  	  		[[0,0], [1,0], [2,0]],
	    	[[0,1], [1,1], [2,1]],
	    	[[0,2], [1,2], [2,2]],
	  		[[0,0], [1,1], [2,2]],
	  		[[0,2], [1,1], [2,0]]
		],
		game:{
			over:false
		}
	},
	/* y[0] = row y[1] = column */
	computed:{
		arr(){
			return this.board.map(x => x.map( y => y.val ));
		},
		winArr(){
			return this.windex.map(x => x.map( y => this.board[y[0]][y[1]].val))
		},
		check(){
			let over = false;
			let windex = this.winArr;
			let draw = this.arr.every(x => x.every( y => y != ''))

			windex.forEach((x) => {
				if(x.every( y => y =='X')){
					this.winner = 'X'
					over = true;
				}
				if(x.every( y => y =="O")){
					this.winner = 'O'
					over = true;
				}
				if(draw){
					this.finalMessage = "Unfortunately. Nobody Won"
				}
				if(over == true){
					this.game.over = true;
					this.finalMessage = "Congratulations, " + this.winner + "! You won";
				}
			})
		}			
	},
	methods:{
		mark(box){
			if(!this.game.over){
				if(box.val == ''){
				box.val = this.turn;
				this.turn = this.turn == 'X' ? 'O':'X';
				this.check;
				this.computerPlay()				
				}
			}	
		},
		computerPlay(){
				if(!this.game.over){
					const board = this.board;
					let row = Math.floor(Math.random() * 2);
					let col = Math.floor(Math.random() * 2);
					
					if(board[row][col].val == ''){
						board[row][col].val = this.turn
						this.turn = this.turn == 'X' ? 'O':'X';
					}else this.computerPlay
					
					this.check;	
				}
			},
			reset(){
				this.board.forEach(x => x.map(y => y.val = ""))
				this.finalMessage = "";
				this.game.over = false;
				console.log(this.board);
			}
		}
})

