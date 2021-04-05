import React from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Favorite =()=>{
    return(
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                <Text style={styles.titleHeader}>المفضلة</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.contentWrapper} onPress={()=>{navigation.navigate('details')}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        {/* right view */}
                        <View style={{flexDirection:'row'}}>
                            {/* image */}
                            <Image source={require('../../assets/images/bob.png')} style={styles.image}/>
                            <View style={styles.rightContentView}>
                                <Text style={styles.titleRightContent}>مانتات بابجي</Text>
                                {/* tow btn inside right content view */}
                                <View style={styles.btnInsideRC}>
                                    <View style={styles.btn}>
                                        <Text style={styles.titleBtn}>العاب</Text>
                                    </View>
                                    <View style={styles.btn}>
                                        <Text style={styles.titleBtn}>العاب</Text>
                                    </View>
                                </View>
                                {/* content sub title or text */}
                                <View style={{marginTop:8}}>
                                    <Text style={styles.subTitle}> نواكشوط </Text>
                                </View>
                            </View>
                        </View>

                        {/* left view */}
                        <View style={{marginTop:15}}>
                            {/* price */}
                            <Text style={styles.priceTitle}> MRU 45,000</Text>
                            {/* view deys and favorite */}
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <Text style={styles.time}>منذ 6 ايام</Text>
                                <AntDesign name='heart' size={18} color='#AFAFAF4D'/>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* end  row one */}
                {/* -------------------------- */}
                <View style={styles.contentWrapper}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        {/* right view */}
                        <View style={{flexDirection:'row'}}>
                            {/* image */}
                            <Image source={require('../../assets/images/bob.png')} style={styles.image}/>
                            <View style={styles.rightContentView}>
                                <Text style={styles.titleRightContent}>مانتات بابجي</Text>
                                {/* tow btn inside right content view */}
                                <View style={styles.btnInsideRC}>
                                    <View style={styles.btn}>
                                        <Text style={styles.titleBtn}>العاب</Text>
                                    </View>
                                    <View style={styles.btn}>
                                        <Text style={styles.titleBtn}>العاب</Text>
                                    </View>
                                </View>
                                {/* content sub title or text */}
                                <View style={{marginTop:8}}>
                                    <Text style={styles.subTitle}> نواكشوط </Text>
                                </View>
                            </View>
                        </View>

                        {/* left view */}
                        <View style={{marginTop:15}}>
                            {/* price */}
                            <Text style={styles.priceTitle}> MRU 45,000</Text>
                            {/* view deys and favorite */}
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <Text style={styles.time}>منذ 6 ايام</Text>
                                <AntDesign name='heart' size={18} color='#AFAFAF4D'/>
                            </View>
                        </View>
                    </View>
                </View>
                {/* -------------------------- */}
                {/* -------------------------- */}
                <View style={styles.contentWrapper}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        {/* right view */}
                        <View style={{flexDirection:'row'}}>
                            {/* image */}
                            <Image source={require('../../assets/images/bob.png')} style={styles.image}/>
                            <View style={styles.rightContentView}>
                                <Text style={styles.titleRightContent}>مانتات بابجي</Text>
                                {/* tow btn inside right content view */}
                                <View style={styles.btnInsideRC}>
                                    <View style={styles.btn}>
                                        <Text style={styles.titleBtn}>العاب</Text>
                                    </View>
                                    <View style={styles.btn}>
                                        <Text style={styles.titleBtn}>العاب</Text>
                                    </View>
                                </View>
                                {/* content sub title or text */}
                                <View style={{marginTop:8}}>
                                    <Text style={styles.subTitle}> نواكشوط </Text>
                                </View>
                            </View>
                        </View>

                        {/* left view */}
                        <View style={{marginTop:15}}>
                            {/* price */}
                            <Text style={styles.priceTitle}> MRU 45,000</Text>
                            {/* view deys and favorite */}
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <Text style={styles.time}>منذ 6 ايام</Text>
                                <AntDesign name='heart' size={18} color='#AFAFAF4D'/>
                            </View>
                        </View>
                    </View>
                </View>
                {/* -------------------------- */}

                {/* -------------------------- */}
                <View style={styles.contentWrapper}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        {/* right view */}
                        <View style={{flexDirection:'row'}}>
                            {/* image */}
                            <Image source={require('../../assets/images/bob.png')} style={styles.image}/>
                            <View style={styles.rightContentView}>
                                <Text style={styles.titleRightContent}>مانتات بابجي</Text>
                                {/* tow btn inside right content view */}
                                <View style={styles.btnInsideRC}>
                                    <View style={styles.btn}>
                                        <Text style={styles.titleBtn}>العاب</Text>
                                    </View>
                                    <View style={styles.btn}>
                                        <Text style={styles.titleBtn}>العاب</Text>
                                    </View>
                                </View>
                                {/* content sub title or text */}
                                <View style={{marginTop:8}}>
                                    <Text style={styles.subTitle}> نواكشوط </Text>
                                </View>
                            </View>
                        </View>

                        {/* left view */}
                        <View style={{marginTop:15}}>
                            {/* price */}
                            <Text style={styles.priceTitle}> MRU 45,000</Text>
                            {/* view deys and favorite */}
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <Text style={styles.time}>منذ 6 ايام</Text>
                                <AntDesign name='heart' size={18} color='#AFAFAF4D'/>
                            </View>
                        </View>
                    </View>
                </View>
                {/* -------------------------- */}

                {/* -------------------------- */}
                <View style={styles.contentWrapper}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        {/* right view */}
                        <View style={{flexDirection:'row'}}>
                            {/* image */}
                            <Image source={require('../../assets/images/bob.png')} style={styles.image}/>
                            <View style={styles.rightContentView}>
                                <Text style={styles.titleRightContent}>مانتات بابجي</Text>
                                {/* tow btn inside right content view */}
                                <View style={styles.btnInsideRC}>
                                    <View style={styles.btn}>
                                        <Text style={styles.titleBtn}>العاب</Text>
                                    </View>
                                    <View style={styles.btn}>
                                        <Text style={styles.titleBtn}>العاب</Text>
                                    </View>
                                </View>
                                {/* content sub title or text */}
                                <View style={{marginTop:8}}>
                                    <Text style={styles.subTitle}> نواكشوط </Text>
                                </View>
                            </View>
                        </View>

                        {/* left view */}
                        <View style={{marginTop:15}}>
                            {/* price */}
                            <Text style={styles.priceTitle}> MRU 45,000</Text>
                            {/* view deys and favorite */}
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <Text style={styles.time}>منذ 6 ايام</Text>
                                <AntDesign name='heart' size={18} color='#AFAFAF4D'/>
                            </View>
                        </View>
                    </View>
                </View>
                {/* -------------------------- */}

                {/* -------------------------- */}
                <View style={styles.contentWrapper}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        {/* right view */}
                        <View style={{flexDirection:'row'}}>
                            {/* image */}
                            <Image source={require('../../assets/images/bob.png')} style={styles.image}/>
                            <View style={styles.rightContentView}>
                                <Text style={styles.titleRightContent}>مانتات بابجي</Text>
                                {/* tow btn inside right content view */}
                                <View style={styles.btnInsideRC}>
                                    <View style={styles.btn}>
                                        <Text style={styles.titleBtn}>العاب</Text>
                                    </View>
                                    <View style={styles.btn}>
                                        <Text style={styles.titleBtn}>العاب</Text>
                                    </View>
                                </View>
                                {/* content sub title or text */}
                                <View style={{marginTop:8}}>
                                    <Text style={styles.subTitle}> نواكشوط </Text>
                                </View>
                            </View>
                        </View>

                        {/* left view */}
                        <View style={{marginTop:15}}>
                            {/* price */}
                            <Text style={styles.priceTitle}> MRU 45,000</Text>
                            {/* view deys and favorite */}
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <Text style={styles.time}>منذ 6 ايام</Text>
                                <AntDesign name='heart' size={18} color='#AFAFAF4D'/>
                            </View>
                        </View>
                    </View>
                </View>
                {/* -------------------------- */}
                {/* end  row one */}
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
    header:{
        height:45,
        width:'100%',
        backgroundColor:'#fff',
        justifyContent:'center'
      },
      titleHeader:{
        fontSize:15,
        color:'#2C2738',
        fontFamily:'Cairo-Bold',
        alignSelf:'center'
      },
      contentWrapper:{
          paddingVertical:2,
          paddingHorizontal:2,
          marginBottom:20
      },
      image:{
        width: 104,
        height:104
      },
      rightContentView:{
        paddingHorizontal:15,
        marginTop:2
      },
      titleRightContent:{
        fontSize:16,
        fontFamily:'Cairo-Bold'
      },
      btnInsideRC:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5
      },
      btn:{
        width:44,
        height:25,
        backgroundColor:'#756F86',justifyContent:'center',alignItems:'center',borderRadius:5
      },
      titleBtn:{
        fontSize:11,
        color:'#fff',
        fontFamily:'Cairo-Regular'
      },
      subTitle:{
        color:'#756F86',
        fontSize:11,
        fontFamily:'Cairo-Bold'
      },
      priceTitle:{
        fontFamily:'Cairo-Bold',
        fontSize:16,
        color:'#0880AE'
      },
      time:{
        fontSize:10,
        color:'#756F86',
        fontFamily:'Cairo-Regular' 
      }
})
export default Favorite;