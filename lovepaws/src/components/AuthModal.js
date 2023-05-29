const AuthModal = ({setShowModal})=>{


    const handleClick=()=>{
        setShowModal(false)
    }


    return(
        <div className="auth-modal">
            
                <div onClick =  {handleClick}>ⓧ</div>
                Auth MODAL

        </div>
        
    )
}
export default AuthModal