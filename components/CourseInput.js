import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, TextInput, Button } from 'react-native';
import { useState } from 'react'

export default function CourseInput({ visible, toggleModal, courses, setCourses }) {
    const [courseName, setCourseName] = useState('')

    const addCourse = () => {
        setCourses([...courses, { id: Math.random().toString(), text: courseName }])
        toggleModal()
        setCourseName('')
    }

    return (
        <Modal
            animationType="slide"
            visible={visible}
        >
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={{ uri: 'https://picsum.photos/200/300' }} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Yeni Hedef Ekle'
                    value={courseName}
                    onChangeText={(text) => setCourseName(text)}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='İptal'
                            color='red'
                            onPress={toggleModal}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Ekle'
                            color='green'
                            onPress={addCourse}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        padding: 15,
        gap: 10,
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 20,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        width: '70%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'pink',
        borderColor: 'pink',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 20,

    },
    button: {
        width: 100,
        borderRadius: 8,
    }
});