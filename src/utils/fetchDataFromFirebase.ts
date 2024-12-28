import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

export interface FirebaseData {
  main: unknown;
  about: { content: string };
  github: unknown;
  linkedin: unknown;
  telegram: unknown;
  contact?: { email: string; phone: string };
  id: string;
  name: string;
}

/**
 * Fetches data from a specified Firestore collection.
 *
 * @param {string} docName - The name of the Firestore collection to fetch data from.
 * @returns {Promise<FirebaseData>} A promise that resolves to an array of FirebaseData objects.
 * @throws Will throw an error if the data fetching fails.
 */
export async function fetchDataFromFirebase(docName: string): Promise<FirebaseData>{
  try {
    const querySnapshot = await getDocs(collection(db, docName));

    const data: FirebaseData[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data() } as FirebaseData);
    });

    return data[0];
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);

    throw new Error('Failed to fetch data from Firebase');
  }
}
