import {useState} from "react";
import {
  ImageBackground, 
  StyleSheet,
  Switch,
  Text,TextInput,
  TouchableHighlight,
  View,
  Image,} from "react-native";
  const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},	
	TextInput:{
		fontSize:20,
		fontWeerght:"bold",
		color:"blue",
		borderWidth:1,
		borderColor:"blue",
		margin:20
	},
	button:{
		backgroundColor:"aqua",
		height:50,
		borderRadius:10,
		justifyContent:"center",
		alignItems:"center",
		margin:5,
	},
	buttonText:{
		color:"Blue",
		fontSize:20,
		fontWeight:"bold"
	},
  });
const App = () =>{
	const [email,setEmail]=useState("");
  const [password,setpassword]=useState("");
  return(
	<View style={styles.container}>
		<ImageBackground source={require('../HK2NAM4/assets/687987.jpg')} style={{flex:1}}>

    <Text style= {styles.text}>
      REGISTER
    </Text>
		<TextInput 
        style={styles.TextInput}
        onChangeText={setEmail}
        placeholder="Nhap user name"
        value={email}
      />
      <TextInput
        style={styles.TextInput}
        onChangeText={setpassword}
        placeholder="Nhap password"
        secureTextEntry
        value={password}
        />
        <TouchableHighlight
          style={styles.button}
          >
            <Text style= {styles.text}> Longin</Text>
        </TouchableHighlight>
		</ImageBackground>
  	</View>
)
}
export default App;
