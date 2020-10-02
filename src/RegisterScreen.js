import * as React from 'react';
import { TouchableOpacity, Text, TextInput, View, StyleSheet, Dimensions} from 'react-native';

const {width: WIDTH } = Dimensions.get('window')

export function RegisterScreen() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    // const { signIn } = React.useContext(AuthContext);
    const {container, textInput} = styles
    
    register = (username, password) => {
        console.log("I can handle api register here")
    }

    return (
      <View style={container}>
        <TextInput
          placeholder="Username"
          placeholderTextColor='#5d5d5d'
          value={username}
          onChangeText={setUsername}
          style={textInput}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor='#5d5d5d'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={textInput}
        />

        <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={() => register({ username, password })}
          >
            <Text style={styles.textButton}>
              Registrar
            </Text>
        </TouchableOpacity> 

        {/* <Button title="Sign in" onPress={() => signIn({ username, password })} /> */}
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      opacity: 0.8,
    },
    textInput: {
      width: WIDTH - 75,
      height: 45,
      borderRadius: 9,
      backgroundColor: '#ccc',
      marginTop: 23,
      paddingLeft: 10,
      color: '#efefef',
      borderWidth: 1,
      borderColor: '#8d8d8d'
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: WIDTH - 75,
      height: 45,
      borderRadius: 9,
      borderWidth: 2,
      borderColor: '#707070',
      backgroundColor: '#ccc',
      marginTop: 23,
    },
    textButton: {
      alignSelf: 'center',
      color: 'black',
      fontWeight: 'bold'
    },

  })