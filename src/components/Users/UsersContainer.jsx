import {
    getUsers, makeFollow, makeUnFollow,
    setCurrentPage,
    toggleFollowingInProgress,
} from "../../redux/users-page-reducer";
import Users from "./Users";
import React from "react"
import Preloader from "../common/Preloader/Preloader";

import {connect} from "react-redux";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged(numberOfPage) {
        this.props.setCurrentPage(numberOfPage);
        this.props.getUsers(this.props.pageSize, numberOfPage)
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                makeFollow={this.props.makeFollow}
                makeUnFollow={this.props.makeUnFollow}
                pageChanged={this.onPageChanged.bind(this)}
            />
        </>
    }
}

const mapStateToProps = state => ({
    isFetching: state.usersPage.isFetching,
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    followingInProgress: state.usersPage.followingInProgress,
})
export default compose(
    connect(mapStateToProps,
        {
            setCurrentPage, toggleFollowingInProgress,
            getUsers, makeFollow, makeUnFollow
        })
)(UsersContainer)
