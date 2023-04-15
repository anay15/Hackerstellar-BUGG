import React from 'react';
import { Card, Form } from 'react-bootstrap';
import RangeSlider from '../components/RangeSlider';
function Profile() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card style={{ width: '50%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                    />
                </div>
                <Card.Body>
                    <Card.Title>My Centered Card</Card.Title>
                    <Card.Text>
                        This card is centered on the page and occupies 50% of the page width. It also has a placeholder for a profile picture.
                    </Card.Text>
                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload Profile Picture</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Form>
                    <RangeSlider style={{ justifyContent: 'center' }} />
                    <RangeSlider />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Profile