import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, View, Linking } from "react-native";
import { Text } from "react-native-paper";
import styles from "../ultils/styleHome";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
        <Image style={styles.img} 
          source={require("../../assets/dekuimg.webp")}
        />
        
        <View style={styles.div}>

            <Text style={styles.textodiv}>Bem Vindo !{'\n'} Este é meu Primeiro APP</Text> 

            <Text style={styles.textoteste}> {'\n'}GitHub Pessoal</Text>
            <MaterialCommunityIcons 
            onPress={
              () => Linking.openURL('https://github.com/joaogabriellphp')
            } 
            name="github" 
            size={200}
             style={styles.iconG} 
             />

        </View>

    </View>
  );
}
