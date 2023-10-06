import {
    getUsersRequest, makeFollow, makeUnFollow,
    setCurrentPage,
    toggleFollowingInProgress,
} from "../../redux/users-page-reducer";
import Users from "./Users";
import React, {useEffect} from "react"
import Preloader from "../common/Preloader/Preloader";

import {connect} from "react-redux";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users_selectors";

const UsersContainer = (props) => {
    useEffect(() => {
        props.getUsersRequest(props.pageSize, props.currentPage);

    }, [props.pageSize, props.currentPage])

    function onPageChanged(numberOfPage) {
        props.setCurrentPage(numberOfPage);
        props.getUsersRequest(props.pageSize, numberOfPage)
    }


    return <>
        {props.isFetching && <Preloader/>}
        <Users
            currentPage={props.currentPage}
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            users={props.users}
            followingInProgress={props.followingInProgress}
            toggleFollowingInProgress={props.toggleFollowingInProgress}
            makeFollow={props.makeFollow}
            makeUnFollow={props.makeUnFollow}
            pageChanged={onPageChanged}
        />
    </>

}

const mapStateToProps = state => ({
    isFetching: getIsFetching(state),
    users: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    followingInProgress: getFollowingInProgress(state),
})
export default compose(
    connect(mapStateToProps,
        {
            setCurrentPage, toggleFollowingInProgress,
            getUsersRequest, makeFollow, makeUnFollow
        })
)(UsersContainer)
