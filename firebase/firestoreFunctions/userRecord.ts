import { UserCredential } from "firebase/auth";
import { getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { createDocRef } from "../clientConfig";

export async function createUserRecord(res: UserCredential) {
  const docRef = createDocRef<UserRecord>("users", res.user.uid);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return;
    } else {
      await setDoc(docRef, {
        displayName: res.user.displayName,
        email: res.user.email,
        profileImg: res.user.photoURL,
        joinedOn: serverTimestamp(),
        uid: res.user.uid,
        contributions: 0,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getUserRecord(res: UserCredential) {
  const docRef = createDocRef<UserRecord>("users", res.user.uid);

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    console.log(error);
  }
}
