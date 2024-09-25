

const User = ({UserInfo}) => {
    return (
        <div>
            <h1>{UserInfo.email}</h1>
            <button>подробнее</button>
            <p>------------------</p>
        </div>
    )
}

export default User;