import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Pressable } from "react-native";
import Icons from "../components/icons";

export default function Account(){
  return(
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
        <Header/>
        <LoginButtons/>
        <About/>
    </SafeAreaView>
  );
}

function Header(){
  return(
    <View style={styles.TopBar}>
      <Text style={styles.HeadingText}>Smart Mat</Text>
      <Text style={styles.SubHeadingText}>Sign in to save your data</Text>
    </View>
  );
}

function LoginButtons(){
  return(
    <>
      <AuthButton
            label={'Sign in'}
            icon={<Icons name="google" />}
      />

        <AuthButton
            label={'Sign in'}
            icon={<Icons name="ios"/>}
            
        />
    </>
  );
}


function About(){
  return(
    <View style={styles.themeChangeSection}>
         <Text style={styles.HeadingText}>About</Text>
       
         <View style={{marginTop: 10}}>
            <Pressable>
                <Text style={{margin: 10, fontSize: 18, color:'white'}}>
                  About
                </Text>
            </Pressable>
            <Pressable>
                <Text style={{margin: 10, fontSize: 18, color:'white'}}>
                  Privacy Policy
                </Text>
            </Pressable>
            <Pressable>
                <Text style={{margin: 10, fontSize: 18, color:'white'}}>
                  Terms of Service
                </Text>
            </Pressable>
            <Pressable>
                <Text style={{margin: 10, fontSize: 18, color:'white'}}>
                  Licences
                </Text>
            </Pressable>
         </View>
    </View>
  );
}

function AuthButton({label, icon}:{ //This is a sign in button
  label: string;
  icon: any;
  }){
      return(
      <Pressable style={{
        backgroundColor: '#ECDFCC',
          marginHorizontal: 40,
          marginVertical: 5,
          justifyContent:'center',
          flexDirection: 'row',
          padding: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'black',
          
      }}>
  
          {icon}
  
          <Text style={{
              fontSize: 20,
              fontWeight: 600,
              color: 'black',
              marginLeft: 10
            }}>
          {label}
          </Text>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  HeadingText:{
    color:'white',
    fontWeight: 800,
    fontSize: 25, 
  },
  SubHeadingText:{
    color:'white',
  },
  TopBar:{
    padding: 20,
  },
  themeSelectorContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  themeSelectorChild:{
    
  },
  themeChangeSection:{
   padding: 20
  }
});