import { ref } from "vue";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
const error = ref(null);
async function logout() {
  error.value = null;
  try {
    const auth = getAuth(); // Lấy đối tượng auth từ getAuth()
    const response = await signOut(auth);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
}
export function useLogout() {
  return {
    error,
    logout,
  };
}
