import React from "react";
import { Modal, View, StyleSheet, Text, Pressable } from "react-native";
import Icons from "./icons";

type Props = {
    isVisible: boolean;
    onClose: ()=>void;
    title: string;
}


export function YogaSessionDetail({isVisible, onClose, title}:Props){
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style= {styles.modalContent}>
                <View style={styles.modalTitle}>
                    <Pressable style={{marginLeft: 10}} onPress={onClose}>
                        <Icons  name="cross"/>
                    </Pressable>
                    <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 600, color: 'white'}}>{title}</Text>
                </View>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create(
    {
        modalContent:{
            height: '50%',
            width: '100%',
            backgroundColor: '#3C3D37',
            position:'absolute',
            bottom: 0,
            borderTopRightRadius: 18,
            borderTopLeftRadius: 18,
            elevation: 20,
        },
        modalTitle:{
            marginVertical: 15,
            width: '100%',
        },
    }
);

