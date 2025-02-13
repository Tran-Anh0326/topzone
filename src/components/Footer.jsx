import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="logo-foot">
          <a href="/">
            <i className="topzone-logo"></i>
          </a>
          <a href="/tekzone/khac-biet-aar-va-apr-tieu-chuan-cua-hang-uy-quyen-apple-1411356">
            <i className="topzone-autho"></i>
          </a>
        </div>
        <ul className="list-foot">
          <li>
            <span>Tổng đài</span>
            <a href="tel:1900969642">
              <span>Mua hàng:</span>
              <b>1900.9696.42</b>
              (8:00 - 21:30)
            </a>
            <a href="tel:1900969642">
              <span>Khiếu nại:</span>
              <b>1900.9868.43</b>
              (8:00 - 21:30)
            </a>
            <div className="footer-social">
              <p className="txt">Kết nối với chúng tôi</p>
              <a
                href="https://www.facebook.com/topzone.vn"
                target="_blank"
                className="link-social"
                rel="noopener noreferrer"
              >
                <i className="iconsocial-facebook"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCoWdPNr8jSr7JM0OFlKvQHw"
                target="_blank"
                className="link-social"
                rel="noopener noreferrer"
              >
                <i className="iconsocial-youtube"></i>
              </a>
              <a
                href="https://zalo.me/2040551312124557463"
                target="_blank"
                className="link-social"
                rel="noopener noreferrer"
              >
                <i className="iconsocial-zalo"></i>
              </a>
            </div>
          </li>
          <li>
            <span>Hệ thống cửa hàng</span>
            <a href="/he-thong-cua-hang">Xem 85 cửa hàng</a>
            <a href="/noi-quy-cua-hang">Nội quy cửa hàng</a>
            <a href="/chat-luong-phuc-vu">Chất lượng phục vụ</a>
            <a href="/bao-hanh-doi-tra">Chính sách bảo hành & đổi trả</a>
          </li>
          <li>
            <span>Hỗ trợ khách hàng</span>
            <a href="/dieu-kien-giao-dich">Điều kiện giao dịch chung</a>
            <a href="/huong-dan-mua-hang">Hướng dẫn mua hàng online</a>
            <a href="/giao-hang">Chính sách giao hàng</a>
            <a href="/thanh-toan">Hướng dẫn thanh toán</a>
          </li>
        </ul>
        <div className="text-cpr">
          <p>
            © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở
            KH & ĐT TP.HCM cấp ngày 02/01/2007.
            <br />
            Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP. Hồ Chí Minh. Điện
            thoại: 028 38125960.
          </p>
        </div>
        <div className="certify">
          <a
            href="http://online.gov.vn/Home/WebDetails/88735"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="lazyloaded"
              data-src="https://cdnv2.tgdd.vn/webmwg/2024/tz/images/certify-bct.png"
              width="127"
              height="47"
              src="https://cdnv2.tgdd.vn/webmwg/2024/tz/images/certify-bct.png"
              alt="certify-bct"
            />
          </a>
          <a
            href="https://tinnhiemmang.vn/danh-ba-tin-nhiem/topzonevn-1635823490"
            title="Chung nhan Tin Nhiem Mang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="lazyloaded"
              data-src="https://tinnhiemmang.vn/handle_cert?id=topzone.vn"
              width="150"
              height="40"
              alt="Chung nhan Tin Nhiem Mang"
              src="https://tinnhiemmang.vn/handle_cert?id=topzone.vn"
            />
          </a>
          <a
            href="//www.dmca.com/Protection/Status.aspx?ID=4f44c8e7-b645-4ddb-8aec-c130d0598c85&refurl=https://www.topzone.vn/"
            target="_blank"
            title="DMCA.com Protection Status"
            className="dmca-badge"
            rel="noopener noreferrer"
          >
            <img
              className="lazyloaded"
              data-src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=4f44c8e7-b645-4ddb-8aec-c130d0598c85"
              alt="DMCA.com Protection Status"
              width="135"
              height="32"
              src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=4f44c8e7-b645-4ddb-8aec-c130d0598c85"
            />
          </a>
        </div>
      </div>
      <div className="footer__logo">
        <p className="footer__logo-hd">
          Ghé thăm các website khác cùng tập đoàn MWG
        </p>
        <ul className="footer__logo-list">
          <li>
            <a
              rel="nofollow"
              href="https://www.thegioididong.com/"
              target="_blank"
            >
              <i className="iconlogo-thegioididong"></i>
            </a>
          </li>
          <li>
            <a
              rel="nofollow"
              href="https://www.dienmayxanh.com/"
              target="_blank"
            >
              <i className="iconlogo-dienmayxanh"></i>
            </a>
          </li>
          <li>
            <a
              rel="nofollow"
              href="https://www.bachhoaxanh.com/"
              target="_blank"
            >
              <i className="iconlogo-bachhoaxanh"></i>
            </a>
          </li>
          <li>
            <a
              rel="nofollow"
              href="https://www.nhathuocankhang.com/"
              target="_blank"
              title="Chuỗi nhà thuốc chuẩn GPP"
            >
              <i className="iconlogo-ankhang"></i>
            </a>
          </li>
          <li>
            <a
              rel="nofollow"
              href="https://avakids.com/"
              target="_blank"
              title="Chuỗi cửa hàng mẹ và bé"
            >
              <i className="iconlogo-kids"></i>
            </a>
          </li>
          <li>
            <a
              rel="nofollow"
              href="https://vieclam.thegioididong.com/"
              target="_blank"
              title="Trang tuyển dụng của tập đoàn Thế Giới Di Động"
            >
              <i className="iconlogo-vieclam"></i>
            </a>
          </li>
          <li>
            <a
              rel="nofollow"
              href="https://www.erablue.id/"
              target="_blank"
              title="Toko Erablue Elektronik"
            >
              <i className="iconlogo-erablue"></i>
            </a>
          </li>
          <li className="logo-thodmx">
            <a
              rel="nofollow"
              href="https://www.thodienmayxanh.com"
              target="_blank"
              title="Dịch vụ vệ sinh, bảo dưỡng, lắp đặt máy lạnh, máy lọc nước, tủ đứng"
              aria-label="logo thodienmayxanh"
            >
              <img
                src="https://cdnv2.tgdd.vn/webmwg/2024/tz/images/common/logo_thodmx-dtv2.png"
                className="lazyloaded"
                width="133"
                height="40"
                alt="logo thodienmayxanh"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
