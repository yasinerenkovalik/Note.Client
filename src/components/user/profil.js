import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';

function Profil() {
  const navigation = useNavigate();
  const [user, setUser] = useState(null); // Kullanıcı bilgilerini state olarak saklayacağız.

  useEffect(() => {
    const userToken = localStorage.getItem('token');

    if (userToken === null) {
      navigation('/login');
    } else {
      const decodedUser = jwt_decode(userToken);
      console.log(decodedUser)
      setUser(decodedUser); // Kullanıcı bilgilerini state'e atıyoruz.
    }
  }, []);

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid
                />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user ? user.email : 'Loading...'}
                    </MDBCardText>
                    {/* Replace "John Doe" with actual full name */}
                  </MDBCol>
                </MDBRow>
                <hr />
                {/* Repeat similar pattern for other user information fields */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Profil;
