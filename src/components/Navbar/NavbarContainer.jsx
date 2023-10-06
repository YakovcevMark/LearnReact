import {connect} from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => ({
    friends: state.sidebar.popularFriends
})
const NavbarContainer = connect(mapStateToProps)(Navbar)
export default NavbarContainer;