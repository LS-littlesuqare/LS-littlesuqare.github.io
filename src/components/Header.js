import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">编程作品展示</h1>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/showcase">作品展示</Link></li>
                    <li><Link to="/profile">个人信息</Link></li>
                    <li><Link to="/auth">登录/注册</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;