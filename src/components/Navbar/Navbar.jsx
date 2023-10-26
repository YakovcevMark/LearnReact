import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

import PopularFriends from "./PopularFriends/PopularFriends";


const Navbar = ({friends}) => {
    const friendsArray = friends.map( f =>
        <PopularFriends key = {f.id} name = {f.name} />
     )
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to="/profile" className={ navData => isActivated(navData) }>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={ navData => isActivated(navData) }>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/users" className={ navData => isActivated(navData) }>Users</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={ navData => isActivated(navData) }>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={ navData => isActivated(navData) }>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={ navData => isActivated(navData) }>Settings</NavLink>
            </div>
            <div className={classes.popularFriends}>
                {friendsArray}
            </div>
        </nav>
    )
}
function isActivated(navData) {
    return navData.isActive ? classes.active : classes.item;
}

export default Navbar;