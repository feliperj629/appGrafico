import { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  const [contar, setContar] = useState(1);
  const [nome, setNome] = useState("");
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultadoSoma, setResultadoSoma] = useState(0);

  /* Criando funções*/

  /* Função para somar */
  const funcSomar = () => {
    setResultadoSoma(parseInt(valor1) + parseInt(valor2));
  }

  /* Função para subtrair */

  /* Função para multiplicar */

  /* Função para dividir */



  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container1}>
          <ScrollView style={styles.scrollView}>
            <h1>Brincando com o useState</h1>
            <Text>Contador: {contar}</Text>
            <Button title="Adicionar" onPress={() => setContar(contar + 1)} />
            <View style={styles.separator} />
            {/* --------------------------------------------- */}

            <Text style={styles.text}>
              Digite seu nome:
            </Text>

            <TextInput style={styles.input}
              placeholder="Informe seu nome:"
              onChangeText={setNome}
            />
            <Text style={styles.text}>Olá, {nome || "visitante"}!</Text>
            <View style={styles.separator} />
            {/* --------------------------------------------- */}

            <h1>Trabalhando com Números.</h1>
            {/* --------------------------------------------- */}
            <Text style={styles.text}>
              Somar dois valores:
            </Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputSoma}
                placeholder="Primeiro valor:"
                onChangeText={setValor1}
              />
              <TextInput style={styles.inputSoma}
                placeholder="Segundo valor:"
                onChangeText={setValor2}
              />
            </View>
            <Button title="Somar" onPress={funcSomar} />
            <Text style={styles.text}> O resultado é: {resultadoSoma}</Text>
            <View style={styles.separator} />
            {/* --------------------------------------------- */}

          </ScrollView>
        </View>


        <View style={styles.container2}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>
              <h1>A importância de estudar React Native</h1>

              <Image source={require('./assets/logo_estacio.png')} style={styles.image} />

              <p style={styles.text}>
                Estudar <b>React Native</b> é essencial para quem deseja atuar no desenvolvimento mobile moderno, pois a tecnologia permite criar aplicativos nativos para Android e iOS utilizando apenas JavaScript e React. Isso significa que, com um único código-base, é possível atingir duas das maiores plataformas do mercado, reduzindo tempo e esforço de desenvolvimento. Essa característica de multiplataforma faz do React Native uma escolha muito atrativa tanto para iniciantes quanto para desenvolvedores experientes.
              </p>

              <p style={styles.text}>
                Além da praticidade, o React Native oferece <b>alto desempenho</b>, já que seus componentes se comunicam diretamente com APIs nativas dos dispositivos. Isso garante que os aplicativos tenham fluidez e uma experiência de usuário semelhante à dos apps desenvolvidos de forma totalmente nativa. Dessa forma, o conhecimento em React Native não apenas abre portas para projetos mais eficientes, mas também garante que o desenvolvedor consiga entregar produtos competitivos e de qualidade.
              </p>

              <p style={styles.text}>
                Outro ponto importante é a <a>ampla comunidade</a> que existe em torno do React Native. Por ser mantido pelo Facebook (atual Meta) e usado por empresas como Instagram, Uber e Walmart, a tecnologia recebe constantes atualizações e conta com uma base sólida de bibliotecas, ferramentas e tutoriais. Isso torna o aprendizado mais acessível e possibilita encontrar soluções para problemas comuns de maneira rápida, o que é um grande diferencial no dia a dia profissional.
              </p>

              <p style={styles.text_destaque}>
                Por fim, estudar React Native amplia as oportunidades de carreira e empreendedorismo. Profissionais que dominam essa tecnologia são valorizados, já que empresas buscam soluções ágeis e econômicas para desenvolver aplicativos. Além disso, o conhecimento adquirido pode ser aplicado em projetos pessoais ou startups, permitindo transformar ideias em produtos digitais com maior rapidez. Em um mercado cada vez mais orientado à mobilidade, investir no aprendizado de React Native é um passo estratégico para o futuro.
              </p>
            </Text>
          </ScrollView>
        </View>

      </ScrollView>
    </View >
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
    height: 400,
    maxHeight: 400
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    marginTop: 20,
    height: 400,
    maxHeight: 400
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
    textAlignVertical: "center",
    textAlignContent: "center",
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
  input: {
    borderWidth: 1,
    padding: 8,
    width: 220,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  inputSoma: {
    borderWidth: 1,
    padding: 8,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginHorizontal: 5,
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
  separator: {
    height: 1,
    backgroundColor: "black",
    marginVertical: 20,
  },
  scrollView: {
    flex: 1,
  },
});