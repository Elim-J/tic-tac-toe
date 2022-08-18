//goal: have as little global code as possible
//Rule of thumb: if need ONE of something, use a module. If need MULTIPLE of something, create with factories

//stores everything to do with the player
const playerModule = (() => {
    let _player = null; //just have one player for now. If more then one player, then have players object to store all players

    const playerFactory = (name, mark) => {
        //Only store data if user enters valid data
        if(name != ''){
            _player = {name, mark};
        }
    }

    const getPlayerMark = () => {
        if(_player != null){
            return _player.mark;
        }
    }

    return { playerFactory, getPlayerMark };
})();

//stores everything to do with display
const displayController = (() => {
    const _controller = {
        btnO: document.getElementById('O'), 
        btnX: document.getElementById('X'),
    }

    _controller.btnO.addEventListener('click', getPlayerInfo);
    _controller.btnX.addEventListener('click', getPlayerInfo);

    function getPlayerInfo(e){
        let playerName = document.getElementById('name').value;
        let playerMark = e.target.id;
        
        playerModule.playerFactory(playerName, playerMark);  //playerFactory stores the player inside of the playerModule's object

        //Remove event listeners only after player entered name
        if(playerName != ''){
            _controller.btnO.removeEventListener('click', getPlayerInfo);
            _controller.btnX.removeEventListener('click', getPlayerInfo);
        } 
    }

    //Breadcrumb: Also need to figure out how to deal with array to keep track/determine winner. Need to make ID correspond with array. Need to create a computer to play against.
    function getGrid(e){
        console.log(e);
        console.log(e.target.textContent);
        
        if(e.target.className === "grid-el" && e.target.textContent === ""){
            e.target.textContent = playerModule.getPlayerMark();
        }
        
    }

    let tmp = document.getElementById("grid");
    tmp.addEventListener('click', getGrid);

})();

//Note about modules: They are different from factory functions because they are 
//wrapped in an Immediately Invoked Function Expression
const gameBoardMod = (() => {
    let _gameBoard = {
        playerOneTurn: true,
        numMarks: 0,
        board: [[2,3,4],[5,6,7],[8,9,10]]
    };

    //determine winner -> if array reaches certain filled start checking for winner?
    const determineWinner = () => {
        //should check for ties also (at end)

        //check diagonal first -- might be best to leave diagonals out of loop
        if((_gameBoard.board[0][0] === _gameBoard.board[1][1]) && (_gameBoard.board[1][1] === _gameBoard.board[2][2]) ||
            (_gameBoard.board[0][2] === _gameBoard.board[1][1]) && (_gameBoard.board[1][1] === _gameBoard.board[2][0])){
                console.log("true");
        }

        
        //Check all horizontal and vertical to see if 3 in a row
        for(let i=0; i<3; i++){
            for(let j=0; j<1; j++){
                if((_gameBoard.board[i][j] === _gameBoard.board[i][j+1]) && (_gameBoard.board[i][j+1] === _gameBoard.board[i][j+2]) || //horizontal
                    (_gameBoard.board[j][i] === _gameBoard.board[j+1][i]) && (_gameBoard.board[j+1][i] === _gameBoard.board[j+2][i])){ //vertical
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
        _gameBoard.playerOneTurn = true;
        _gameBoard.numMarks = 0;
        _gameBoard.board = [[2,3,4],[5,6,7],[8,9,10]];

        renderGame();
    };

    //should this be in displayController instead?
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


//include start/restart button
//congratz for winning player
//(create AI computer?)