import { testimonials } from '@/lib/data';
import { Star, Quote, MapPin } from 'lucide-react';

export default function TestimonialsPage() {
  // Extended testimonials for demonstration
  const allTestimonials = [
    ...testimonials,
    {
      id: '4',
      name: 'Robert Johnson',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      review: 'The team at PrimeRealty made selling our home incredibly easy. They handled everything professionally and got us a great price. Highly recommend their services!',
      location: 'Los Angeles, CA',
    },
    {
      id: '5',
      name: 'Lisa Chen',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      review: 'As first-time homebuyers, we were nervous about the process. Emma guided us every step of the way and made sure we understood everything. We love our new home!',
      location: 'Seattle, WA',
    },
    {
      id: '6',
      name: 'James Rodriguez',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      review: 'Michael helped us find the perfect commercial space for our growing business. His knowledge of the market and negotiation skills saved us thousands. Excellent service!',
      location: 'Austin, TX',
    },
    {
      id: '7',
      name: 'Amanda Foster',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      review: 'Sarah was amazing throughout our home buying journey. She was patient, knowledgeable, and always available to answer our questions. We couldn\'t be happier!',
      location: 'Denver, CO',
    },
    {
      id: '8',
      name: 'Kevin Park',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      review: 'The entire PrimeRealty team exceeded our expectations. From the initial consultation to closing day, everything was handled with professionalism and care.',
      location: 'Portland, OR',
    },
    {
      id: '9',
      name: 'Michelle Thompson',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      review: 'I\'ve worked with several real estate agents over the years, but none compare to the service I received from PrimeRealty. They truly care about their clients.',
      location: 'Phoenix, AZ',
    },
  ];

  const averageRating = allTestimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / allTestimonials.length;
  const totalReviews = allTestimonials.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Read what our satisfied clients have to say about their experience with PrimeRealty
            </p>
            
            {/* Rating Summary */}
            <div className="bg-blue-50 rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
              </div>
              <p className="text-gray-600">
                Based on {totalReviews} reviews from our valued clients
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
            <Quote className="h-12 w-12 mx-auto mb-6 opacity-50" />
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              "{allTestimonials[0].review}"
            </blockquote>
            <div className="flex items-center justify-center">
              <img
                src={allTestimonials[0].image}
                alt={allTestimonials[0].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="text-left">
                <div className="font-semibold">{allTestimonials[0].name}</div>
                <div className="text-blue-200 text-sm flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {allTestimonials[0].location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.slice(1).map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed">
                "{testimonial.review}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Track Record</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Happy Clients?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience the PrimeRealty difference for yourself. Let us help you achieve your real estate goals with the same dedication and expertise our clients rave about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="/properties"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              Browse Properties
            </a>
          </div>
        </div>

        {/* Review Form CTA */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Have you worked with us?</h3>
          <p className="text-blue-800 text-sm mb-4">
            We'd love to hear about your experience! Your feedback helps us continue to improve our services.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
            Leave a Review
          </button>
        </div>
      </div>
    </div>
  );
}