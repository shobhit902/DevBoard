import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-y border-gray-200 px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between gap-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="max-w-md">
          <h1 className="text-xl font-bold mb-2">Logo</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi
            ea, amet itaque reiciendis quo quae beatae aliquam dolorem incidunt
            voluptatibus laboriosam aperiam, necessitatibus similique distinctio.
            Tenetur cupiditate impedit iure.
          </p>
        </div>

        {/* Links */}
        <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* About Us */}
          <div>
            <h2 className="text-lg font-semibold mb-2">About Us</h2>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">Mission</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">Team</a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact</h2>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">Email</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">Support</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">Locations</a>
              </li>
            </ul>
          </div>
          {/* Review */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Review</h2>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">Feedback</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">Ratings</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <hr className="my-6 border-gray-300" />

      <p className="text-center text-sm text-gray-500 max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aspernatur perferendis vel incidunt provident, hic accusamus, recusandae officiis labore eius, nihil excepturi architecto. Voluptates distinctio at, minus magnam reiciendis illum?
      </p>
    </footer>
  );
};

export default Footer;
