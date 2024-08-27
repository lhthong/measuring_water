import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import styles from '../Pages.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function Identification() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [detectedImage, setDetectedImage] = useState(null);
    const [cutoutImage, setCutoutImage] = useState(null);
    const [resultText, setResultText] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDetect = () => {
        // Thêm logic nhận diện hình ảnh ở đây
        setResultText("Kết quả nhận diện"); // Ví dụ kết quả
        setDetectedImage(selectedImage); // Ví dụ: đặt hình ảnh nhận diện là hình ảnh đã chọn
        // Cập nhật cutoutImage bằng hình ảnh thực tế nếu có
        setCutoutImage("URL của hình ảnh mặt cắt đồng hồ");
    };

    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <Card className={cx('identifica')}>
                        <Card.Header>
                            <h5 className="card-title mb-0">Nhập hình ảnh</h5>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="file"
                                    id="imageInput"
                                    onChange={handleImageChange}
                                />
                            </Form.Group>
                            <Button id="btnDetect" variant="primary" className="w-100" onClick={handleDetect}>
                                Nhận diện
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className={cx('identifica')}>
                        <Card.Header>
                            <h5 className="card-title mb-0">Kết quả nhận diện</h5>
                        </Card.Header>
                        <Card.Body>
                            <Form.Control as="h1" className="mb-3" id="result" readOnly value={resultText} />
                            <div className="mb-3">
                                <h5>Hình ảnh được chọn</h5>
                                <img width="300" height="auto" src={selectedImage} alt="User selected" className="img-fluid mb-3" id="userImage" />
                            </div>
                            <div className="mb-3">
                                <h5>Hình ảnh sau khi nhận diện</h5>
                                <img width="300" height="auto" src={detectedImage} alt="Detected content" className="img-fluid mb-3" id="detectedImage" />
                            </div>
                            <div className="mb-3">
                                <h5>Hình ảnh mặt cắt đồng hồ</h5>
                                <img width="300" height="auto" src={cutoutImage} alt="Cutout view" className="img-fluid mb-3" id="cutoutImage" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Identification;