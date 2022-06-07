import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import { useQuery} from "react-query";


async function fetchPhotos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    return response.json();
  }
  

function Photos() {
  const [
    { data: photos, refetch: photosRefetch, isLoading: isPhotosLoading },
    
  ] = useQuery([
    {
      queryKey: "photos",
      queryFn: fetchPhotos,
    },
    
  ]);

  function photoRenderer({ item }) {
    return (
      <View style={styles.listItem}>
        <Image source={{ uri: item.thumbnailUrl }} style={styles.avatar} />
        <Text style={styles.name}>{item.title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        refreshing={isPhotosLoading}
        onRefresh={photosRefetch}
        ListHeaderComponent={() => <Text style={styles.header}>Photos</Text>}
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={photoRenderer}
      />
    </View>
  );
}

export default Photos;

const styles = StyleSheet.create({
  albumContainer: {
    flexWrap: "wrap",
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 4,
    backgroundColor: "#eee",
    paddingHorizontal: 12,
    height: 80,
    justifyContent: "center",
    flex: 1,
  },
  albumTitle: {},
  avatar: {
    borderWidth: 0.5,
    borderColor: "#ccc",
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 12,
  },
  listItem: {
    flexDirection: "row",
    marginVertical: 8,
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 8,
  },
  name: {
    paddingLeft: 8,
    flex: 1,
  },
});
