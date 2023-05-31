import { useState } from "react"
const AuthModal = ({ setShowModal, isSignUp}) => {

    const[email,seEmail] = useState(null)

    const[password,setPassword] = useState(null)

    const[confirmPassword, setConfirmPassword]= useState(null)

    const[error,setError] = useState(null)

    // console.log(email,password,confirmPassword)

    const handleClick = () => {
        setShowModal(false)
    }
    const handleSubmit = (e)=>{
        e.preventDegault()
        try{
            if(isSignUp && (password !== confirmPassword)){
                setError('Passwords need to much')
            }
            console.log('make post request to database')
        
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <div className="auth-modal">

            <div className="close-icon" onClick={handleClick}> <span>&#10005;</span> </div>

            <h2>{isSignUp?'CREATE ACCOUNT':'LOGIN'}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onChange={(e)=> seEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="Confirm Password"
                    required={true}
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                />
                <input className="secondary-button" type="submit"/>

                <p>{error}</p>
            </form>

            <h2>GET THE APP</h2>

        </div>

    )
}
export default AuthModal