import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {

  const buttons = ['AC','DEL','/','*','-','+','=','9','8','7','6','5','4','3','2','1','0'];
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");
  
    function calculator (){
      const splitNumbers = currentNumber.split(' ');
      const firstNumber = parseFloat(splitNumbers[0]);
      const lastNumber = parseFloat(splitNumbers[2]);
      const operator = splitNumbers[1];

      switch(operator){
            case '+':
            setCurrentNumber((firstNumber + lastNumber).toString())
            return
            case '-':
            setCurrentNumber((firstNumber - lastNumber).toString())
            return
            case '*':
            setCurrentNumber((firstNumber * lastNumber).toString())
            return
            case '/':
            setCurrentNumber((firstNumber / lastNumber).toString())
            return

      }
    }

    function handleInput (buttonPressed){
      console.log(buttonPressed)
      if(buttonPressed === "+" | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" ){
        setCurrentNumber(currentNumber + " " + buttonPressed + " ")
        return
      }
      switch(buttonPressed){
        case 'DEL':
          setCurrentNumber(current.substring(0, (currrentNumber.lenght -1)))
          return
        case 'AC':
          setLastNumber("")
          setCurrentNumber("")
          return
        case '=':
          setLastNumber(currentNumber + " = ")
          calculator()
          return
      }
      setCurrentNumber(currentNumber + buttonPressed);
    }


  return (
  <View>
    <View style={styles.result}>
      <Text style={styles.historyText}>{lastNumber}</Text>
      <Text style={styles.resultText}>{currentNumber}</Text>
    </View>

    <View style={styles.buttons}>
      {buttons.map((button) =>
          <TouchableOpacity onPress={() =>handleInput(button)} key={button} style={styles.button}><Text style={styles.textButton}>{button}</Text></TouchableOpacity>
      )}
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  result:{
   justifyContent: 'flex-end',
   alignItems: 'flex-end',
   width: '100%',
   height: 300,
   backgroundColor: 'green'
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: 80,
    minWidth: 80,
  },
  textButton:{
    color:'#5b5b5b',
    fontSize: 25,
  },
  resultText:{
    fontWeight: '100',
    fontSize: 80,
    margin: 10,
    alignSelf: 'flex-end',
  },
  historyText:{
    fontSize: 22,
    marginBottom: 0,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
});
