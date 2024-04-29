import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { v4 } from 'uuid';
import storage from './firebase';

export const uploadImage = async (fileOrUrl, source) => {
  try {
    if (!fileOrUrl) return null;

    const storage = getStorage();
    const imageRef = ref(storage, `card-images/${source}/${v4()}`);

    let imageData;

    if (fileOrUrl instanceof File) {
      imageData = fileOrUrl;
    } else {
      // Input is a URL, fetch the image data
      const response = await fetch(fileOrUrl);
      imageData = await response.blob();
    }

    const snapshot = await uploadBytes(imageRef, imageData);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};

export const deleteImage = async (imageUrl) => {
  try {
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);
    return true;
  } catch (error) {
    return false;
  }
};

//Portfolio images
export const uploadTemplateImage = (image) => async () => {
  try {
    if (image === null) return null;
    const imageRef = ref(storage, `template-images/${image.name + v4()}`);
    const snapshot = await uploadBytes(imageRef, image);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch (error) {
    return null;
  }
};
