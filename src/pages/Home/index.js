import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../Pages.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 

const cx = classNames.bind(styles)
function Home() {
  const cardInfo = [
    {
      title: "Nhận diện số đo đồng hồ nước",
      text: "Nhận diện số đo đồng hồ nước từ hình ảnh của bạn.",
      link: "/identification",
    },
    {
      title: "Hình ảnh đồng hồ nước",
      text: "Danh sách hình ảnh đồng hồ nước được gửi từ Camera.",
      link: "/image",
    },
    {
      title: "Lịch sử thông số",
      text: "Lịch sử thông số đo được cập nhật theo thời gian.",
      link: "/history",
    },
    {
      title: "Thông số thời gian thực",
      text: "Danh sách thông số đồng hồ nước được gửi về thời gian thực.",
      link: "/parameter",
    },
  ];
  return (
    <Container className="mt-4">
      <Row>
        <h3 className={cx('title')}>Hệ Thống Quản Lý Đồng Hồ Nước</h3>
      </Row>
      <Row className="mt-3">
        {cardInfo.map((card, index) => (
                <Col lg={6} className="mb-4" key={index}>
                <Card className={cx('floating')}>
                    <Card.Body style={{marginLeft:'30px'}}>
                        <Card.Title className={cx('card-title')}>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                        <Link to={card.link} className={cx('arrow')} ><FontAwesomeIcon icon={faArrowRight} /></Link>
                    </Card.Body>
                </Card>
            </Col>
            ))}
      </Row>
    </Container>
  );
}

export default Home;