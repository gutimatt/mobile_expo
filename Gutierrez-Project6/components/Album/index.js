import React, { useState, useEffect } from 'react';
import glamorous from 'glamorous-native';

import {
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native';
import {
  addPhoto,
} from '../../redux/photos/actions';
import store from '../../redux';
 
const Button = glamorous.touchableHighlight(
  { 
    padding: 10,
    marginTop: 20,
  },
  props => ({backgroundColor: props.warning ? 'red' : 'blue'})
);

const ButtonText = glamorous.text({
  fontSize: 18,
  color: 'white',
});

const AlbumText = glamorous.text({
  fontSize: 25,
  paddingBottom: 8,
});

const Title = glamorous.text({
  fontSize: 40,
  paddingBottom: 8,
  color: '#191970'
});

const Url = glamorous.text({
  fontSize: 18,
  paddingBottom: 8,
  color: '#A9A9AC'
});

const ThumbnailURL = glamorous.text({
  fontSize: 18,
  paddingBottom: 8,
  color: '#ADD8E6'
});

const photosMap = [
  {
    'albumId': 1,
    "title": 'Photo 1',
    "url": "http://Photo1/",
    "thumbnailUrl": "http://Photo1/",
    "id": 0
  },
  {
    'albumId': 2,
    "title": 'Photo 2',
    "url": "http://Photo2/",
    "thumbnailUrl": "http://Photo2/",
    "id": 1
  },
  {
    'albumId': 3,
    "title": 'Photo 3',
    "url": "http://Photo3/",
    "thumbnailUrl": "http://Photo3/",
    "id": 2
  },
];

const Album = () => {
    const [currentPhoto, setCurrentPhoto] = useState('');
    const [photoOrder, setPhotoOrder] = useState([0, 1, 2 ]);

    const addNextPhoto = () => {
      const currentPhotoIndex = photoOrder.indexOf(currentPhoto.id);
      const nextPhotoIndex = (currentPhotoIndex + 1) % photoOrder.length;
      const nextPhotoId = photoOrder[nextPhotoIndex];
      const nextPhoto = photosMap[nextPhotoId];
      store.dispatch(addPhoto({
          ...nextPhoto
      })); 
      setCurrentPhoto(nextPhoto);
      store.currentStateStr = JSON.stringify(store.getState(), null, '   ');
      console.log('Store: \n' + store.currentStateStr);
    };

    useEffect(() => {
        return () => {
          store.unsubscribe;
        };
      }, []);

    return (
        <SafeAreaView> 
            <SafeAreaView style={styles.container}>
              <AlbumText>Album</AlbumText>
              {currentPhoto != '' ? (
              <>
                <Title>{currentPhoto.title}</Title>
                <Url>{currentPhoto.url}</Url>
                <ThumbnailURL>{currentPhoto.thumbnailUrl}</ThumbnailURL>
              </>
              ) :
              (<Text>Album not yet added</Text>)}
            </SafeAreaView> 
            <Button onPress={addNextPhoto}>
              <ButtonText>
                Next
              </ButtonText>
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Album;