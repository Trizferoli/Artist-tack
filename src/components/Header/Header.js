import './style.css'
import image from '../../assets/microphone_in_fist.svg'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className="header-background">
            <Link to='/'>
                <img src={image} alt='microphone in hand'></img>
            </Link>
            <h1>Buy tickets</h1>
        </div>
    )
}