// import React from "react";
// import { useSelector } from "react-redux";
// import {
//   MDBBtn,
//   MDBBadge,
//   MDBTableBody,
//   MDBTableHead,
//   MDBTable,
// } from "mdb-react-ui-kit";

// const ProfileDetails = () => {
//   const cart = useSelector((state) => state.allcart);
//   const users = useSelector((state) =>
//     state.authuser.users ? state.authuser.users.email : "Guest"
//   );
//   return (
//     <>
//       <div className="container mx-auto mt-5">
//         <h1 className="mx-auto mt-5"> User Name - {users}</h1>

//         <MDBTable align="middle" className="mt-5">
//           <MDBTableHead>
//             <tr>
//               <th scope="col">Product Name</th>
//               <th scope="col">Details</th>
//               <th scope="col">Price</th>
//               <th scope="col">Position</th>
//               <th scope="col">Actions</th>
//             </tr>
//           </MDBTableHead>
//           <MDBTableBody>
//             {
//                 cart && cart.map((item)=>(
//                     <tr>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <img
//                           src={item.img}
//                           alt=""
//                           style={{ width: "45px", height: "45px" }}
//                           className="rounded-circle"
//                         />
//                         <div className="ms-3">
//                           <p className="fw-bold mb-1">{item.name}</p>
//                           <p className="text-muted mb-0">{item.price}</p>
//                         </div>
//                       </div>
//                     </td>
//                     <td>
//                       <p className="fw-normal mb-1">Designer</p>
//                       <p className="text-muted mb-0">UI/UX</p>
//                     </td>
//                     <td>
//                       <MDBBadge color="warning" pill>
//                         Awaiting
//                       </MDBBadge>
//                     </td>
//                     <td>Senior</td>
//                     <td>
//                       <MDBBtn color="link" rounded size="sm">
//                         Edit
//                       </MDBBtn>
//                     </td>
//                   </tr>
//                 ))
//             }
           
           
           
//           </MDBTableBody>
//         </MDBTable>
//       </div>
//     </>
//   );
// };

// export default ProfileDetails;




import React from "react";
import { useSelector } from "react-redux";
import {
  MDBBtn,
  MDBBadge,
  MDBTableBody,
  MDBTableHead,
  MDBTable,
} from "mdb-react-ui-kit";

const ProfileDetails = () => {
  const cart = useSelector((state) => state.allcart.cart); // Access the items property of the cart object
  const users = useSelector((state) =>
    state.authuser.users ? state.authuser.users.email : "Guest"
  );
  
  return (
    <>
      <div className="container mx-auto mt-5">
        <h1 className="mx-auto mt-5"> User Name - {users}</h1>

        <MDBTable align="middle" className="mt-5">
          <MDBTableHead>
            <tr>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Details</th>
              <th scope="col">Price</th>
              
              {/* <th scope="col">Actions</th> */}
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {cart  && cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={item.img}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    
                  </div>
                </td>
                <td>
                <div className="ms-3">
                      <p className="fw-bold mb-1">{item.name}</p>
                      
                    </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{item.text}</p>
                  
                </td>
                <td>
                  <MDBBadge color="warning" pill>
                    ${item.price}
                  </MDBBadge>
                </td>
                
                <td>
                  {/* <MDBBtn color="link" rounded size="sm">
                    Edit
                  </MDBBtn> */}
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
};

export default ProfileDetails;

