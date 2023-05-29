import colorlogo from'../images/logo.png'
import whitelogo from '../images/whiteLogo.png'
//THERE SHOULD BE A WHITE LOGO AND A COLOR ONE FOR NOW IM USING A COLOR ONE ONLY

const Nav = ({minimal,authToken})=>{


    return(
        <nav>
            <div className="logo-container"> 
                <img className="logo"src={minimal? colorlogo:whitelogo}/>
            </div>
            {!authToken && <button className='nav-button'>Log in</button>}
        </nav>
        
    )
}
export default Nav