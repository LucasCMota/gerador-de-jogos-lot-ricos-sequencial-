(function(document){
	var $buttonGame = document.querySelector('#game');
	var $buttons = document.body.querySelectorAll( ".quina" );
	var $buttonClear = document.querySelector("#clear");
	var numberSelect = [];
	var newArr = [];
	var withoutDuplicates = [];
	var duplicatedKeys = [];

	for(var x = 0; x < $buttons.length; x++){	
		$buttons[ x ].addEventListener("click", function(){
			document.body.querySelector( "#view" ).value += this.value + ' ';
			numberSelect.push(this.value);
	   });
	}
	function removeDuplicates(list){
		withoutDuplicates = newArr.filter(l => (new Set(l)).size === l.length)
		Array.prototype.diff = function (a) {
		  return this.filter((i) => a.indexOf(i) === -1)
		}
		withoutDuplicates.forEach((a, i) => {
		  withoutDuplicates.forEach((b, x) => {
		    if(i !== x && a.diff(b).length === 0) {
		        if(duplicatedKeys.indexOf(a) === -1 && duplicatedKeys.indexOf(b) === -1) {
		            duplicatedKeys.push(a)
		        }
		    }
		  })
		})
	return newArr = withoutDuplicates.filter(a => duplicatedKeys.indexOf(a) === -1)
	}

	function lotteryGoodLuck( list ){
		list = numberSelect;
		numberSelect.sort( ( a, b ) => a - b);
		var n = list.length - 1; 
		var totalOfNumbers = list.length; 
		var n1 = 0, n2 = 1, n3 = 2, n4 = 3, n5 = 4; 
		var arr = [ list[ n1 ], list[ n2 ], list[ n3 ], list[ n4 ], list[ n5 ]];
		while( n >  0){
			switch( n > 0 ){
				case n5 < ( n ) :
						newArr.push( [list[n1], list[n2], list[n3], list[n4], list[n5]] ) ;
						n5++;
						break;
				case n4 < ( n ) :
						n5 = 4;
						n4 ++;
						break;
				case n3 < ( n  ) :
						n4 = 3, n5 = 4;
						n3 ++;
						break;
				case n2 < ( n ) :
						n3 = 2, n4 = 3, n5 = 4;
						n2 ++;
						break;
				case n1 < ( n ) :
						n2 = 1, n3 = 2, n4 = 3, n5 = 4;
						n1 ++;
						break; 
				default :
						n--;
			}	
		}
		return removeDuplicates(newArr);
	}

	$buttonGame.addEventListener('click', function(){
		if(numberSelect.length < 6 || numberSelect.length > 15){
			alert(' escolha entre 6 e 15 numeros');
		}else{
			lotteryGoodLuck(numberSelect);
			document.querySelector("#result").innerHTML = newArr;
		}
	},false);

	$buttonClear.addEventListener('click', function(){
		document.querySelector('#view').value = '';
		document.querySelector('#result').innerHTML = '';
		numberSelect = [];
		newArr = [];
	},false);
}(document));



