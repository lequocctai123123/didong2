import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useEffect,useState} from 'react';
import { ScrollView,Button,StyleSheet,SafeAreaView,SectionList,Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DATA = [
  {
    title: "Thủ môn",
    data: ["13 Zack Steffen", "31 Ederson", "33 Scott Carson"]
  },
  {
    title: "Hậu vệ",
    data: ["02 Kyle Walker", "05 John Stones", "06 Nathan Aké","11 Oleksandr Zinchenko"]
  },
  {
    title: "Tiền vệ",
    data: ["10 Jack Grealish", "16 Rodri", "26 Fernandinho" ,"47 Phil Foden"]
  },
  {
    title: "Tiền đạo",
    data: ["09 Gabriel Jesus", "07 Raheem Sterling","26 Riyad Mahrez"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <View>
        <Text style={{padding:10,textAlign:'center',fontSize:25,fontWeight:'bold'}}>TRANG CHỦ</Text>
        <View style={{marginHorizontal:20,flexDirection:'row',justifyContent:'flex-end'}}>
          <Button
            title="Tiếp theo >"
            onPress={() => navigation.navigate('Details')}
            style={{}}
          />
        </View>
        <Image style={{width:350,height:250,borderRadius:10,marginHorizontal:30,marginVertical:10}} source={require('./img/jackgrealish_bfdo.jpg')}></Image>
        <Text style={{marginLeft:30,fontStyle:'italic'}} >Bản tin mới</Text>
        <Text style={{marginHorizontal:30,fontSize:30,fontWeight:'bold'}}>Jack Grealish : Bom xịt 100 củ , Thảm họa tại Santiago Bernabeu </Text>
        <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
          <Image style={{width:150,height:100,borderRadius:5,marginHorizontal:30,marginVertical:10}} source={require('./img/mcvsreal.webp')}></Image>
          <Text style={{maxWidth:180,fontWeight:'bold',fontSize:15}}>Nỗi đau trước Real khiến Pep ngó lơ phòng thay đồ Man City</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
          <Image style={{width:150,height:100,borderRadius:5,marginHorizontal:30,marginVertical:10}} source={require('./img/vodich.jpg')}></Image>
          <Text style={{maxWidth:180,fontWeight:'bold',fontSize:15}}>Nhận định Man City - Newcastle: Chạm tay vào chức vô địch</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
          <Image style={{width:150,height:100,borderRadius:5,marginHorizontal:30,marginVertical:10}} source={require('./img/pep.jpg')}></Image>
          <Text style={{maxWidth:180,fontWeight:'bold',fontSize:15}}>Pep Guardiola rời Man City năm 2023</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{}}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',
    padding:10}}>
        <Image source={require('./img/logo.png') } style={{marginRight:10,width: 60, height: 60}}/>
        <Text style={{fontSize:25,fontWeight:'bold'}}>DANH SÁCH CẦU THỦ MC</Text>
      </View>
      <View style={{marginHorizontal:20,flexDirection:'row',justifyContent:'space-between'}} >
        <Button stlye={{flex:1}} title="< Quay lại " onPress={() => navigation.goBack()} />
        <Button style={{flex:1}} title="Tiếp theo >" onPress={() => navigation.navigate('Details1')} />
      </View>
      <SafeAreaView style={styles.container}>
        <View>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

function DetailsScreen1({ navigation }) {
  return (
    <View style={{}}>
      <Text style={{padding:10,textAlign:'center',fontSize:25,fontWeight:'bold'}}>NHỮNG DANH HIỆU CỦA MC</Text>
      <View style={{marginHorizontal:20,flexDirection:'row',justifyContent:'flex-start'}}>
        <Button title="< Quay lại " onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(()=>{
    alert('Chào mừng bạn đến với App MCFC ');
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Details1" component={DetailsScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    height:500,
    paddingTop:30,
    paddingHorizontal:30,
  },
  item: {
    backgroundColor: "#1E90FF",
    padding: 20,
    marginVertical: 8,
    borderRadius:10
  },
  header: {
    fontSize: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 15,
    color:'white'
  },
});
