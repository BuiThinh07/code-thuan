function renderDetailSanPham(id) {
   let listSp = JSON.parse(localStorage.getItem('listSp'));
   let spDetail = listSp.find(sp => sp.id === id);
   console.log(spDetail);
   if (spDetail) {
      let html = '';
      html = '<div class="row">\n' +
         '         <div class="col-lg-4 col-12">\n' +
         '            <img src="../image/aoKhoac/' + spDetail.image + '" alt="">\n' +
         '         </div>\n' +
         '         <div class="col-lg-8 col-12">\n' +
         '            <div class="col-12 title">' + spDetail.name + '</div>\n' +
         '            <h2>385,000₫</h2>\n' +
         '            <a href="http://127.0.0.1:5500/huongDanChoSize/huongDanChoSize.html">Hướng dẫn chọn size</a>\n' +
         '            <h5>Màu sắc:</h5>\n' +
         '            <div class="col-lg-4 col-12 choose color">\n' +
         '               <input type="radio" id="html" name="color" value="Trắng">\n' +
         '               <label for="html">Trắng</label><br>\n' +
         '               <input type="radio" id="css" name="color" value="Xanh">\n' +
         '               <label for="css">Xanh</label><br>\n' +
         '               <input type="radio" id="javascript" name="color" value="Đen">\n' +
         '               <label for="javascript">Đen</label>\n' +
         '            </div>\n' +
         '            <h5>Kích cỡ:</h5>\n' +
         '            <div class="col-lg-4 col-12 choose size">\n' +
         '               <input type="radio" id="html" name="size" value="M">\n' +
         '               <label for="html">M</label><br>\n' +
         '               <input type="radio" id="css" name="size" value="L">\n' +
         '               <label for="css">L</label><br>\n' +
         '               <input type="radio" id="javascript" name="size" value="XL">\n' +
         '               <label for="javascript">XL</label>\n' +
         '            </div>\n' +
         '            <h5>Số lượng:</h5>\n' +
         '            <div class="col-lg-4 col-12 choose size">\n' +
         '               <input type="number" id="quantity" name="quantity" min="1" max="100" value="1">\n' +
         '            </div>\n' +
         '            <div class="row btn-cart">\n' +
         '               <button class="col-6 btn btn-primary cart" type="submit" onclick="themVaoGio(\'' + spDetail.id + '\')">Thêm vào giỏ</button>\n' +
         '               <button class="col-6 btn btn-primary buy" type="submit" onclick="thanhToan(\'' + spDetail.id + '\')">Mua ngay</button>\n' +
         '            </div>\n' +
         '            <div class="div-bottom">» BẢO HÀNH SẢN PHẨM 90 NGÀY</div>\n' +
         '            <div class="div-bottom">» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</div>\n' +
         '            <div class="div-bottom">» HOTLINE BÁN HÀNG 1900 633 501</div>\n' +
         '         </div>\n' +
         '         <div class="col-12 mo-ta">\n' +
         '            <p>Mô tả</p>';

      spDetail.description.forEach(element => {
         html += '<img src="../image/aoKhoac/' + element + '" alt="">';
      });
      html += '</div>\n' +
         '      </div>';
      return html;
   }
   return;
}