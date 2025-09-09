# 📱 appGrafico

> **Projeto educativo desenvolvido em sala de aula para aprender React Native com Expo**

## 🎯 Sobre o Projeto

Este projeto foi criado durante as aulas práticas de desenvolvimento mobile para demonstrar os conceitos fundamentais do **React Native** com **Expo**. O objetivo é fornecer uma base sólida para estudantes que estão iniciando no desenvolvimento mobile, através de exemplos práticos e um tutorial sequencial.

### 🚀 O que você vai aprender:

- ✅ Controle de versão com Git e GitHub
- ✅ Configuração inicial do ambiente React Native + Expo
- ✅ Componentes básicos do React Native (Text, View, Button)
- ✅ Componentes de lista (ScrollView, FlatList)
- ✅ Componentes de mídia (Image)
- ✅ Criação de formas geométricas
- ✅ Gerenciamento de estado com hooks
- ✅ Boas práticas de desenvolvimento

---

## 📚 Controle de Versão com Git

### Configuração Inicial

#### 1. Criar Repositório no GitHub
- Nome: `appGrafico`
- Não adicionar README, .gitignore ou License

#### 2. Verificar Credenciais Git
```bash
git config --global user.name
git config --global user.email
# se necessário:
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

#### 3. Inicializar e Vincular
```bash
git init
git remote add origin https://github.com/seu-usuario/appGrafico.git
git branch -M main
```

#### 4. Primeiro Commit
```bash
git add .
git commit -m "Primeira versão do app (Expo blank)"
git push -u origin main
```

### 🔄 Ciclo de Trabalho Diário

#### Atualizar antes de trabalhar:
```bash
git pull --rebase origin main
```

#### Rotina de desenvolvimento:
```bash
git add .
git commit -m "Descreva sua mudança"
git pull --rebase origin main
git push
```

---

## 🛠️ Configuração Inicial do Projeto

### Passo 1: Criar o Projeto

Primeiro, vamos criar um novo projeto Expo com template blank:

```bash
npx create-expo-app appGrafico --template blank
cd appGrafico
```

### Passo 2: Instalar Dependências para Web

Para poder testar no navegador, instale as dependências web:

```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```

### Passo 3: Executar o Projeto

Inicie o servidor de desenvolvimento:

```bash
npx expo start
```

**Opções de visualização:**
- **`w`** → Abrir no navegador
- **`a`** → Abrir emulador Android
- **`i`** → Abrir emulador iOS
- **QR Code** → Escanear com Expo Go

---

## 📚 Exemplos Sequenciais: Construindo uma Página Incremental

Vamos construir uma página completa passo a passo, adicionando funcionalidades gradualmente. **Cada etapa constrói sobre a anterior**, então você não perderá nenhum trabalho!

### 🎯 Objetivo Final
Criar uma página com:
- Textos organizados
- Lista rolável de itens
- Imagens
- Formas geométricas
- Interatividade simples

---

### 📋 Etapa 1: Estrutura Básica

**🎯 O que vamos fazer:** Criar a base do nosso app com estrutura básica.

**📝 Passo a Passo:**
1. Abra o arquivo `App.js`
2. Substitua todo o conteúdo pelo código abaixo
3. Salve e veja o resultado

```javascript
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Conteúdo será adicionado nas próximas etapas */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
```

**✅ O que aprendemos:**
- Estrutura básica do React Native
- Uso do StyleSheet para organização
- Container principal com flex: 1
- Área de conteúdo com padding

---

### 📋 Etapa 2: Adicionando Textos Simples

**🎯 O que vamos fazer:** Adicionar textos básicos com diferentes estilos.

**📝 Passo a Passo:**
1. **Mantenha o código anterior** (não apague nada!)
2. Adicione os imports necessários
3. Adicione os componentes de texto

```javascript
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titulo}>Meu App Gráfico</Text>
        <Text style={styles.subtitulo}>Aprendendo React Native</Text>
        <Text style={styles.descricao}>
          Este é um projeto educativo para aprender os fundamentos do React Native com Expo.
        </Text>
        <Text style={styles.autor}>Desenvolvido por: Estudante</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  descricao: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 15,
  },
  autor: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
  },
});
```

**✅ O que aprendemos:**
- Componente Text para exibição de conteúdo
- Diferentes estilos de texto (tamanho, cor, peso)
- Propriedades de texto (textAlign, lineHeight)
- Organização visual com espaçamentos

---

### 📋 Etapa 3: Adicionando ScrollView

**🎯 O que vamos fazer:** Tornar o conteúdo rolável para comportar mais informações.

**📝 Passo a Passo:**
1. **Mantenha o código anterior** (continue construindo!)
2. Adicione o import do ScrollView
3. Envolva o conteúdo com ScrollView
4. Adicione mais conteúdo para testar a rolagem

```javascript
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.titulo}>Meu App Gráfico</Text>
        <Text style={styles.subtitulo}>Aprendendo React Native</Text>
        <Text style={styles.descricao}>
          Este é um projeto educativo para aprender os fundamentos do React Native com Expo.
        </Text>
        
        <Text style={styles.secaoTitulo}>Componentes Básicos</Text>
        <Text style={styles.item}>• View - Container básico</Text>
        <Text style={styles.item}>• Text - Exibição de texto</Text>
        <Text style={styles.item}>• ScrollView - Conteúdo rolável</Text>
        <Text style={styles.item}>• FlatList - Lista otimizada</Text>
        <Text style={styles.item}>• Image - Exibição de imagens</Text>
        
        <Text style={styles.secaoTitulo}>Conceitos Importantes</Text>
        <Text style={styles.item}>• Flexbox para layout</Text>
        <Text style={styles.item}>• StyleSheet para estilos</Text>
        <Text style={styles.item}>• Props para configuração</Text>
        <Text style={styles.item}>• State para dados dinâmicos</Text>
        
        <Text style={styles.autor}>Desenvolvido por: Estudante</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  descricao: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 20,
  },
  secaoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    paddingLeft: 10,
  },
  autor: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
    marginTop: 30,
    textAlign: 'center',
  },
});
```

**✅ O que aprendemos:**
- ScrollView para conteúdo rolável
- contentContainerStyle para estilizar o conteúdo
- Organização de informações em seções
- Lista de itens com bullets

---

### 📋 Etapa 4: Adicionando FlatList

**🎯 O que vamos fazer:** Substituir a lista manual por uma FlatList otimizada.

**📝 Passo a Passo:**
1. **Mantenha o código anterior** (estamos evoluindo!)
2. Adicione o import do FlatList
3. Crie arrays de dados
4. Substitua as listas manuais por FlatList

```javascript
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

