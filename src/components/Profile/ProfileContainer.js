import React from 'react'
import Profile from "./Profile";
import {getProfileInfo, getProfileStatus, updateProfileStatus} from "../../redux/profile_page_reducer";
import withRouter from "../Hocs/WithRouterComponent/WithRouterFunction";
import {compose} from "redux";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) userId = 30061;
        this.props.getProfileInfo(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
    isFetching: state.profilePage.isFetching,
    status: state.profilePage.status,
})
export default compose(
    connect(mapStateToProps,
        {getProfileInfo, getProfileStatus, updateProfileStatus}
    ),
    withRouter
)(ProfileContainer);
