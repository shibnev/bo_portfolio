import { db } from '@/config/firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

export interface FirebaseData {
  github: unknown;
  linkedin: unknown;
  telegram: unknown;
  contact?: { email: string; phone: string };
  about?: { [key: string]: string | number | boolean | object };
  main?: { [key: string]: string | number | boolean | object };
  id: string;
  name: string;
}

/**
 * Fetches data from a specified Firestore collection.
 *
 * @param {string} docName - The name of the Firestore collection to fetch data from.
 * @returns {Promise<FirebaseData[]>} A promise that resolves to an array of FirebaseData objects.
 * @throws Will throw an error if the data fetching fails.
 */
export async function fetchDataFromFirebase(docName: string): Promise<FirebaseData[]> {
  try {
    const querySnapshot = await getDocs(collection(db, docName));

    const data: FirebaseData[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() } as FirebaseData);
    });

    return data;
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
    return [];
  }
}

/**
 * Fetches a single document from a specified Firestore collection.
 *
 * @param {string} docName - The name of the Firestore collection.
 * @param {string} docId - The ID of the document to fetch.
 * @returns {Promise<FirebaseData | null>} A promise that resolves to a FirebaseData object or null if the document does not exist.
 * @throws Will throw an error if the document fetching fails.
 */
export async function fetchDocumentFromFirebase(docName: string, docId: string): Promise<FirebaseData | null> {
  try {
    const docRef = doc(db, docName, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as FirebaseData;
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching document from Firebase:', error);
    return null;
  }
}
