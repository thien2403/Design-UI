import {useState} from "react";
import {
  ImageBackground, 
  StyleSheet,
  Switch,
  Text,TextInput,
  TouchableHighlight,
  View} from "react-native";
const Excersise1=()=>{
    const [email,setEmail]=useState("");
  const [password,setpassword]=useState("");
  return(
    <View style={myStyle.container}>
        
        <Image
            source= {require("./assets/687987.jpg")}
            style={myStyle.banr}
        />
        {/* <TextInput 
        style={myStyle.TextInput}
        onChangeText={setEmail}
        placeholder="Nhap user name"
        value={email}
      />
      <TextInput
        style={myStyle.TextInput}
        onChangeText={setpassword}
        placeholder="Nhap password"
        secureTextEntry
        value={password}
        />
        <TouchableHighlight
          style={myStyle.button}
          onPress={onPress}>
            <Text style={myStyle.buttonText}>
              Login
            </Text>
        </TouchableHighlight> */}
        <ImageBackground ></ImageBackground>
    </View>
  )
}
export default Excersise1;
const myStyle =StyleSheet.create(
	{ 
    banr:{
      width:100,
      height:100,
    },
	// 	container: {
	// 		flex:1,				//toan man hinh
  //     padding:10,
  //     marginTop:50
	// 	},
	// 	TextInput:{
	// 		//fontSize:20,
	// 		//fontWeerght:"bold",
	// 		//color:"blue"
	// 		borderWidth:1,
	// 		borderColor:"blue",
	// 		margin:5
	// 	},
	// 	button:{
	// 		backgroundColor:"aqua",
	// 		height:50,
	// 		borderRadius:10,
	// 		justifyContent:"center",
	// 		alignItems:"center",
	// 		margin:5,
	// 	},
	// 	
	// },
)