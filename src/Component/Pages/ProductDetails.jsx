import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
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

    useEffect(() => {
        if (id && items) {
            const singleProduct = items.find((item) => item.id === id);
            setProduct(singleProduct);
        }
    }, [id, items]);

    return (
        <div>
            {product ? (
                <MDBCol size="3" className="mb-2 mx-auto">
                    <MDBCard className="h-100 w-100 mb-3 p-2 m-2">
                        <MDBCardImage
                            src={product.img}
                            position="top"
                            alt="..."
                            className="img-fluid h-100 w-100"
                        />
                        <MDBCardBody>
                            <MDBCardTitle>{product.name}</MDBCardTitle>
                            <MDBCardText>{product.text}</MDBCardText>
                            <div className="d-flex justify-content-between">
                                <MDBCardTitle>{product.gender}</MDBCardTitle>
                                <MDBCardTitle>${product.price}</MDBCardTitle>
                            </div>
                             <MDBBtn onClick={() => console.log('Add to Cart')}>Add to Cart</MDBBtn>
                         </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProductDetails;

