import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import logo from '~/assets/images/logo.png';
import { Container, Row, Col } from 'react-bootstrap';

const cx = classNames.bind(styles)
function Footer() {
    return (
        // <footer className={cx('wapper')}>
        //     <div className={cx('inner')}></div>
        // </footer>
        <footer className={cx('wapper')} id="">
            <Container className={cx('inner')}>
                <Row className="footer-grids text-light">
                    <Col lg={6} sm={6} className="mb-lg-0 mb-sm-5 mb-4">
                        <img className={cx('logo')} src={logo} alt="logo" />
                        <br /><br />
                        <h4 className="mb-4">VIỆN CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG CDIT</h4>
                        <p className="mb-3">
                            Phân Hiệu Đại Học Thủy Lợi, Số 2, Trường Sa, Thành Phố Hồ Chí Minh
                        </p>
                    </Col>

                    <Col lg={6} sm={6} className="mb-lg-0 mb-sm-5 mb-4">
                        <h4 className="mb-4">Hotline: <span><a style={{ color: '#3985C4', textDecoration: 'none' }} href="tel:0936267689">093.626.7689</a></span></h4>
                        <h4 className="mb-4">Fanpage: <span><a style={{ color: '#3985C4', textDecoration: 'none' }} href="https://www.facebook.com/abc/" target="_blank" rel="noopener noreferrer">facebook.com/abc</a></span></h4>
                        <h4 className="mb-4">Email: <span><a style={{ color: '#3985C4', textDecoration: 'none' }} href="mailto:ezwork.vn@gmail.com">abc.vn@gmail.com</a></span></h4>
                        <br />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;