import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class HomeSummary extends Component{
    
    render(){
        return(
            <div className="summary-box">
            {this.props.total ? 
                <div className="collection">
                    <li className="collection-item">
                        <div className="cart_det">
                            <b>Items: {this.props.addedItems.length}&nbsp;&nbsp;&nbsp; </b>
                            <b>Total: {this.props.total}$</b>
                        </div>
                        <div className="cart_btn">
                            <button className="waves-effect waves-light btn"><Link to="/cart">Go to Cart</Link></button>
                        </div>
                    </li>
                </div>
            : null}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(HomeSummary)