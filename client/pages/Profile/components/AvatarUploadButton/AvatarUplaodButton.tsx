import React, {ChangeEventHandler, useRef, useState} from 'react';
import {Button} from "client/components/Button";
import css from './style.module.pcss';
import {Props} from "./types";
import useRequest from "client/hooks/useRequest";
import {user, UserDTO} from "client/api/user";
import {useDispatch} from "react-redux";
import {createCheckAuthAction} from "client/reducers/user/actions";
import {isSuccessFormResponse, isValidationError} from "../../../../utils/api/guards";

const AvatarUplaodButton: Props = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [showLoading, send] = useRequest();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState<string[]>([]);

    const onClick = () => {
        inputRef.current?.click();
    };

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const files = inputRef.current?.files;
        const file = files && files[0];

        if (!file) {
            return;
        }

        if (!file || file.type !== 'image/jpeg') {
            setErrors(['Only jpeg!']);
        } else {
            setErrors([]);
        }

        const formData  = new FormData();
        formData.append('avatar', file);

        // send to server
        send(() => user.updateAvatar(formData).then(response => {
            if (isValidationError(response)) {
                const errors = response.data?.errors;
                if (errors) {
                    setErrors(errors.map(error => error.message ?? ''));
                }
            } else if (isSuccessFormResponse<UserDTO>(response)) {
                dispatch(createCheckAuthAction(response.data ?? null));
            }
        }));
    }

    return (
        <form>
            <div className={css.wrapper}>
                <input type="file" onChange={onChange} ref={inputRef}/>
                <Button type={'button'} onClick={onClick}>
                    { showLoading ? 'loading...' : 'upload' }
                </Button>
            </div>
            <div className={css.errors}>
                {errors.map(error => error)}
            </div>
        </form>
    );
};

export default AvatarUplaodButton;