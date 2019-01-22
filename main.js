var gameData = {
    gold: 0,
    goldPerClick: 1,
    upgradeCost: 10,
    pickaxeLevel:0

}

function mineGold(){

    gameData.gold += gameData.goldPerClick
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"

}
function upgradePickaxe(){

    if(gameData.gold >= gameData.upgradeCost){
        gameData.gold -= gameData.upgradeCost
        gameData.goldPerClick ++
        gameData.upgradeCost *= 2
        gameData.pickaxeLevel ++
        document.getElementById("pickaxeLevel").innerHTML = "Pickaxe level: "+ gameData.pickaxeLevel
        document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    }
}

var mainGameLoop = window.setInterval(function() {
  mineGold()
}, 1000)

var saveGameLoop = window.setInterval(function(){
localStorage.setItem('goldMinerSave', JSON.stringify(gameData))
},15000)

function loadGame(){

    var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
    if (savegame !== null) {
        gameData = savegame
    }
}
