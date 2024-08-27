import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/assets/images/logo.png';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)
function Header() {
    return (
        <Navbar expand="lg" className={cx('wapper')}>
            <Container className={cx('inner')}>
                <Navbar.Brand as={Link} to="/">
                    <img className={cx('logo')} src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link className={cx('text-light','spacing')} as={Link} to="/">Trang chủ</Nav.Link>
                        <Nav.Link className={cx('text-light','spacing')} as={Link} to="#contact">Liên hệ</Nav.Link>
                        <Nav.Link className={cx('text-light','spacing')} as={Link} to="#about">Về chúng tôi</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;