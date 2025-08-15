import Link from 'next/link';
import { agents, properties } from '@/lib/data';
import PropertyCard from '@/components/PropertyCard';
import ContactForm from '@/components/ContactForm';
import { Star, Phone, Mail, Award, TrendingUp, Home, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return agents.map(agent => ({
    id: agent.id,
  }));
}

export default function AgentProfilePage({ params }: { params: { id: string } }) {
  const agent = agents.find(a => a.id === params.id);
  const agentProperties = properties.filter(p => p.agent.id === params.id);

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Agent Not Found</h1>
          <Link href="/agents" className="text-blue-600 hover:text-blue-700">
            Back to Agents
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/agents" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Agents
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Agent Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="text-center mb-6">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{agent.name}</h1>
                <p className="text-blue-600 font-medium mb-3">{agent.specialization}</p>
                <div className="flex items-center justify-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-medium">{agent.rating}</span>
                  <span className="text-gray-600 ml-1">({agent.reviews} reviews)</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-gray-400 mr-3" />
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-gray-400 mr-3" />
                  <span>{agent.email}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-600">{agent.experience}</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-600">{agent.listings}</div>
                  <div className="text-sm text-gray-600">Listings</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-600">{agent.reviews}</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors mb-3">
                Call Now
              </button>
              <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                Send Message
              </button>
            </div>

            {/* Contact Form */}
            <ContactForm
              agentId={agent.id}
              title="Contact This Agent"
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {agent.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{agent.bio}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Expert Knowledge</h3>
                  <p className="text-sm text-gray-600">Specialized in {agent.specialization.toLowerCase()}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Market Insights</h3>
                  <p className="text-sm text-gray-600">Up-to-date market analysis and trends</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Home className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Proven Results</h3>
                  <p className="text-sm text-gray-600">{agent.listings} active property listings</p>
                </div>
              </div>
            </div>

            {/* Current Listings */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Listings</h2>
              {agentProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {agentProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} showSaveButton={false} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Home className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No current listings available.</p>
                </div>
              )}
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Reviews</h2>
              <div className="space-y-6">
                {/* Sample reviews */}
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Client"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="font-semibold text-gray-900 mr-2">John Smith</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">
                        "{agent.name} was incredibly helpful throughout the entire process. Professional, knowledgeable, and always available to answer questions."
                      </p>
                      <p className="text-sm text-gray-500 mt-2">2 months ago</p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Client"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="font-semibold text-gray-900 mr-2">Maria Garcia</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">
                        "Excellent service! {agent.name} found us the perfect home in just a few weeks. Highly recommended!"
                      </p>
                      <p className="text-sm text-gray-500 mt-2">3 months ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}