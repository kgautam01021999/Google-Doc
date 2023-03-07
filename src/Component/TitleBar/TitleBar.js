import React from 'react'
import style from "./TitleBar.module.css"

export default function TitleBar() {
  return (
    <div className={style.main}>
       <img className={style.img} src="https://media1.giphy.com/media/2epS8zhisYtHDCKrWv/giphy.gif" alt="img" />
       <span>OOGLE Doc</span>
    </div>
  )
}
