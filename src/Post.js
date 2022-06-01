import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
import Fugu from '../photos2';


const Avatar = (props) => (
    <Image
      style={styles.avatar}
      source={{ uri: props.url }}
    />
  );
  
  const Heading = (props) => (
    <Text style={styles.heading}>
      {props.children}
    </Text>
  );
  
  const Title = (props) => (
    <Text style={styles.title}>
      {props.children}
    </Text>
  );


  const Card = (props) => (
    <SafeAreaView>
    <View style={CardStyles.card}>
      <Avatar url={props.avatar}/>
      
    </View>
    <View style={CardStyles.title}>
        <Title>{props.name}</Title>
      </View>
    </SafeAreaView>
    
  );

  const CardStyles = StyleSheet.create({
    card: {
      width: 68,
      height: 68,
      backgroundColor: 'white',
      borderWidth: 1.8,
      borderRadius: 100,
      borderColor: '#c13584',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
      paddingTop: 4,
      paddingLeft: 12,
    },
  });


  const Post = (props) => (
    <View style={PostStyles.card}>
      
    </View>
  );

 


  const PostStyles = StyleSheet.create({
    card: {
      width: '100%',
      height: 300,
      padding: 12,
      marginRight: 16,
      borderWidth: 1,
      borderColor: '#E7E3EB',
      borderRadius: 12,
      backgroundColor: '#FFFFFF'
    },
    layout: {
      marginHorizontal: 24,
      flexDirection: 'row',
      marginVertical: 8,
    },
    image: {
      borderRadius: 12,
      flex: 1,
    },
    content: {
      flex: 2,
    },
    description: {
      fontSize: 12,
      marginTop: 4,
      color: '#280DSF',
    },
  });
  




  const styles = StyleSheet.create({
    layout: {
      flex: 1,
      justifyContent: "center",
      padding: 8,
    },
    title: {
      margin: 24,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    avatar: {
      height: '92%',
      width: '92%',
      borderRadius: 100,
      resizeMode: 'cover',
  
    },
    heading: {
      fontSize: 20,
      fontWeight: '600',
      paddingTop: 20,
      paddingBottom: 12,
      paddingHorizontal: 24, 
      color: '#080608',
    },
    title: {
      color: '#280D5F',
      fontSize: 12,
      fontWeight: '600',
      textTransform: 'uppercase',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
    
  });
  