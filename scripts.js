@import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap");

/* global styles */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "League Spartan", sans-serif;
}

h1 {
  font-size: 50px;
  line-height: 64px;
  color: #222;
}
h2 {
  font-size: 46px;
  line-height: 54px;
  color: #222;
}
h4 {
  font-size: 20px;
  color: #222;
}
h6 {
  font-weight: 700;
  font-size: 12px;
}
p {
  font-size: 16px;
  color: #465b52;
  margin: 15px 0 20px 0;
}
.section-p1 {
  padding: 40px 0;
}
.section-m1 {
  margin: 40px 0;
}

button.normal {
  font-size: 14px;
  font-weight: 600px;
  padding: 15px 30px;
  color: #000;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: 0.2s;
}
button.normal:hover {
  background-color: #088178;
  color: #fff;
}
body {
  width: 100%;
}

/* header styles */

#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e3e6f3;
  padding: 20px 80px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  z-index: 999;
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
}

.header-list {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-list-nav ul {
  display: flex;
}
.header-list-nav ul li {
  list-style-type: none;
  padding: 0 20px;
  position: relative;
}
.header-list-nav ul a {
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  transition: 0.3s ease;
}
.header-list-nav ul a:hover,
.header-list-nav ul a.active {
  color: #088178;
  content: "";
}
.header-list-icon a {
  color: #1a1a1a;
  padding-left: 20px;
  transition: 0.3s ease;
}
.header-list-icon a:hover,
.header-list-nav ul a.active {
  color: #088178;
}
.header-list-nav ul li a:hover::after,
.header-list-nav ul li a.active::after {
  content: "";
  width: 30%;
  height: 2px;
  background: #088178;
  position: absolute;
  bottom: -4px;
  left: 20px;
}

/* home main styles */

/* hero section styles */

#hero {
  background-image: url(images/hero4.png);
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 80px;
}

#hero h4 {
  padding-bottom: 15px;
  font-size: 40px;
}
#hero h2{
  font-size: 70px;

}
#hero h1 {
  color: #088178;
  font-size: 70px;

}
#hero button {
  background-color: transparent;
  background-image: url(images/button.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 260px;
  height: 60px;
  border: 0;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  color: #088178;
  padding: 14px 65px 14px 65px;
}

/* feature section styles */

#features {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#features .f-box {
  width: 180px;
  text-align: center;
  padding: 25px 15px;
  box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);
  border: 1px solid #cce7d0;
  border-radius: 4px;
  margin: 15px 0;
  transition: box-shadow 0.3s;
}
#features .f-box:hover {
  box-shadow: 10px 10px 54px rgba(0, 0, 0, 0.1);
}
#features .f-box img {
  width: 100%;
  margin-bottom: 10px;
}
#features .f-box h6 {
  display: inline-block;
  padding: 9px 8px 6px 8px;
  line-height: 1;
  font-size: 14px;
  border-radius: 4px;
  color: #088178;
  background-color: #fddde4;
}
#features .f-box:nth-child(2) h6 {
  background-color: #cdebbc;
}
#features .f-box:nth-child(3) h6 {
  background-color: #d1e8f2;
}
#features .f-box:nth-child(4) h6 {
  background-color: #cdd4f8;
}
#features .f-box:nth-child(5) h6 {
  background-color: #f6dbf6;
}
#features .f-box:nth-child(6) h6 {
  background-color: #fff2e5;
}

/* feature section styles */

