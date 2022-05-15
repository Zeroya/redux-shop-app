import React from 'react';
import { useSelector } from 'react-redux';
import { addToCard, deleteFromCard } from '../redux/actions/productsActions';
import { useDispatch } from 'react-redux';

const Cards = () => {
  const cardNumber = useSelector((state) => state.handleCard);
  const dispatch = useDispatch();

  const addCard = (product) => {
    dispatch(addToCard(product));
  }

  const removeCard = (product) => {
    dispatch(deleteFromCard(product))
  }

 const Empty = () => {
   return(
     <div style={{marginTop:"20%", marginLeft:"45%"}}><h1>Empty cards...</h1></div>
   )
 }

  return ( cardNumber.length === 0 ? <Empty />  :
    <div style={{marginTop:"6rem", marginLeft:"4rem", marginRight:"10rem"}}>
      {cardNumber.map((card) => {
        const { id, title, image, price, category, qty } = card;
        return (
          <div style={{borderRadius:"2rem" , background:"white", paddingTop:"2em", paddingBottom:"2em"}} class="ui unstackable items">
            <div class="item">
              <div style={{ marginLeft: '15%', width:"16em", maxHeight:"24rem", minHeight:"14rem" }} className="ui fluid image">
                <img src={image} />
              </div>
              <div class="content" style={{marginLeft:"5%"}}>
                <a class="header">{title}</a>
                <div class="meta">
                  <span>{category}</span>
                </div>
                <div style={{marginTop:"2.5%"}} class="description">
                  <p>{qty} x {price}$ = {qty * price}$</p>
                </div>
                <div class="extra">
                  <div class="ui large buttons">
                    <button onClick={() => removeCard(card)} class="ui button active">-</button>
                    <div class="or"></div>
                    <button onClick={() => addCard(card)} class="ui button">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
  );

};

export default Cards;