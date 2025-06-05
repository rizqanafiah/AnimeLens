
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft, Home, Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      <div className="flex-grow flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 pt-20">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-full w-fit mx-auto mb-6">
              <Search className="h-12 w-12" />
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              Sorry, this page is not available, please return to the home page
            </p>
          </div>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/detect"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Try Anime Detection
              </Link>
              
              <Link
                to="/about"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            <p>If you believe this is an error, please <Link to="/contact" className="text-purple-600 hover:text-purple-700">contact us</Link>.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
