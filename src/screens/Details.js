import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity, ScrollView,CheckBox,ViewGroup} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Details =({navigation})=>{
    const [isSelected, setSelection] = useState(false);
    return(
        <View style={styles.container}>
            {/* top image and arrow back */}
            <View style={styles.imageWrapper}>
                <Image source={require('../../assets/images/bob2.png')} style={styles.image}/>
                <TouchableOpacity 
                    onPress={()=>{navigation.navigate('annotations')}}
                    style={styles.arrowBackAction}>
                    <Feather size={20} name='arrow-left' color='#fff' />
                </TouchableOpacity>
            </View>

            {/* start scrol view   */}
            <ScrollView>
                <View style={styles.lefeAndRightTitleContent}>
                    <View>
                        <Text style={styles.rightTitle}>مانتات بابجي</Text>
                        <Text style={styles.subRightTitle}> مانتات بابجي</Text>
                    </View>
                    <Text style={styles.leftTitle}>MRU 45,000</Text>
                </View>

                {/* text under the right && left title */}
                <View style={styles.textContent}>
                    <Text style={{color:'#756F86',fontFamily:'Cairo-Regular',fontSize:14}}>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور</Text>
                </View>

                {/* favorite text  && icon heart */}
                <View style={styles.favoriteContent}>
                    <AntDesign name='heart' size={15} color='#AFAFAF4D' style={{marginRight:10}}/>
                    <Text style={{fontSize:11,color:'#756F86',fontFamily:'Cairo-Regular',marginTop:-3}}>وضع في المفضلة</Text>
                </View>
                
                {/* content name && email && phone && location */}
                <View style={styles.contentData}>
                    {/* chiled content data */}
                    <View style={styles.chiledContent}>
                        {/* row child content one */}
                        <View style={styles.rowOne}>
                            <View style={styles.contentIcon}>
                                <FontAwesome5 name='user-alt' size={15} color='#fff'/>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Text style={[styles.name,{fontSize:10}]}> الاسم</Text>
                                <Text style={[styles.subName,{fontSize:14}]}>محمد محمود</Text>
                            </View>
                        </View>

                        {/* row tow */}
                        <View style={styles.row}>
                            <View style={styles.contentIcon}>
                                <Feather name='mail' size={15} color='#fff'/>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Text style={[styles.name,{fontSize:10}]}> البريد الإلكتروني</Text>
                                <Text style={[styles.subName,{fontSize:14}]}>medhamedi65@gmail.com</Text>
                            </View>
                        </View>

                        {/* row three */}
                        <View style={styles.row}>
                            <View style={styles.contentIcon}>
                                <FontAwesome5 name='phone-alt' size={15} color='#fff'/>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Text style={[styles.name,{fontSize:10}]}> الهاتف </Text>
                                <Text style={[styles.subName,{fontSize:14}]}>41443842725</Text>
                            </View>
                        </View>

                        {/* row four */}
                        <View style={styles.row}>
                            <View style={styles.contentIcon}>
                                <Ionicons name='md-location-sharp' size={15} color='#fff'/>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Text style={[styles.name,{fontSize:10}]}> المكان </Text>
                                <Text style={[styles.subName,{fontSize:14}]}>نواكشوط</Text>
                            </View>
                        </View>
                    </View>

                    {/* payment methods */}
                    <View style={[styles.chiledContent,{marginTop:15,paddingVertical:10}]}>
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


                    {/* Delivery method */}
                    <View style={[styles.chiledContent,{marginTop:15,paddingVertical:10}]}>
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
                        style={{backgroundColor:'#0880AE',
                        width: '100%',
                        height:54,
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:50,
                        borderRadius:5}}
                    >
                        <Text style={{fontSize: 14,color:'#DBE2EA',fontFamily:'Cairo-Bold'}}>شراء</Text>
                    </TouchableOpacity>
                </View> 
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageWrapper:{
       width:'100%' ,
       alignItems:'flex-end',
    },
    arrowBackAction:{
        position:'absolute',
        marginTop:15,
        paddingRight:15
    },
    image:{
        width:'100%',
        height:200,
        resizeMode:'cover',
        position:'relative'
    },
    lefeAndRightTitleContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        marginTop:15
    },
    rightTitle:{
        fontSize:19,
        color:'#2C2738',
        fontFamily:'Cairo-Bold'
    },
    subRightTitle:{
        fontSize:11,
        fontFamily:'Cairo-SemiBold',
        color:'#756F86',
        alignItems:'flex-end'
    },
    leftTitle:{
        fontSize:17,
        fontFamily:'Cairo-Bold',
        color:'#0880AE'
    },
    textContent:{
        paddingHorizontal:15,
        marginTop:10
    },
    favoriteContent:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingHorizontal:15,
        marginTop:10
    },
    contentData:{
        paddingHorizontal:15,
        paddingVertical:5,
        marginTop:10
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
export default Details;