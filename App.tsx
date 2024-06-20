import React, { useEffect, useState } from "react";

import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import MovieCard from "./MovieCard";
const API_URL = "http://www.omdbapi.com/?apikey=5288839b&";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    

    setMovies(data.Search);
    console.log(data["imdbID"]);
  };

  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true} style = {styles.screen}>
      <View>
      <Text style = {styles.TitleName}> MovieLand</Text>

      <View style = {styles.Button}>
        <TextInput style = {styles.searchBar}
          value={searchTerm}
          onChangeText ={(item) => setSearchTerm(item)}
          placeholder ="Search for movies"
        />
        <Button
          
          onPress={() => searchMovies(searchTerm)}
          title="Search"
        />
      </View>

      {movies?.length > 0 ? (
        <FlatList style = {styles.movies}
        data={movies}
        numColumns={2}
        keyExtractor={(item) => item["imdbID"]}
        renderItem={({item}) => <MovieCard movie = {item}></MovieCard>}
      />
        // <View  style = {styles.movies}>
        //   {movies.map((movie) => (
        //     <MovieCard movie={movie} />
        //   ))}
        // </View>
      ) : (
        <View >
          <Text style = {styles.noFound}>No movies found</Text>
        </View>
      )}
    </View>
    </ScrollView>
    </SafeAreaView>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    marginTop: 2,
    backgroundColor: '#616C6F',
    justifyContent: "center",
    alignItems: "center",
  },
  TitleName: {
    fontSize: 50,
    color: '#B83227',
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  searchBar:{
    backgroundColor: '#758AA2',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 20,
    width: 250,
    color: '#DAE0E2',
    
    
  },
  noFound:{
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  Button: {
    margin: 20,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    justifyContent: "center",
    alignItems: "center",

  },
  screen: {
    backgroundColor: '#2C3335'
  },
  movies :{
    marginTop:20,
    padding: 1,
    //justifyContent: 'center',
    flexDirection: 'column',
    borderRadius:2,
    borderColor: '#30336B',
    flexWrap: 'wrap',
    flex:0.5,
    margin:10,
    marginBottom: 10,
  
  
  }

})

export default App;
