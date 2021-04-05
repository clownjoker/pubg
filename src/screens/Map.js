import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const Map =({navigation})=>{
    return(
        <View style={styles.container}>
            {/* arrow back */}
            <View style={styles.arrowBack}>
                <TouchableOpacity onPress={()=>navigation.navigate('personData')} >
                    <Feather size={22} name='arrow-left' color='#000' />
                </TouchableOpacity>
            </View>
            {/* input serach */}
            <View style={styles.inputSerach}>
                <TextInput 
                    placeholder='بحث'
                    placeholderTextColor='#756F86'
                    style={styles.input}
                />
                <Feather size={22} name='search' color='#756F86' style={{marginRight:10}}/>
            </View>
            {/* save aria */}
            <View style={{flex:1}}></View>
            {/* btn */}
            <View style={{marginBottom:10}}>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate('confirmation')} 
                            style={styles.btnNext}
                        >
                         <Text style={{fontSize: 14,color:'#DBE2EA',fontFamily:'Cairo-Bold'}}>التالي</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ddd',
        position:'relative'
    },
    arrowBack:{
        alignItems:'flex-end',
        marginTop:10,
        marginRight:10
    },
    inputSerach:{
        alignItems:'center',
        height:54,
        backgroundColor:'#DBE2EA',
        marginHorizontal:20,
        borderRadius:5,
        shadowColor:'#2C27381A',
        shadowOffset:{width: 0,height: 5},
        shadowOpacity:0.6,
        elevation:5,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    input:{
        fontSize:14,
        fontFamily:'Cairo-SemiBold',
        color:'#756F86',
        flex:1,
        paddingLeft:20
    },
    btnNext:{
        backgroundColor:'#0880AE',
        height:54,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:5,
        marginHorizontal:30
    }
})
export default Map;