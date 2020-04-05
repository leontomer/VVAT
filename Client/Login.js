import React from 'react'
import {View,Text, StyleSheet,Image} from 'react-native';

const Login = () => {
    return(
        <View style={styles.container}>

          <View style={styles.logoContainer}>
            <Image 
              source={require('./assets/b7.png')}
              style={styles.logo}
            />
            <Text style={styles.title}>An app made for beer sheva city.</Text>
          </View>
          <View>
          </View>
        </View>
      );
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#706fd3',
    },

    logoContainer:{
        alignItems:'center',
        justifyContent: 'center',
        flexGrow: 1

    },
    logo: {
        width: 300,
        height: 65
    }
    



});