import { Briefcase, Users, TrendingUp, Heart, MapPin, Clock, DollarSign } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function CareersPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Base salary plus commission with unlimited earning potential and performance bonuses',
    },
    {
      icon: TrendingUp,
      title: 'Professional Growth',
      description: 'Comprehensive training programs, mentorship, and clear career advancement paths',
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with experienced professionals in a supportive, team-oriented culture',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible scheduling, remote work options, and generous paid time off',
    },
  ];

  const openings = [
    {
      title: 'Licensed Real Estate Agent',
      location: 'New York, NY',
      type: 'Full-time',
      department: 'Sales',
      description: 'Join our dynamic sales team and help clients find their dream properties. Perfect for motivated individuals with excellent communication skills.',
      requirements: [
        'Valid real estate license',
        'Excellent communication and negotiation skills',
        'Self-motivated with strong work ethic',
        '1+ years experience preferred',
      ],
    },
    {
      title: 'Commercial Real Estate Specialist',
      location: 'Chicago, IL',
      type: 'Full-time',
      department: 'Commercial',
      description: 'Specialize in commercial property transactions and help businesses find their ideal locations.',
      requirements: [
        'Real estate license with commercial experience',
        'Strong analytical and financial skills',
        'Established network preferred',
        'Bachelor\'s degree in business or related field',
      ],
    },
    {
      title: 'Property Manager',
      location: 'Miami, FL',
      type: 'Full-time',
      department: 'Management',
      description: 'Oversee property operations, tenant relations, and ensure optimal property performance.',
      requirements: [
        'Property management certification preferred',
        '3+ years property management experience',
        'Strong organizational and problem-solving skills',
        'Knowledge of property management software',
      ],
    },
    {
      title: 'Marketing Coordinator',
      location: 'Remote',
      type: 'Full-time',
      department: 'Marketing',
      description: 'Create compelling marketing materials and campaigns to promote our properties and services.',
      requirements: [
        'Bachelor\'s degree in Marketing or Communications',
        'Experience with digital marketing tools',
        'Creative skills in design and content creation',
        'Knowledge of real estate market preferred',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Build your career with PrimeRealty and help shape the future of real estate
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose PrimeRealty?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in our people and provide the tools, training, and support you need to succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At PrimeRealty, we believe that our success comes from our people. We've built a culture 
                  that values collaboration, innovation, and continuous learning.
                </p>
                <p>
                  Our team members enjoy a supportive environment where everyone's contributions are 
                  valued and recognized. We provide ongoing training, mentorship programs, and opportunities 
                  for professional development.
                </p>
                <p>
                  Whether you're just starting your real estate career or you're an experienced professional 
                  looking for a new challenge, PrimeRealty offers the resources and support you need to achieve 
                  your goals.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-600">25+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">5</div>
                  <div className="text-sm text-gray-600">Years Growing</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">150+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team Meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">
              Explore current opportunities to join our growing team
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span>{job.department}</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-primary-600 text-white px-6 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors">
                    Apply Now
                  </button>
                </div>

                <p className="text-gray-700 mb-4">{job.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply Today</h2>
            <p className="text-gray-600">
              Don't see the perfect position? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm title="Submit Your Application" />
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Submit Application</h4>
                      <p className="text-sm text-gray-600">Send us your resume and cover letter</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Initial Review</h4>
                      <p className="text-sm text-gray-600">We'll review your application within 3-5 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Interview</h4>
                      <p className="text-sm text-gray-600">Phone or video interview with our team</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Final Decision</h4>
                      <p className="text-sm text-gray-600">We'll contact you with our decision</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Questions?</h3>
                <p className="text-primary-800 text-sm mb-4">
                  Have questions about working at PrimeRealty or our application process?
                </p>
                <div className="space-y-2 text-sm text-primary-700">
                  <div>📧 careers@primerealty.com</div>
                  <div>📞 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}