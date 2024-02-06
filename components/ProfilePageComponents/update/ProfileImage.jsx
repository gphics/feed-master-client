"use client"
import { FaImage } from "react-icons/fa";
import { useDispatch } from "react-redux"
import { defaultSliceActions } from "@/slices/defaultSlice"
import { useState } from "react"
import { toast } from "react-toastify"
import fetchData from "@/utils/fetchData"
function ProfileImage() {
    const { setIsLoading } = defaultSliceActions
    const dispatch = useDispatch()
    const [fileState, setFileState] = useState({ file: null })
    function onChangeHandler(e) {
        const file = e.target.files[0]
        setFileState({ file })
    }

    function submitHandler(e) {
        e.preventDefault()
        mainSubmitHandler()
    }
    async function mainSubmitHandler() {
        // 

        const file = fileState.file || null
        if (!file) {
            toast.warning("an image must be provided", { theme: "dark" })
            return;
        }
        const formData = new FormData()

        formData.append("avatar", file)
        dispatch(setIsLoading(true))
        const { err, data } = await fetchData("user/upload-avatar", "POST", formData, true)
        console.log(err, data)
        dispatch(setIsLoading(false))
        if (err) {
            toast.error(err.message, { theme: "dark" })
            return
        }

        toast.success(data, { theme: "dark" })
    }
    return (
        <form onSubmit={submitHandler} className="auth-update-form profile-image-update">
            <h4>Upload profile image</h4>
            <div className="auth-update-input-holder">
                <FaImage className="auth-update-icon" />
                <input onChange={onChangeHandler} type="file" accept="image/png, image/jpg, image/jpeg" name="avatar" />

            </div>

            <button className="auth-update-btn" onClick={submitHandler} type="submit">Update</button>
        </form>
    )
}

export default ProfileImage

