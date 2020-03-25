import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Its a pure function no react component needed
 const Navbar = (props)=>{
     let notify_cart = props.addedItems.length ? "btn-floating pulse" : "";
    return(
        <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo"> Adobe Cart</Link>
                    
                    <ul className="right">
                        <li><Link to="/"><i className="material-icons">home</i></Link></li>
                        <li><Link to="/cart" className={notify_cart}>
                            <i className="material-icons">shopping_cart</i></Link>
                        </li>
                    </ul>
                </div>
            </div>  
        </nav>
    )
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
    }
}

export default connect(mapStateToProps)(Navbar)
