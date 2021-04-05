import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const Notifications =()=>{
    return(
        <View style={styles.container}>
            {/* header */}
           <View style={styles.header}>
               <Text style={styles.titleHeader}>التنبيهات</Text>
           </View>
            {/* card one  */}
            <View style={styles.card1}>
               <View style={styles.subCard}>
                    <View style={styles.rightInsideCard}>
                        <View style={styles.viewImage}>
                            <Image source={require('../../assets/images/right.png')} style={{width: 20,height:20}}/>
                        </View>
                    </View>
                    <Text style={styles.title}>
                        تم استلام طلبك بنجاح
                    </Text>
                </View>
                <Text style={styles.time}>الان</Text>
            </View>

            {/* card tow */}
            <View style={styles.card2}>
               <View style={styles.subCard}>
                    <View style={[styles.rightInsideCard,{backgroundColor:'#F9595A',borderColor:'#F9595A'}]}>
                        <Image source={require('../../assets/images/img1.png')} style={{width: 35,height:35}}/>
                    </View>
                    <Text style={styles.title}>
                        لم يتم استلام طلبك
                    </Text>
               </View>
                <Text style={styles.time}>
                    قبل ساعة
                </Text>
            </View>

            {/* card three */}
            <View style={styles.card3}>
               <View style={styles.subCard}>
                    <View style={[styles.rightInsideCard,{backgroundColor:'#FCC283',borderColor:'#EBB171'}]}>
                        <Image source={require('../../assets/images/img1.png')} style={{width: 35,height:35}}/>
                    </View>
                    <Text style={styles.title}>
                        هنالك مشكلة في استلام الطلب
                    </Text>
               </View>
                <Text style={styles.time}>
                    قبل 10ساعات
                </Text>
            </View>
            
            {/* card four */}
            <View style={styles.card4}>
               <View style={styles.subCard}>
                    <View style={[styles.rightInsideCard,{backgroundColor:'#4B98F9',borderColor:'#3881DE'}]}>
                        <Image source={require('../../assets/images/img2.png')} style={{width: 30,height:30,resizeMode:'contain'}}/>
                    </View>
                    <Text style={styles.title}>
                        سوف يتم تفعيل الاشتراكات
                    </Text>
               </View>
                <Text style={styles.time}>
                    قبل 1يوم
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    card1:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: '100%',
        height:60,
        borderRadius:7,
        borderColor:'#6DDDCF',
        borderWidth:2,
        alignItems:'center',
        marginTop:20,
        marginVertical:20,
        backgroundColor:'#F8FFFE'
    },
    card2:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: '100%',
        height:60,
        borderRadius:5,
        borderColor:'#F9595A',
        borderWidth:2,
        alignItems:'center',
        marginBottom:20,
        backgroundColor:'#FFE8E8'
    },
    card3:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: '100%',
        height:60,
        borderRadius:5,
        borderColor:'#EBB171',
        borderWidth:2,
        alignItems:'center',
        marginBottom:20,
        backgroundColor:'#FFF2E3'
    },
    card4:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: '100%',
        // height:60,
        borderRadius:5,
        borderColor:'#3881DE',
        borderWidth:2,
        alignItems:'center',
        backgroundColor:'#EDF5FF'
    },
    subCard:{
        flexDirection:'row',
        alignItems:'center'
    },
    rightInsideCard:{
        width:53,
        height:56,
        backgroundColor:'#7BF7E8',
        borderColor:'#6DDDCF',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        alignItems:'center',
        justifyContent:'center',
        borderRightWidth:2,
        marginLeft:-1
    },
    viewImage:{
        width: 30,
        height:30,
        backgroundColor:'#fff',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        marginLeft:20,
        fontSize:12,
        color:'#818181',
        fontFamily:'Cairo-Regular'
    },
    time:{
        marginRight:20,
        fontSize:12,
        color:'#818181',
        fontFamily:'Cairo-Regular'
    }
})
export default Notifications;