export default function App() {
  const componentes = [
    'View - Container básico',
    'Text - Exibição de texto',
    'ScrollView - Conteúdo rolável',
    'FlatList - Lista otimizada',
    'Image - Exibição de imagens',
  ];

  const conceitos = [
    'Flexbox para layout',
    'StyleSheet para estilos',
    'Props para configuração',
    'State para dados dinâmicos',
  ];

  const renderItem = ({ item }) => (
    <Text style={styles.item}>• {item}</Text>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.titulo}>Meu App Gráfico</Text>
        <Text style={styles.subtitulo}>Aprendendo React Native</Text>
        <Text style={styles.descricao}>
          Este é um projeto educativo para aprender os fundamentos do React Native com Expo.
        </Text>
        
        <Text style={styles.secaoTitulo}>Componentes Básicos</Text>
        <FlatList
          data={componentes}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
        />
        
        <Text style={styles.secaoTitulo}>Conceitos Importantes</Text>
        <FlatList
          data={conceitos}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
        />
        
        <Text style={styles.autor}>Desenvolvido por: Estudante</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  descricao: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 20,
  },
  secaoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    paddingLeft: 10,
  },
  autor: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
    marginTop: 30,
    textAlign: 'center',
  },
});
```

**✅ O que aprendemos:**
- FlatList para listas otimizadas
- Arrays de dados estruturados
- Função renderItem para personalizar itens
- keyExtractor para identificação única
- scrollEnabled para controlar rolagem

---

### 📋 Etapa 5: Adicionando Imagens

**🎯 O que vamos fazer:** Adicionar imagens ao nosso app para torná-lo mais visual.

**📝 Passo a Passo:**
1. **Mantenha o código anterior** (quase finalizando!)
2. Adicione o import do Image
3. Adicione imagens locais ou da web
4. Organize as imagens no layout

```javascript
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';

