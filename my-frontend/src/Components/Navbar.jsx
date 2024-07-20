function Navbar() {
    return ( 
        <>

        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                {/* Logo atau Judul Navbar */}
                <div className="flex-shrink-0">
                    <span className="text-white text-lg">NEXT JS</span>
                </div>

                {/* Menu Navbar */}
                <div className="flex space-x-4">
                    <a href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">BERANDA</a>
                    <a href="/admin/datamahasiswa" className="text-white hover:bg-gray-700 px-3 py-2 rounded">DAFTAR MAHASISWA</a>
                    

                </div>
                </div>
            </div>
        </nav>
  
  
        </>
     );
  }
  
  export default Navbar;