import { TextInput, View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../ultils/styles";

export default function ContactScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Contato {'\n'} </Text>

            <View style={styles.div}>
            <Text style={styles.texto}>Email:</Text>
            <TextInput style={styles.input}
                placeholder="Insira Seu Email..."
            />
            </View>

        </View>
    )
}

// how put input in react native?