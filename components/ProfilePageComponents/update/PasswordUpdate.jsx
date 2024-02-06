import React, { useState } from 'react'
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import fetchData from '@/utils/fetchData';
import { toast } from "react-toastify"
import { useRouter } from 'next/navigation';
import { defaultSliceActions } from '@/slices/defaultSlice';
import { useDispatch, useSelector } from "react-redux"
import { userSliceActions } from '@/slices/userSlice';
import InputComponent from '../../InputComponent';
function PasswordUpdate() {
    const { newPassword, oldPassword } = useSelector(state => state.userSlice.updates.password)
    const { setIsLoading } = defaultSliceActions
    const { setUpdates, clearUpdates } = userSliceActions
    const dispatch = useDispatch()
    const router = useRouter()
    function onChangeHandler(e) {
        const { name, value } = e.target
        dispatch(setUpdates({ parent: "password", name, value }))
    }

    function submitHandler(e) {
        e.preventDefault()
        if (!oldPassword || !newPassword) {
            toast.warning("all fields are required", { theme: "dark" })
            return;
        }
        mainSubmitHandler()
    }
    async function mainSubmitHandler() {
        dispatch(setIsLoading(true))
        const { err, data } = await fetchData("user/update-password", "PUT", { oldPassword, newPassword })
        dispatch(setIsLoading(!true))
        if (err) {
            toast.error(err.message, { theme: "dark" })
            return
        }
        router.push("/main/profile")
        toast.success(data, { theme: "dark" })
        dispatch(clearUpdates())
    }
    const arr = [{ name: "oldPassword", placeholder: "old password ...", type: "password", value: oldPassword, Icon: RiLockPasswordLine }, { name: "newPassword", placeholder: "new password ...", type: "password", value: newPassword, Icon: RiLockPasswordFill },]
    return (
        <form className='auth-update-form password-update' onSubmit={submitHandler}>
            <h4>update password</h4>
            {arr.map((elem, index) => <InputComponent holderClass="auth-update-input-holder" iconClass="auth-update-icon" onChange={onChangeHandler} {...elem} key={index} />)}
            <button type='submit' className='auth-update-btn' onClick={submitHandler}>update</button>
        </form>
    )
}

export default PasswordUpdate