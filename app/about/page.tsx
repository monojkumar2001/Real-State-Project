import { Award, Users, TrendingUp, Shield, Heart, Target } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Properties Listed', icon: TrendingUp },
    { number: '150+', label: 'Happy Clients', icon: Heart },
    { number: '25+', label: 'Expert Agents', icon: Users },
    { number: '5', label: 'Years Experience', icon: Award },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in honest communication and transparent processes. Every transaction is handled with integrity and professionalism.',
    },
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'Your goals are our priority. We work tirelessly to understand your needs and deliver results that exceed expectations.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from property presentations to customer service and market knowledge.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We\'re deeply rooted in our communities and committed to helping them thrive through responsible real estate practices.',
    },
  ];

  const team = [
    {
      name: 'Michael Davis',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 15 years in real estate, Michael founded PrimeRealty with a vision to revolutionize property buying and selling.',
    },
    {
      name: 'Jennifer Smith',
      role: 'Head of Sales',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Jennifer leads our sales team with expertise in luxury residential properties and exceptional customer service.',
    },
    {
      name: 'David Rodriguez',
      role: 'Commercial Director',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'David specializes in commercial real estate transactions and has helped numerous businesses find their ideal locations.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About PrimeRealty</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Your trusted partner in real estate, committed to making your property dreams a reality
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2019, PrimeRealty began with a simple mission: to make real estate transactions 
                  transparent, efficient, and stress-free for everyone involved. What started as a small team 
                  of passionate real estate professionals has grown into one of the region's most trusted agencies.
                </p>
                <p>
                  We recognized that buying or selling property is one of life's most significant decisions, 
                  often filled with complexity and uncertainty. Our founders set out to change that by creating 
                  a company that prioritizes client education, honest communication, and innovative solutions.
                </p>
                <p>
                  Today, we're proud to have helped hundreds of families find their dream homes and assisted 
                  businesses in securing the perfect commercial spaces. Our success is measured not just in 
                  transactions completed, but in the lasting relationships we've built with our clients and communities.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Office"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we serve our clients and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <div className="bg-primary-100 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals leading PrimeRealty into the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-4xl mx-auto leading-relaxed">
            "To empower individuals and businesses to make informed real estate decisions by providing 
            exceptional service, market expertise, and innovative solutions that create lasting value 
            for our clients and communities."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/properties"
              className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors"
            >
              View Properties
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}