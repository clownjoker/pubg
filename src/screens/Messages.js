import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const Messages=({navigation})=>{
    return(
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                <Text style={{color:'#fff'}}>.</Text>
                <Text style={styles.titleHeader}>الرسائل</Text>
                <TouchableOpacity 
                    onPress={()=>{navigation.navigate('settings')}}
                    style={styles.arrowBackAction}>
                    <Feather size={22} name='arrow-left' color='#2C2738' />
                </TouchableOpacity>
            </View>
            <ScrollView>
                {/* content msg */}
                <TouchableOpacity style={[styles.cardBtn,{marginTop:10}]} onPress={()=>{navigation.navigate('msg')}}>
                {/* right */}
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/images/bob.png')} style={styles.image}/>
                        <View style={{marginLeft:15}}>
                            <Text style={[styles.title,{color:'#2C2738'}]}>مانتات بابجي</Text>
                            <Text style={[styles.title,{color:'#756F86',fontSize:12}]}>نواكشوط</Text>
                        </View>
                    </View>
                    {/* lift */}
                    <View style={styles.leftContent}>
                        <View style={styles.numberOfMsg}>
                            {/* number of message */}
                            <Text style={{color:'#fff',fontFamily:'Cairo-Bold'}}>
                                2
                            </Text>
                        </View>
                        {/* day and time */}
                        <Text style={styles.time}>
                            اليوم
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* content msg */}
                <TouchableOpacity style={[styles.cardBtn,{marginTop:10}]} onPress={()=>{navigation.navigate('msg')}}>
                {/* right */}
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/images/bob.png')} style={styles.image}/>
                        <View style={{marginLeft:15}}>
                            <Text style={[styles.title,{color:'#2C2738'}]}>مانتات بابجي</Text>
                            <Text style={[styles.title,{color:'#756F86',fontSize:12}]}>نواكشوط</Text>
                        </View>
                    </View>
                    {/* lift */}
                    <View style={styles.leftContent}>
                        <View style={styles.numberOfMsg}>
                            {/* number of message */}
                            <Text style={{color:'#fff',fontFamily:'Cairo-Bold'}}>
                                1
                            </Text>
                        </View>
                        {/* day and time */}
                        <Text style={styles.time}>
                            امس
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* content msg */}
                <TouchableOpacity style={[styles.cardBtn,{marginTop:10}]} onPress={()=>{navigation.navigate('msg')}}>
                {/* right */}
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/images/bob.png')} style={styles.image}/>
                        <View style={{marginLeft:15}}>
                            <Text style={[styles.title,{color:'#2C2738'}]}>مانتات بابجي</Text>
                            <Text style={[styles.title,{color:'#756F86',fontSize:12}]}>نواكشوط</Text>
                        </View>
                    </View>
                    {/* lift */}
                    <View style={styles.leftContent}>
                        <View style={styles.numberOfMsg}>
                            {/* number of message */}
                            <Text style={{color:'#fff',fontFamily:'Cairo-Bold'}}>
                                5
                            </Text>
                        </View>
                        {/* day and time */}
                        <Text style={styles.time}>
                        10/3/2021
                        </Text>
                    </View>
                </TouchableOpacity>{/* content msg */}
                <TouchableOpacity style={[styles.cardBtn,{marginTop:10}]} onPress={()=>{navigation.navigate('msg')}}>
                {/* right */}
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/images/bob.png')} style={styles.image}/>
                        <View style={{marginLeft:15}}>
                            <Text style={[styles.title,{color:'#2C2738'}]}>مانتات بابجي</Text>
                            <Text style={[styles.title,{color:'#756F86',fontSize:12}]}>نواكشوط</Text>
                        </View>
                    </View>
                    {/* lift */}
                    <View style={styles.leftContent}>
                        <View style={styles.numberOfMsg}>
                            {/* number of message */}
                            <Text style={{color:'#fff',fontFamily:'Cairo-Bold'}}>
                                2
                            </Text>
                        </View>
                        {/* day and time */}
                        <Text style={styles.time}>
                        10/3/2021
                        </Text>
                    </View>
                </TouchableOpacity>{/* content msg */}
                <TouchableOpacity style={[styles.cardBtn,{marginTop:10}]} onPress={()=>{navigation.navigate('msg')}}>
                {/* right */}
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/images/bob.png')} style={styles.image}/>
                        <View style={{marginLeft:15}}>
                            <Text style={[styles.title,{color:'#2C2738'}]}>مانتات بابجي</Text>
                            <Text style={[styles.title,{color:'#756F86',fontSize:12}]}>نواكشوط</Text>
                        </View>
                    </View>
                    {/* lift */}
                    <View style={styles.leftContent}>
                        <View style={styles.numberOfMsg}>
                            {/* number of message */}
                            <Text style={{color:'#fff',fontFamily:'Cairo-Bold'}}>
                                2
                            </Text>
                        </View>
                        {/* day and time */}
                        <Text style={styles.time}>
                            اليوم
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* content msg */}
                <TouchableOpacity style={[styles.cardBtn,{marginTop:10}]} onPress={()=>{navigation.navigate('msg')}}>
                {/* right */}
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/images/bob.png')} style={styles.image}/>
                        <View style={{marginLeft:15}}>
                            <Text style={[styles.title,{color:'#2C2738'}]}>مانتات بابجي</Text>
                            <Text style={[styles.title,{color:'#756F86',fontSize:12}]}>نواكشوط</Text>
                        </View>
                    </View>
                    {/* lift */}
                    <View style={styles.leftContent}>
                        <View style={styles.numberOfMsg}>
                            {/* number of message */}
                            <Text style={{color:'#fff',fontFamily:'Cairo-Bold'}}>
                                2
                            </Text>
                        </View>
                        {/* day and time */}
                        <Text style={styles.time}>
                            اليوم
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* content msg */}
                <TouchableOpacity style={[styles.cardBtn,{marginTop:10}]} onPress={()=>{navigation.navigate('msg')}}>
                {/* right */}
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/images/bob.png')} style={styles.image}/>
                        <View style={{marginLeft:15}}>
                            <Text style={[styles.title,{color:'#2C2738'}]}>مانتات بابجي</Text>
                            <Text style={[styles.title,{color:'#756F86',fontSize:12}]}>نواكشوط</Text>
                        </View>
                    </View>
                    {/* lift */}
                    <View style={styles.leftContent}>
                        <View style={styles.numberOfMsg}>
                            {/* number of message */}
                            <Text style={{color:'#fff',fontFamily:'Cairo-Bold'}}>
                                2
                            </Text>
                        </View>
                        {/* day and time */}
                        <Text style={styles.time}>
                        10/3/2021
                        </Text>
                    </View>
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
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        height: 54,
        alignItems:'center'
    },
    titleHeader:{
        fontSize:15,
        color:'#2C2738',
        fontFamily:'Cairo-Regular'
    },
    cardBtn:{
        flexDirection:'row',
        paddingTop:5,
        paddingBottom:20,
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:'#ddd'
    },
    image:{
        width: 62,
        height: 62
    
    },
    title:{
        fontSize:16,
        fontFamily:'Cairo-SemiBold'
    },
    leftContent:{
        alignItems:'center',
        width: 60,
        justifyContent:'center'
    },
    numberOfMsg:{
        width: 25,
        height:20,
        borderRadius:15,
        backgroundColor:'#FF6969',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#FF696967',
        shadowRadius:10,
        shadowOpacity:0.6,
        elevation:8,
        shadowOffset:{width: 0,height: 4}
    },
    time:{
        marginTop:10,
        fontSize:10,
        color:'#756F86',
        fontFamily:'Cairo-Regular',
        alignSelf:'center'
    }
})
export default Messages;