import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
    return(
        <footer className='bg-dark text-white'>
            <Container>
                <Row>
                    <Col>
                        <p>one ring to rule them all</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;