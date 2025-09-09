import { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  const [contar, setContar] = useState(100);
  const [nome, setNome] = useState("");


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Contador: {contar} - {nome}</Text>
        <Button title="Adicionar" onPress={() => setContar(contar + 100)} />

        <Text style={styles.text}>
          Digite seu nome:
        </Text>

        <TextInput style={styles.input}
          placeholder="Informe seu nome:"
          onChangeText={setNome}
        />
        <Text style={styles.text}>Olá, {nome || "visitante"}!</Text>

        <Text style={styles.text}>
          <h1>Meu primeiro Título</h1>

          <Image source={require('./assets/logo_estacio.png')} style={styles.image} />

          <p style={styles.text}>
            As experiências acumuladas demonstram que a valorização de fatores subjetivos eleva o grau de responsabilidade compartilhada das variáveis críticas de sucesso organizacional. Do mesmo modo, o desenvolvimento contínuo de distintas formas de atuação desafia a capacidade de equalização da gestão inovadora da qual fazemos parte. Gostaria de enfatizar que a execução dos pontos do programa deve passar por modificações independentemente das condições inegavelmente apropriadas. O cuidado em identificar pontos críticos no julgamento imparcial das eventualidades assume importantes posições no estabelecimento das condições estruturais subjacentes.
          </p>

          <h2 style={styles.text}>Meu segundo Título</h2>

          <p style={styles.text}>
            As experiências acumuladas demonstram que a valorização de fatores subjetivos eleva o grau de responsabilidade compartilhada das variáveis críticas de sucesso organizacional. Do mesmo modo, o desenvolvimento contínuo de distintas formas de atuação desafia a capacidade de equalização da gestão inovadora da qual fazemos parte. Gostaria de enfatizar que a execução dos pontos do programa deve passar por modificações independentemente das condições inegavelmente apropriadas. O cuidado em identificar pontos críticos no julgamento imparcial das eventualidades assume importantes posições no estabelecimento das condições estruturais subjacentes.
          </p>

          <h3 style={styles.text}>Meu terceiro Título</h3>

          <p style={styles.text}>
            As experiências acumuladas demonstram que a valorização de fatores subjetivos eleva o grau de responsabilidade compartilhada das variáveis críticas de sucesso organizacional. Do mesmo modo, o desenvolvimento contínuo de distintas formas de atuação desafia a capacidade de equalização da gestão inovadora da qual fazemos parte. Gostaria de enfatizar que a execução dos pontos do programa deve passar por modificações independentemente das condições inegavelmente apropriadas. O cuidado em identificar pontos críticos no julgamento imparcial das eventualidades assume importantes posições no estabelecimento das condições estruturais subjacentes.
          </p>

          <h4 style={styles.text_destaque}>Meu quarto Título</h4>

          <p style={styles.text_destaque}>
            As experiências acumuladas demonstram que a valorização de fatores subjetivos eleva o grau de responsabilidade compartilhada das variáveis críticas de sucesso organizacional. Do mesmo modo, o desenvolvimento contínuo de distintas formas de atuação desafia a capacidade de equalização da gestão inovadora da qual fazemos parte. Gostaria de enfatizar que a execução dos pontos do programa deve passar por modificações independentemente das condições inegavelmente apropriadas. O cuidado em identificar pontos críticos no julgamento imparcial das eventualidades assume importantes posições no estabelecimento das condições estruturais subjacentes.
          </p>
          <br />

        </Text>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "green",
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
});