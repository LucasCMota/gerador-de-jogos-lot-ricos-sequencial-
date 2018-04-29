var $game = document.body.querySelector('#game');
var $botoes = document.body.querySelectorAll( ".quina" );
var numerosExcolhidos = [];
var resultArr = [];

for( var x = 0; x < $botoes.length; x++ ){
   $botoes[ x ].addEventListener("click", function(){
       document.body.querySelector( "#view" ).value += this.value + ' ';
       numerosExcolhidos.push( this.value );
       console.log(numerosExcolhidos);
   });
}

function lotteryGoodLuck( list ){
	var totalOfSelectedNumbers = list.length -1; 
	var numOrdem = numerosExcolhidos.sort( ( a, b ) => a - b);
	var n = totalOfSelectedNumbers ;
	var n1 = 1, n2 = 1, n3 = 1, n4 = 1, n5 = 1; 
	var arrInit=  [ list[ n1 ], list[ n2 ], list[ n3 ], list[ n4 ], list[ n5 ]];

	while(n >= -1){

		switch( n >= - 1 ){

			case n5 <= ( n ) :
					if( resultArr.length == Math.pow( n, 5) ){ 				 
							return resultArr;						  
					} else {
						resultArr.push( [list[n1], list[n2], list[n3], list[n4], list[n5]] );
						n5++
						break;
					}
			case n4 <= ( n - 1) :
					n5 = 1;
					n4 ++;
					break;
			case n3 <= ( n - 1 ):
					n4 = 1, n5 = 1;
					n3 ++;
					break;
			case n2 <= ( n - 1) :
					n3 = 1, n4 = 1, n5 = 1;
					n2 ++;
					break;
			case n1 <= ( n - 1) :
					n2 = 1, n3 = 1, n4 = 1, n5 = 1;
					n1 ++;
					break; 
			default :
					n--;
		}	
	}
}

$game.addEventListener('click', function(){
	lotteryGoodLuck(numerosExcolhidos);
	document.querySelector('#result').value = resultArr;
	console.log(resultArr);
});