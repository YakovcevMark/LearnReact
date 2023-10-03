import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt=""/>
            <NavLink to='/login' className={classes.login_block}>
                {props.isAuth ? props.login : "login"}
            </NavLink>
        </header>
    )
}

export default Header;