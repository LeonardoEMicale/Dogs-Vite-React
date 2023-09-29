import style from './Login.module.css';

const Login = () => {
    return (
        <div className={style.Login}>
            <form className={style.Form}>
                <input type="text" placeholder="User" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    )
};

export default Login;