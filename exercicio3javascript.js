// ********************************************************* //
// Prática de programação em JavaScript - arquivo JavaScript //
// ********************************************************* //

//Função para o botão ser ativado no código HTML//
function clicar() {

    //Recebe o valor do dado inserido no campo adicionado no código HTML.
    var numero = document.getElementById('numero').value;
    
    //'disisao' receberá o valor calculado do número inserido no campo 'numero'.
    var divisao = numero / 2
    
    //O comando 'innerHTML' mostrará na tela, no espaço reservado com 'id' "resp" no código HTML o valor do dado inserido no campo 'nome'.
    //'A metade de '+numero+' é '+divisao, é a concatenação do texto 'A metade de' ...
    //... com o valor do dado inserido no campo 'numero' e o calculo armazenado na variável 'divisao'.
    var numero = document.getElementById('resp').innerHTML = 'A metade de '+numero+' é '+divisao;
    
    //Este comando limpa a caixa de texto após mostrar o resultado do 'innerHTML'.
    document.getElementById('nome').value = ''

}