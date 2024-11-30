import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Pressable, Image, Alert } from "react-native";
import { FlatList } from "react-native";
import useMusicList from "../hooks/useMusicList";
import usePreset from "../hooks/usePreset";

export function Yoga(){
    const musicList = useMusicList();
    const presetList = usePreset();
    return(
        <SafeAreaView style={{backgroundColor: 'black', height: '100%'}}>
            <View style={{marginTop: 20, marginHorizontal: 20, height: '30%'}}>
                <Text style={{fontWeight: 600, fontSize: 20, color:'white', marginBottom: 10}} >
                    Recommended For You
                </Text>

                <View style={styles.recommendationContainer}>
                <>
                        <FlatList
                            data={presetList} //this take array of items to be rendered
                            renderItem={({ item }) =>(
                                <RecommendationCard name={item.name} info={item.info}/>
                            )}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.name}
                        />
                    </>
                </View>
            </View>

            <View style={styles.matControl}>
                <Text style={{fontWeight: 600, marginTop: 10, fontSize: 20,color:'white'}}>Control Your Mat</Text>
                <View style={styles.matButtonContainer}>
                    <MatButton label="Warm-Up" onPress={WarmUpButton}/>
                    <MatButton label="Yoga" onPress={YogaButton} />
                    <MatButton label="Relax" onPress={RelaxButton} />
                </View>
            </View>

            <View style={styles.musicOuterContainer}>
                <Text style={{ fontSize: 20, fontWeight :600, color:'white'}}>Choose Your Mood</Text>

                <View style={styles.musicInnerContainer}>
                    <View style={styles.musicCardScroll}>
                    <>
                        <FlatList
                            data={musicList} //this take array of items to be rendered
                            renderItem={({ item }) =>(
                                <MusicCard musicName={item.name} musicUrl={item.url} />
                            )}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.name}
                        />
                    </>
                    </View>
                    <View style={{ marginVertical: 15, alignItems:'center'}}>
                        <PlayButton/>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
}

const WarmUpButton = ()=>{
    Alert.alert('Warm Up started');
}
const YogaButton = ()=>{
    Alert.alert('Yoga started');
}
const RelaxButton = ()=>{
    Alert.alert('Relax started');
}

function RecommendationCard({name, info}:{name:string, info: string}){
    return(
        <Pressable style={styles.recommendationCardContainer}>
            <View style={styles.recommendationImage}>
                <Image style={{resizeMode: 'cover', flex: 1}} source={{uri:'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?cs=srgb&dl=pexels-prasanthinturi-1051838.jpg&fm=jpg'}}/>
            </View>
            <View style={styles.recommendationLabel}>
                <Text style={{color: 'white', fontSize:12}}>{name}</Text>
                <Text style={{color: 'white', fontSize:10}}>{info}</Text>
            </View>
        </Pressable>
    );
}

function PlayButton(){
    return(
        <Pressable>
            <View style={{backgroundColor: '#3C3D37', width: 50, height: 50, borderRadius: '50', justifyContent: 'center', marginVertical:10, alignItems: 'center'}}>
                <Image tintColor={'white'} style={{height:'60', width:'60', flex:1}} resizeMode="contain" source={require('../assets/images/play.png')}></Image>
            </View>
        </Pressable>
    );
}


function MatButton({label, onPress}:{label:string, onPress: ()=>void }){
    return(
        <Pressable onPress={onPress} style={{width: '25%'}}>
            <View style={{backgroundColor: '#3C3D37', height: '60%', width: '100%', borderRadius: '50%', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', color: 'white', fontWeight: 400, fontSize: 10}}>{label}</Text>
            </View>
        </Pressable>
    );
}
//music image deni hai aur onPress, yahi dikkat hai
function MusicCard({musicName, musicUrl}:{musicName: string, musicUrl:string}){
    return(
        <Pressable onPress={playMusic} style={{width:'90', height: '100%', marginHorizontal: 10}}>
            <View style={{backgroundColor: '#3C3D37', height: '100%', alignItems: 'center'}}>
                <View style={{backgroundColor: '', width: '100%' }}>
                    <Image resizeMode="cover" style={{width: "100%"}}  source={require('../assets/images/musicimage.jpg')}/>
                </View>
                <View style={{ position: 'absolute', bottom: 0, backgroundColor:'#3C3D37', width: '100%'}}>
                    <Text style={{textAlign: 'center', color: 'white', fontWeight: 400,fontSize: 10, marginVertical: 2,  }}>{musicName}</Text>
                </View>
            </View>
        </Pressable>

    );
}

function playMusic(){
    return(
        <View></View>
    );
}



const styles = StyleSheet.create({
    recommendationContainer:{
        flexDirection: 'row',
        height: '80%',
        backgroundColor: '#ECDFCC',
        borderRadius: 20,
        justifyContent:'center',
        alignItems: 'center'
    },
    recommendationCardContainer:{
        height: '90%',
        backgroundColor: '#3C3D37',
        width:145,
        marginHorizontal: 7,
        marginTop: 10
    },
    recommendationImage:{
        height: '70%'
    },
    recommendationLabel:{
        marginLeft: 10,
    },
    matControl:{
        height: '25%',
        marginHorizontal:20,
    },
    matButtonContainer:{
        backgroundColor: '#ECDFCC',
        height: '70%',
        marginTop: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems:'center',
        marginHorizontal: 10,
        borderRadius: 20,
    },
    musicOuterContainer:{
        height: '30%',
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 20,
    },
    musicInnerContainer:{
        backgroundColor: '#ECDFCC',
        height: '80%',
        marginTop: 10,
        borderRadius: 20,
    },
    musicCardScroll:{
        marginTop: 15,
        height: '40%',
    }
});