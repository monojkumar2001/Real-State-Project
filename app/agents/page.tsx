import Link from 'next/link';
import { agents } from '@/lib/data';
import { Star, Phone, Mail, MapPin } from 'lucide-react';

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Agents</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our team of experienced real estate professionals dedicated to helping you find your perfect property.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{agent.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{agent.specialization}</p>
                
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-gray-600 text-sm">
                    {agent.rating} ({agent.reviews} reviews)
                  </span>
                </div>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{agent.email}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                  <div className="bg-gray-50 rounded-md p-3">
                    <div className="font-semibold text-gray-900">{agent.experience}</div>
                    <div className="text-sm text-gray-600">Years Exp.</div>
                  </div>
                  <div className="bg-gray-50 rounded-md p-3">
                    <div className="font-semibold text-gray-900">{agent.listings}</div>
                    <div className="text-sm text-gray-600">Active Listings</div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{agent.bio}</p>
                
                <Link
                  href={`/agents/${agent.id}`}
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}