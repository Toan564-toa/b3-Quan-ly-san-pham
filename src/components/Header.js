import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <h2>Shop</h2>
      <nav>
        <Link className='li' to={`/`}>Trang chủ</Link>
        <Link className='li'to={`/product-manage`}>Quản lý sản phẩm</Link>
      </nav>
      <div></div>
    </div>
  )
}

export default Header
