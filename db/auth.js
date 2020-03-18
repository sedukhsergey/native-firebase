import { authenticate } from './firebase-init';

export const signUp = ({email, password}) => {
    return authenticate.createUserWithEmailAndPassword(email, password)
}

export const signIn = ({email, password}) => authenticate.signInWithEmailAndPassword(email, password)
