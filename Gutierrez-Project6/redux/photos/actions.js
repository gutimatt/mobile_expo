export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export const fetchPhotos = () => {
    return {
        type: FETCH_PHOTOS,
        payload: {
            "photos": [
                {
                    "albumId": 2,
                    "title": "dolore esse a in eos sed",
                    "url": "http://placehold.it/600/f783bd",
                    "thumbnailUrl": "http://placehold.it/150/d83ea2",
                    "id": 2
                },
                {
                    "albumId": 2,
                    "title": "dolore esse a in eos sed",
                    "url": "http://placehold.it/600/8e6eef",
                    "thumbnailUrl": "http://placehold.it/150/bf6d2a",
                    "id": 3
                }
            ]
        }
    }
}

export const ADD_PHOTO = 'ADD_PHOTO';
export const addPhoto = (photo) => {
    return {
        type: ADD_PHOTO,
        payload: photo
    };
}

export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const removePhoto = (photo) => {
    return {
        type: REMOVE_PHOTO,
        payload: photo
    };
}