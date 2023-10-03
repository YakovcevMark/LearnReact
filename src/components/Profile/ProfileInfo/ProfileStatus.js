import React from 'react'


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    componentWillUnmount() {
        if (this.props.status !== this.state.status)
            this.props.updateProfileStatus(this.state.status);
    }

    onTitleChanged = (e) => {
        this.setState({
            status: e.target.value,
        })
    }
    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode,
        })
    }


    render() {
        return <div>
            {!this.state.editMode
                ? <div>
                      <span onDoubleClick={this.toggleEditMode}>
                          {this.state.status || "Update status"}
                      </span>
                </div>
                : <div>
                    <input autoFocus={true}
                           onBlur={this.toggleEditMode}
                           value={this.state.status}
                           onChange={this.onTitleChanged}>
                    </input>
                </div>
            }
        </div>

    }
}

export default ProfileStatus;