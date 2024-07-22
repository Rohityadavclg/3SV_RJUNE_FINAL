import React from 'react'
import brandlogo from "../assets/Images/Faculty/Faculty_1.jpg"
import { useSelector } from 'react-redux';

const ServicePage = () => {
    const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
    <h1 className="text-4xl font-bold text-center mb-4">New Feature Coming Soon</h1>
    <p className="text-lg text-center mb-8 max-w-md">
      We are working hard to bring you an exciting new feature. Stay tuned for updates and details on what's coming next!
    </p>
    <img
      src={brandlogo}
      alt="Coming Soon"
      className="max-w-md rounded-lg shadow-md mb-8"
    />
   <div className={`bg-white rounded-lg shadow-md p-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <p>
          Have questions or feedback? Contact our support team directly or visit our help center for assistance.
        </p>
        <a
          href="mailto:support@yourcompany.com"
          className={`block mt-4 text-blue-500 hover:text-blue-600 ${isDarkMode ? 'hover:text-blue-400' : ''}`}
        >
          3svweb@gmail.com
        </a>
      </div>
      <div className={`flex flex-col items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <h2 className="text-xl font-bold mb-4">Stay Informed</h2>
        <p>
          Follow us on social media to get the latest updates and news about our upcoming feature.
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm ${isDarkMode ? 'hover:bg-blue-700' : ''}`}
          >
            Twitter
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm mx-2 ${isDarkMode ? 'hover:bg-blue-700' : ''}`}
          >
            Facebook
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm ${isDarkMode ? 'hover:bg-blue-700' : ''}`}
          >
            Instagram
          </a>
        </div>
      </div>
      <div className={`bg-white rounded-lg shadow-md p-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <p>
          Have questions or feedback? Contact our support team directly or visit our help center for assistance.
        </p>
        <a
          href="mailto:support@yourcompany.com"
          className={`block mt-4 text-blue-500 hover:text-blue-600 ${isDarkMode ? 'hover:text-blue-400' : ''}`}
        >
          3svweb@gmail.com
        </a>
      </div>
    </div>
  );
}

export default ServicePage