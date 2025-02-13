import "./Header.css";

export default function Header() {
  return (
  <header className="">
  <nav className="head">
    {/* Logo */}
    <div className="logo-topzone">
      <a href="/" aria-label="Trang chủ">
        <i className="topzone-logo"></i>
      </a>
      <a
        href="/tekzone/khac-biet-aar-va-apr-tieu-chuan-cua-hang-uy-quyen-apple-1411356"
        aria-label="Thông tin ủy quyền Apple"
      >
        <i className="topzone-autho"></i>
      </a>
    </div>

    {/* Menu chính */}
    <ul className="menu">
      <li className="menu-ip">
        <a href="/iphone"><span>iPhone</span></a>
      </li>
      <li className="menu-mac">
        <a href="/mac"><span>Mac</span></a>
      </li>
      <li className="menu-ipad">
        <a href="/ipad"><span>iPad</span></a>
      </li>
      <li className="menu-watch">
        <a href="/apple-watch"><span>Watch</span></a>
      </li>
      <li className="menu-sound">
        <a href="/am-thanh"><span>Tai nghe, Loa</span></a>
      </li>
      <li className="menu-access">
        <a href="/phu-kien"><span>Phụ kiện</span></a>
      </li>
      <li className="menu-news">
        <a href="/tekzone"><span>TekZone</span></a>
      </li>
      <li className="menu-access">
        <a href="/topcare"><span>TopCare</span></a>
      </li>
    </ul>

    {/* Tìm kiếm & Giỏ hàng */}
    <aside className="search-cart">
      <button className="search-sp" aria-label="Tìm kiếm">
        <i className="topzone-search"></i>
      </button>

      <a href="/cart" className="cart" aria-label="Giỏ hàng">
        <i className="topzone-cart"></i>
      </a>

      <section className="view-cart">
        <i className="topzone-cohang"></i>
        <span>Đã thêm sản phẩm vào giỏ hàng</span>
        <a href="/cart">Xem giỏ hàng</a>
      </section>
    </aside>

    {/* Form tìm kiếm */}
    {/* <form className="form-search" onSubmit={(e) => e.preventDefault()}>
          <div className="click-search">
            <i className="topzone-search"></i>
            <input type="text" placeholder="Tìm kiếm sản phẩm" />
            <i className="topzone-delSearch"></i>
          </div>
          <button
            type="submit"
            className="submit-search"
            style="display:none"
          ></button>
          <div className="sg-search"></div>
        </form> */}
  </nav>
</header>
  );
}
