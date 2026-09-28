# Projeto: Carrinho de Compras

Um projeto educativo para praticar conceitos fundamentais de JavaScript, HTML e CSS. Implementa um carrinho de compras funcional com adicionar produtos, atualizar totais e gerenciar itens.

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

- ✅ Adicionar produtos ao carrinho
- ✅ Limpa produtos do carrinho
- ✅ Calcular e exibir o valor total em tempo real
- ✅ Interface responsiva e intuitiva

## 🛠 Tecnologias

- **HTML5** - Estrutura semântica da página
- **CSS3** - Estilização e layout responsivo
- **JavaScript (ES6+)** - Lógica da aplicação

### Conceitos JavaScript Utilizados

- `getElementById()` - Acesso aos elementos do DOM
- `addEventListener()` - Captura de eventos (click, input)
- `split()` e `parseInt()` - Processamento de dados
- `insertAdjacentHTML()` - Inserção dinâmica de elementos
- `textContent` - Leitura e atualização de conteúdo
- Manipulação de arrays - Gerenciamento de produtos
- Funções - Organização da lógica

## 📁 Estrutura do Projeto

```
Projeto-Carrinho-de-compras/
├── index.html          # Estrutura HTML do carrinho
├── style.css           # Estilos e layout
├── script.js           # Lógica JavaScript
└── README.md          # Este arquivo
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
   - Selecione o produto
   - Confira o preço
   - Clique em "Adicionar"
   - Veja o total atualizar automaticamente

## 💡 Como Funciona

### Fluxo Principal

```
[Seleção do produto] 
        ↓
[Validação de dados] 
        ↓
[Criação do objeto produto] 
        ↓
[Inserção no DOM] 
        ↓
[Recalcular total]
```

### Exemplo de Uso

```javascript
// O script escuta cliques no botão adicionar
// e executa a função de adicionar produto
adicionarProduto({
  nome: "Notebook",
  preco: 2500.00
});
// Resultado: Produto aparece na lista e total é atualizado
```

## 📚 O que Aprendi

Este projeto reforça:
- Manipulação do DOM com JavaScript
- Tratamento de eventos do usuário
- Cálculos e lógica condicional
- Boas práticas de código limpo
- Responsividade e UX

## 📝 Licença

Este projeto é de código aberto e disponível sob a licença MIT.

## 👤 Autor

**Patrick Lean**
- GitHub: [@Patrick-Lean](https://github.com/Patrick-Lean)

---

**Feedbacks e sugestões são bem-vindos!** Sinta-se à vontade para abrir uma issue ou contribuir com melhorias.
