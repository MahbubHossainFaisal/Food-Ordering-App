import { Fragment } from 'react'
import restaurantImage from '../../assets/restautant-img.jpg'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'


const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>SPICY DINE</h1>
            <HeaderCartButton onView={props.onView} />
        </header>
        <div className={classes['main-image']}>
            <img src={restaurantImage} alt="View of the restaurant" />
        </div>
    </Fragment>
}

export default Header