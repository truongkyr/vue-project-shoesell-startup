import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signin(email, password){
    error.value = null; // Xóa giá trị của error trước khi thực hiện sign in
    isPending.value = true;
    try {
        const auth = getAuth();
        const response = await signInWithEmailAndPassword (auth, email, password);
        return response;

    } catch (err) {
        console.log(err)
        error.value = err.message;

    } finally {
        isPending.value = false;
    }
}

export function useSignIn(){
    return {
        error,
        isPending,
        signin,
    };
}
