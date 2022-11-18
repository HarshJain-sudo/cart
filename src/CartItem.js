 import React from 'react';

class CartItem extends React.Component {
constructor(){
  super();
  this.state={
    price:100,
    title:"phone",
    qty:1,
    img:''
  }

}
increaseQuantity=()=>{
  // this.state.qty+=1;
  console.log( "this",this.state.qty )
  // setState form 1
  // this.setState({
  //   qty:this.state.qty+1
  // })

  // setState form 2
  this.setState((prevState)=>{
    return{
      qty : prevState.qty+1 
    }
  })
}

decreaseQuantity = ()=>{
  this.setState({
    qty:this.state.qty-1
  })
}
  render () {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/399/399271.png"
              onClick={this.increaseQuantity}
            />
            < img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/7080/7080604.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;

