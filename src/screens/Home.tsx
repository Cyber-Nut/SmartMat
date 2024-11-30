import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable, FlatList, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useYogaHistory } from "../hooks/useYogaHistory";
import { useNavigation } from "@react-navigation/native";
import { Yoga } from "./Yoga";
import { YogaSessionDetail } from "../components/YogaSessionDetail";



export function Home(){
    // const [modalVisible, setModalVisible] = useState(false);
    return(
       
        <View style={{backgroundColor: 'black'}}>
            <View style={styles.headerImageContainer}>
                <HeaderImage username="Divyash"/>
            </View>

            <View style={styles.matConnectContainer}>
                <MatConnect/>
            </View>

            <View style={styles.yogaSessionContainer}>
                <RecentYogaSession/>
            </View>

        </View>
             
        

   
    );
}


function HeaderImage({username}:{username: string}){
    return(
        <View style={{flex: 1}}>
                <LinearGradient style={styles.gradientBottom} colors={['rgba(0, 0, 0, 0.9)', 'transparent']} useAngle={true} angle={0} />
                
            <View style={styles.headerImageHeading}>
                <Text style={styles.greetingText}>Welcome {username}</Text>
            </View>
            <View style={styles.gradientTop}>
                <Image style={styles.headerImage} source={{uri:'https://ideogram.ai/assets/progressive-image/balanced/response/dMlVZhY-RFOB2-3bKQrA2w'}}/>
            </View>
            
            {/* <LinearGradient style={styles.gradientBottom} colors={['rgba(0, 0, 0, 0.5)', 'transparent']} useAngle={true} angle={-180} end={{ x: 0.5, y: 1 }} /> */}
          
        </View>
    );
}

function MatConnect(){
    const [isConnect, setIsConnect] = useState<boolean>(false);
    const navigation = useNavigation();
    const handleNavigateToYoga = () => {
        navigation.navigate('Yoga'); // Navigate to Yoga screen
    };

    let connectColor = isConnect ? 'green' : 'red';
    let connectText = isConnect ? 'Connected' : 'Disconnected';
    let buttonText = isConnect ? 'Disconnect' : 'Connect';
    return(

        <View>
            <View style={styles.matInfoContainer}>

                <View style={styles.matStatusContainer}>
                        <Image tintColor={connectColor} style={{height: '40%', width: '40%'}} source={require('../assets/images/yoga-mat.png')}></Image>
                        <Text style={{marginTop: 15, fontWeight: 600, fontSize:12 }}>{connectText}</Text>
                </View>

                <View style={styles.matModelContainer}>
                    {/* <View style={styles.deviceInfo}>
                        <Text style={{fontWeight: 600, marginRight: 2,fontSize:12}}>
                            Device: 
                        </Text>
                        <Text style={{fontSize:12}}>
                            Smart Yoga Mat Pro
                        </Text>
                    </View> */}
                    <View style={styles.deviceInfo}>
                        <Text style={{fontWeight: 600, marginRight: 2,fontSize:12}}>
                            Model:
                        </Text>
                        <Text style={{fontSize:12}}>
                            SYMP2024
                        </Text>
                    </View>
                    <View style={styles.deviceInfo}>
                        <Text style={{fontWeight: 600, marginRight: 2,fontSize:12}}>
                            Firmware Version: 
                        </Text>
                        <Text style={{fontSize:12}} >
                            1.2.3
                        </Text>
                    </View>
                    <View style={styles.deviceInfo}>
                        <Text style={{fontWeight: 600, marginRight: 2,fontSize:12}}>
                            Battery Level:  
                        </Text>
                        <Text style={{fontSize:12}}  >
                            75%
                        </Text>
                    </View>
                </View>

            </View>
            <View style={styles.matButtonContainer}>
                <MatButton consoleText="connectbuttonpressed"  text={buttonText} onPress={()=>setIsConnect(!isConnect)}/>
                <MatButton consoleText="startyogabutton pressed" text='Start Yoga' onPress={handleNavigateToYoga}/>
            </View>
        </View>
    );
}

