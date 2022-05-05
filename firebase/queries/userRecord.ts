import { User, UserCredential } from "firebase/auth";
import { getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { createDocRef } from "../clientConfig";

export async function createUserRecord(user: User) {
  const docRef = createDocRef<UserRecord>("users", user.uid);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return;
    } else {
      await setDoc(docRef, {
        displayName: user.displayName,
        email: user.email,
        profileImg: user.photoURL,
        joinedOn: serverTimestamp(),
        uid: user.uid,
        contributions: 0,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getUserRecord(uid: string) {
  const docRef = createDocRef<UserRecord>("users", uid);

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    console.log(error);
  }
}
