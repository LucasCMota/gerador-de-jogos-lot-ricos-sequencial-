var teste = [ [1,2,3,4,1,5], [1,1,2,3,4,5], [1,2,2,3,4,5], [7,8,9,10,11,12] ]


function removeList(lista){
	var len = lista.length -1;
	var result = 0;
	var i = 0, j = 0, k = 1, list = [];
	while( i <= len ){

		j = 0, k = 1;

		while( j <= ( lista[ i ].length) -1 ){

			k = 1;

			while( k <= ( lista[ i ].length ) ){

				if(lista[ j ][ j ] == lista[ j ][ k ]){

					console.log(lista[ j ][ j ], lista[ j ][ k ])

					list.push(lista.splice( j, j ));

					k++;

				}else{

					k++;
				}
			}
		j++, k++;
		}
	i++;
	}
return list;
}


lista = ['banana', 1, 2, 1, 'maca', 3, 4, 'goiaba', 5,5, 7, 'tenis']

function deleteRepeatElements( list ){  
	var i = 0;
	var j = 1;
	var newList = [];
	while(j <= list.length){
		if(lista[ i ] == lista[ j ]){
			newList.push(lista.splice( i, i ) );
			i ++, j = ( i + 1 );//
			console.log(lista[ i ], lista[ j ]);
		}
		else if( j == lista.length ){
			i ++, j = ( i + 1);
		}
		j
	}
return newList;
}

console.log(deleteRepeatElements(lista));


a = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
b = {};
for (var i = 0; i < a.length; i++) {
    b[a[i]] = a[i];
}
arr = [];
for (var key in b) {
    arr.push(key);
}

var a = document.querySelector('#nume-vol').innerHTML;
console.log(a);