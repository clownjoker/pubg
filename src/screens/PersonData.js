import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';


class PersonData extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                {/* back to input number view */}
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('otb')} style={styles.arrowBack}>
                    <Feather size={20} name='arrow-left' color='#000' />
                </TouchableOpacity>
                
                {/* ask to entring the data to complete thy buy */}
                <View style={{marginTop:30}}>
                    <Text style={styles.titleProfile}>بيانات الملف الشخصي</Text>
                    <Text style={styles.subTitle}>الرجاء ادخال بعض البانات المطلبة لاكمال عملية الشراء</Text>
                </View>

                {/* input data full name and location  */}
                <View style={styles.contentInputPerinet}>
                    {/* full name */}
                    <View style={styles.inputContent}>
                        <FontAwesome5 name='user-alt' size={18} color='#756F86'/>
                        <TextInput placeholder='الاسم بالكامل' style={styles.input}/>
                    </View>

                    {/* the address */}
                    <View style={[styles.inputContent,{marginTop:15}]}>
                        <Ionicons name='md-location-sharp' size={18} color='#9391A4'/>
                        <TextInput placeholder='العنوان' style={styles.input}/>
                    </View>
                </View>

                {/* btn to save data and go to main screen */}
                <View style={{paddingHorizontal:10}}>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('map')} 
                            style={styles.btnNext}
                        >
                         <Text style={{fontSize: 14,color:'#DBE2EA',fontFamily:'Cairo-Bold'}}>حفظ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:15,
        backgroundColor:'#fff'
    },
    arrowBack:{
        marginTop:10, 
    },
    titleProfile:{
        fontSize:24,
        color:'#000',
        fontFamily:'Cairo-Bold',
        alignSelf:'center'
    },
    subTitle:{
       fontSize:14,
       fontFamily:'Cairo-Regular',
       color:'#000',
       alignSelf:'center',
       marginTop:5
    },
    contentInputPerinet:{
        width:'100%',
        paddingVertical:30,
        marginTop:30,
        paddingHorizontal:10
    },
    inputContent:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20,
        height:54,width: '100%',
        backgroundColor:'#DBE2EA',
        borderRadius:5
    },
    input:{
        flex:1,
        fontSize:14,
        fontFamily:'Cairo-SemiBold',
        marginLeft: 5,
    },
    btnNext:{
        backgroundColor:'#0880AE',
        width: '100%',
        height:54,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:5
    }
})
export default PersonData;