function renderCart() {
   let listCart = JSON.parse(localStorage.getItem('cart'));
   let html = '';
   let total = 0;
   listCart.map(element => total += (parseInt(element.quantity) * parseInt(element.price)));
   html = '      <div class="row">\n' +
      '         <div class="col-12 title">Chi tiết giỏ hàng</div>\n' +
      '         <table class="table">\n' +
      '            <thead>\n' +
      '               <tr>\n' +
      '                  <th scope="col">#</th>\n' +
      '                  <th scope="col">Hình ảnh</th>\n' +
      '                  <th scope="col">Tên sản phẩm</th>\n' +
      '                  <th scope="col">Size</th>\n' +
      '                  <th scope="col">Màu sắc</th>\n' +
      '                  <th scope="col">Số lượng</th>\n' +
      '                  <th scope="col">Giá</th>\n' +
      '                  <th scope="col">Xóa</th>\n' +
      '               </tr>\n' +
      '            </thead>\n' +
      '            <tbody>';

   listCart.forEach((element, index) => {
      html += '<tr>\n' +
         '                  <th scope="row">' + (index + 1) + '</th>\n' +
         '                  <td><img src="../image/aoKhoac/' + element.image + '" alt=""></td>\n' +
         '                  <td>' + element.name + '</td>\n' +
         '                  <td>' + element.size + '</td>\n' +
         '                  <td>' + element.color + '</td>\n' +
         '                  <td>' + element.quantity + '</td>\n' +
         '                  <td>' + element.price + '</td>\n' +
         '                  <td><i class="fa-solid fa-trash-can" onclick="xoaItemCart(\'' + element.id + '\')"></i></td>\n' +
         '               </tr>';
   })

   html += '</tbody>\n' +
      '         </table>\n' +
      '      <div class="col-12 total">Tổng: ' + total + '.000 VNĐ</div>\n' +
      '      <a href="http://127.0.0.1:5500/thanhToan/thanhToanCart.html">\n' +
      '         <button type="button" class="btn btn-primary thanh-toan">Thanh toán</button>\n' +
      '      </a>\n' +
      '   </div>';
   return html;
}

function xoaItemCart(id) {
   let listCart = JSON.parse(localStorage.getItem('cart'));
   listCart.splice(listCart.findIndex(sp => sp.id === id), 1);
   localStorage.setItem('cart', JSON.stringify(listCart));
   window.location.reload();
}
