import {
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult,
  onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";

import { auth } from "@/src/lib/firebase/clientApp";

export function onAuthStateChanged(cb) {
  return _onAuthStateChanged(auth, cb);
}

// export async function signInWithGoogle() {
//   const provider = new GoogleAuthProvider();

//   try {
//     await signInWithPopup(auth, provider);
//   } catch (error) {
//     console.error("Error signing in with Google", error);
//   }
// }
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
}

export async function checkRedirectResult() {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      // User is signed in
      const user = result.user;
      console.log("User info:", user);
    }
  } catch (error) {
    console.error("Error during redirect sign-in", error);
  }
}

export async function signOut() {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}
