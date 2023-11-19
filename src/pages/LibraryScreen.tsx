import {View, StatusBar, Dimensions} from 'react-native';
import React from 'react';
// @ts-ignore
import Video from 'react-native-video';

const {width, height} = Dimensions.get('window');

const LibraryScreen = (props: any) => {
  const {video} = props.route.params;
  console.log(props.route.params);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor="#000" />
      <Video
        paused={false}
        controls={true}
        source={video}
        unmuted
        style={{width: width, height: height}}
        fullScreen={true}
        fullscreenOrientation={'landscape'}
      />
    </View>
  );
};

export default LibraryScreen;
