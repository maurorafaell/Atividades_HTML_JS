// ********************************************************* //
// Prática de programação em JavaScript - arquivo JavaScript //
// ********************************************************* //

//Função para o botão ser ativado no código HTML//
function clicar() {

    //Recebe o valor do dado inserido no campo adicionado no código HTML.
    var nome = document.getElementById('nome').value;

    //O comando 'innerHTML' mostrará na tela, no espaço reservado com 'id' "resp" no código HTML o valor do dado inserido no campo 'nome'.
    //'Seu nome é: '+nome", é a concatenação do texto 'Seu nome é:' com o valor do dado inserido no campo 'nome'.
    var nome = document.getElementById('resp').innerHTML = 'Seu nome é: '+nome;
    
    //Este comando limpa a caixa de texto após mostrar o resultado do 'innerHTML'.
    document.getElementById('nome').value = ''

}