import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../ultils/styleAbout";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Quem sou Eu ? {'\n'} {'\n'} Eu sou João Gabriel, Tenho 17 anos e estou buscando fluencia em  JavaScript e no framework React Native {'\n'} </Text>
            <Text style={styles.texto}>Linguagens que utilizei no APP {'\n'} {'\n'} JavaScript {'\n'} React Native {'\n'}</Text>
        </View>
    )
}