import React from 'react';
import { Container, Row, Col, InputGroup, Form, FormControl, Button, Pagination, Card } from 'react-bootstrap';
import styles from '../Pages.module.scss';
import classNames from 'classnames/bind';
import logo from '~/assets/images/logo.png';

const cx = classNames.bind(styles)
function Image() {
    const imageData = [
        { time: '08:14:43 27/8/2024', image: logo },
        { time: '08:30:00 27/8/2024', image: logo },
        { time: '09:00:00 27/8/2024', image: logo },
    ];
    return (
        <Container className={cx('mt-5', 'min')}>
            <Row>
                <Col md={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text htmlFor="selectClock">Chọn đồng hồ</InputGroup.Text>
                        <Form.Select id="selectClock">
                            <option value="clock1">Đồng hồ 1</option>
                            <option value="clock2">Đồng hồ 2</option>
                            <option value="clock3">Đồng hồ 3</option>
                            <option value="clock4">Đồng hồ 4</option>
                        </Form.Select>
                    </InputGroup>
                </Col>
                <Col md={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text htmlFor="dateInput">Chọn ngày</InputGroup.Text>
                        <FormControl type="date" id="dateInput" />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Button id="btnSearch" variant="primary" type="button" className="mb-3">Tìm kiếm</Button>
                </Col>
            </Row>
            <Row id="image">
                {imageData.map((item, index) => (
                    <Col key={index} md={3} sm={6} style={{ padding: '20px' }}>
                        <Card className="image-card">
                            <Card.Img variant="top" src={item.image} alt="" />
                            <Card.Body className="text-center">
                                <Card.Text>{item.time}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col md={12}>
                    <Pagination className="justify-content-center">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        {/* <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item disabled>{14}</Pagination.Item> */}

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
}
export default Image;
