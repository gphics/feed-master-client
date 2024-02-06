"use client"
import { useDispatch, useSelector } from "react-redux"
import { userSliceActions } from '@/slices/userSlice';
import InputComponent from "../../InputComponent"
import fetchData from "@/utils/fetchData"
import { toast } from "react-toastify"
import { defaultSliceActions } from "@/slices/defaultSlice"
import { IoMdMail } from "react-icons/io";
import { useRouter } from 'next/navigation';
function EmailUpdate() {
  const { setIsLoading } = defaultSliceActions
  const { email } = useSelector(state => state.userSlice.updates.email)
  const dispatch = useDispatch()
  const router = useRouter()
  const { setUpdates, clearUpdates } = userSliceActions
  function onChangeHandler(e) {
    const { name, value } = e.target
    dispatch(setUpdates({ parent: "email", name, value }))
  }
  function submitHandler(e) {
    e.preventDefault()
    if (!email) {
      toast.warning("email must be provided", { theme: "dark" })
      return;
    }
    mainSubmitHandler()
  }
  async function mainSubmitHandler() {
    dispatch(setIsLoading(true))
    const { data, err } = await fetchData("user/update-email", "PUT", { email })
    dispatch(setIsLoading(!true))
    if (err) {
      toast.error(err.message, { theme: "dark" })
      return
    }
    toast.success(data, { theme: "dark" })
    router.push("/main/profile")
    dispatch(clearUpdates())
  }
  return (
    <form onSubmit={submitHandler} className="auth-update-form">
      <h4>Update your email</h4>
      <InputComponent Icon={IoMdMail} name="email" holderClass="auth-update-input-holder" type="email" onChange={onChangeHandler} iconClass="auth-update-icon" placeholder="your new email ..." value={email} />
      <button className="auth-update-btn" type="submit" onClick={submitHandler}>update</button>
    </form>
  )
}

export default EmailUpdate