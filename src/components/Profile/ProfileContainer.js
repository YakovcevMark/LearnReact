import React, {useEffect} from 'react'
import Profile from "./Profile";
import profile_page_reducer, {
    getProfileInfoRequest,
    getProfileStatusRequest,
    updateProfileStatusRequest
} from "../../redux/profile_page_reducer";
import withRouter from "../Hocs/WithRouterComponent/WithRouterFunction";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthNavigate} from "../Hocs/withAuthNavigateComponent/withAuthNavigate";
import {getIsFetching, getProfileInfo, getStatus, getUserId} from "../../redux/profile_selectors";


const ProfileContainer = (props) => {
    let userId = props.router.params.userId || props.sessionUserId;
    useEffect(() => {
        props.getProfileInfoRequest(userId);
        props.getProfileStatusRequest(userId);
    }, [getProfileInfoRequest, getProfileStatusRequest])
    return (
        <Profile
            {...props}
        />
    )
}
const mapStateToProps = (state) => ({
    profileInfo: getProfileInfo(state),
    isFetching: getIsFetching(state),
    status: getStatus(state),
    sessionUserId: getUserId(state),
})
export default compose(
    connect(mapStateToProps,
        {getProfileInfoRequest, getProfileStatusRequest, updateProfileStatusRequest}
    ),
    withRouter,
    withAuthNavigate,
)(ProfileContainer);
