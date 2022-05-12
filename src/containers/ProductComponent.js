import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Icon, Image } from 'semantic-ui-react';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" style={{ height: 520 }} key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <Card color='teal' style={{minHeight: 425 }}>
              <Image wrapped ui={false}>
                <img style={{ width: "100%", maxHeight: 290, minHeight: 290 }} src={image} alt={title} />
              </Image>
              <Card.Content>
                <Card.Header>{title.substring(0, 23)}</Card.Header>
                <Card.Meta>$ {price} </Card.Meta>
                <Card.Meta>{category} </Card.Meta>
                <div style={{textAlign:"center", marginTop:"4%"}} > <button class="ui inverted secondary button" style={{textAlign:"center"}} >Buy</button></div>
              </Card.Content>
            </Card>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
