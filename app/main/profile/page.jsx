"use client"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import fetchData from "@/utils/fetchData"
import { userSliceActions } from "@/slices/userSlice";
import { defaultSliceActions } from "@/slices/defaultSlice";
import profilePageComponents from "@/components/ProfilePageComponents/main";
import { useRouter } from "next/navigation";
function ProfilePage() {
  const router = useRouter()
  const { ProfileHeroComponent, ProfileInfoComponent } = profilePageComponents
  const { userInfo } = useSelector(state => state.userSlice)
  const { fillUserInfo } = userSliceActions
  const { setIsLoading } = defaultSliceActions
  const [heroUrl, setHeroUrl] = useState(process.env.NEXT_PUBLIC_DEFAULT_IMAGE)
  const dispatch = useDispatch()
  async function fetchUser() {
    dispatch(setIsLoading(true))
    const result = await fetchData("user")
    if (result) {
      dispatch(setIsLoading(!true))
      const { data, err } = result
      if (err) {
        toast.error(err.message, { theme: "dark" })
        return
      }
      const { location, contact, firstname, lastname, email } = data
      if (!location || !contact || !firstname || !email || !lastname) {
        router.push("/main/profile/update")
      }
      dispatch(fillUserInfo(data))
      setHeroUrl(data.avatar.url)
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])
  return !userInfo ? <></> : <div className="profile-page">
    <ProfileHeroComponent url={heroUrl} />
    <ProfileInfoComponent {...userInfo} />
  </div>

}

export default ProfilePage