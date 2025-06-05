
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Camera, Search, Check } from 'lucide-react';
import putuAgus from '@/components/Image-Team/Putu Agus Putrawan.png';
import muhammadFathi from '@/components/Image-Team/Muhammad Fathi Radithya.png';
import rezaFahlevi from '@/components/Image-Team/M. Reza Fahlevi.png';
import adrianAkhmad from '@/components/Image-Team/Adrian Akhmad Firdaus.png';
import rizqaZahrotun from '@/components/Image-Team/Rizqa Zahrotun Nafiah.png';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Putu Agus Putrawan",
      role: "Machine learning (ML)",
      bio: " Politeknik Negeri Bali",
      image: putuAgus
    },
    {
      name: "Muhammad Fathi Radithya",
      role: "Machine learning (ML)",
      bio: "Universitas Brawijaya",
      image: muhammadFathi
    },
    {
      name: "M. Reza Fahlevi",
      role: "Machine learning (ML)",
      bio: "Universitas Teuku Umar",
      image: rezaFahlevi
    },
    {
      name: "Adrian Akhmad Firdaus",
      role: "Frontend & Backend (FEBE)",
      bio: "Universitas Islam Kalimantan Muhammad Arsyad Al Banjari Banjarmasin",
      image: adrianAkhmad
    },
    {
      name: "Rizqa Zahrotun Nafiah",
      role: "Frontend & Backend (FEBE)",
      bio: "Universitas PGRI Semarang",
      image: rizqaZahrotun
    }
  ];

  const technologies = [
    { name: "TensorFlow", description: "Deep learning framework for image recognition" },
    { name: "Keras", description: "High-level neural networks API for easy model development" },
    { name: "React.js", description: "Modern web framework for building responsive and interactive user interfaces" },
    { name: "Express.js", description: "Backend framework for creating RESTful APIs and handling server-side logic" },
    { name: "PostgreSQL", description: "Relational database for managing and storing large datasets" },
    { name: "AWS", description: "Cloud platform for scalable infrastructure and global deployment" },
    { name: "GitHub", description: "Version control system for collaborative development and code management" },
    { name: "NumPy", description: "Library for numerical computing and data manipulation" },
    { name: "Pandas", description: "Data manipulation library for handling large datasets efficiently" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About AnimeLens
          </h1>
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <p className="text-xl md:text-2xl">
              Have you ever stumbled upon an incredible anime image and wondered, "What anime is this from?" You're not alone  and that's exactly why we created AnimeLens.
            </p>
            <p className="text-xl md:text-2xl">
              AnimeLens is a web-based AI-powered image recognition platform designed to help anime fans instantly identify anime titles from a single image.
            </p>
            <p className="text-xl md:text-2xl">
              Whether it's a character screenshot, a scenic frame, or fan art, AnimeLens uses machine learning and computer vision to quickly and accurately recognize and return the anime title.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
             At AnimeLens, our mission is to enhance anime discovery by providing AI-driven image recognition that precisely identifies anime titles from images. With state-of-the-art technology, an extensive collection, and exceptional precision, we aim to make anime identification quick, smooth, and accessible to fans everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full w-fit mx-auto mb-4">
                <Camera className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Driven Technology</h3>
              <p className="text-gray-600">
                Uses advanced machine learning algorithms trained on millions of anime frames to deliver fast and reliable results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full w-fit mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Extensive Collection</h3>
              <p className="text-gray-600">
                Offers a vast repository that spans from timeless classics to the latest seasonal anime, ensuring broad recognition coverage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full w-fit mx-auto mb-4">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exceptional Precision</h3>
              <p className="text-gray-600">
                Provides over 99% accuracy, continuously evolving through real-time learning and model enhancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              The idea behind AnimeLens came from a simple observation: anime images are everywhere online, but often without context.
              Fans regularly encounter captivating character shots or scenes, yet struggle to identify which anime they belong to.
              Our team of passionate students saw this gap and decided to build a solution that makes anime discovery effortless.
            </p>
            
            <p className="mb-6">
              Leveraging the power of machine learning and computer vision, 
              we aimed to create a platform that’s as intuitive as a reverse image search but tailored specifically for anime.
              We combined our expertise in AI and full-stack development to develop a tool that can quickly recognize 
              anime titles from images with high accuracy.
            </p>
            
            <p>
              Our mission is to empower anime fans around the world by providing a simple, fast, and accurate way to discover anime titles.
              We are dedicated to continuously improving AnimeLens and making it an essential resource for anyone passionate about anime.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate experts dedicated to advancing anime recognition technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center the last 2 team members */}
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              {teamMembers.slice(3).map((member, index) => (
                <div key={index + 3} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Built with cutting-edge technologies for optimal performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the AnimeLens Community Today!
          </h2>
          <p className="text-xl mb-8">
            Start exploring the world of anime with our cutting-edge AI-powered technology.
            Whether you're a dedicated anime fan or a casual viewer, AnimeLens helps you discover and identify anime titles in seconds.
          </p>
          <p className="text-xl mb-8">
            Don’t miss out be part of the growing AnimeLens community now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/detect"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Try AnimeLens Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
