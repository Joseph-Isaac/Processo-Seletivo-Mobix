function input() {
  let n = prompt('digite o número da matriz: ')
  hourglassReverse(Number(n));
}

input();

function hourglassReverse(n) {

  var headquarters = [];
  //Esse primeiro for é para criar a ampulheta do desafio principal.
  for (var i = 0; i < n + 1; i++) {
    headquarters[i] = [];
    for (var j = 0; j < n + 1; j++) {
      if (i == j || i == 0 || j == 0 || i == n || j == n || j + i == n || (n / 2 >= i && j >= i && j + i < n)) {
        headquarters[i][j] = '#'
      } else {
        headquarters[i][j] = ' '
      }
    }
    headquarters[i][j] = '\n'
  }
  //Foi usado regex para imprimir a matriz em formato de string e retirar as vírgulas que ficam depois 
  //da conversão Array->String
  console.log(headquarters.toString().replace(/,/g, ""))

  //Essas variáveis foram criadas para manipulação de código.
  var k = 0, l = 0, hdq = [n];
  
    for (var i = n; i >= 0; i--) {
      for (var j = n; j >= 0; j--) {
        //A lógica foi feita pensada termos de conjuntos de junções e intersecções
        if (i == j || i == 0 || j == 0 || i == n || j == n || j + i == n || (n / 2 < i && j <= i && j + i > n)) {
          headquarters[i][j] = '#'
        } else {
          headquarters[i][j] = ' '
        }

        if ((n / 2 >= k && l >= k && l + k < n) && i != j && i != 0) {
          headquarters[k][l] = ' '
        }
        l++;
      }
      //Para o usod o setInterval, ele não funciona bem dentro de um loop, então guardei cada resultado que 
      //queria exibir dentro de uma matriz de matrizes.
      headquarters[i][n + 1] = '\n'
      hdq[k] = headquarters.toString().replace(/,/g, "");
      
      k++;
      l = 0;
    }
    let temp = 0
    var intermission =setInterval(() => {
      if(temp<k/2){
        console.clear()
        console.log(hdq[temp])
      }else{
        breakIntermission()
      }
      temp = temp+1;
    }, 1000);

    breakIntermission = () => {
      clearInterval(intermission)
      console.clear()
        console.log(hdq[k-1])
      console.log('Fim da ampulheta')
    }
}