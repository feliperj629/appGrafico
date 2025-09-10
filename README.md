# 📱 App Gráfico - React Native com Expo

> **Aplicativo educativo desenvolvido para aprender React Native com Expo através de exemplos práticos**

## 🎯 Sobre o Projeto

Este projeto demonstra os conceitos fundamentais do **React Native** com **Expo**, incluindo:
- Gerenciamento de estado com `useState`
- Componentes básicos (Text, View, Button, TextInput, ScrollView, Image)
- Interatividade com botões e inputs
- Layout responsivo com StyleSheet
- Operações matemáticas simples

### 🚀 Funcionalidades Implementadas

- ✅ **Contador Interativo** - Botão para incrementar valores
- ✅ **Input de Nome** - Campo de texto com feedback em tempo real
- ✅ **Calculadora Simples** - Soma de dois valores
- ✅ **Conteúdo Educativo** - Texto sobre React Native com imagem
- ✅ **Layout Responsivo** - ScrollView para conteúdo extenso
- ✅ **Estilização Avançada** - Múltiplos containers com cores diferentes

---

## 🛠️ Configuração Inicial do Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) (app para testar no celular)

### Passo 1: Criar o Projeto

```bash
npx create-expo-app appGrafico --template blank
cd appGrafico
```

### Passo 2: Instalar Dependências

```bash
npm install
```

### Passo 3: Executar o Projeto

```bash
npx expo start
```

**Opções de visualização:**
- **`w`** → Abrir no navegador
- **`a`** → Abrir emulador Android
- **`i`** → Abrir emulador iOS
- **QR Code** → Escanear com Expo Go

---

## 📚 Tutorial Passo a Passo: Construindo o App Gráfico

Vamos construir o aplicativo completo seguindo estas etapas sequenciais. **Cada etapa constrói sobre a anterior**, então você não perderá nenhum trabalho!

### 🎯 Objetivo Final

Criar um aplicativo com:
- Contador interativo
- Campo de entrada de nome
- Calculadora simples
- Conteúdo educativo sobre React Native
- Layout com cores e organização visual

---

### 📋 Etapa 1: Estrutura Básica e Imports

**🎯 O que vamos fazer:** Configurar a estrutura básica do aplicativo com todos os imports necessários.

**📝 Passo a Passo:**
1. Abra o arquivo `App.js`
2. Substitua todo o conteúdo pelo código abaixo
3. Salve e veja o resultado

```javascript
import { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container1}>
          {/* Conteúdo será adicionado nas próximas etapas */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "cyan",
  },
});
```

**✅ O que aprendemos:**
- Importação de hooks (`useState`)
- Importação de componentes React Native
- Estrutura básica com View e ScrollView
- StyleSheet para organização de estilos
- Container principal com flex: 1

---

### 📋 Etapa 2: Adicionando Estados e Contador

**🎯 O que vamos fazer:** Implementar o sistema de estados e criar o contador interativo.

**📝 Passo a Passo:**
1. **Adicione apenas estas linhas** após `export default function App() {`
2. **Adicione apenas este conteúdo** dentro do `<View style={styles.container1}>`

```javascript
// ➕ ADICIONAR: Estados do aplicativo
const [contar, setContar] = useState(1);
const [nome, setNome] = useState("");
const [valor1, setValor1] = useState(0);
const [valor2, setValor2] = useState(0);
const [resultadoSoma, setResultadoSoma] = useState(0);

// ➕ ADICIONAR: Conteúdo do contador
<Text style={styles.text}>Brincando com o useState</Text>
<Text style={styles.text}>Contador: {contar}</Text>
<Button title="Adicionar" onPress={() => setContar(contar + 1)} />

// ➕ ADICIONAR: Estilo para texto
text: {
  fontSize: 20,
  marginTop: 20,
  marginBottom: 20,
  marginLeft: 20,
  marginRight: 20,
  textAlign: "center",
},
```

**✅ O que aprendemos:**
- Hook `useState` para gerenciar estado
- Múltiplos estados independentes
- Interatividade com botões
- Interpolação de valores no JSX
- Funções inline para eventos

---

### 📋 Etapa 3: Campo de Entrada de Nome

**🎯 O que vamos fazer:** Adicionar um campo de texto para entrada de nome com feedback em tempo real.

**📝 Passo a Passo:**
1. **Adicione apenas este conteúdo** após o botão "Adicionar"
2. **Adicione apenas este estilo** no StyleSheet

