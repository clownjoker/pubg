import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Settings =({navigation})=>{
    return(
        <View style={styles.container}>
            {/* header */}
           <View style={styles.header}>
               <Text style={styles.titleHeader}>الإعدادات</Text>
           </View>
           {/* content name and message ... */}
            {/* profile */}
           <View style={styles.card}>
                <View style={styles.subCard}>
                    <FontAwesome5 name='user-alt' size={22} color='#CAD1E5'/>
                    <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('personData')}}>
                        <Text style={styles.title}>
                            الملف الشخصي
                        </Text>
                    </TouchableOpacity>
                </View>  
           </View>
            {/* message */}
            <View style={styles.card}>
                <View style={[styles.subCard,{justifyContent:'space-between'}]}>
                    <View style={styles.subCard}>
                        <MaterialIcons name='message' size={22} color='#CAD1E5'/>
                        <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('messages')}}>
                            <Text style={styles.title}>
                            الرسائل    
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewMessage}>
                        <Text style={{color:'#fff'}}>
                            5
                        </Text>
                    </View>
                </View>  
           </View>
            {/* contact us  */}
            <View style={styles.card}>
                <View style={styles.subCard}>
                    <FontAwesome5 name='phone' size={22} color='#CAD1E5'/>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.title}>
                            تواصل معنا   
                        </Text>
                    </TouchableOpacity>
                </View>  
           </View>
           {/* about us */}
           <View style={styles.card}>
                <View style={styles.subCard}>
                    <FontAwesome5 name='exclamation-circle' size={22} color='#CAD1E5'/>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.title}>
                            عن التطبيق      
                        </Text>
                    </TouchableOpacity>
                </View>  
           </View>
           {/* log out  */}
           <View style={[styles.card,{marginTop:60}]}>
                <View style={styles.subCard}>
                    <Feather name='log-out' size={22} color='#CAD1E5'/>
                    <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('container')}}>
                        <Text style={styles.title}>
                        تسجيل الخروج       
                        </Text>
                    </TouchableOpacity>
                </View>  
           </View>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:15
    },
    header:{
        width: '100%',
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    titleHeader:{
        fontSize:15,
        fontFamily:'Cairo-Bold',
        color:'#2C2738'
    },
    card:{
        // width: '100%',
        marginHorizontal:20,
        marginVertical:15,
        height: 40,
        justifyContent:'center'
    },
    subCard:{
        flexDirection:'row',
        alignItems:'center',
    },
    btn:{
        marginLeft:20
    },
    title:{
       fontSize:16, 
       color:'#2C2738',
       fontFamily:'Cairo-Regular'
    },
    viewMessage:{
        width:20,
        height:20,
        backgroundColor:'#ff3300',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default Settings;