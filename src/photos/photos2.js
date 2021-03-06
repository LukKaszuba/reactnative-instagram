import React, { useState, useEffect } from "react"
import { View, Image, FlatList, StyleSheet, SafeAreaView} from "react-native"


export default function Photos2() {
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
      <View style={instPostStyles.card}>
        <Image style={styles.cardTop}
    source={require("../../assets/cardTop.jpg")}/>
        <Image style={styles.cardBottom1} />
        <Image style={styles.cardBottom2}
    source={require("../../assets/cardBottom.jpg")}/>
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





const instPostStyles = StyleSheet.create({
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
  cardTop: { height: 60, width: '100%', marginBottom: 2},
  cardBottom1: { height: 300, width: "100%", marginBottom: 2, },
  cardBottom2: { marginTop: 15, marginBottom: 15, height: 200, width: '100%',},
});
