function adicionar() {
    let produto = document.getElementById('produto').value;
    //Peguei o valor referente ao id produto. PS: O valor é um string.
    let quantidade = document.getElementById('quantidade').value;
    //Peguei o valor da quantidade
    //O teste é para não adicionar no carrinho um item 0x.
    if (quantidade == 0) {
        //Se a quantidade for 0, emite um alerta.
        alert('Digite uma quantidade de itens');
    } else {
        //Se a quantidade for diferente de 0, essa quantidade é contabilizada.
        let separaNomeEPreco = produto.split('-', 2);
        //Separei a String em 2 usando - como separador
        //Divide uma string criando uma array.
        //Ex: Celular - R$1400 -> ['Celular','R$1400']
        let carrinhoDeCompras = document.getElementById('lista-produtos');
        carrinhoDeCompras.insertAdjacentHTML('beforeend', `
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${separaNomeEPreco[0]} <span class="texto-azul">${separaNomeEPreco[1]}</span>
        </section>`);
        //Adicionei novo produto dentro da section lista-produtos.
        let pegaValorTotal = document.getElementById('valor-total').textContent;//Peguei o conteudo de texto da tag.
        let separaTextoDovalorDoValorJaExistente = pegaValorTotal.split('$', 2);//Separei R$1400 -> R 1400
        let separaTextoDoValor = separaNomeEPreco[1].split('$', 2);
        //alert(parseInt(separaTextoDovalor[1]));
        let NovoValorTotal = parseInt(separaTextoDovalorDoValorJaExistente[1]) + parseInt(separaTextoDoValor[1] * parseInt(quantidade));
        //alert(parseInt(separaTextoDoValor[1]))
        let ColocaNovoValor = document.getElementById('valor-total');
        ColocaNovoValor.textContent = `R$${NovoValorTotal}`;
        document.getElementById('quantidade').value='';
    }
}

function limpar() {
    let carrinhosProdutos = document.getElementById('lista-produtos').innerHTML = '';
    let valorTotal = document.getElementById('valor-total').textContent = 'R$0';
    document.getElementById('quantidade').value='';
}