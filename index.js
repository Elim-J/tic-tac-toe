//store gameboard as array inside of gameboard object

//store players in objects
const playerFactory = (name, mark) => {
    return {name, mark};
}

//Note about modules: They are different from factory functions because they are 
//wrapped in an Immediately Invoked Function Expression
const gameBoardMod = (() => {
    let gameBoard = {
        playerTurn: true,
        numMarks: 0, 
        board: [[0,2,1], [4,1,6], [1,8,9]]
    };

    //let _board = [[1,1,1], [0,0,0], [1,1,1]]; //need to store moves in arr
    //determine winner -> if array reaches certain filled start checking for winner
    const determineWinner = () => {

        //check diagonal first -- might be best to leave diagonals out of loop
        if((gameBoard.board[0][0] === gameBoard.board[1][1]) && (gameBoard.board[1][1] === gameBoard.board[2][2]) ||
            (gameBoard.board[0][2] === gameBoard.board[1][1]) && (gameBoard.board[1][1] === gameBoard.board[2][0])){
                console.log("true");
        }

        for(let i=0; i<3; i++){
            for(let j=0; j<1; j++){
                if((gameBoard.board[i][j] === gameBoard.board[i][j+1]) && (gameBoard.board[i][j+1] === gameBoard.board[i][j+2]) || //check all horizontal
                    (gameBoard.board[j][i] === gameBoard.board[j+1][i]) && (gameBoard.board[j+1][i] === gameBoard.board[j+2][i])){ //check all vertical
                        console.log("true"); 
                }
            }
        } 
    };
 
    //start new game
    const startGame = () => {

    };

    //reset game
    const resetGame = () => {

    };
    
    //start with dummy data in arr to test
    return {
        //Return methods that need to be used outside of module
        startGame, resetGame, determineWinner
    }
   
})();


gameBoardMod.determineWinner();


//use object to control game flow

//goal: have as little global code as possible
//Rule of thumb: if need ONE of something, use a module. If need MULTIPLE of something, create with factories

//set up HTML
//write JS function to render contents of array (manually fill array for now)
//make functions that allow players to mark to specific spot on board 
//check for game over (3 in a row and tie)
//clean up interface to allow players to add their names
//include start/restart button
//congratz for winning player
//(create AI computer?)