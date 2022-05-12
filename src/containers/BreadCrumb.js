import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const BreadCrumb = () => {
  const category = useParams();
  return (
    <div style={{ marginTop: "4.5em", marginLeft: "11em" }}>
      <div class="ui small breadcrumb">
        <Link to="/" class="section">Home</Link>
        <i class="right chevron icon divider"></i>
        <Link to={`/category/${category.categoryId}`} style={{ color: "black" }} class="active section">{category.categoryId}</Link>
      </div>
    </div>
  );
};

export default BreadCrumb;