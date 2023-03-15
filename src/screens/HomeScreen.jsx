import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../ultils/styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem Vindo !</Text>
      <Text style={styles.texto}>Este é meu Primeiro APP</Text>

      <Image style={styles.img} source={require("../../assets/dekuimg.webp")} />
    </View>
  );
}