```javascript
// ➕ ADICIONAR: Campo de nome
<Text style={styles.text}>
  Digite seu nome:
</Text>

<TextInput style={styles.input}
  placeholder="Informe seu nome:"
  onChangeText={setNome}
/>
<Text style={styles.text}>Olá, {nome || "visitante"}!</Text>

// ➕ ADICIONAR: Estilo para input
input: {
  borderWidth: 1,
  padding: 8,
  width: 220,
  marginTop: 10,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
},
```

**✅ O que aprendemos:**
- Componente `TextInput` para entrada de dados
- Propriedade `placeholder` para dicas visuais
- `onChangeText` para capturar mudanças em tempo real
- Operador `||` para valores padrão
- Estilização de inputs com bordas e padding

---

### 📋 Etapa 4: Calculadora Simples

**🎯 O que vamos fazer:** Implementar uma calculadora básica que soma dois valores.

**📝 Passo a Passo:**
1. **Adicione apenas esta função** após os estados
2. **Adicione apenas este conteúdo** após o campo de nome
3. **Adicione apenas este estilo** no StyleSheet

```javascript
// ➕ ADICIONAR: Função para somar
const somar = () => {
  setResultadoSoma(parseInt(valor1) + parseInt(valor2));
}

// ➕ ADICIONAR: Calculadora
<Text style={styles.text}>Trabalhando com Números.</Text>
<Text style={styles.text}>
  Digite os dois valores:
</Text>
<TextInput style={styles.inputSoma}
  placeholder="Informe o primeiro valor:"
  onChangeText={setValor1}
/>

<TextInput style={styles.inputSoma}
  placeholder="Informe o segundo valor:"
  onChangeText={setValor2}
/>
<Button title="Somar" onPress={somar} />

<Text style={styles.text}> O resultado é: {resultadoSoma}</Text>

// ➕ ADICIONAR: Estilo para inputSoma
inputSoma: {
  borderWidth: 1,
  padding: 8,
  width: 220,
  marginTop: 10,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
},
```

**✅ O que aprendemos:**
- Criação de funções personalizadas
- Conversão de strings para números com `parseInt`
- Múltiplos campos de entrada
- Lógica de cálculo simples
- Reutilização de estilos similares

---

### 📋 Etapa 5: Conteúdo Educativo com Imagem

**🎯 O que vamos fazer:** Adicionar uma seção educativa sobre React Native com imagem e texto formatado.

**📝 Passo a Passo:**
1. **Adicione apenas este container** após o `</View>` do container1
2. **Adicione apenas estes estilos** no StyleSheet

```javascript
// ➕ ADICIONAR: Segundo container com conteúdo educativo
<View style={styles.container2}>
  <ScrollView>
    <Text style={styles.text}>
      A importância de estudar React Native
    </Text>

    <Image source={require('./assets/logo_estacio.png')} style={styles.image} />

    <Text style={styles.text}>
      Estudar React Native é essencial para quem deseja atuar no desenvolvimento mobile moderno, pois a tecnologia permite criar aplicativos nativos para Android e iOS utilizando apenas JavaScript e React. Isso significa que, com um único código-base, é possível atingir duas das maiores plataformas do mercado, reduzindo tempo e esforço de desenvolvimento.
    </Text>

    <Text style={styles.text}>
      Além da praticidade, o React Native oferece alto desempenho, já que seus componentes se comunicam diretamente com APIs nativas dos dispositivos. Isso garante que os aplicativos tenham fluidez e uma experiência de usuário semelhante à dos apps desenvolvidos de forma totalmente nativa.
    </Text>

    <Text style={styles.text_destaque}>
      Por fim, estudar React Native amplia as oportunidades de carreira e empreendedorismo. Profissionais que dominam essa tecnologia são valorizados, já que empresas buscam soluções ágeis e econômicas para desenvolver aplicativos.
    </Text>
  </ScrollView>
</View>

// ➕ ADICIONAR: Estilos para o segundo container
container2: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "yellow",
  marginTop: 20,
},
text_destaque: {
  fontSize: 20,
  fontWeight: "bold",
  color: "blue",
  marginTop: 20,
  marginBottom: 20,
  marginLeft: 20,
  marginRight: 20,
},
image: {
  width: 100,
  height: 80,
  marginTop: 10,
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 5,
  borderColor: "black",
  borderRadius: 10,
  padding: 10,
},
```

