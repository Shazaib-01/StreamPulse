import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import {Header} from '../components/Header/Header';

const DATA = [
  {
    id: '1',
    title: 'Artificial Intelligence Explained In 2 Minutes',
    content: 'CSROCKS',
    years: '22M Views, 3 years ago',
    bg: require('../Assests/Img/AI.jpg'),
    video: require('../Assests/Vid/video1.mp4'),
  },
  {
    id: '2',
    title: 'What is React? | React Explained in 2 Minutes For BEGINNERS.',
    content: 'Traversy Media',
    years: '2M Views, 1 years ago',
    bg: require('../Assests/Img/ReactJS.png'),
    video: require('../Assests/Vid/video2.mp4'),
  },
  {
    id: '3',
    title: 'Juventus v SPAL',
    content: 'Serie A',
    years: '291k Views, 1 days ago',
    bg: require('../Assests/Img/Juventus.jpg'),
    video: require('../Assests/Vid/video3.mp4'),
  },
  {
    id: '4',
    title: 'Captain KOHLI Hits Back For India with a STUNNING Century',
    content: 'Starsports',
    years: '12M Views, 4 days ago',
    bg: require('../Assests/Img/Virat.jpg'),
    video: require('../Assests/Vid/video4.mp4'),
  },
  {
    id: '5',
    title: 'Eminem - Higher (Official Video)',
    content: 'Eminem Music',
    years: '111k Views, 3 months ago',
    bg: require('../Assests/Img/eminem.jpg'),
    video: require('../Assests/Vid/video5.mp4'),
  },
];

type ItemProps = {
  title: string;
  bg: any;
  content: string;
  years: string;
  video: any;
};

const HomeScreen = ({navigation}: any) => {
  const Item = ({title, bg, content, years, video}: ItemProps) => (
    <TouchableOpacity
      style={styles.homeScreen}
      onPress={() => {
        navigation.navigate('Video', {
          video,
        });
      }}>
      <View style={styles.item}>
        <Image
          source={bg}
          style={[styles.backgroundContainer, styles.backgroundImage]}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.contentStyle}>{content}</Text>
      <Text style={styles.time}>{years}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="#f94d1f" />
      <Header
        leftButton={{
          child: <Text style={styles.navbar}>STREAM PULSE</Text>,
          onPress: () => {},
        }}
      />
      <View style={styles.centeredView}>
        <FlatList
          scrollEnabled
          data={DATA}
          renderItem={({item}) => (
            <Item
              title={item.title}
              bg={item.bg}
              content={item.content}
              years={item.years}
              video={item.video}
            />
          )}
          keyExtractor={item => item.id}
          style={styles.flatlist}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3E3E3',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
  },
  homeScreen: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 2,
    padding: 5,
    width: '99%',
  },
  item: {
    backgroundColor: '#FFFFFF',
    width: '99%',
    height: 280,
    padding: 5,
    marginBottom: 10,
    borderRadius: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4,
    color: '#000000',
  },
  contentStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 1,
    color: '#AAAAAA',
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 1,
    color: '#AAAAAA',
    textAlign: 'right',
    bottom: 10,
    right: 5,
  },
  navbar: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.1,
  },
  flatlist: {
    width: '100%',
    padding: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  backgroundContainer: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