function MatButton({ text, onPress, consoleText }: { text: string, onPress:()=>void, consoleText: string }) {
    return (
      <Pressable style={styles.buttonContainer} onPress={()=>{
        console.log(consoleText);
        onPress();
      }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </Pressable>
    );
}

function RecentYogaSession(){
    const yogaHistory = useYogaHistory();
    return(
        <View >
            <Text style={{textAlign: 'center', marginVertical: 10, fontWeight: 800, fontSize: 16}}>Recent Yoga Session</Text>
            <View style={{ marginBottom: 10, height: '75%'}}>
            
                        <FlatList
                            data={yogaHistory} //this take array of items to be rendered
                            renderItem={({ item }) =>(
                                <YogaSessionCard title={item.title} duration={item.duration} date={item.date} />
                            )}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item.title}
                            initialNumToRender={2}
                            style={{marginBottom: 5}}
                        />
            </View>
        </View>
    );
}

function YogaSessionCard({title, date, duration}: {title: string, date: string, duration: string}){
    const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility
    const viewDetailButtonHandler = () => {
        setModalVisible(true); // Open modal
      };
    
      const closeModalHandler = () => {
        setModalVisible(false); // Close modal
      };
    return(
        <View style={styles.sessionCard}>
            <View style={styles.sessionCardText}>
                <Text style={{fontSize: 13, fontWeight: 600, color: 'white', letterSpacing: 1}}>{title}</Text>
                <Text style={{fontSize: 11,color: 'white'}}>Date: {date}</Text>
                <Text style={{fontSize: 11,color: 'white'}}>Duration: {duration}</Text>
            </View>
            <View style={styles.sessionCardButton}>
                <Pressable style={styles.viewDetailButton} onPress={viewDetailButtonHandler} >
                        <Text style={{textAlign: 'center', color: 'white',fontSize: 11,}}>View Details</Text>
                </Pressable>
            </View>
            <YogaSessionDetail title={title} isVisible={isModalVisible} onClose={closeModalHandler} />
        </View>
    );
}



const styles = StyleSheet.create({
    headerImageContainer:{
        height: '30%',
        width: '100%',
        
    },
    headerImage:{
        width: '100%',
        flex: 1,
        resizeMode:'cover',
     
    },
    headerImageHeading:{
        marginTop: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        zIndex: 3, // Ensure text is above the image
    },
    greetingText:{
        color: 'black', 
        fontWeight: 600,
        fontSize: 24
    },
    gradientTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%', // Adjust height as needed
        zIndex: 2
    },
    gradientBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%', // Adjust height as needed
        zIndex: 3
    },
    
    matConnectContainer:{
        backgroundColor: '#ECDFCC',
        height: '25%',
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 20,
        elevation: 10
    },
    matInfoContainer:{
        height:'70%',
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    matButtonContainer:{
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom:10,
    },
    matStatusContainer:{
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
        },
    matModelContainer:{
        width: '50%',
        justifyContent: 'center'
    }, 
    deviceInfo:{
        flexDirection: 'row',
        marginTop: 5
    },
    buttonContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 4,
    width: '30%',
    },
    button: {
    width: '100%',
    backgroundColor: '#3C3D37',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    elevation: 5, // Add elevation for a 3D effect
    },
    buttonText: {
    fontWeight: 600,
    color: 'white',
    textAlign: 'center',
    // Add responsive font size or adjust as needed
    fontSize: 12,
    },
    yogaSessionContainer:{
        backgroundColor: '#ECDFCC',
        height: '34%',
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 20,
        elevation: 10
    },
    sessionCard:{
        height:72,
        marginTop: 10,
        backgroundColor:'#3C3D37',
        flexDirection: 'row',
        marginHorizontal:10,
        borderRadius:20
    },
    sessionCardText:{
        width: '50%',
        marginVertical: '5%',
        justifyContent: 'center',
        marginLeft: 10,
       
    },
    sessionCardButton:{
        width: '30%',
        marginVertical: '5%',
        marginRight: 10,
        justifyContent: 'center',
        marginLeft: 30,

    },
    viewDetailButton:{
        height:'90%',
        alignItems:'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
    },
});
