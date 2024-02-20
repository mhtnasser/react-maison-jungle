import '../styles/banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'

function Banner() {
    const text = 'La maison jungle'
    return (
    <div className="lmj-banner">
        <img src={logo} alt={text} className='lmg-logo'/>
        <h1 className='lmg-title'>{text}</h1>
        <Recommendation />
    </div>
    )
}

export default Banner