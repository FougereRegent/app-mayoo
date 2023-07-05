import Readt, { useState } from 'react'
import { TextInput, Text, View, StyleSheet, Image } from 'react-native'

export enum TypeTextBox {
  NORMAL,
  PASSWORD,
  CREDENTIALS
};

type TextboxProps = {
  mode: TypeTextBox
}

const Textbox = (props: TextboxProps) => {
  const [text, setText] = useState('');
  let result: any;
  switch (props.mode) {
    case TypeTextBox.NORMAL:
      result = (
        <View style={styles.container}>
          <TextInput
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            style={styles.textbox} />
        </View>
      );
      break;
    case TypeTextBox.PASSWORD:
      const [password, setPassword] = useState('');
      result = (
        <View style={styles.container}>
          <Image source={require('../../assets/mayoo/login.png')}
            style={styles.img} />
          <TextInput
            placeholder='Mot de passe'
            onChangeText={newText => {
              setText(newText);
            }}
            secureTextEntry={true}
            defaultValue={text}
            style={styles.textbox} />
        </View>
      );
      break;
    case TypeTextBox.CREDENTIALS:
      result = (
        <View style={styles.container}>
          <Image source={require('../../assets/mayoo/login.png')}
            style={styles.img} />
          <TextInput
            placeholder='Identifiant'
            onChangeText={newText => { setText(newText); }}
            value={text}
            style={styles.textbox} />
        </View>
      );
      break
  }

  return (
    <View>
      {result}
    </View>
  );
};

const styles: any = StyleSheet.create(
  {
    container: {
      borderRadius: 20,
      backgroundColor: 'rgba(0.0, 0, 0, 0.07)',
      padding: 5,
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: 'flex-start',
      width: 220,
      height: 35
    },
    img: {
      marginHorizontal: 5,
      width: 20,
      height: 20
    },
    textbox: {
      flex: 1,
    }
  }
)

export default Textbox;
