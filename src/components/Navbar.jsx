const Navbar = () => {
  return (
    <div>
      <div className="container width: 100% background-color: black height: 60px">
        <div className="head flex justify-content: space-between align-items: center max-width: 1200px min-width: 1024px margin: auto position relative">
          {/* Logo */}
          <div>
            <a href="#" className="text-2xl font-bold text-blue-500">
              TopZone
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
