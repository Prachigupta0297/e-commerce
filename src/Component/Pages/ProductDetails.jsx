import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNavbar,
} from "mdb-react-ui-kit";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const items = useSelector((state) => state.allcart.items.sliderData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id && items) {
      const singleProduct = items.find((item) => item.id === id);
      setProduct(singleProduct);
    }
  }, [id, items]);

  return (
    <div>
      {product ? (
       
       <MDBCol className="mb-2 p-5 mx-auto">
          <MDBCard className="mt-5 max-auto text-center">
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage src={product.img} alt="..." fluid />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>
                    <b>{product.name}</b>
                  </MDBCardTitle>
                  <MDBCardText>
                    <h3 className="mt-5">{product.text}</h3></MDBCardText>
                  <MDBCardText>
                    <small className="text-muted"><b>${product.price}</b></small>
                  </MDBCardText>
                  <MDBBtn onClick={() => dispatch(addToCart(product))}>
                    Add to Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      ) : (
        <h5 className="text-center mt-5 bg-dark text-light p-5">
          Page Not Found
        </h5>
      )}
    </div>
  );
};

export default ProductDetails;
