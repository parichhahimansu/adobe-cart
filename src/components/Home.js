import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartAction'
import HomeSummary from './HomeSummary';
import Slider from '@material-ui/core/Slider';

 class Home extends Component{

    //Add item to Cart
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    
    render(){
        let value;
        const handleChange = (event, newValue) => {
            value = newValue;
        };
        let itemList = this.props.items.map(item=>{
            let quantity = "0";
            this.props.addedItems.map(addedItem => {
                if(item.id == addedItem.id) {
                    quantity = addedItem.quantity;
                }
            });
            return(
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title}/>
                        <span className="card-title">{item.title}</span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>

                    <div className="card-action">
                        <div className="price-det">
                            <b>Quantity: {quantity}</b>
                        </div>
                        <div className="add-btn">
                            <button className="waves-effect waves-light btn red" 
                                onClick={()=>{this.handleClick(item.id)}}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )
        })

        return(
            <div className="container">
                <div>
                    <h4 className="header-title">Adobe Products</h4>
                    <HomeSummary/>
                </div>
                <div>
                    <Slider value={value} onChange={handleChange()} aria-labelledby="continuous-slider" />
                </div>
                <div className="box">
                    {/* Render item in a box */}
                    {itemList}
                </div>
            </div>
        )
    }
}

//Get the items from redux store
const mapStateToProps = (state)=>{
    return {
      items: state.items,
      addedItems: state.addedItems,
      total: state.total
    }
  }

//Add the dispatchers to events which will connect to redux later  
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)