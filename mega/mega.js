var $botoes = document.body.querySelectorAll( ".megasena" );
var numerosExcolhidos = [];


for(var x = 0; x < $botoes.length; x++){
   $botoes[ x ].addEventListener("click", function(){
       document.body.querySelector( "#view" ).value += this.value + ' ';
       numerosExcolhidos.push(this.value);
       console.log(numerosExcolhidos);
   });
}

function lotteryGoodLuck( totalOfSelectedNumbers, list ){
	list = numerosExcolhidos;
	totalOfSelectedNumbers = list.length -1; 
	var numOrdem = numerosExcolhidos.sort( ( a, b ) => a - b);
	var n = totalOfSelectedNumbers ;
	var arr = [list[n1], list[n2], list[n3], list[n4], list[n5], list[n6]];
	var n1 = 1, n2 = 1, n3 = 1, n4 = 1, n5 = 1, n6 = 1; 
	var arr = [];

	while(n >= -1){

		switch( n >= - 1 ){

			case n6 <= ( n ) :
					if( arr.length == Math.pow( n, 6 ) ){ 				 
							return arr;						  
					} else {
						arr.push( [list[n1], list[n2], list[n3], list[n4], list[n5], list[n6]]);
						n6++
						break;
					}
			case n5 <= ( n - 1) :
					n6 = 1;
					n5 ++;
					break;
			case n4 <= ( n - 1 ):
					n5 = 1, n6 = 1;
					n4 ++;
					break;
			case n3 <= ( n - 1) :
					n4 = 1, n5 = 1, n6 = 1;
					n3 ++;
					break;
			case n2 <= ( n - 1) :
					n3 = 1, n4 = 1, n5 = 1, n6 = 1;
					n2 ++;
					break; 
			case n1 <= ( n ):
					n2 = 1, n3 = 1, n4 = 1, n5 = 1, n6 = 1;
					n1 ++;
					break;
			default :
					n--;
		}	
	}
}