import {connect, useSelector} from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.popularFriends
    }
}
const NavbarContainer = connect(mapStateToProps)(Navbar)
export default NavbarContainer;