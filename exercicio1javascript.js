// ********************************************************* //
// Prática de programação em JavaScript - arquivo JavaScript //
// ********************************************************* //

//Função para o botão ser ativado no código HTML//
function clicar() {

    //O comando 'console.log' mostrará no console do navegador o conteúdo inserido nos parenteses.
    console.log('Exercício 1!')

    //O comando 'alert' mostrará como um popup superior no navegador o conteúdo inserido nos parenteses.
    //alert('Exercício do dia 08 de fevereiro de 2023!')

    //Declaração de variável.
    //Variável 'nome'.
    //O comando 'window.prompt' mostrará como um popup superior no navegador o conteúdo inserido nos parenteses.
    var nome = window.prompt('Qual o seu nome?')


    //As duas formas de log alert abaixo mostram a mesma informação, o nome digitado no popup.
    
    //Forma um, concatenando o texto com a varivável. Assim é necessário ficar fora das aspas.
    //alert('Seu nome é: '+nome)
    
    //Forma dois, adicionando a variável no meio do texto. Assim é necessário manter todo o conteúdo dentro de apóstrofos " ` ".
    alert(`Seu nome é: ${nome}`)

}