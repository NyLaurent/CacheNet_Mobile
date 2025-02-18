import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

const SearchTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <TextInput style={styles.input} placeholder="Search..." placeholderTextColor="#999" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default SearchTab

