

function taoId() {
   return "_" + String(new Date().getTime()) + Math.random().toString().substring(2, 10);
}

function taoSanPham(id, image, name, price, description) {
   let sp = new Object();
   id === null || id === '' ? sp.id = taoId() : sp.id = id;
   sp.image = image;
   sp.name = name;
   sp.price = price;
   sp.description = description;

   return sp;
}

function renderSanPham(sp) {
   let htmlSp = '<div class="col-lg-3 col-md-4 col-12">\n' +
      '            <a class="item" href="http://127.0.0.1:5500/detail/detail.html">\n' +
      '               <div class="item-card" style="width: 18rem;" onclick="layIdSanPham(\'' + sp.id + '\')">\n' +
      '                  <img src="../image/aoKhoac/' + sp.image + '" class="card-img-top" alt="...">\n' +
      '                  <h5 class="price">' + sp.price + ' vnđ</h5>\n' +
      '               </div>\n' +
      '            </a>\n' +
      '         </div>';

   return htmlSp;
}

function renderlistSanPham(listSp) {
   let listHtmlSp = '';
   listSp.forEach(sp => {
      listHtmlSp += renderSanPham(sp);
   });
   return listHtmlSp;
}