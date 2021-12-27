/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
// import { addStyles, EditableMathField } from 'react-mathquill';
import MyInlineWeb from './components/Visualizer';
import { addStyles, EditableMathField } from 'react-mathquill'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  KeyboardAvoidingView,
  Image,
  
  // Keypad,
  // ButtonRow,
  // Container,
} from 'react-native';
import { WebView } from 'react-native-webview';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

var mexp = require('math-expression-evaluator');

const App: () => Node = () => {
  
  const [outputState, setOutputState] = useState("0");
  const [inputState, setInputState] = useState("");   
  const HTMLSource = require('./components/Visualizer.html');
  const visualizerHTML = Image.resolveAssetSource(HTMLSource);

  const handleCalculate = () => {
    try {
      console.log(inputState);
      const val = mexp.eval(inputState);
      setOutputState(val.toString());
    } catch (error) {
      console.log(error);
      // setOutputState("Invalid Syntax");
      setOutputState("Syntax error: " + error.message.toString().toUpperCase());
    }
    
  }

  const handleInput = (text) => {
    
    setInputState(text);
    console.log(inputState);
  }
  
  
  return (
    <KeyboardAvoidingView>
      <View style = {styles.sectionContainer}>
        <View style = {styles.outputContainer}>
          <Text style= {styles.sectionTitle}> Result </Text>
          <Text style= {styles.sectionTitle}> {outputState} </Text>
        </View>
        <View style = {styles.expressionContainer}>
          {/* <MyInlineWeb></MyInlineWeb> */}
          <WebView style = {styles.expressionContainer}
            // allowFileAccess = {true}
            source={{ visualizerHTML }}
            
            style={{ flex: 1  }}
      />
        </View>
        <View style = {styles.inputContainer}> 
          <Text style= {styles.sectionTitle}> Input </Text>
          <TextInput style= {styles.inputText}
            onChangeText = {text => handleInput(text)}></TextInput>
        </View>
        
        <View style = {styles.buttonsContainer}>
          <Button style = {styles.functionButton}
            title = "Clear" color = "crimson"></Button>
          <Button style = {styles.functionButton}
            title="Calculate"
            onPress = {() => {
              handleCalculate();
            }}
             ></Button>
        </View>
        
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    // marginTop: 32,
    // paddingHorizontal: 24,
    // alignItem: 'center',
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItem: 'center',
     height: '100%',
  },
  outputContainer: {
    backgroundColor: 'white',
    // flex: 3,
    borderBottomWidth: 3,
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: 100,
    justifyContent: 'space-between',
  },
  expressionContainer: {
    backgroundColor: 'white',
    height: '20%',
    borderBottomWidth: 3,
  },
  inputContainer: {
    backgroundColor: 'white',
    // flex: 3,
    borderBottomWidth: 3,
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: 100,
    justifyContent: 'space-between',
    // flexDirection: 'rtl'0,
  },

  inputText : {
    // textAlign : 'right',
    // position: 'absolute',
    height: 100,
    fontSize: 26,
    textAlign: 'right',
    
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    // backgroundColor: 'white',
    // flex: 1,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  
  functionButton: {
    
  }
  
});

export default App;
