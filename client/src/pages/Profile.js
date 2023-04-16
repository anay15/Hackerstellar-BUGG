import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import RangeSlider from '../components/RangeSlider';
import { useSelector } from 'react-redux';
function Profile() {
    const user=useSelector((state)=>state.auth.user);
    const [name,setName]=useState('');

    useEffect(()=>{
        if(user)
        setName(user.name)
    },[user])
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card style={{ width: '50%' }}>
               
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Enter your preferences for searching for investments
                    </Card.Text>
                    <Card.Text>
                        Select the following from a range of 0 to 10: 0 is least impactful and 10 is most impactful
                    </Card.Text>
                   
                    Environmental Impact
                    <RangeSlider style={{ justifyContent: 'center' }} />

                    Societal Impact
                    <RangeSlider />

                    <Button>Save</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Profile