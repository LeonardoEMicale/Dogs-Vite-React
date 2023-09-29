import style from './Landing.module.css';
import { Link } from 'react-router-dom';


const Landing = () => {
   
    return(
        <div className={style.Landing}>
            <Link className={style.link} to='/home'>
                Continue to see your favorites dogs!
            </Link>
        </div>
    )
};


export default Landing;