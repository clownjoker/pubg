import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';

class Login extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titleLogin}> تسجيل دخول </Text>
                {/* input the number and btn */}
                <View style={styles.inputContentView}>
                    <TextInput  placeholder='رقم الهاتف المحمول' placeholderTextColor='#756F86' style={styles.input} keyboardType='numeric'/>
                    <Text style={{fontSize:16,fontFamily:'Cairo-Bold',color:'#2C2738',marginRight:10}}>+230</Text>
                    <Image source={require('../../assets/images/mt.png')} style={{width: 64,height:54,borderTopLeftRadius:5,borderBottomLeftRadius:5}}/>
                </View>
                {/* btn next view */}
                <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('otb')} 
                    style={styles.btnNext}
                >
                    <Text style={{fontSize: 14,color:'#DBE2EA',fontFamily:'Cairo-Bold'}}>التالي</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent:'center'
    },
    titleLogin:{
        fontSize:24,
        fontFamily:'Cairo-Bold',
        paddingHorizontal:30,
        alignSelf:'center',
    },
    input:{
        flex:1,
        paddingLeft:15,
        fontSize:14,
        fontFamily:'Cairo-SemiBold'
    },
    inputContentView:{
        width: '100%',
        backgroundColor:'#DBE2EA',
        height:54,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginTop:60
    },
    btnNext:{
        backgroundColor:'#0880AE',
        width: '100%',
        height:54,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        borderRadius:5
    }
})
export default Login;