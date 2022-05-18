function renderHeader() {
   let listCart = JSON.parse(localStorage.getItem('cart'));
   let htmlItem = '';
   listCart.forEach(element => {
      htmlItem += '<li class="item-cart">\n' +
         '            <img src="../image/aoKhoac/' + element.image + '" alt="">\n' +
         '            <div class="item-cart-name">\n' +
         '               ' + element.name + '\n' +
         '               <div class="item-cart-description">\n' +
         '                  <p>Giá: ' + element.price + ' vnđ</p>\n' +
         '                  <p>Số lượng: ' + element.quantity + '</p>\n' +
         '                  <p>Màu: ' + element.color + '</p>\n' +
         '               </div>\n' +
         '            </div>\n' +
         '            <i class="fa-solid fa-trash-can" onclick="xoaItemCart(\'' + element.id + '\')"></i>\n' +
         '         </li>';
   });
   let header = '';
   header = '<nav class="navbar navbar-expand-lg navbar-light bg-light">\n' +
      '         <div class="container-fluid">\n' +
      '            <a class="navbar-brand header-logo" href="http://127.0.0.1:5500/home/home.html">\n' +
      '               <img src="../image/logo/logo.jpg" alt="">' +
      '            </a>\n' +
      '            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"\n' +
      '               data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"\n' +
      '               aria-label="Toggle navigation">\n' +
      '               <span class="navbar-toggler-icon"></span>\n' +
      '            </button>\n' +
      '            <div class="collapse navbar-collapse" id="navbarSupportedContent">\n' +
      '               <ul class="navbar-nav me-auto mb-2 mb-lg-0 header-list-title">\n' +
      '                  <li class="nav-item">\n' +
      '                     <a class="nav-link active" aria-current="page" href="http://127.0.0.1:5500/home/home.html">Home</a>\n' +
      '                  </li>\n' +
      '                  <li class="nav-item">\n' +
      '                     <a class="nav-link active" href="http://127.0.0.1:5500/chinhSachTotal/chinhSachTotal.html">Chính sách</a>\n' +
      '                  </li>\n' +
      '                  <li class="nav-item">\n' +
      '                     <a class="nav-link active" href="http://127.0.0.1:5500/uuDaiHot/uuDaiHot.html">Ưu đãi hot</a>\n' +
      '                  </li>\n' +
      '                  <li class="nav-item">\n' +
      '                     <a class="nav-link active" href="https://www.facebook.com/groups/TotofanzoneTotoshop">TOTO FANZONE</a>\n' +
      '                  </li>\n' +
      '               </ul>\n' +
      '               <form class="d-flex">\n' +
      '                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">\n' +
      '                  <button class="btn btn-outline-success header-search" type="submit">Search</button>\n' +
      '               </form>\n' +
      '    <div class="cart">\n' +
      '      <i class="fa-solid fa-cart-arrow-down"></i>\n' +
      '      <ul class="list-cart">';

   header += htmlItem;

   header += '      <a href="http://127.0.0.1:5500/chitietcart/chiTietCart.html">\n' +
      '         <button type="button" class="btn btn-primary chi-tiet-cart">Chi tiết giỏ hàng</button>\n' +
      '      </a>';

   header += '      </ul>\n' +
      '              </div>\n' +
      '            <div class="user">\n' +
      '              <img src="../image/logo/logo.jpg" alt="">\n' +
      '              <ul class="user-description">\n' +
      '                <li><a href="http://127.0.0.1:5500/CRUD/createrSp.html">Đăng sản phẩm</a></li>\n' +
      '                <li><a href="http://127.0.0.1:5500/CRUD/delateOrUpdateSp.html">Xóa hoặc sửa sản phẩm</a></li>\n' +
      '                <li><a href="http://127.0.0.1:5500/chitietcart/chiTietCart.html">Giỏ hàng</a></li>\n' +
      '                <li><a href="http://127.0.0.1:5500/login/login.html">Đăng xuất</a></li>\n' +
      '              </ul>\n' +
      '            </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '      </nav>';
   return header;
}

function xoaItemCart(id) {
   let listCart = JSON.parse(localStorage.getItem('cart'));
   listCart.splice(listCart.findIndex(sp => sp.id === id), 1);
   localStorage.setItem('cart', JSON.stringify(listCart));
   window.location.reload();
}

