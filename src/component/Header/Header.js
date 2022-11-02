import React from 'react'
import style from '../../edit/header/header.module.scss'
import news from '../../img/Payday_Main Banner_Header_1263x60.jpg'
import logo from '../../img/fahasa_logo.png'
import 'antd/dist/antd.css';
import ListIcon from '@mui/icons-material/List';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
export default function Header() {
  return (
    <div>
      <div className={style.header}>
        <img src={news} />
      </div>
      <div className={style.logo}>
        <img src={logo} />
        <ListIcon />
        <input placeholder='Tìm kiếm sản phẩm mong muốn...' />
        <button className={style.button}><SearchIcon /></button>



        <div className={style.list}>
          <div className={style.notification}>
            <NotificationsNoneOutlinedIcon />
            <p>Thông Báo</p>
          </div>
          <div className={style.cart}>
            <ShoppingCartOutlinedIcon />
            <p>Giỏ Hàng</p>
          </div>
          <div className={style.account}>
            <PermIdentityOutlinedIcon />
            <p>Tài Khoản</p>
          </div>
        </div>


      </div>
    </div>
  )
}
