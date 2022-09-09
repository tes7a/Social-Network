import React, {ChangeEvent, useState} from 'react';

type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void,
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateMode = () => {
        setEditMode(true);
    }

    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                   <b>Status</b>: <span onDoubleClick={ activateMode }>{ props.status || "---" }</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={ onStatusChange } autoFocus={ true } onBlur={ deactivateMode }
                           value={ status }/>
                </div>
            }
        </div>
    )
}