.product-section .pro-collection {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 60px;
}
.product-section h1,
.product-section p {
  text-align: center;
}
.product-section .product-cart {
  width: 280px;
  border: 1px solid #ebebeb;
  padding: 13px;
  margin-bottom: 30px;
  border-radius: 25px;
  position: relative;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  transition: box-shadow 0.2s;
}
.product-section .product-cart:hover {
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}
.product-section .product-cart img {
  width: 100%;
  border-radius: 25px;
}
.product-section .product-cart span {
  color: #969696;
  font-weight: 500;
  line-height: 30px;
}
.product-section .product-cart h4 {
  font-size: 18px;
  color: rgb(41, 41, 41);
}
.product-section .product-cart .stars {
  color: #e6ae2c;
  padding: 6px 0;
}
.product-section .product-cart .price {
  color: #088178;
  padding: 4px 0;
}
.product-section .product-cart .buy-icon {
  color: #088178;
  background-color: #c7e9e75e;
  padding: 15px;
  border-radius: 50px;
  position: absolute;
  right: 10px;
  bottom: 10px;
}

/* off banner section styles */

#off-banner {
  background-image: url(images/banner/b2.jpg);
  background-size: cover;
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#off-banner h4 {
  color: #eaebf0;
}
#off-banner h2 {
  color: #eaebf0;
  padding: 20px 0;
}

/* new arrival section styles 
  this section gets the same styles 
  in featured products section
*/

/* banners section styles */

#banners {
  margin: 0 60px;
}
#banners h2,
h4,
span {
  color: rgb(248, 248, 248);
}
#banners .big-banners {
  display: flex;
  align-items: center;
  justify-content: center;
}
#banners .big-banners div {
  min-width: 580px;
  margin: 15px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 25px;
  background-size: cover;
  backdrop-filter: blur(8%);
}
#banners .big-banners button {
  margin-top: 20px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  color: rgb(248, 248, 248);
  border: 1px solid rgb(248, 248, 248);
  cursor: pointer;
  transition: 0.3s ease;
}
#banners .big-banners div:hover button {
  background-color: #088178;
  border: 1px solid #088178;
}
#banners .big-banners-1 {
  background-image: url(images/banner/b17.jpg);
}
#banners .big-banners-2 {
  background-image: url(images/banner/b10.jpg);
}
#banners .small-banners-1 {
  background-image: url(images/banner/b7.jpg);
}
#banners .small-banners-2 {
  background-image: url(images/banner/b4.jpg);
}
#banners .small-banners-3 {
  background-image: url(images/banner/b18.jpg);
}
#banners .small-banners {
  display: flex;
  align-items: center;
  justify-content: center;
}
#banners .small-banners div {
  min-width: 370px;
  height: 200px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 25px;
  background-size: cover;
}
#banners .small-banners h2 {
  font-size: 25px;
}
#banners .small-banners h5 {
  color: #771818;
}

/* newsletter section styles */

#newsletter {
  background-image: url(images/banner/b14.png);
  background-repeat: no-repeat;
  background-position: 180px;
  background-color: #041e42;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 75px;
}
#newsletter .newsletter-text h3 {
  color: white;
  font-size: 30px;
  padding: 0 0 15px 0;
}
#newsletter .newsletter-text h5 {
  color: rgb(151, 151, 151);
  font-size: 17px;
}
#newsletter .newsletter-text h5 span {
  color: rgb(216, 182, 29);
}
#newsletter .form input {
  padding: 20px;
  width: 350px;
  height: 56px;
  background-color: #d1d0d0;
  border-radius: 6px 0 0 6px;
  font-size: 18px;

  border: none;
  outline: none;
  margin-right: -4px;
  margin-top: 1px;
}
#newsletter .form button {
  margin-left: 0;
  padding: 20px;
  border: none;
  width: 120px;
  background-color: #088178;
  color: white;
  font-size: 17px;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
}

/* footer section styles */

#footer{
  display: flex;
  align-items:flex-start;
  justify-content: space-between;
  padding: 75px;
  background-color: #ececec;
}
#footer div{
}
#footer p, #footer a{
  color: rgb(109, 109, 109);
  text-decoration: none;
}
#footer a:hover{
  color:#088178;
}
#footer .about a{
  display: block;
  padding:8px 0;
}
#footer .myaccount a{
  display: block;
  padding:8px 0;
}
#footer .download img{
  border: 1px solid #08817969;
  border-radius: 7px;
}
