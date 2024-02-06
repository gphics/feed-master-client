"use client";
import InputComponent from "@/components/InputComponent";
import { defaultSliceActions } from "@/slices/defaultSlice";
import { userSliceActions } from "@/slices/userSlice";
import fetchData from "@/utils/fetchData";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify"

function Register() {
  const { setIsLoading } = defaultSliceActions
  const { password, email } = useSelector((state) => state.userSlice.register);
  const dispatch = useDispatch();
  const router = useRouter()
  const { updateReg, clearRegInfo } = userSliceActions;
  const formArr = [
    {
      name: "email",
      type: "email",
      value: email,
      placeholder: "enter your email",
      holderClass: "auth-input-holder",
      Icon: MdEmail,
      iconClass: "auth-icon",
    },
    {
      name: "password",
      type: "password",
      value: password,
      placeholder: "enter your password",
      holderClass: "auth-input-holder",
      Icon: RiLockPasswordFill,
      iconClass: "auth-icon",
    },
  ];
  function onChangeHandler(e) {
    const { name, value } = e.target;
    dispatch(updateReg({ name, value }));
  }

  async function sendData() {
    if (!password || !email) {
      toast.warn("fill all the form input field", { theme: "dark" })
      return;
    }
    dispatch(setIsLoading(true))
    const result = await fetchData("user/register", "POST", { email, password })

    if (result) {
      const { data, err } = result
      dispatch(setIsLoading(false))
      if (err) {
        toast.error(err.message, { theme: "dark" })
        return;
      }
      router.push("/main")
      toast.success(data, { theme: "dark" })
      dispatch(clearRegInfo())
    }


  }
  function submitHandler(e) {
    e.preventDefault();
    sendData();
  }

  // default clearing
  useEffect(() => { dispatch(clearRegInfo()) }, [])
  return (
    <div className="form-overlay register-page">
      <Head>
        <title> register </title>
      </Head>
      <form onSubmit={submitHandler} className="auth-form">
        {formArr.map((elem, index) => (
          <InputComponent onChange={onChangeHandler} key={index} {...elem} />
        ))}
        <button onClick={submitHandler} className="auth-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
