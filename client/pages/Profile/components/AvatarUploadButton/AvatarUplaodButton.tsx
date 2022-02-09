import React, {ChangeEventHandler, useRef, useState} from 'react';
import {Button} from "client/components/Button";
import css from './style.module.pcss';
import {Props} from "./types";
import {ApiPath} from "client/api/consts";
import useRequest from "client/hooks/useRequest";
import {user} from "client/api/user";

const AvatarUplaodButton: Props = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [isLoading, send] = useRequest();

    const url = ApiPath.USER.UPDATE_AVATAR;

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
            if (response.status === 400) {
                const errors = response.data?.errors;
                if (errors) {
                    setErrors(errors.map(error => error.message ?? ''));
                }
            }
        }))
    }

    return (
        <form>
            <div className={css.wrapper}>
                <input type="file" onChange={onChange} ref={inputRef}/>
                <Button type={'button'} onClick={onClick}>upload</Button>
            </div>
            <div className={css.errors}>
                {errors.map(error => error)}
            </div>
        </form>
    );
};

export default AvatarUplaodButton;