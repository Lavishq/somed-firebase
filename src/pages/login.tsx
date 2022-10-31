import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const Navigate = useNavigate()

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        Navigate("/")
        console.log(result)
    }

    return <div>
        <p>sign in with gogle to continue</p>
        <button onClick={signInWithGoogle}>Sign in with gogle</button>
    </div>
}