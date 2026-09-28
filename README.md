# Projeto: Carrinho de Compras

Um projeto educativo para praticar conceitos fundamentais de JavaScript, HTML e CSS. A página permite adicionar ao carrinho os produtos disponíveis, calcular o total pelas quantidades informadas e limpar a lista.

## 📋 Tabela de Conteúdos
- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Funciona](#como-funciona)

## Sobre

Este projeto foi desenvolvido para praticar conceitos introdutórios de programação com JavaScript. A interface em HTML e CSS apresenta visualmente as ações do script, permitindo que usuários adicionem produtos, vejam o total atualizado em tempo real, e gerenciem seu carrinho de compras.

**Ideal para:** Iniciantes em JavaScript aprendendo sobre manipulação do DOM, eventos e lógica de estado.

## ✨ Funcionalidades

- ✅ Adicionar fones de ouvido, celulares e Oculus VR ao carrinho
- ✅ Informar a quantidade de cada produto
- ✅ Atualizar o total ao adicionar um produto
- ✅ Limpar todos os produtos e reiniciar o total
- ✅ Exibir um item de exemplo no carrinho ao abrir a página

## 🛠 Tecnologias

- **HTML5** - Estrutura semântica da página
- **CSS3** - Estilização e layout responsivo
- **JavaScript (ES6+)** - Lógica da aplicação

### Conceitos JavaScript Utilizados

- `getElementById()` - Acesso aos elementos da página
- `split()` e `parseInt()` - Separação dos dados do produto e cálculo do total
- `insertAdjacentHTML()` - Inclusão de produtos na lista do carrinho
- `textContent` e `innerHTML` - Atualização do total e limpeza da lista
- Funções e eventos `onclick` - Ações de adicionar e limpar

## 📁 Estrutura do Projeto

```
Projeto-Carrinho-de-compras/
├── index.html          # Estrutura HTML do carrinho
├── style.css           # Estilos e layout
├── js/
│   └── app.js           # Lógica para adicionar produtos e limpar o carrinho
├── assets/              # Imagens e ícones usados na interface
└── README.md            # Este arquivo
```

## 🚀 Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Patrick-Lean/Projeto-Carrinho-de-compras.git
   cd Projeto-Carrinho-de-compras
   ```

2. **Abra no navegador:**
   - Clique duas vezes em `index.html`, ou
   - Use a extensão Live Server do VS Code

3. **Interaja com o carrinho:**
        - Selecione um produto no menu
        - Informe a quantidade
        - Clique em **Adicionar** para incluir o produto e atualizar o total
        - Clique em **Limpar** para remover os itens e voltar o total para `R$0`

## 💡 Como Funciona

### Adicionar um produto

```
[Selecionar produto e informar quantidade]
        ↓
[Verificar se a quantidade é diferente de zero]
        ↓
[Adicionar a linha do produto ao carrinho]
        ↓
[Somar preço × quantidade ao total]
```

O carrinho começa com um celular de `R$1400` como exemplo. Ao adicionar outro produto, o script separa o nome e o preço pelo hífen, exibe a quantidade escolhida e soma o valor correspondente ao total. Depois de adicionar, o campo de quantidade é esvaziado.

O botão **Limpar** remove todas as linhas do carrinho, redefine o total para `R$0` e esvazia o campo de quantidade.

## 📚 O que Aprendi

O código principal está em [`js/app.js`](js/app.js). As funções `adicionar()` e `limpar()` são chamadas pelos botões definidos em `index.html`.

## 📝 Licença

Este projeto é de código aberto e disponível sob a licença MIT.

## 👤 Autor

**Patrick Lean**
- GitHub: [@Patrick-Lean](https://github.com/Patrick-Lean)

---

**Feedbacks e sugestões são bem-vindos!** Sinta-se à vontade para abrir uma issue ou contribuir com melhorias.
