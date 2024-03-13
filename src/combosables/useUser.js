import { ref } from "vue";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export function useUser() {
    const auth = getAuth();
    const user = ref(auth.currentUser);

    onAuthStateChanged(auth, (_user) => {
        user.value = _user;
    });

    return {
        user
    };
}
