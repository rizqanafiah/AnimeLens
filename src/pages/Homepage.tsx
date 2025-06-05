
import { Link } from 'react-router-dom';
import { Camera, Search, Check } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Homepage = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "AI-Powered Anime Recognition Platform",
      description: "Advanced machine learning algorithms analyze your anime screenshots with high accuracy."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Instant Results",
      description: "Get anime titles and information in seconds, no manual searching required."
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "High Accuracy",
      description: "Our models are trained on thousands of anime series for reliable identification."
    }
  ];


  const testimonials = [
    {
      name: "Rika T.",
      role: "Anime Fan",
      content: "AnimeLens helped me instantly identify anime from random images I found online. The accuracy is amazing, and it saved me a lot of time!",
      rating: 5
    },
    {
      name: "Kenji M.",
      role: "Content Creator",
      content: "As an anime content creator, AnimeLens has been a lifesaver. It allows me to quickly find anime titles without spending hours searching.",
      rating: 5
    },
    {
      name: "Yumi A.",
      role: "Tech Enthusiast",
      content: "I was impressed with how fast and accurate the anime recognition is. The technology behind it is top-notch and works seamlessly.",
      rating: 5
    }
];


  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Discover Unknown Anime Titles Instantly from Any Image with AI
              <br />
              <span className="text-3xl md:text-5xl">In Seconds!</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Upload your screenshot and discover the anime you’ve been searching for in seconds quick, accurate, and easy!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/detect"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Try AnimeLens Now
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why AnimeLens is the Best Choice for Anime Fans?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AnimeLens offers fast, accurate anime identification using AI.
              Simply upload an image, and get the anime title in seconds no more manual searching required!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How AnimeLens Works
            </h2>
            <p className="text-xl text-gray-600">
              Discover your favorite anime with just a few clicks. It’s that simple.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Upload Your Screenshot/Image</h3>
              <p className="text-gray-600">
                Simply drag and drop or choose an anime image to upload from your device.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Let Our AI Work Its Magic</h3>
              <p className="text-gray-600">
                Our powerful AI instantly analyzes your image, comparing it against thousands of anime titles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Results at Your Fingertips</h3>
              <p className="text-gray-600">
                Get the anime title, a brief synopsis, and other details all in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join the growing community of anime fans who trust AnimeLens
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Uncover Your Next Anime in Seconds?
          </h2>
          <p className="text-xl mb-8">
            Start discovering anime instantly with AnimeLens simply upload a screenshot and let our AI work its magic!
          </p>
          <Link
            to="/detect"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
