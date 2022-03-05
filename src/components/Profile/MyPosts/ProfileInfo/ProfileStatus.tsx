import React from "react";

type ProfileStatusType = {
    status: string,
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
    }

    activateMode () {
        this.setState({
            editMode: true
        })
    }
    deactivateMode () {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateMode.bind(this)} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}