
export default function HeaderFooter() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-black text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-blue-500">TopZone</a>

          {/* Navbar */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded">iPhone</a>
            <a href="#" className="hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded">iPad</a>
            <a href="#" className="hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded">Mac</a>
            <a href="#" className="hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded">Watch</a>
            <a href="#" className="hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded">Âm thanh</a>
            <a href="#" className="hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded">Phụ kiện</a>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="px-2 py-1 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-9-4h4"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Placeholder */}
      <main className="flex-grow bg-gray-50 p-4">
        <h1 className="text-center text-gray-700">Nội dung trang ở đây</h1>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-blue-400 mb-2">Liên hệ</h3>
            <p>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</p>
            <p>Hotline: 1900 123 456</p>
            <p>Email: support@topzone.vn</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-blue-400 mb-2">Chính sách</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-400">Bảo hành</a></li>
              <li><a href="#" className="hover:text-blue-400">Thanh toán</a></li>
              <li><a href="#" className="hover:text-blue-400">Đổi trả</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-blue-400 mb-2">Kết nối với chúng tôi</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
