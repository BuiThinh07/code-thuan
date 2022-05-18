function renderThanhToan() {
   let sp = JSON.parse(localStorage.getItem('muaNgay'));
   let tamTinh = parseInt(sp.price) * parseInt(sp.quantity);
   let html = '';
   html = '<div class="row" style="margin: 24px 0 76px 0">\n' +
      '         <div class="col-12 checkout">Thanh toán sản phẩm</div>\n' +
      '         <div class="col-12 col-lg-4">\n' +
      '            <div class="col-12 title">\n' +
      '               <p>1</p>\n' +
      '               Thông tin hóa đơn\n' +
      '            </div>\n' +
      '            <div class="col-12 title-description">Họ và tên</div>\n' +
      '            <input type="text" class="form-control" placeholder="Nhập họ và tên...">\n' +
      '            <div class="col-12 title-description">Email</div>\n' +
      '            <input type="text" class="col-6 form-control" placeholder="Nhập họ và tên...">\n' +
      '            <div class="col-12 title-description">Điện thoại</div>\n' +
      '            <input type="text" class="col-6 form-control" placeholder="Nhập họ và tên...">\n' +
      '            <div class="col-12 title-description">Địa chỉ</div>\n' +
      '            <input type="text" class="form-control" placeholder="Nhập họ và tên...">\n' +
      '            <div class="row">\n' +
      '               <div class="col-6">\n' +
      '                  <div class="col-12 title-description">Tỉnh/ Thành phố</div>\n' +
      '                  <input type="text" class="form-control" placeholder="Nhập họ và tên...">\n' +
      '               </div>\n' +
      '               <div class="col-6">\n' +
      '                  <div class="col-12 title-description">Quận/ Huyện</div>\n' +
      '                  <input type="text" class="form-control" placeholder="Nhập họ và tên...">\n' +
      '               </div>\n' +
      '            </div>\n' +
      '            <div class="col-12 title-description">Phường/ Xã</div>\n' +
      '            <input type="text" class="form-control" placeholder="Nhập họ và tên...">\n' +
      '            <textarea class="col-12" placeholder="Ghi chú đơn hàng"></textarea>\n' +
      '         </div>\n' +
      '\n' +
      '         <div class="col-12 col-lg-4">\n' +
      '            <div class="col-12 title">\n' +
      '               <p>2</p>\n' +
      '               Phương thức thanh toán\n' +
      '            </div>\n' +
      '            <input class="form-check-input" type="radio" name="thanhToan" id="thanhToan">\n' +
      '            <label class="form-check-label" for="thanhToan">\n' +
      '               Thanh toán tiền mặt khi nhận hàng (COD)\n' +
      '            </label>\n' +
      '         </div>\n' +
      '\n' +
      '         <div class="col-12 col-lg-4" style="border-right: none">\n' +
      '            <div class="col-12 title">\n' +
      '               <p>3</p>\n' +
      '               Thông tin mặt hàng\n' +
      '            </div>\n' +
      '            <table class="table">\n' +
      '               <thead>\n' +
      '                  <tr>\n' +
      '                     <th scope="col">Tên sản phẩm</th>\n' +
      '                     <th scope="col">Số lượng</th>\n' +
      '                     <th scope="col">Giá</th>\n' +
      '                  </tr>\n' +
      '               </thead>\n' +
      '               <tbody>\n' +
      '                  <tr>\n' +
      '                     <td>' + sp.name + '</td >\n' +
      '                     <td>' + sp.quantity + '</td>\n' +
      '                     <td>' + sp.price + '.000 VNĐ</td>\n' +
      '                  </tr>\n' +
      '               </tbody>\n' +
      '            </table>\n' +
      '            <div class="col-12 math">\n' +
      '               <p class="title-description">Tạm tính:</p>\n' +
      '               <p>' + tamTinh + '.000 VNĐ</p>\n' +
      '            </div>\n' +
      '            <div class="col-12 math">\n' +
      '               <p class="title-description">Phí vận chuyển:</p>\n' +
      '               <p>0 VNĐ</p>\n' +
      '            </div>\n' +
      '            <div class="col-12 math">\n' +
      '               <p class="title-description">Tổng cộng:</p>\n' +
      '               <p class="total">' + tamTinh + '.000 VNĐ</p>\n' +
      '            </div>\n' +
      '            <p class="title-description uu-dai">Nhập mã ưu đãi</p>\n' +
      '            <div class="col-12 uu-dai">\n' +
      '               <input type="text" class="col-10 form-control uu-dai" placeholder="Nhập vào nếu có...">\n' +
      '               <button type="submit" class="col-2 btn btn-primary btn-uu-dai">Áp dụng</button>\n' +
      '            </div>\n' +
      '            <button type="button" class="col-12 btn btn-primary">Thanh toán</button>\n' +
      '         </div>\n' +
      '      </div>';
   return html;
}