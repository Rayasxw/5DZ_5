import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const usersGet = createAsyncThunk(
    'usersGet',
    async function (info, {dispatch}) {
        const response = await fetch('https://jsonplaceholder.org/users');

        if(response.status >= 200 || response.status <= 204) {
            const users = await response.json()

            dispatch(getUsers(users))
            console.log(users)
        }
    }

)

const UserSlice = createSlice({
    name: "UserSlice",
    initialState: {
        users: []
    }, reducers: {
        getUsers :(state, action) => {
            state.users = action.payload;
        }
    }
})

export const {getUsers} = UserSlice.actions
export default UserSlice.reducer