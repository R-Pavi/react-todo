import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className='nav'>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><Link to='/information'>Information</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
    )
}

export default Nav;