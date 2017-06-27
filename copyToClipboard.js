// Cria um elemento input
var inputTemp = document.createElement("input");
// adiciona o novo elemneto na pagina
document.body.appendChild(inputTemp);
// atribui um id para o novo elemento
inputTemp.setAttribute("id", "inputTemp_id");
// atribui valor ao novo elemneto
document.getElementById("inputTemp_id").value='String que deseja copiar';
// seleciona o texto do elemento
inputTemp.select();
// copia o texto selecionado
document.execCommand("copy");
// Remove o novo componente
document.body.removeChild(inputTemp);