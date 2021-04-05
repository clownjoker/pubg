import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


class OTB extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                {/* back to input number view */}
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')} style={styles.arrowBack}>
                    <Feather size={20} name='arrow-left' color='#000' />
                </TouchableOpacity>
                <View style={styles.content}>
                    <Text style={styles.titlePhone}>تأكيد رقم الهاتف</Text>
                    <Text style={styles.text}>الرجاء ادخال رقم التحقق الذي تم ارساله عبر سالة نصية </Text>
                    <Text style={styles.text}>للرقم 23012345678</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>

                        <View style={styles.cardInput}>
                            <TextInput placeholder='_' keyboardType='phone-pad'  maxLength={1} style={styles.input}/>
                        </View>
                        <View style={styles.cardInput}>
                            <TextInput placeholder='_' keyboardType='phone-pad'  maxLength={1} style={styles.input}/>
                        </View>
                        <View style={styles.cardInput}>
                            <TextInput placeholder='_' keyboardType='phone-pad'  maxLength={1} style={styles.input}/>
                        </View>
                        <View style={styles.cardInput}>
                            <TextInput placeholder='_' keyboardType='phone-pad'  maxLength={1} style={styles.input}/>
                        </View>

                    </View>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('personData')} 
                            style={styles.btnNext}
                        >
                         <Text style={{fontSize: 14,color:'#DBE2EA',fontFamily:'Cairo-Bold'}}>تأكيد</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{alignSelf:'center',marginTop:25,fontSize:12,fontFamily:'Cairo-Regular'}}>ارسال الرمز مرة اخرى</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:15
    },
    arrowBack:{
        marginTop:10, 
    },
    content:{
        flex:1,
        marginTop:150
    },
    titlePhone:{
        fontSize:22,
        fontFamily:'Cairo-Bold',
        color:'#000',
        alignSelf:'center'
    },
    text:{
        fontSize:14,
        alignSelf:'center',
        fontFamily:'Cairo-Regular'
    },
    cardInput:{
        width: 60,
        height: 54,
        backgroundColor:'#DBE2EA',
        borderRadius:5,
        // justifyContent:'center',
        alignItems:'center'
    },
    input:{
        height: 54,
        fontSize:18,
        fontFamily:'Cairo-SemiBold'
    },
    btnNext:{
        backgroundColor:'#0880AE',
        width: '100%',
        height:54,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        borderRadius:5
    }
})
export default OTB;