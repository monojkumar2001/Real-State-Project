import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call us for immediate assistance',
      contact: '(555) 123-4567',
      available: 'Mon-Fri 9AM-6PM',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us a detailed message',
      contact: 'info@primerealty.com',
      available: 'We reply within 24 hours',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      available: 'Mon-Fri 9AM-6PM',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come to our office',
      contact: '123 Real Estate Ave, New York, NY 10001',
      available: 'By appointment only',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about a property or need assistance? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <method.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{method.description}</p>
              <p className="font-medium text-gray-900 mb-1">{method.contact}</p>
              <p className="text-xs text-gray-500">{method.available}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm title="Send us a message" />
          </div>

          {/* Office Info & Map */}
          <div className="space-y-8">
            {/* Office Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Office</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">123 Real Estate Ave<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-500 text-sm">24/7 Emergency Line: (555) 999-8888</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@primerealty.com</p>
                    <p className="text-gray-500 text-sm">support@primerealty.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Real Estate Ave, New York, NY 10001</p>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary-900 mb-3">Frequently Asked Questions</h3>
              <p className="text-primary-700 text-sm mb-4">
                Before contacting us, you might find answers to common questions in our FAQ section.
              </p>
              <a
                href="/faq"
                className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors inline-block"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}