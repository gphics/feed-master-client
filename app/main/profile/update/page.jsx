"use client"
import profileUpdateComponents from "@/components/ProfilePageComponents/update"
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userSliceActions } from "@/slices/userSlice";
import fetchData from "@/utils/fetchData";
import { defaultSliceActions } from "@/slices/defaultSlice";

function ProfileUpdate() {
  const { ProfileImage, Others, EmailUpdate, PasswordUpdate } = profileUpdateComponents
  const { fillUpdates } = userSliceActions;
  const { setIsLoading } = defaultSliceActions
  const dispatch = useDispatch()
  async function fetchUser() {
    dispatch(setIsLoading(true));
    const result = await fetchData("user");

    if (result) {
      const { data, err } = result
      dispatch(setIsLoading(false));
      if (err) {
        toast.error(err.message, { theme: "dark" })
        return
      }
      const { location, contact, firstname, lastname, email } = data;
      dispatch(
        fillUpdates({
          name: "others",
          obj: { location, contact, firstname, lastname },
        })
      );
      dispatch(fillUpdates({ name: "email", obj: { email } }));
    }

  }
  useEffect(() => { fetchUser() }, [])
  return (
    <div className="profile-update-page">
      <ProfileImage />
      <EmailUpdate />
      <PasswordUpdate />
      <Others />
    </div>
  )
}

export default ProfileUpdate