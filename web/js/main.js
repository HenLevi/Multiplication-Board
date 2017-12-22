window.onload = initALL;

function initALL() {
    homePage();
}

function selectOption() {

    if (($('[value="Decimal"]').is(':checked')) || ($('[value="Binary"]').is(':checked')) || ($('[value="Hex"]').is(':checked')))
        createMultiplicationBoard();

}

//for createMultiplicationBoard 
function createMultiplicationBoard() {
    var multiplicationBoardTable = document.getElementById("multiplicationBoard");
    var tCell, tHead, tRow;
    var multiplyer = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10");

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
                var fParameter = multiplyer[I];
                var sParameter = multiplyer[i];
                var result;
                if (I === i) {
                    tCell.className = "text_bold";
                }
                if ($('[value="Hex"]').is(':checked'))
                    result = convert(parseInt((fParameter).toString(16)), ((sParameter).toString(16)));
                else if ($('[value="Binary"]').is(':checked'))
                    result = convert(parseInt((fParameter).toString(2)), ((sParameter).toString(2)));
                else {
                    result = multiplyer[I] * multiplyer[i];
                }
                tCell.innerHTML = result;
                
                
            }
            tRow.appendChild(tCell);
        }
    }
}

function convert(firstP, secondP) {
    var multipale = firstP * secondP;
    var result;
    if ($('[value="Hex"]').is(':checked')) {
        result = multipale.toString(16);
    } else if ($('[value="Binary"]').is(':checked')) {
        result = multipale.toString(2);
    }
    return result;
}
