import React, {useEffect} from 'react'
import Profile from "./Profile";
import {
    getProfileInfoRequest,
    getProfileStatusRequest, savePhoto, updateProfileRequest,
    updateProfileStatusRequest
} from "../../redux/profile_page_reducer";
import withRouter from "../Hocs/WithRouterComponent/WithRouterFunction";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthNavigate} from "../Hocs/withAuthNavigateComponent/withAuthNavigate";
import {getIsFetching, getProfileInfo, getStatus, getUserId} from "../../redux/profile_selectors";
import Preloader from "../common/Preloader/Preloader";


const ProfileContainer = ({
                              router,
                              sessionUserId,
                              getProfileInfoRequest,
                              getProfileStatusRequest,
                              isFetching,
                              profileInfo,
                              status,
                              updateProfileStatusRequest,
                              savePhoto,
                              updateProfileRequest,
                          }) => {
    let userId = router.params.userId || sessionUserId;
    useEffect(() => {
        getProfileInfoRequest(userId);
        getProfileStatusRequest(userId);
    }, [getProfileInfoRequest, getProfileStatusRequest, userId])
    return <>
        {profileInfo == null ? <Preloader/> : <Profile
                isOwner={!router.params.userId}
                isFetching={isFetching}
                profileInfo={profileInfo}
                status={status}
                getProfileStatusRequest={getProfileStatusRequest}
                updateProfileStatusRequest={updateProfileStatusRequest}
                router={router}
                savePhoto={savePhoto}
                updateProfileRequest={updateProfileRequest}
            />}
    </>
}
const mapStateToProps = (state) => ({
    profileInfo: getProfileInfo(state),
    isFetching: getIsFetching(state),
    status: getStatus(state),
    sessionUserId: getUserId(state),
})
export default compose(
    connect(mapStateToProps,
        {
            getProfileInfoRequest,
            getProfileStatusRequest,
            updateProfileStatusRequest,
            savePhoto,
            updateProfileRequest
        }
    ),
    withRouter,
    withAuthNavigate,
)(ProfileContainer);
