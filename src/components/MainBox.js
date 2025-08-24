import React from 'react';
import './MainBox.css'; // لو حابب تعمل ستايل منفصل


function MainBox() {
  return (
    <div className="main-box">
      <img 
        src="https://eskipaper.com/images/light-pink-wallpaper-5.jpg" 
        alt="وصف الصورة" 
        className="main-image" 
      />
      <div className="box-content">
        <h1>الانضمام إلى فريق المنتجين</h1>
        <div className="breadcrumbs">
          <a href="https://www.baraka.ps/" className="breadcrumb-home"> الرئيسية </a>
          <span> / الانضمام إلى فريق المنتجين </span>
        </div>
      </div>
    </div>
  );
}

export default MainBox;
