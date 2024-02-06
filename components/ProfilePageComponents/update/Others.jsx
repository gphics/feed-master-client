
import InputComponent from '../../InputComponent'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import fetchData from '@/utils/fetchData';
import { toast } from "react-toastify"
import { useRouter } from 'next/navigation';
import { defaultSliceActions } from '@/slices/defaultSlice';
import { useDispatch, useSelector } from "react-redux"
import { userSliceActions } from '@/slices/userSlice';
function Others() {
    const { location, firstname, lastname, contact } = useSelector(state => state.userSlice.updates.others)
    const { setIsLoading } = defaultSliceActions
    const { setUpdates, clearUpdates } = userSliceActions
    const dispatch = useDispatch()
    const router = useRouter()

    function onChangeHandler(e) {
        const { name, value } = e.target
        dispatch(setUpdates({ parent: "others", name, value }))
    }

    function submitHandler(e) {
        e.preventDefault()

        if (!location || !contact || !firstname || !lastname) {
            toast.warning("all fields must be populated")

            return;
        }
        mainSubmitHandler()
    }
    async function mainSubmitHandler() {
        dispatch(setIsLoading(true))
        const { data, err } = await fetchData("user/update", "PUT", { location, firstname, lastname, contact })
        if (err) {
            toast.error(err.message)
            return
        }
        dispatch(setIsLoading(!true))
        router.push("/main/profile")
        dispatch(clearUpdates())
        toast.success(data, { theme: "dark" })
    }
    const arr = [
        { name: "firstname", placeholder: "your firstname ", type: "text", value: firstname, Icon: IoIosContact },
        { name: "lastname", placeholder: "your lastname ", type: "text", value: lastname, Icon: IoMdContacts },
        { name: "location", placeholder: "your location ", type: "text", value: location, Icon: FaLocationDot },
        { name: "contact", placeholder: "your contact", type: "number", value: contact, Icon: IoCall },
    ]

    return (
        <form className='auth-update-form others-update' onSubmit={submitHandler}>
            <h4>update personal information</h4>
            {arr.map((elem, index) => <InputComponent onChange={onChangeHandler} key={index} {...elem} iconClass="auth-update-icon" holderClass="auth-update-input-holder" />)}
            <button className="auth-update-btn" onClick={submitHandler} type="submit">update</button>
        </form>
    )
}

export default Others


/*
firstname
lastname
location
contact
*/