import React, { useState } from "react"
import {Text,View,Image,TouchableOpacity,StyleSheet} from "react-native"
import DiceOne from "./assets/dice1.png"
import DiceTwo from "./assets/dice2.png"
import DiceThree from "./assets/dice3.png"
import DiceFour from "./assets/dice4.png"
import DiceFive from "./assets/dice5.png"
import DiceSix from "./assets/dice6.png"

const App = () => {
  const [dice,setDice] = useState(DiceOne);
  const handleDice = () => {
    let random = Math.floor(Math.random() * 6) + 1
    switch (random) {
      case 1:
        setDice(DiceOne)
        break;
        case 2:
          setDice(DiceTwo)
          break;
          case 3:
            setDice(DiceThree)
            break;
            case 4:
              setDice(DiceFour)
              break;
              case 5:
                setDice(DiceFive)
                break;
                case 6:
                  setDice(DiceSix)
                  break;
    
      default:
        setDice(DiceThree)
        break;
    }
  }
  return (
    <>
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDice}>
      <Image source={dice} style={styles.img}/> 
    </TouchableOpacity>
    </View>
    </>
  )
}

export default App;


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#0ff"
  },
  img:{
    width:200,
    height:200
  },
  content:{
    fontSize:20,
    borderWidth:2,
    paddingVertical:10,
    paddingHorizontal:20,
    marginTop:20,
    borderRadius:33,
    fontWeight:"bold"
  }
})