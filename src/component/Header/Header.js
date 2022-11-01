import React from 'react'
import style from '../../edit/header/header.module.scss'
import news from '../../img/Payday_Main Banner_Header_1263x60.jpg'
import logo from '../../img/fahasa_logo.png'
import { BsCaretDownSquare } from "react-icons/bs";
import 'antd/dist/antd.css';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
export default function Header() {
  return (
    <div>
        <div className={style.header}>
            <img  src={news}/>
        </div>
        <div className={style.logo}>
          <img src={logo}/>
          <BsCaretDownSquare />
          <input placeholder='Tìm kiếm sản phẩm mong muốn...'/>
          <button className={style.button}>aaaaa</button>
          <div>
          <Input
      placeholder="Enter your username"
      prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
    <br />
    <br />
    <Input prefix="￥" suffix="RMB" />
    <br />
    <br />
    <Input prefix="￥" suffix="RMB" disabled />
          </div>
        </div>
    </div>  
  )
}
