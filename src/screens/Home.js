import React from 'react';
import {View ,Text, StyleSheet,ScrollView,TouchableOpacity,ImageBackground} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

class Main extends React.Component{
    render(){
        return(
            <View style={styles.container}>
              {/* header */}
              <View style={styles.header}>
                <FontAwesome  size={20} name='search' color='#000'/>
                <Text style={styles.titleHeader}>التصنيفات</Text>
                <Feather size={20} name='filter' color='#000'/>
              </View>
              {/* card */}
              <ScrollView showsVerticalScrollIndicator={false} style={{paddingVertical:5}}>
                <View style={{width:'100%'}}>
                  <View style={styles.cardWrapperPearnet}>

                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('annotations')} style={styles.card}>
                      <View style={styles.cardTitleWrapper}>
                        <Text style={styles.title}>مواتر </Text>
                        <Text style={styles.text}>مواتر مستعملة وجديدة موديل السنة قديم</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>
                      <View style={styles.cardTitleWrapper}>
                        <Text style={styles.title}>سيارات </Text>
                        <Text style={styles.text}>مواتر مستعملة وجديدة موديل السنة قديم</Text>
                      </View>
                    </TouchableOpacity>

                  </View>


                  <View style={styles.cardWrapperPearnet}>

                    <View style={styles.card}>
                      <View style={styles.cardTitleWrapper}>
                        <Text style={styles.title}>هاتف </Text>
                        <Text style={styles.text}>مواتر مستعملة وجديدة موديل السنة قديم</Text>
                    </View>
                  </View>
                    <View style={styles.card}>
                      <View style={styles.cardTitleWrapper}>
                        <Text style={styles.title}>شحن العاب </Text>
                        <Text style={styles.text}>مواتر مستعملة وجديدة موديل السنة قديم</Text>
                      </View>
                    </View>
                  </View>


                  <View style={styles.cardWrapperPearnet}>
                    <View style={styles.card}>
                        <View style={styles.cardTitleWrapper}>
                          <Text style={styles.title}>هاتف </Text>
                          <Text style={styles.text}>مواتر مستعملة وجديدة موديل السنة قديم</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardTitleWrapper}>
                          <Text style={styles.title}>شحن العاب </Text>
                          <Text style={styles.text}>مواتر مستعملة وجديدة موديل السنة قديم</Text>
                        </View>
                    </View>
                </View>
           
              </View>    
              </ScrollView>
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
      header:{
        height:45,
        width:'100%',
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      },
      titleHeader:{
        fontSize:15,
        color:'#2C2738',
        fontFamily:'Cairo-Bold'
      },
      cardWrapperPearnet:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:5
      },
      card:{
        backgroundColor:'#000',
        width:'48%',
        height:216,
        borderRadius:6,
        justifyContent:'flex-end',
        // opacity:0.40
      },
      cardTitleWrapper:{
        alignItems:'flex-start',
        marginLeft:10,
        paddingBottom:10
      },
      title:{
        color:'#FFFFFF',
        fontSize:14,
        fontFamily:'Cairo-SemiBold'
      },
      text:{
        color:'#FFFFFF',
        fontSize:8,
        fontFamily:'Cairo-Regular',
        marginTop:3,
        width:'70%'
      }
})

export default Main;