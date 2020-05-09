function game(amam) {
    console.log(amam);
    var humanchoice, botchoice;
    humanchoice = amam.id;
    botchoice = boran(ran());
    console.log("computer choice " + botchoice);
    var result = conds(humanchoice, botchoice);
    console.log(result)
    var mas = massage(result)
    console.log(mas);
    front(amam.id, botchoice, mas)
}
function ran() {
    return Math.floor(Math.random()*3);
}
function boran(number) {
    return ['rock','paper','scissors'][number]
}
function conds(yourchoice, computerchoice) {
    var db = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }
    var ysco = db[yourchoice][computerchoice]
    var csco = db[computerchoice][yourchoice]
    return [ysco, csco];
}
function massage ([usco, nsco]) {
    if (usco===0) {
        return {'massage': 'ya lost','color':'red'};
    } else if(usco===0.5) {
        return {'massage': 'ya tied','color':'yellow'}
    } else {
        return {'massage': 'ya winn', 'color':'green'}
    }
}
function front (xas,cas,vas) {
    var db2 = {
        'rock':document.getElementById("rock").src,
        'paper':document.getElementById("paper").src,
        'scissors':document.getElementById("scissors").src
    }
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();



    var hdiv = document.createElement('div');
    var bdiv = document.createElement('div');
    var pdiv = document.createElement('div');
    hdiv.id = 'paper';
    bdiv.id = 'rock';
    pdiv.id = 'scissors';

    hdiv.innerHTML = "<img src= '" + db2[xas] + "'height=150 width=150 style='box-shadow: 0px 10px 50px red' onclick='game(this)'>"
    pdiv.innerHTML = "<h1 id = 'git' style='color: " + vas['color'] + "; font-size: 60px; padding: 30px; '>" + vas['massage']+"</h1>"
    bdiv.innerHTML = "<img src= '" + db2[cas] + "'height=150 width=150  style='box-shadow: 0px 10px 50px red' onclick='game(this)'>"
    document.getElementById("mamamama").appendChild(hdiv);
    document.getElementById("mamamama").appendChild(pdiv);
    document.getElementById("mamamama").appendChild(bdiv);

}