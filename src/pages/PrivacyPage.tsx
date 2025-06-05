
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Trash2 } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full w-fit mx-auto mb-6">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-purple-100">
            Your privacy and data protection are our top priorities
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Quick Summary */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Privacy at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Eye className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-blue-900">What We Collect</h3>
                <p className="text-sm text-blue-800">Images you upload for analysis and basic usage data</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Lock className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-blue-900">How We Protect</h3>
                <p className="text-sm text-blue-800">End-to-end encryption and secure data handling</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Trash2 className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-blue-900">Data Retention</h3>
                <p className="text-sm text-blue-800">Images deleted within 24 hours of processing</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-blue-900">Your Rights</h3>
                <p className="text-sm text-blue-800">Full control over your data and privacy settings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          
          <div className="mb-8">
            <p className="text-gray-600 text-base">
              <strong>Last updated:</strong> May 30, 2025
            </p>
            <p className="text-gray-600">
              This Privacy Policy explains how AnimeLens collects, uses, and protects 
              your information when you use our anime detection service.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Images and Visual Content</h3>
            <p className="text-gray-600 mb-4">
              When you use our anime detection service, we temporarily process the images you upload. 
              These images are used solely for the purpose of identifying anime content and are <strong>automatically 
              deleted from our servers within 24 hours of processing</strong>.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Data</h3>
            <p className="text-gray-600 mb-4">
              We collect basic usage information such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>Number of images processed</li>
              <li>Detection accuracy metrics</li>
              <li>Basic device and browser information</li>
              <li>IP addresses (anonymized after 30 days)</li>
            </ul>
            <p className="text-gray-600 text-base">
              <strong>Note:</strong> We do <strong>not</strong> collect or store any personal login data, as no account is required to use our service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Anime Detection:</strong> To analyze the uploaded image and return anime-related results</li>
              <li><strong>Service Improvement:</strong> To improve detection models and performance metrics</li>
              <li><strong>Technical Support:</strong> To help investigate issues with the service</li>
              <li><strong>Security & Abuse Prevention:</strong> To protect our service from misuse</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Protection and Security</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Encryption</h3>
            <p className="text-gray-600 mb-4">
              All data transmission to and from our servers is encrypted using industry-standard TLS encryption. 
              Images are processed in secure, isolated environments and is <strong>never stored permanently</strong>.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Access Controls</h3>
            <p className="text-gray-600 mb-4">
            Only authorized personnel can access system logs or temporary image data, solely for operational or debugging purposes. All access is logged and monitored.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Minimization</h3>
            <p className="text-gray-600">
              We collect and retain only the minimum amount of data necessary to provide our service effectively. 
              Personal data is anonymized whenever possible.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Retention and Deletion</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Image Data</h3>
              <p className="text-green-800">
                <strong>Automatic Deletion:</strong> Images are <strong>automatically deleted immediately after processing is completed</strong>. In most cases, this occurs within <strong>minutes</strong>, and in all cases, no later than <strong>24 hours</strong> after upload.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Data Types</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Usage Data:</strong> We collect only non-identifiable usage metrics (e.g., detection success rates).</li>
              <li><strong>Account Data:</strong> No account or payment data is collected or stored.</li>
              <li><strong>Support Inquiries:</strong> Retained for up to 2 years for quality assurance</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              We use select third-party services to operate our platform:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Cloud Infrastructure:</strong> To handle secure and scalable image processing</li>
              <li><strong>Analytics Services:</strong> To understand usage trends (anonymized data only)</li>
            </ul>
            

            <p className="text-gray-600 mt-4">
            We do not use third-party APIs that require user credentials, nor do we provide public API access.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Access and Control</h3>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Correct inaccurate or incomplete information</li>
              <li>Contact us for any concerns regarding data use</li>
              <li>Opt out of non-essential communications</li>
              <li>Request data portability where applicable</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie Preferences</h3>
            <p className="text-gray-600">
              We use minimal, essential cookies for service functionality. You can control cookie preferences 
              through your browser settings, though disabling cookies may limit some features.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-600">
            Our service is not intended for children under 13 years old. We do not knowingly collect personal data from minors. If any such data is discovered, it will be deleted immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-600">
            We may update this Privacy Policy from time to time. If we make significant changes, we will notify users via the website. Continued use of AnimeLens after updates constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@animelens.com</p>
              <p className="text-gray-700 mb-2"><strong>Response Time:</strong> Within 48 hours</p>
              <p className="text-gray-700"><strong>Data Protection Officer:</strong> Available upon request</p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
