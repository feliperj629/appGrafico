# appGrafico

Projeto desenvolvido em sala de aula utilizando React Native com Expo.

## Sobre o Projeto

Este é um projeto de teste criado durante as aulas práticas de desenvolvimento mobile com React Native e Expo. O projeto serve como base para aprendizado das funcionalidades básicas do React Native.

## Tutorial: React Native com Expo + GitHub

### 1) Criar o projeto (template blank)
```bash
npx create-expo-app appGrafico --template blank
cd appGrafico
```

### 2) Instalar dependências para Web
```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```

### 3) Rodar o projeto
```bash
npx expo start
```
- **w** → abrir no navegador
- **a/i** → abrir emuladores
- **QR Code** → Expo Go

### 4) Criar repositório no GitHub
- Nome: `appGrafico`
- Não adicionar README, .gitignore ou License

### 5) Verificar/ajustar credenciais Git
```bash
git config --global user.name
git config --global user.email
# se necessário:
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

### 6) Inicializar Git e vincular remoto
```bash
git init
git remote add origin https://github.com/seu-usuario/appGrafico.git
git branch -M main
```

### 7) Primeiro commit e push
```bash
git add .
git commit -m "Primeira versão do app (Expo blank)"
git push -u origin main
```

### 8) Atualizar antes de enviar (git pull)
```bash
git pull --rebase origin main
# opcional: configurar rebase padrão
git config --global pull.rebase true
```

### 9) Ciclo de trabalho (rotina)
```bash
git add .
git commit -m "Descreva sua mudança"
git pull --rebase origin main
git push
```

## Exemplos de UI e Interatividade

### Botão (alerta)
```javascript
import { Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bem-vindo!</Text>
      <Button title="Clique aqui" onPress={() => alert("Você clicou no botão!")} />
    </View>
  );
}
```

### Estado (contador)
```javascript
import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Contador: {contador}</Text>
      <Button title="Adicionar" onPress={() => setContador(contador + 1)} />
    </View>
  );
}
```

### Entrada de texto (TextInput)
```javascript
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Digite seu nome:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 8, width: 220, marginTop: 10 }}
        placeholder="Escreva aqui"
        onChangeText={setNome}
      />
      <Text style={{ marginTop: 20 }}>Olá, {nome || "visitante"}!</Text>
    </View>
  );
}
```

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile
- **Expo**: Plataforma para desenvolvimento e deploy de apps React Native
- **Git**: Controle de versão
- **GitHub**: Repositório remoto

## Como Executar

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Execute o projeto: `npx expo start`
4. Escaneie o QR Code com o app Expo Go ou pressione 'w' para abrir no navegador

## Elementos Gráficos no React Native Expo

### 1) Círculos e Formas Básicas

#### Passo a Passo:
1. Abra o arquivo `App.js`
2. Substitua o conteúdo pelo código abaixo
3. Salve e veja as mudanças no app

```javascript
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circulo} />
      <View style={styles.quadrado} />
      <View style={styles.retangulo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  circulo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ff6b6b',
    marginBottom: 20,
  },
  quadrado: {
    width: 80,
    height: 80,
    backgroundColor: '#4ecdc4',
    marginBottom: 20,
  },
  retangulo: {
    width: 120,
    height: 60,
    backgroundColor: '#45b7d1',
  },
});
```

### 2) Gradientes e Cores

#### Passo a Passo:
1. Instale a biblioteca de gradientes: `npx expo install expo-linear-gradient`
2. Importe o LinearGradient
3. Use o código abaixo

```javascript
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ff6b6b', '#4ecdc4', '#45b7d1']}
        style={styles.gradiente}
      />
      <View style={styles.circuloGradiente}>
        <LinearGradient
          colors={['#667eea', '#764ba2']}
          style={styles.circuloInterno}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradiente: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 30,
  },
  circuloGradiente: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  circuloInterno: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
```

### 3) Animações Básicas

#### Passo a Passo:
1. Importe Animated do React Native
2. Crie um valor animado
3. Use useEffect para iniciar a animação

```javascript
import { View, StyleSheet, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

export default function App() {
  const animacao = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animacao, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(animacao, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const rotacao = animacao.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const escala = animacao.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circuloAnimado,
          {
            transform: [{ rotate: rotacao }, { scale: escala }],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  circuloAnimado: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ff6b6b',
  },
});
```

### 4) Gráficos Simples (Barras)

#### Passo a Passo:
1. Crie um array com dados
2. Use map para criar barras
3. Calcule alturas baseadas nos valores

```javascript
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const dados = [30, 45, 60, 25, 80, 35];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gráfico de Barras</Text>
      <View style={styles.grafico}>
        {dados.map((valor, index) => (
          <View key={index} style={styles.barraContainer}>
            <View
              style={[
                styles.barra,
                {
                  height: valor * 2,
                  backgroundColor: `hsl(${index * 60}, 70%, 60%)`,
                },
              ]}
            />
            <Text style={styles.valor}>{valor}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  grafico: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 200,
    paddingHorizontal: 20,
  },
  barraContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  barra: {
    width: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  valor: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666',
  },
});
```

### 5) Canvas Personalizado (Pintura)

#### Passo a Passo:
1. Instale: `npx expo install expo-gl expo-gl-cpp`
2. Crie um componente de pintura
3. Use PanGestureHandler para detectar toques

```javascript
import { View, StyleSheet, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Canvas, Path, Skia } from '@shopify/react-native-skia';

export default function App() {
  const { width, height } = Dimensions.get('window');
  const path = Skia.Path.Make();

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Path
          path={path}
          strokeWidth={5}
          style="stroke"
          color="#ff6b6b"
        />
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  canvas: {
    flex: 1,
  },
});
```

### 6) Exercícios Práticos para Alunos

#### Exercício 1: Criar um Relógio Digital
- Use Text e useState para mostrar hora atual
- Atualize a cada segundo com setInterval

#### Exercício 2: Desenhar uma Casa
- Use View com diferentes formas (retângulos, triângulos)
- Aplique cores e posicionamento

#### Exercício 3: Criar um Loading Spinner
- Use Animated.View com rotação
- Adicione diferentes cores em sequência

#### Exercício 4: Gráfico de Pizza Simples
- Use View com borderRadius para criar setores
- Calcule ângulos baseados nos dados

### Dicas Importantes:

1. **Performance**: Sempre use `useNativeDriver: true` em animações quando possível
2. **Cores**: Use HSL para gerar cores dinamicamente
3. **Layout**: Use Flexbox para posicionamento responsivo
4. **Bibliotecas**: Instale apenas o que for necessário
5. **Debug**: Use console.log para verificar valores durante desenvolvimento

### Bibliotecas Úteis para Gráficos:

- `react-native-chart-kit`: Gráficos avançados
- `victory-native`: Gráficos estatísticos
- `react-native-svg`: Desenho vetorial
- `@shopify/react-native-skia`: Canvas de alta performance
