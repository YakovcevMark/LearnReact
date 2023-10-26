import {
    getUsersRequest, makeFollow, makeUnFollow,
    setCurrentPage,
    toggleFollowingInProgress,
} from "../../redux/users_page_reducer";
import Users from "./Users";
import React, {useEffect} from "react"
import {connect} from "react-redux";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users_selectors";

const UsersContainer = ({getUsersRequest, pageSize, currentPage, setCurrentPage, isFetching, totalUsersCount, users, followingInProgress, toggleFollowingInProgress, makeFollow, makeUnFollow}) => {
    useEffect(() => {
        getUsersRequest(pageSize, currentPage);

    }, [currentPage, getUsersRequest, pageSize])

    function onPageChanged(numberOfPage) {
        setCurrentPage(numberOfPage);
        getUsersRequest(pageSize, numberOfPage)
    }


    return <>
        <Users
            currentPage={currentPage}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            users={users}
            followingInProgress={followingInProgress}
            toggleFollowingInProgress={toggleFollowingInProgress}
            makeFollow={makeFollow}
            makeUnFollow={makeUnFollow}
            pageChanged={onPageChanged}
            isFetching={isFetching}
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
