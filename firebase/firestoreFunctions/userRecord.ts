import { UserCredential } from "firebase/auth";
import {
  doc,
  DocumentReference,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { cdb } from "../clientConfig";

export async function createUserRecord(res: UserCredential) {
  const docRef = doc(
    cdb,
    "users",
    res.user.uid
  ) as DocumentReference<UserRecord>;

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
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
