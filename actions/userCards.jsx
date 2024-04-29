import {doc, setDoc} from "firebase/firestore";
import {db} from '../../services/firebase'


export async function createCard(user) {
  try{
    const docRef = doc(db, 'cards', user?.uid)
    await setDoc(docRef, {
      name: '',
      description: '',
      image: '',
      price: 0,
      quantity: 0,
      status: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  } catch(error) {
    throw new Error(error)
  }
}
export async function saveCard() {
  try{

  } catch(error) {
    throw new Error(error)
  }
}

export async function deleteCard() {
  
}

export async function updateCard() {
  
}

export async function getCards() {
  
}

export async function getCard() {
  
}
