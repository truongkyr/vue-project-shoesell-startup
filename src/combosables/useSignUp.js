import { ref } from "vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName) {
  error.value = null;
  isPending.value = true;
  try {
    const auth = getAuth(); // Lấy đối tượng auth từ getAuth()
    const response = await createUserWithEmailAndPassword(auth, email, password);
    if (!response){
      throw new Error("Could not create new user.");
    }

    const user = response.user;

    if (user.updateProfile){
    await user.updateProfile({ displayName: fullName })
    }

    console.log(response);

    return response;

  } catch (err) {
    console.log(err);
    error.value = err.message;

  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return {
    error,
    isPending,
    signup,
  };
}
