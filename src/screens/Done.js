import React from 'react';
import {View,Text,StyleSheet,Image,ImageBackground,TouchableOpacity} from 'react-native';

const Done = ({navigation}) =>{
    return(
        <View style={styles.container}>

            <View style={styles.imageWrapper}>
                <View style={{borderWidth:10,borderRadius:100,borderColor:'#0880AE1A'}}>
                    <View style={{borderWidth:10,borderRadius:100,borderColor:'#0880AE1A'}}>
                        <ImageBackground source={require('../../assets/images/ce.png')} style={styles.image}>
                            <Image source={require('../../assets/images/ce2.png')} resizeMode='contain' style={styles.imageChild}/>
                        </ImageBackground>
                    </View>
                </View>
            </View>

            <View style={styles.textWrapper}>
                <Text style={styles.text}>تم إضافة طلبك بنجاح </Text>
                <Text style={[styles.text,{marginTop:5,color:'#272833'}]}> سوف يتم التاصل معك لاكمال باقي اجرائات التسليم   </Text>
            </View>

            <View style={{marginTop:50}}>
            <TouchableOpacity 
                        onPress={()=>navigation.navigate('container')} 
                            style={styles.btnNext}
                        >
                         <Text style={{fontSize: 14,color:'#DBE2EA',fontFamily:'Cairo-Bold'}}>متابعة</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    imageWrapper:{
        alignItems:'center',
        marginTop:150
    },
    image:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center'
    },
    imageChild:{
        width:30,
        height:30
    },
    textWrapper:{
        alignItems:'center',
        marginTop:25,
        
    },
    text:{
        fontSize:14,
        fontFamily:'Cairo-SemiBold',
        color:'#000000', 
    },
    contact:{
        fontSize:18,
        fontFamily:'Cairo-SemiBold',
        color:'#5093FE',
    },
    btnNext:{
        backgroundColor:'#0880AE',
        height:54,
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
        borderRadius:5,
        marginHorizontal:30,
        // width: '100%',
    }
})
export default Done;