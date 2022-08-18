//goal: have as little global code as possible
//Rule of thumb: if need ONE of something, use a module. If need MULTIPLE of something, create with factories

//store players in objects -> use factory functions
const playerFactory = (name, mark) => {
    return {name, mark};
}

//stores everything to do with the player
const playerModule = (() => {
    let player = {

    };
})();

//stores everything to do with display
const displayController = (() => {

})();
//Note about modules: They are different from factory functions because they are 
//wrapped in an Immediately Invoked Function Expression
const gameBoardMod = (() => {
    let gameBoard = {
        playerOneTurn: true,
        player: null,
        numMarks: 0,
        btnO: document.getElementById('O'), 
        btnX: document.getElementById('X'),
        board: [[2,3,4],[5,6,7],[8,9,10]]
    };

    //breadcrumb: I got playerfactory to store new player inside of gameboard object as player.

    gameBoard.btnO.addEventListener('click', getPlayerInfo);
    gameBoard.btnX.addEventListener('click', getPlayerInfo);

    function getPlayerInfo(e){
        let playerName = document.getElementById('name').value;
        let playerMark = e.target.id;
        
        const player = playerFactory(playerName,playerMark);
        console.log(gameBoard.player);
        gameBoard.player = player;
        console.log(gameBoard.player);

        gameBoard.btnO.removeEventListener('click', getPlayerInfo);
        gameBoard.btnX.removeEventListener('click', getPlayerInfo);
    }

    //determine winner -> if array reaches certain filled start checking for winner?
    const determineWinner = () => {
        //should check for ties also (at end)

        //check diagonal first -- might be best to leave diagonals out of loop
        if((gameBoard.board[0][0] === gameBoard.board[1][1]) && (gameBoard.board[1][1] === gameBoard.board[2][2]) ||
            (gameBoard.board[0][2] === gameBoard.board[1][1]) && (gameBoard.board[1][1] === gameBoard.board[2][0])){
                console.log("true");
        }

        
        //Check all horizontal and vertical to see if 3 in a row
        for(let i=0; i<3; i++){
            for(let j=0; j<1; j++){
                if((gameBoard.board[i][j] === gameBoard.board[i][j+1]) && (gameBoard.board[i][j+1] === gameBoard.board[i][j+2]) || //horizontal
                    (gameBoard.board[j][i] === gameBoard.board[j+1][i]) && (gameBoard.board[j+1][i] === gameBoard.board[j+2][i])){ //vertical
                        console.log("true"); 
                }
            }
        }

        //Need way to track number of marks
    };
 
    //start new game
    const startGame = () => {
        resetGame();
        //need to also visually reset board
    };

    //reset game
    const resetGame = () => {
        gameBoard.playerOneTurn = true;
        gameBoard.numMarks = 0;
        gameBoard.board = [[2,3,4],[5,6,7],[8,9,10]];

        renderGame();
    };

    const renderGame = () => {
        //display board based off gameBoard.board
        //render only strings
    };
    
    //start with dummy data in arr to test
    return {
        //Return methods that need to be used outside of module
        startGame, resetGame, determineWinner
    }
   
})();


//write JS function to render contents of array (manually fill array for now)
//make functions that allow players to mark to specific spot on board 
//check for game over (3 in a row and tie)
//clean up interface to allow players to add their names
//include start/restart button
//congratz for winning player
//(create AI computer?)