import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../ultils/styleContact";

export default function ContactScreen() {
    return (
        <View style={styles.container}>

            <MaterialCommunityIcons name="atom" size={300}/>


            <TextInput style={styles.input}
                placeholder="Email..."
            />
            
            <TextInput style={styles.input}
                placeholder="Senha..."
            />

            <Text>Esqueceu a senha?</Text>
            <Button style={styles.butao} mode="contained" onPress={() => console.log('Pressed')}>Continue</Button>

            

        </View>
    )
}

// how put input in react native?