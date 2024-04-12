import { StyleSheet, Text, Button, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import CourseInput from './components/CourseInput';

export default function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      text: 'Ödev',
    },
    {
      id: 2,
      text: 'Spor',
    },
    {
      id: 3,
      text: 'Kitap Okuma',
    },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button onPress={toggleModal} title='Hedef Ekle' color='red' />
        <CourseInput visible={isModalOpen} toggleModal={toggleModal} setCourses={setCourses} courses={courses} />
        <View>
          <FlatList
            data={courses}
            renderItem={({ item }) => (
              <View style={styles.courseItem}>
                <Text style={styles.courseText}>{item.text}</Text>
              </View>
            )}
          />
        </View>
        {/* <Text>{isModalOpen}</Text> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  courseItem: {
    backgroundColor: 'gray',
    marginVertical: 8,
    padding: 8,
    borderRadius: 5,
  },
  courseText: {
    color: 'white',
  },
});
