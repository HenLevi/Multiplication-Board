

window.onload = initALL;

function initALL() {
//    createBoard();
    createMultiplicationBoard();
}


function createMultiplicationBoard() {


    var multiplicationBoardTable = document.getElementById("multiplicationBoard");
    var tCell, tHead, tRow;
    var multiplyer = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


    tHead = document.createElement("TR");
    multiplicationBoardTable.appendChild(tHead);


    for (var i = -1; i < multiplyer.length; i++) {
        tCell = document.createElement("TD");
        tCell.className = "dark";


        if (i >= 0) {
            tCell.innerHTML = multiplyer[i];
        } else {
            tCell.innerHTML = "X";
            tCell.className = "bright";

        }
        tHead.appendChild(tCell);

    }


    for (var I = 0; I < multiplyer.length; I++) {
        tRow = document.createElement("TR");

        multiplicationBoardTable.appendChild(tRow);
        for (var i = -1; i < multiplyer.length; i++) {
            tCell = document.createElement("TD");
            if (i < 0) {
                tCell.innerHTML = multiplyer[I];
                tCell.className = "dark";
            } else {
                tCell.innerHTML = multiplyer[I] * multiplyer[i];

            }
            tRow.appendChild(tCell);

        }
    }




    //chen



    //end








}