export default function App() {
  const componentes = [
    'View - Container básico',
    'Text - Exibição de texto',
    'ScrollView - Conteúdo rolável',
    'FlatList - Lista otimizada',
    'Image - Exibição de imagens',
  ];

  const conceitos = [
    'Flexbox para layout',
    'StyleSheet para estilos',
    'Props para configuração',
    'State para dados dinâmicos',
  ];

  const renderItem = ({ item }) => (
    <Text style={styles.item}>• {item}</Text>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.titulo}>Meu App Gráfico</Text>
        <Text style={styles.subtitulo}>Aprendendo React Native</Text>
        
        <View style={styles.imagemContainer}>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.imagem}
            resizeMode="contain"
          />
          <Text style={styles.imagemLegenda}>Logo do React Native</Text>
        </View>
        
        <Text style={styles.descricao}>
          Este é um projeto educativo para aprender os fundamentos do React Native com Expo.
        </Text>
        
        <Text style={styles.secaoTitulo}>Componentes Básicos</Text>
        <FlatList
          data={componentes}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
        />
        
        <Text style={styles.secaoTitulo}>Conceitos Importantes</Text>
        <FlatList
          data={conceitos}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
        />
        
        <View style={styles.imagemContainer}>
          <Image
            source={{ uri: 'https://docs.expo.dev/static/images/tutorial/logo.png' }}
            style={styles.imagem}
            resizeMode="contain"
          />
          <Text style={styles.imagemLegenda}>Logo do Expo</Text>
        </View>
        
        <Text style={styles.autor}>Desenvolvido por: Estudante</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  imagemContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  imagemLegenda: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  descricao: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 20,
  },
  secaoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    paddingLeft: 10,
  },
  autor: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
    marginTop: 30,
    textAlign: 'center',
  },
});
```

**✅ O que aprendemos:**
- Componente Image para exibição de imagens
- source com URI para imagens da web
- resizeMode para controlar redimensionamento
- Organização de imagens com containers
- Legendas para contextualizar imagens

---

## 🎨 Formas Geométricas no React Native

Agora vamos aprender a criar formas geométricas básicas no React Native. Esta seção é independente e pode ser implementada separadamente.

### 📋 Criando Formas Básicas

**🎯 O que vamos fazer:** Criar um app focado em formas geométricas.

**📝 Passo a Passo:**
1. Crie um novo arquivo ou substitua o App.js
2. Use o código abaixo para criar formas básicas

```javascript
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formas Geométricas</Text>
      
      <View style={styles.formasContainer}>
        <View style={styles.formaItem}>
          <View style={styles.circulo} />
          <Text style={styles.formaLabel}>Círculo</Text>
        </View>
        
        <View style={styles.formaItem}>
          <View style={styles.quadrado} />
          <Text style={styles.formaLabel}>Quadrado</Text>
        </View>
        
        <View style={styles.formaItem}>
          <View style={styles.retangulo} />
          <Text style={styles.formaLabel}>Retângulo</Text>
        </View>
        
        <View style={styles.formaItem}>
          <View style={styles.triangulo} />
          <Text style={styles.formaLabel}>Triângulo</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  formasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formaItem: {
    alignItems: 'center',
    margin: 15,
  },
  circulo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ff6b6b',
    marginBottom: 10,
  },
  quadrado: {
    width: 80,
    height: 80,
    backgroundColor: '#4ecdc4',
    marginBottom: 10,
  },
  retangulo: {
    width: 100,
    height: 60,
    backgroundColor: '#45b7d1',
    marginBottom: 10,
  },
  triangulo: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 70,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#feca57',
    marginBottom: 10,
  },
  formaLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
});
```

**✅ O que aprendemos:**
- Criação de círculos com borderRadius
- Quadrados e retângulos com width/height
- Triângulos usando borderStyle
- Organização de formas em grid
- Labels para identificar formas

---

## 🎉 Resumo do que Aprendemos

Parabéns! Você acabou de aprender os fundamentos do React Native:

✅ **Controle de Versão** - Git e GitHub  
✅ **Configuração** - Expo e dependências  
✅ **Textos** - Diferentes estilos e organização  
✅ **ScrollView** - Conteúdo rolável  
✅ **FlatList** - Listas otimizadas  
✅ **Imagens** - Exibição de mídia  
✅ **Formas** - Elementos geométricos  

### 🚀 Próximos Passos Sugeridos

Agora que você tem uma base sólida, que tal expandir seu conhecimento?

1. **🎯 Navegação** - Implementar múltiplas telas
2. **📊 Dados** - Consumir APIs e JSON
3. **🎨 Temas** - Implementar modo claro/escuro
4. **💾 Persistência** - Salvar dados localmente
5. **🔔 Notificações** - Push notifications

---

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile
- **Expo**: Plataforma para desenvolvimento e deploy de apps React Native
- **Git**: Controle de versão
- **GitHub**: Repositório remoto

---

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/appGrafico.git
   cd appGrafico
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npx expo start
   ```

4. **Visualize no dispositivo**
   - Escaneie o QR Code com o app Expo Go
   - Ou pressione 'w' para abrir no navegador

---

## 💡 Dicas para Continuar

- **🧪 Teste cada etapa** independentemente antes de prosseguir
- **📝 Mantenha o código organizado** com comentários explicativos
- **📱 Teste em diferentes dispositivos** para garantir responsividade
- **🎨 Experimente com cores e layouts** para personalizar
- **👥 Compartilhe seu progresso** com a turma e peça feedback

---

## 📖 Recursos Adicionais

### Documentação Oficial:
- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [React Native Elements](https://reactnativeelements.com/)

### Componentes Importantes:
- **Text**: [Documentação](https://reactnative.dev/docs/text)
- **ScrollView**: [Documentação](https://reactnative.dev/docs/scrollview)
- **FlatList**: [Documentação](https://reactnative.dev/docs/flatlist)
- **Image**: [Documentação](https://reactnative.dev/docs/image)

---

**🎓 Desenvolvido para fins educacionais - Aprenda, experimente e divirta-se!**
