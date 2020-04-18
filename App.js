import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, ThemeProvider, Input, SocialIcon, Avatar } from 'react-native-elements';

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 200,
    borderRadius: 8,
    marginBottom: 50
  },
  input: {
    marginBottom: 50
  },
  header: {
    flex: 1, alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
    paddingHorizontal: 50,
    height: '100%'
  },
  button: {
    width: 200,
    marginVertical: 20
  }
});

export default function App() {
  const { container, logo, input, button } = styles;
  const [state, setState] = useState({ emailError: 'none', email: '', password: '' })
  const emailRef = useRef(null)
  function ValidateEmail(mail) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail));
  }
  const { emailError, email, password } = state;
  return (
    <ThemeProvider>

      <View style={container}>
        <Image
          style={logo}
          source={require('./assets/idvogados.png')}
        />
        <Avatar
          size="large"
          title="LW"
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          showEditButton
          rounded
        />

        <Input
          ref={emailRef}
          inputStyle={input}
          keyboardType="email-address"
          placeholder={"email"}
          rightIcon={{ type: 'font-awesome', name: 'address-card' }}
          errorStyle={{ color: 'red' }}
          require={"require"}
          errorMessage='Digite um email valido'
          errorStyle={{ display: emailError }}
          autoFocus
          onChange={({ nativeEvent: { text } }) => { setState({ ...state, email: text, emailError: ValidateEmail(text) ? 'none' : 'flex' }) }}
        />
        <Input
          inputStyle={input}
          secureTextEntry
          placeholder='Senha'
          rightIcon={{ type: 'font-awesome', name: 'key' }}
          errorStyle={{ color: 'red' }}
          require={"require"}
          onChange={({ nativeEvent: { text } }) => { setState({ ...state, password: text }) }}

        />
        <Button
          buttonStyle={button}
          style={button}
          title="Entrar"
          loading={password === '' || email === '' || !ValidateEmail(email)}
        />
        <Button
          buttonStyle={button}
          title="Cadastrar-se"
          type="outline"
        />
      </View>
      <SocialIcon
        iconStyle={{
          position: 'relative'
        }}
        title='Entre com Facebook'
        button
        type='facebook'
      />
    </ThemeProvider>
  );
}
