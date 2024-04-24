import React from 'react';
import './Navbar.css';

const Navbar = () => {
    
        return (
            <nav className="navbar1">
                <div className="navbar-logo1">
                    <a href="/">
                    <img src="/logo.png" alt="Logo" /> </a>
                </div>
                <div className="navbar-search1">
                    <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                    <button type="submit">Tìm kiếm</button>
                </div>
                <div className="navbar-links1">
                    <a href="#">Đăng nhập</a>
                    <a href="#">Đăng ký</a>
                    <a href="/cart">Giỏ hàng</a>
                </div>
            </nav>
        );
      }


export default Navbar;