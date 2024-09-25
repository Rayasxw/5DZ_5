import { useDispatch, useSelector } from "react-redux"
import { usersGet} from "../../store/UserSlice"
import { useEffect } from "react"
import User from "../../components/User"


const UserPage = () => {
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.userReducer)
    const getUserFunction = () => {
        dispatch(usersGet())
    }
    useEffect(() => {
        getUserFunction()
    }, [])
    return (
        <div>
            {users.map(user => <User UserInfo={user} />)}
        </div>
    )
}

export default UserPage