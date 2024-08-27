import React from 'react';
import { Container, Row, Col, InputGroup, Form, Button, Table, Pagination } from 'react-bootstrap';
import styles from '../Pages.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function History() {
  const historyData = [
    { time: '08:30:00 27/8/2024', value: '038949' },
    { time: '08:45:00 27/8/2024', value: '038950' },
    { time: '09:00:00 27/8/2024', value: '038951' },
    { time: '09:15:00 27/8/2024', value: '038952' },
    { time: '09:30:00 27/8/2024', value: '038953' },
  ];
  return (
    <Container className={cx('mt-5', 'min')}>
      <Row>
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="selectClockLabel">Chọn đồng hồ</InputGroup.Text>
            <Form.Select aria-label="Chọn đồng hồ" id="selectClock">
              <option value="clock1">Đồng hồ 1</option>
              <option value="clock2">Đồng hồ 2</option>
              <option value="clock3">Đồng hồ 3</option>
              <option value="clock4">Đồng hồ 4</option>
            </Form.Select>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Button variant="primary" id="btnSearch" type="button" className="mb-3">
            Tìm kiếm
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th scope="col">Thời gian</th>
                <th scope="col">Thông số</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((item, index) => (
                <tr key={index}>
                  <td>{item.time}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
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

export default History;
