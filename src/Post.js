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
  

  const Gaga = () => {
    return (
      
      <View style={styles.layout}>
        
        <ScrollView>
      <ScrollView horizontal>
        {
          data.woofs.map(woof => (
            <Card key={woof.id} name={woof.name} avatar={woof.avatar} />
          ))
        }
      </ScrollView>
      <ScrollView>
        {
          data.posts.map(post => (
            <Post key={post.id} image={post.image} title={post.title} description={post.description} />
          ))
        }
      
  
        </ScrollView>
    </ScrollView>
      </View>
      
    )
  }


  export default Gaga;


const data = {
    woofs: [
      {
        id: 'woof-1', 
        name: 'Rexio', 
        avatar: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=648&q=80',
        caretaker: 'Victor Grabarczyk',
        source: 'https://unsplash.com/photos/x5oPmHmY3kQ',
      },
      {
        id: 'woof-2', 
        name: 'Ball', 
        avatar: 'https://images.unsplash.com/photo-1585584114963-503344a119b0?auto=format&fit=crop&h=64&q=80',
        caretaker: 'Tatiana Rodriguez',
        source: 'https://unsplash.com/photos/J40C1k6Fut0',
      },
      {
        id: 'woof-3', 
        name: 'Happy', 
        avatar: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&h=64&q=80',
        caretaker: 'Marliese Streefland',
        source: 'https://unsplash.com/photos/2l0CWTpcChI',
      },
      {
        id: 'woof-4',
        name: 'Fluffy',
        avatar: 'https://images.unsplash.com/photo-1554956615-1ba6dc39921b?auto=format&fit=crop&h=64&q=80',
        caretaker: 'Nick Fewings',
        source: 'https://unsplash.com/photos/rMKXLAIa2OY',
      },
      {
        id: 'woof-5',
        name: 'Spirit',
        avatar: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?auto=format&fit=crop&h=64&q=80',
        caretaker: 'Jamie Street',
        source: 'https://unsplash.com/photos/uNNCs5kL70Q',
      },
      
  
  
    ],
    posts: [
      {
        id: 'post-1',
        image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=967&q=80',
        title: 'Happy Woofs',
        description: 'How to keep your woof health and happy. We\'ve asked some of the best experts out there.',
        caretaker: 'Jamie Street',
        source: 'https://unsplash.com/photos/UtrE5DcgEyg',
      },
      {
        id: 'post-2',
        image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=850&q=80',
        title: 'Woofs & friends',
        description: 'Best friends are important for humans, but also for dogs.',
        caretaker: 'Krista Mangulsone',
        source: 'https://unsplash.com/photos/9gz3wfHr65U',
      },
      {
        id: 'post-3',
        image: 'https://images.unsplash.com/photo-1558947530-cbcf6e9aeeae?auto=format&fit=crop&w=634&q=80',
        title: 'Good Woofs',
        description: 'A good woof is a woof that brings joy. Here are a few tips to let your woof behave.',
        caretaker: 'Olia Nayda',
        source: 'https://unsplash.com/photos/f6v_Q0WXEK8',
      },
      {
        id: 'post-4',
        image: 'https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=1100&q=80',
        title: 'Wild Woofs',
        description: 'In some parts of the world, wild woofs are very common. Learn how to interact in a nice way.',
        caretaker: 'Anoir Chafik',
        source: 'https://unsplash.com/photos/2_3c4dIFYFU',
      },
      {
        id: 'post-5',
        image: 'https://images.unsplash.com/photo-1567014543648-e4391c989aab?auto=format&fit=crop&w=1050&q=80',
        title: 'Sleepy Woofs',
        description: 'Sleeping is just as important for woofs as it is for humans. What are the main things your woof dreams about.',
        caretaker: 'Max Singh',
        source: 'https://unsplash.com/photos/2637Pic9xMw',
      },
      {
        id: 'post-6',
        image: 'https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&w=967&q=80',
        title: 'Exploring Woofs',
        description: 'Just sitting in one place is boring for most woofs. How do woofs explore the world?',
        caretaker: 'Jamie Street',
        source: 'https://unsplash.com/photos/wcO2PWLuQ3U',
      },
      {
        id: 'post-7',
        image: 'https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&w=967&q=80',
        title: 'Exploring Woofs',
        description: 'Just sitting in one place is boring for most woofs. How do woofs explore the world?',
        caretaker: 'Jamie Street',
        source: 'https://unsplash.com/photos/wcO2PWLuQ3U',
      },
      {
        id: 'post-8',
        image: 'https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&w=967&q=80',
        title: 'Exploring Woofs',
        description: 'Just sitting in one place is boring for most woofs. How do woofs explore the world?',
        caretaker: 'Jamie Street',
        source: 'https://unsplash.com/photos/wcO2PWLuQ3U',
      },
      {
        id: 'post-9',
        image: 'https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&w=967&q=80',
        title: 'Exploring Woofs',
        description: 'Just sitting in one place is boring for most woofs. How do woofs explore the world?',
        caretaker: 'Jamie Street',
        source: 'https://unsplash.com/photos/wcO2PWLuQ3U',
      },
    ],
  };


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
  