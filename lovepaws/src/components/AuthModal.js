const AuthModal = ({ setShowModal }) => {


    const handleClick = () => {
        setShowModal(false)
    }


    return (
        <div className="auth-modal">

            <div onClick={handleClick}><span>&#10005;</span></div>
            Auth MODAL

        </div>

    )
}
export default AuthModal