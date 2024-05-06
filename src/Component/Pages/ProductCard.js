import React from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function ProductCard() {
  const product = useSelector((state) => state.allcart.items.sliderData);

  const { items, searchData } = useSelector((state) => state.allcart);
  const user = useSelector((state)=>state.authuser.users)
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <>
      <div className="m-5">
        <MDBRow className="mb-3  justify-items-center  mx-auto max-w-7xl">
          {product &&
            product
              .filter((item) => {
                if (searchData.length === 0) {
                  return item;
                }
                // else if(item.name
                //     .toLowerCase()
                //     .includes(searchData.toLowerCase())){
                //         return item
                //     }
                //  else if (item.name !== searchData) {
                //   // alert("product is not found");
                //   navigate("/nofound");
                // } 
                else {
                  return item.name
                    .toLowerCase()
                    .includes(searchData.toLowerCase());
                }
              })

              .map((item) => (
                <MDBCol size="3" key={item.id} className="mb-2">
                  <MDBCard className="h-100 w-100 mb-3 p-2 m-2">
                    <MDBCardImage
                      src={item.img}
                      position="top"
                      alt="..."
                      className="img-fluid h-100 w-100"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>{item.name}</MDBCardTitle>
                      <MDBCardText>{item.text}</MDBCardText>
                      <div className="d-flex justify-content-between">
                        <MDBCardTitle>{item.gender}</MDBCardTitle>
                        <MDBCardTitle>${item.price}</MDBCardTitle>
                      </div>
                      <MDBNavbar>
                          
                           <MDBBtn onClick={() => user? dispatch(addToCart(item)):alert("please signupn first")}>
                           Add to Cart
                         </MDBBtn>:
                        
                      
                        
                        <Link to={`/product/${item.id}`}>
                          <MDBBtn>Details</MDBBtn>
                        </Link>
                      </MDBNavbar>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
        </MDBRow>
      </div>
    </>
  );
}
