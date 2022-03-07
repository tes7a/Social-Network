import React, {ChangeEvent, LegacyRef} from "react";

type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    statusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
          status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.statusChange} autoFocus={true} onBlur={this.deactivateMode} value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}