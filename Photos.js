import React, { useState, useEffect } from "react"
import { View, Image, FlatList, Text, TouchableOpacity } from "react-native"

export default function Photos() {
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
      <View style={{ flex: 1, flexDirection: "row",  }}>
        <Image style={{ height: 100, width: 122, marginBottom: 2, }} source={{ uri: item.url }} />
      </View>
    )
  }

  return (
    <View>
      <View>
        <FlatList 
        numColumns={3}
        data={data} renderItem={renderItem} />
      </View>
    </View>
  )
}