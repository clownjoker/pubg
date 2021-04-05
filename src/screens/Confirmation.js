import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const Confirmation=({navigation})=>{
    return(
        <View >
            {/* arrow back */}
            <View style={styles.arrowBack}>
                <TouchableOpacity onPress={()=>navigation.navigate('map')} >
                    <Feather size={22} name='arrow-left' color='#000' />
                </TouchableOpacity>
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>تاكيد الطلب</Text>
                <Text style={styles.leftTitle}>MRU 45,000</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.rowOfData}>
                    <Text style={styles.productName}>اسم المنتج</Text>
                    <Text style={styles.productDet}>مانتات بابجي</Text>
                </View>

                <View style={styles.rowOfData}>
                    <Text style={styles.productName}>طريقة الدفع </Text>
                    <Text style={styles.productDet}>عند الاستلام </Text>
                </View>
                <View style={styles.rowOfData}>
                    <Text style={styles.productName}>طريقة التسليم  </Text>
                    <Text style={styles.productDet}>استلام من المحل  </Text>
                </View>
            </View>

            <View style={{marginTop:20,marginLeft:20}}>
                <Text style={styles.titleLocation}>
                    موقع الاستلام   
                </Text>
            </View>

            {/* sub map */}
            <View style={{height:180,backgroundColor:'#ddd',marginTop:10}}></View>

            {/* btn */}
            <View style={{marginBottom:10}}>
            <TouchableOpacity 
                    onPress={()=>navigation.navigate('done')} 
                    style={styles.btnNext}
                >
                    <Text style={{fontSize: 14,color:'#DBE2EA',fontFamily:'Cairo-Bold'}}>تاكيد</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:15,
    },
    arrowBack:{
        alignItems:'flex-end',
        marginTop:10,
        marginRight:10
    },
    title:{
        fontSize:22,
        color:'#000',
        fontFamily:'Cairo-Bold'
    },
    leftTitle:{
        fontSize:17,
        fontFamily:'Cairo-Bold',
        color:'#0880AE',
        alignSelf:'center',
        marginTop:10
    },
    text:{
        alignItems:'flex-start',
        marginTop:10,
        marginLeft:15
    },
    card:{
        marginHorizontal:15,
        marginTop:20,
        borderBottomWidth:1,
        borderColor:'#ddd',
        paddingBottom:15
    },
    rowOfData:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:5
    },
    productName:{
        fontSize:14,
        color:'#756F86',
        fontFamily:'Cairo-Regular',
        alignItems:'flex-end'
    },
    productDet:{
        fontSize:14,
        color:'#2C2738',
        fontFamily:'Cairo-SemiBold'
    },
    titleLocation:{
        fontSize:12,
        color:'#756F86',
        fontFamily:'Cairo-SemiBold'
    },
    btnNext:{
        
        backgroundColor:'#0880AE',
        height:54,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
        borderRadius:5,
        marginHorizontal:20
    }
})
export default Confirmation;