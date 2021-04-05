import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

class SendMsgToAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      message: '',
    };
  }

  //

  render() {
    return (
      <View style={styles.container}>
        {/* header */}
        <View style={styles.headerWrapper}>
          <Text style={{color: '#fff'}}>.</Text>
          <Text style={styles.titleHeader}>مراسلة </Text>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('messages')}} >
                <Feather name="arrow-left" size={23} color="#646464" />
          </TouchableOpacity>
        </View>

        
        {/* content of message */}
        <ScrollView style={{flex:1,paddingHorizontal:15,marginBottom:10}}>
          <View style={{marginTop:20}}>
            <Text style={styles.time}>
              1مارس , 8:20 ص
            </Text>
          </View>
          {/* msg1 */}
          <View style={{alignItems:'flex-end',marginTop:10}}>
            <View style={{width: '75%',backgroundColor:'#0880AE',paddingHorizontal:10,paddingVertical:10,borderRadius:10}}>
                <Text style={{fontSize:12,color:'#fff',fontFamily:'Cairo-Regular',alignSelf:'center'}}>
                خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠
                </Text>
            </View>
          </View>
          {/* msg2*/}
          <View style={{alignItems:'flex-start',marginTop:10}}>
            <View style={{width: '75%',backgroundColor:'#756F86',paddingHorizontal:10,paddingVertical:10,borderRadius:10}}>
                <Text style={{fontSize:12,color:'#fff',fontFamily:'Cairo-Regular',alignSelf:'center'}}>
                بحق نهاية تكاليف بريطانيا، ما, إلى أن النزاع الألماني.
                </Text>
            </View>
          </View>

          <View style={{marginTop:20}}>
            <Text style={styles.time}>
              1مارس , 8:20 ص
            </Text>
          </View>

          {/* msg1 */}
          <View style={{alignItems:'flex-end',marginTop:10}}>
            <View style={{width: '75%',backgroundColor:'#0880AE',paddingHorizontal:10,paddingVertical:10,borderRadius:10}}>
                <Text style={{fontSize:12,color:'#fff',fontFamily:'Cairo-Regular',alignSelf:'center'}}>
                خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان الصين وتنامت حين ٣٠
                </Text>
            </View>
          </View>
          
        </ScrollView>

        {/* input msg */}
        <View style={styles.msgWrapper}>
          
            <TouchableOpacity style={{marginLeft: 10, paddingRight: 5}}>
                <Entypo name="emoji-happy" size={22} color="#756F86" />
            </TouchableOpacity>
          <TextInput
            placeholder="رسالة"
            style={styles.inputMsg}
            placeholderTextColor="#CAD1E5"
            multiline
            onChangeText={(message) => this.setState({message})}
          />
          {this.state.message == '' ? (
            <>
              <TouchableOpacity style={styles.contentIcon}>
                <Entypo name="mic" size={22} color="#756F86" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.contentIcon, {marginRight: 5}]}>
                <Feather name="paperclip" size={22} color="#756F86" />
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={[
                styles.contentIcon,
                {justifyContent: 'center', alignItems: 'center'},
              ]}>
              <Image
                source={require('../../assets/images/send.png')}
                style={{width: 26, height: 22}}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  titleHeader: {
    fontFamily: 'Cairo-SemiBold',
    color: '#646464',
    fontSize: 16,
  },
  
  msgWrapper: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 5,
    borderWidth:1,
    borderColor:'#CAD1E5',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentIcon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputMsg: {
    fontFamily: 'Cairo-Regular',
    fontSize: 15,
    color: '#2C2738',
    flex: 1,
    paddingRight: 10,
  },
  time:{
    alignSelf:'center',
    color:'#756F86',
    fontFamily:'Cairo-Regular',
    fontSize:12
  }
});


export default SendMsgToAdmin;