import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Icon, Image } from 'semantic-ui-react';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" style={{ height: 525 }} key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <Card color='teal'>
              <Image wrapped ui={false}>
                <img style={{ width: 250, maxHeight: 300, minHeight: 200 }} src={image} alt={title} />
              </Image>
              <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>$ {price} </Card.Meta>
                <Card.Meta>{category} </Card.Meta>
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
