import React, {useContext,useEffect,useState } from "react";
import { useParams } from "react-router";
import "./Checkout.css"; 
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import Shipment from "../Shipment/Shipment";


const Checkout = () => {
 

  const [product,setProducts]=useState();

  const [user, setUser]=useContext(UserContext);

  const {_id}=useParams();
  useEffect(() => {
    // fetch(`http://localhost:8500/services/${_id}`)
    fetch(`https://boiling-retreat-60727.herokuapp.com/services/${_id}`)
    .then(res => res.json())
    .then(data => setProducts(data))
   }, [_id])
    
  return (

    <div>
      <h1>Hello {user.name}!,This is Checkout,Confirm Your Order Now.</h1>
    <table>
    {/* <caption>Checkout</caption> */}
    <thead>
        <tr>
        <th scope="col">Description</th>
        <th scope="col">Quantity</th>
        <th scope="col">Amount</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td data-label="Description">{product && product.name}</td>
        <td data-label="Quantity">{product && product.Quantity}</td>
        <td data-label="Amount">${product && product.price}</td>
        </tr>
    
        <tr>
        <td scope="row" data-label="Description">Total</td>
        <td data-label="">{product && product.Quantity}</td>
        <td data-label="Grand Total">${product && product.price}</td>
        </tr>
    </tbody>
    </table>

   <div className="pt-5 text-center">
     <button>Order Now</button>
   </div>

   
<Link to={`/home`}>
  <div className="text-left">
     <button>Back to home</button>
   </div>
</Link>

  <div>
    <Shipment></Shipment>
  </div>

</div>    


  );
};

export default Checkout;