**✅ O que aprendemos:**
- Múltiplos containers com cores diferentes
- Componente `Image` com arquivos locais
- ScrollView aninhado para conteúdo extenso
- Estilos diferenciados para textos especiais
- Organização visual com cores e espaçamentos

---

## 🎉 Funcionalidades Implementadas

Parabéns! Você acabou de construir um aplicativo completo com:

✅ **Contador Interativo** - Botão para incrementar valores  
✅ **Campo de Nome** - Input com feedback em tempo real  
✅ **Calculadora Simples** - Soma de dois valores  
✅ **Conteúdo Educativo** - Texto sobre React Native  
✅ **Imagem Local** - Logo da Estácio com bordas  
✅ **Layout Responsivo** - ScrollView para conteúdo extenso  
✅ **Estilização Avançada** - Múltiplos containers coloridos  

### 🔧 Conceitos Técnicos Aplicados

- **useState Hook** - Gerenciamento de estado local
- **Componentes Básicos** - Text, View, Button, TextInput, ScrollView, Image
- **Event Handlers** - onPress, onChangeText
- **StyleSheet** - Organização e reutilização de estilos
- **Flexbox Layout** - Posicionamento e dimensionamento
- **Imagens Locais** - require() para assets
- **Interpolação JSX** - {variável} para valores dinâmicos

---

## 🚀 Caso queira clonar e executar o projeto completo localmente

### 1. Clone o Repositório
```bash
git clone https://github.com/feliperj629/appGrafico.git
cd appGrafico
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Execute o Projeto
```bash
npx expo start
```

### 4. Visualize no Dispositivo
- **Navegador**: Pressione `w`
- **Android**: Pressione `a` (com emulador)
- **iOS**: Pressione `i` (com emulador)
- **Celular**: Escaneie o QR Code com Expo Go

---

## 📱 Estrutura do Projeto

```
appGrafico/
├── App.js                 # Componente principal
├── app.json              # Configurações do Expo
├── package.json          # Dependências do projeto
├── assets/               # Recursos (imagens, ícones)
│   ├── logo_estacio.png  # Logo da Estácio
│   ├── icon.png          # Ícone do app
│   └── splash-icon.png  # Tela de splash
└── README.md             # Este arquivo
```

---

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento e deploy
- **React Hooks** - useState para gerenciamento de estado
- **JavaScript ES6+** - Sintaxe moderna do JavaScript

---

## 🎯 Próximos Passos Sugeridos

Agora que você tem uma base sólida, que tal expandir seu conhecimento?

1. **🔢 Operações Matemáticas** - Implementar subtração, multiplicação e divisão
2. **🎨 Temas** - Adicionar modo claro/escuro
3. **📊 Validação** - Validar entradas numéricas
4. **💾 Persistência** - Salvar dados localmente
5. **🔔 Notificações** - Push notifications
6. **📱 Navegação** - Múltiplas telas

---

## 📖 Recursos Adicionais

### Documentação Oficial:
- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)

### Componentes Utilizados:
- **Text**: [Documentação](https://reactnative.dev/docs/text)
- **TextInput**: [Documentação](https://reactnative.dev/docs/textinput)
- **Button**: [Documentação](https://reactnative.dev/docs/button)
- **ScrollView**: [Documentação](https://reactnative.dev/docs/scrollview)
- **Image**: [Documentação](https://reactnative.dev/docs/image)

---

## 💡 Dicas para Desenvolvimento

- **🧪 Teste cada etapa** independentemente antes de prosseguir
- **📝 Mantenha o código organizado** com comentários explicativos
- **📱 Teste em diferentes dispositivos** para garantir responsividade
- **🎨 Experimente com cores e layouts** para personalizar
- **👥 Compartilhe seu progresso** e peça feedback

---

## 🐛 Solução de Problemas Comuns

### Erro: "Metro bundler failed to start"
```bash
npx expo start --clear
```

### Erro: "Unable to resolve module"
```bash
npm install
npx expo start --clear
```

### Imagem não aparece
- Verifique se o arquivo existe em `./assets/`
- Confirme o nome exato do arquivo
- Use `require()` para imagens locais

---

**🎓 Desenvolvido para fins educacionais - Aprenda, experimente e divirta-se!**

---

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. **Verifique a documentação** oficial do React Native e Expo
2. **Consulte a seção** de solução de problemas acima
3. **Teste em diferentes dispositivos** para identificar problemas específicos
4. **Compartilhe o código** com colegas para revisão

**Boa sorte com seu desenvolvimento! 🚀**