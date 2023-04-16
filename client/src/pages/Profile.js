import React from 'react';
import { Card, Form } from 'react-bootstrap';
import RangeSlider from '../components/RangeSlider';
import { useSelector } from 'react-redux';
function Profile() {
    const user=useSelector((state)=>state.auth.user)
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card style={{ width: '50%' }}>
               
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        Enter your preferences for searching for investments
                    </Card.Text>
                   
                    <RangeSlider style={{ justifyContent: 'center' }} />
                    <RangeSlider />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Profile