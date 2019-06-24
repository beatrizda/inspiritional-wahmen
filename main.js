var women = ["Karlie Kloss", "Malala Yousafzai", "Tara Tran", " Yasmin Abdulhadi",
 "Ilana Grossman", "Chloe Marie", "Mayim Bialik", "Misty Copeland", "Katie Bouman", "Rosa Parks","Marie Curie","Susan B. Anthony","Harriet Tubman",
 "Helen Keller", "Emmeline Pankhurst", "Grace Hopper", "Ada Lovelace"]

var button = $('button');
var womenhere = $('.womenhere')

button.on('click', randomizer);

function randomizer(){
  var random = Math.floor(Math.random()*(women.length-1));
  var newwomen= women[random];
  womenhere.text(newwomen);
}

// var modernWomen = ["Karlie Kloss", "Malala Yousafzai", "Tara Tran", " Yasmin Abdulhadi",
//  "Ilana Grossman", "Chloe Marie", "Mayim Bialik", "Misty Copeland", "Katie Bouman"]
//
// var historicalWomen = ["Rosa Parks","Marie Curie","Susan B. Anthony","Harriet Tubman",
// "Helen Keller", "Emmeline Pankhurst", "Grace Hopper", "Ada Lovelace"]
//
// var result
//
// .historicalButton
//
// function optionGen(result){
// if( result == 'historicalButton' ){
//     var randomDecimal = Math.random()
//       var random = randomDecimal * historicalWomen.length
//         var final = Math.floor(random)
//       }
//
// else {
//   var randomDecimal = Math.random()
//     var random = randomDecimal * modernWomen.length
//       var final = Math.floor(random)
//     }
// }
//
//
//
// for ( var counter = 0; counter < modernWomen.length; counter++){
//   alert(`Meet Modern Figure, ${modernWomen}`)
// }
// for ( var counter = 0; counter < historicalWomen.length; counter++{
//   alert(`Meet Historical Figure, ${historicalWomen}`)
// }
