import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  View,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "react-native-paper";
import {} from "react-native-web";
// import styles from "../ultils/styleHome";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoTitle}>
        Bem Vindo(a) ao {"\n"}
        Ação Solidaria
      </Text>

      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.textSubmit}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.textSubmit}>Cadastro</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.div}>
        <Text style={styles.textoteste}>Sobre </Text>

        <Text style={styles.textodiv}>
          Sobre Do APP Sobre Do APP Sobre Do APP Sobre Do APP Sobre Do APP Sobre
          Do APP Sobre Do APP Sobre Do APP{" "}
        </Text>

        {/* <MaterialCommunityIcons 
            onPress={
              () => Linking.openURL('https://github.com/joaogabriellphp')
            } 
            name="github" 
            size={200}
             style={styles.iconG} 
             /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E1E1E",
  },
  img: {
    borderRadius: 10,
    width: 250,
    height: 250,
  },

  textodiv: {
    color: "#000",
    textAlign: "center",
    marginStart: 35,
    marginEnd: 35,
    justifyContent: "center",
  },

  textoteste: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
  },

  div: {
    marginTop: 20,
    width: "100%",
    height: "30%",
    backgroundColor: "#fff",
    textAlign: "center",
    justifyContent: "center",
  },
  textoTitle: {
    color: "#fff",
    fontSize: 38,
    textAlign: "center",
    marginBottom: 105,
    marginTop: 50,
  },
  btnSubmit: {
    backgroundColor: "#37C919",
    width: "30%",
    height: 45,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  textSubmit: {
    color: "#fff",
    fontSize: 18,
  },

  btnGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-around',
    marginBottom:40,
    marginTop:50,
  }
});
