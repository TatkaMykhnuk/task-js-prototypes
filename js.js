var monster={
    newMonster: function(name,life_level){
        name=this.name;
        life_level=this.life_level;
        actual_level=this.life_level;},
    getName: function(){
        console.log(this.name)}
}
/*undefined*/

var catMonster=Object.create(monster);
catMonster.newMonster("catMonster",60);
/*undefined*/


var birdMonster=Object.create(monster2);
birdMonster.newMonster("birdMonster",50);
/*undefined*/

console.log(catMonster,birdMonster);
/*Object {newMonster: function, getName: function}

 Object {newMonster: function, getName: function}*/
birdMonster
/*Object {newMonster: function, getName: function}*/
catMonster
/*Object {newMonster: function, getName: function}*/
catMonster.scratch=function(enemy){
    cosole.log("Поточний рівень життя ворога"+enemy.name+":"+actual.curent_level);
    enemy.curent_level-=5;
    console.log("Після царапання - рівень життя:"+enemy.actual_level);
}

catMonster
/*Object {scratch: function, newMonster: function, getName: function}*/

birdMonster.pick=function(enemy){
    cosole.log("Поточний рівень життя ворога"+enemy.name+":"+enemt.curent_level);
    enemy.curent_level-=3;
    console.log("Після клювання - рівень життя:"+enemy.curent_level);
}
birdMonster
/*Object {pick: function, newMonster: function, getName: function}*/
var birdMonsterfirst={};
birdMonsterfirst.__proto__=birdMonster;
birdMonsterfirst.name="birdMonsterfirst";
/*"birdMonsterfirst"*/

console.log(birdMonsterfirst);
/*Object {name: "birdMonsterfirst", pick: function, newMonster: function, getName: function}*/

var birdMonstertwo={};
birdMonstertwo.__proto__=birdMonster;
birdMonstertwo.name="birdMonstertwo";
/*"birdMonstertwo"*/
console.log(birdMonstertwo);
/*Object {name: "birdMonstertwo", pick: function, newMonster: function, getName: function}*/

var catMonsterfirst={};
catMonsterfirst.__proto__=catMonster;
catMonsterfirst.name="catMonsterfirst";
/*"catMonsterfirst"*/
console.log(catMonsterfirst);
/*Object {name: "catMonsterfirst", scratch: function, newMonster: function, getName: function}*/
var catMonstertwo={};
catMonstertwo.__proto__=catMonster;
catMonstertwo.name="catMonstertwo";
/*"catMonstertwo"*/
console.log(catMonstertwo);
/*Object {name: "catMonstertwo", scratch: function, newMonster: function, getName: function}*/

birdMonstertwo.pick(catMonsterfirst);
catMonstertwo.scratch(birdMonstertwo);