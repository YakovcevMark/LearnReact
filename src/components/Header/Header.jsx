import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login, logout}) => {
    return (
        <header className={classes.header}>
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt=""/>
            {isAuth ?
                (<div>
                    {login}
                    <button onClick={logout}>Logout</button>
                </div>)
                : <div>
                    <NavLink to='/login' className={classes.login_block}>login</NavLink>
                </div>}
        </header>
    )
}

export default Header;