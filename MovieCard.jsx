import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <SafeAreaView>
        <ScrollView>
        <View style = {styles.movieCard}>
        <Text style = {styles.year}>{Year}</Text>
      

      <View >
        <Image style = {styles.poster} source = {Poster !='N/A'? {uri: Poster} : {uri: "https://via.placeholder.com/400"}} />
      </View>

      <View>
        <Text style = {styles.type} >{Type}</Text>
        <Text style = {styles.title}>{Title}</Text>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        margin: 10,
        backgroundColor: '#616C6F',
        justifyContent: "center",
        alignItems: "center",
    },
    movieCard :{
        width: 250,
        height: 350,
        margin: 5,
        justifyContent: 'space-between',
        flexDirection: 'column',
        borderColor: '#30336B',
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        
    },
    year : {
        fontSize: 25,
        color: '#EAF0F1',
        alignContent: 'center',
        alignItems: 'center',
    },
    type: {
        fontSize: 15,
        color: '#EAF0F1',
        alignContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: '#EAF0F1',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        
    },
    poster: {
        width: 100,
        height: 200,
    }
    

})

export default MovieCard;