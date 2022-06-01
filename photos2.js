import React, { useState, useEffect } from "react"
import { View, Image, FlatList, Text, TouchableOpacity, StyleSheet, SafeAreaView} from "react-native"

export default function Fugu() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const renderItem = ({ item }) => {
    console.log(item)
    return (
      <View style={woofPostStyles.card}>
        <Image style={{ height: 60, width: '100%', marginBottom: 2}}
    source={require("./assets/cardTop.jpg")}/>
        <Image style={{ height: 300, width: "100%", marginBottom: 2, }} source={{ uri: item.url }} />
        <Image style={{ marginTop: 15, marginBottom: 15, height: 200, width: '100%',}}
    source={require("./assets/cardBottom.jpg")}/>
      </View>
    )
  }

  return (
    
    <SafeAreaView>
    <View>
      <View>
        <FlatList
        data={data} renderItem={renderItem} />
      </View>
    </View>
    </SafeAreaView>
  )
}


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


const WoofCard = (props) => (
  <SafeAreaView>
  <View style={woofCardStyles.card}>
    <Avatar url={props.avatar}/>
    
  </View>
  <View style={woofCardStyles.title}>
      <Title>{props.name}</Title>
    </View>
  </SafeAreaView>
  
);

const woofCardStyles = StyleSheet.create({
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


const WoofPost = (props) => (
  <View style={woofPostStyles.card}>
    
  </View>
);




const woofPostStyles = StyleSheet.create({
  card: {
    width: '100%',
    height: 600,
    padding: 0,
    borderColor: '#E7E3EB',
    
    backgroundColor: '#000'
  },
  layout: {
    marginHorizontal: 24,
    flexDirection: 'row',
    marginVertical: 1,
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
          <WoofCard key={woof.id} name={woof.name} avatar={woof.avatar} />
        ))
      }
    </ScrollView>
    <ScrollView>
      {
        data.posts.map(post => (
          <WoofPost key={post.id} image={post.image} title={post.title} description={post.description} />
        ))
      }
    

      </ScrollView>
  </ScrollView>
    </View>
    
  )
}

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
