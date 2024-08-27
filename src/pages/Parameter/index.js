import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from '../Pages.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function Parameter() {
    const parameterData = [
        {
            id: 'CAMAG5002',
            value: '038944',
            createdAt: '16:29:21 26/8/2024'
        },
        {
            id: 'CAMAG5003',
            value: '038945',
            createdAt: '16:30:00 26/8/2024'
        },
        {
            id: 'CAMAG5004',
            value: '038946',
            createdAt: '16:31:15 26/8/2024'
        },
    ]
    return (
        <Container className={cx('mt-5', 'min')}>
            <Row xs={1} md={3} className="g-4" id="">
                {parameterData.map((meter, index) => (
                    <Col key={index}>
                        <Card className={cx('custom-card', 'shadow')}>
                            <Card.Body>
                                <Card.Title>{meter.id}</Card.Title>
                                <Card.Text>Thông số: {meter.value}</Card.Text>
                                <Card.Text >Cập nhật lúc: {meter.createdAt}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Parameter;
