import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";


const Users = (props) => {
    return (
        <>
            <Pagination
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                pageChanged={props.pageChanged}
            />
            {props.isFetching ? <Preloader/> :
                props.users.map(u => <User
                    key={u.id}
                    id={u.id}
                    photos={u.photos}
                    followed={u.followed}
                    followingInProgress={props.followingInProgress}
                    toggleFollowingInProgress={props.toggleFollowingInProgress}
                    makeUnFollow={props.makeUnFollow}
                    makeFollow={props.makeFollow}
                    name={u.name}
                    status={u.status}
                    location={u.location}
                />)}
        </>
    )
}
export default Users;