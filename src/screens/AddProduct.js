import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput,Image,ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const AddProduct =({navigation})=>{
    return(
        <View style={styles.container}>
            {/* arrow back */}
           <View style={styles.arrowBack}>
                <TouchableOpacity 
                    onPress={()=>{navigation.navigate('container')}}
                    style={styles.arrowBackAction}>
                    <Feather size={20} name='arrow-left' color='#000' />
                </TouchableOpacity>
           </View>
           {/* title */}
           <View style={styles.titleContent}>
               <Text style={styles.title}>إضافة منتج جديد</Text>
           </View>
           {/* input */}
           <ScrollView style={{flex:1,marginTop:10}}>
                <TextInput
                    placeholder='اسم المنتج'
                    placeholderTextColor='#756F86'
                    style={styles.input}
                    keyboardType='default'
                />
                <TextInput
                    placeholder='القسم '
                    placeholderTextColor='#756F86'
                    style={styles.input}
                    keyboardType='default'
                />
                <TextInput
                    placeholder='العنوان '
                    placeholderTextColor='#756F86'
                    style={styles.input}
                    keyboardType='default'
                />
                <TextInput
                    placeholder='الحجم '
                    placeholderTextColor='#756F86'
                    style={styles.input}
                    keyboardType='numbers-and-punctuation'
                />
                <TextInput
                    placeholder='الوزن '
                    placeholderTextColor='#756F86'
                    style={styles.input}
                    keyboardType='number-pad'
                />
                {/* payment methods */}
                <View style={[styles.chiledContent,{marginTop:10,paddingVertical:10}]}>
                    <View style={styles.row}>
                        <View style={{marginTop:5,marginLeft:2}}>
                            <FontAwesome name='credit-card-alt' size={30} color="#0880AE"/>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={[styles.name,{fontSize:14,color:'#2C2738'}]}>طريقة الدفع</Text>
                            <Text style={[styles.subName,{fontSize:10,marginTop:-3}]}>احتر طريقة الدفع المناسبة لك</Text>
                        </View>
                    </View>
                     {/* chothing  */}
                     <View style={styles.paymentSelect}>
                            <View style={styles.cardPayment}>
                                <TouchableOpacity style={styles.box}></TouchableOpacity>
                                <Text style={styles.titleBox}>اون لاين</Text>
                            </View>
                            <View style={styles.cardPayment}>
                                <TouchableOpacity style={styles.box}></TouchableOpacity>
                                <Text style={styles.titleBox}>عند الاستلام </Text>
                            </View>
                        </View>
                </View>
                <View style={[styles.chiledContent,{marginTop:10,paddingVertical:10}]}>
                    <View style={styles.row}>
                        <View style={{marginTop:5,marginLeft:2}}>
                            <Image source={require('../../assets/images/car.png')} style={{width: 40,height:40,resizeMode:'contain'}}/>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={[styles.name,{fontSize:14,color:'#2C2738'}]}>طريقة الدفع</Text>
                            <Text style={[styles.subName,{fontSize:10,marginTop:-3}]}>احتر طريقة الدفع المناسبة لك</Text>
                        </View>
                    </View>  
                    <View style={[styles.paymentSelect,{marginTop:-5,marginRight:10}]}>
                            <View style={styles.cardPayment}>
                                <TouchableOpacity style={styles.box}></TouchableOpacity>
                                <Text style={styles.titleBox}>توصيل </Text>
                            </View>
                            <View style={styles.cardPayment}>
                                <TouchableOpacity style={styles.box}></TouchableOpacity>
                                <Text style={styles.titleBox}>استلام من المحل  </Text>
                            </View>
                        </View>    
                </View>

                {/* btn next view */}
                <TouchableOpacity 
                        onPress={()=>navigation.navigate('login')} 
                        style={styles.btnNext}
                    >
                        <Text style={{fontSize: 14,color:'#DBE2EA',fontFamily:'Cairo-Bold'}}>حفظ</Text>
                    </TouchableOpacity>
           </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:15
    },
    arrowBack:{
        marginTop:10,
        alignItems:'flex-end',
    },
    titleContent:{
        alignItems:'flex-start',
        marginTop:10,
    },
    title:{
        fontSize:22,
        fontFamily:'Cairo-Bold'
    },
    input:{
        backgroundColor:'#DBE2EA',
        paddingHorizontal:20,
        fontSize:14,
        fontFamily:'Cairo-SemiBold',
        color:'#756F86',
        borderRadius:5,
        marginBottom:10,
        height:50
    },
    chiledContent:{
        width: '100%',
        backgroundColor:'#DBE2EA',
        borderRadius:5
    },
    rowOne:{
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'row'
    },
    row:{
        paddingHorizontal:10,
        flexDirection:'row',
        marginBottom:11
    },
    contentIcon:{
        width: 40,
        height:40,
        backgroundColor:'#2188AF',
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center'
    },
    name:{
        fontFamily:'Cairo-SemiBold',
        color:'#756F86',
    },
    subName:{
        fontFamily:'Cairo-SemiBold',
        color:'#2C2738'
    },
    btn:{
        backgroundColor:'#0880AE',
        width: '100%',
        height:54,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
        borderRadius:5
    },
    btnNext:{
        backgroundColor:'#0880AE',
        width: '100%',
        height:54,
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
        marginBottom:30,
        borderRadius:5
    },
    paymentSelect:{
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:40
    },
    cardPayment:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    box:{
        width:18,
        height:18,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    titleBox:{
        marginLeft:5,
        fontSize:13,
        fontFamily:'Cairo-Regular',
        color:'#000000CC'
    }
})

export default AddProduct;