'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: 'Buying',
      questions: [
        {
          question: 'How do I start the home buying process?',
          answer: 'Start by getting pre-approved for a mortgage to understand your budget. Then, work with one of our agents to identify your needs and preferences. We\'ll help you search for properties, make offers, and navigate the entire process from start to finish.',
        },
        {
          question: 'What documents do I need to buy a home?',
          answer: 'You\'ll typically need: proof of income (pay stubs, tax returns), bank statements, employment verification, credit report, government-issued ID, and any additional documents your lender may require. We can provide a complete checklist.',
        },
        {
          question: 'How much should I save for a down payment?',
          answer: 'While 20% is traditional, many programs allow for lower down payments. FHA loans can go as low as 3.5%, and some conventional loans allow 3%. However, a larger down payment can mean lower monthly payments and no PMI.',
        },
        {
          question: 'What are closing costs?',
          answer: 'Closing costs typically range from 2-5% of the purchase price and include loan origination fees, appraisal fees, title insurance, attorney fees, and other transaction costs. We\'ll provide a detailed breakdown early in the process.',
        },
      ],
    },
    {
      category: 'Selling',
      questions: [
        {
          question: 'How do I determine my home\'s value?',
          answer: 'We provide a free Comparative Market Analysis (CMA) that looks at recently sold properties similar to yours in your area. Factors include location, size, condition, recent improvements, and current market conditions.',
        },
        {
          question: 'What should I do to prepare my home for sale?',
          answer: 'Start with decluttering and deep cleaning. Consider minor repairs and fresh paint. We can recommend staging services and provide a pre-listing inspection to identify any issues that might affect the sale.',
        },
        {
          question: 'How long does it take to sell a home?',
          answer: 'The average time varies by market conditions, but typically ranges from 30-90 days. Proper pricing, staging, and marketing can significantly impact how quickly your home sells.',
        },
        {
          question: 'What are the costs of selling a home?',
          answer: 'Typical costs include real estate commission (usually 5-6% split between agents), title insurance, transfer taxes, attorney fees, and any repairs or staging costs. We\'ll provide a detailed net proceeds estimate.',
        },
      ],
    },
    {
      category: 'Renting',
      questions: [
        {
          question: 'What do I need to rent a property?',
          answer: 'Most landlords require proof of income (typically 3x the monthly rent), credit check, references from previous landlords or employers, security deposit, and first month\'s rent upfront.',
        },
        {
          question: 'Can I negotiate rent?',
          answer: 'Yes, especially in slower markets or if you\'re a long-term tenant with good credit. Consider offering a longer lease, paying several months upfront, or highlighting your qualifications as a reliable tenant.',
        },
        {
          question: 'What should I look for during a rental viewing?',
          answer: 'Check water pressure, test electrical outlets, look for signs of pests or water damage, test appliances, check cell phone reception, and note the condition of windows, floors, and walls.',
        },
        {
          question: 'What rights do tenants have?',
          answer: 'Tenant rights vary by location but typically include the right to a habitable dwelling, privacy, proper notice before entry, return of security deposits, and protection from discrimination. Check local laws for specific rights.',
        },
      ],
    },
    {
      category: 'General',
      questions: [
        {
          question: 'Do I need a real estate agent?',
          answer: 'While not legally required, agents provide valuable expertise in pricing, marketing, negotiations, contracts, and local market knowledge. They can save you time and money while reducing stress throughout the process.',
        },
        {
          question: 'How are real estate agents compensated?',
          answer: 'Agents are typically paid through commission (usually 5-6% of the sale price) that\'s split between the buyer\'s and seller\'s agents. The seller usually pays this fee at closing, though it\'s negotiable.',
        },
        {
          question: 'What\'s the difference between pre-qualified and pre-approved?',
          answer: 'Pre-qualification is an informal estimate based on basic financial information. Pre-approval involves a thorough review of your finances by a lender and provides a conditional commitment for a specific loan amount.',
        },
        {
          question: 'Can I buy and sell at the same time?',
          answer: 'Yes, though it requires careful coordination. Options include contingent offers, bridge loans, or timing the transactions strategically. We can help you explore the best approach for your situation.',
        },
      ],
    },
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      qa => 
        qa.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        qa.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Find answers to common questions about buying, selling, and renting properties
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms</p>
            <button
              onClick={() => setSearchTerm('')}
              className="bg-primary-600 text-white px-6 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredFaqs.map((category, categoryIndex) => (
              <div key={category.category} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary-600 text-white px-6 py-4">
                  <h2 className="text-xl font-semibold">{category.category}</h2>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {category.questions.map((qa, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isExpanded = expandedItems.includes(globalIndex);
                    
                    return (
                      <div key={questionIndex}>
                        <button
                          onClick={() => toggleExpanded(globalIndex)}
                          className="w-full text-left px-6 py-4 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-gray-900 pr-4">{qa.question}</h3>
                            {isExpanded ? (
                              <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        
                        {isExpanded && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-700 leading-relaxed">{qa.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-12 bg-primary-50 border border-primary-200 rounded-lg p-8 text-center">
          <MessageCircle className="h-8 w-8 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:(555)123-4567"
              className="border border-primary-600 text-primary-600 px-6 py-2 rounded-md font-medium hover:bg-primary-50 transition-colors"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h4 className="font-semibold text-gray-900 mb-2">First-time Buyer?</h4>
            <p className="text-gray-600 text-sm mb-4">
              Learn about our first-time buyer programs and resources.
            </p>
            <a
              href="/properties"
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              View Properties →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Selling Your Home?</h4>
            <p className="text-gray-600 text-sm mb-4">
              Get a free market analysis and selling strategy consultation.
            </p>
            <a
              href="/submit-property"
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              List Property →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Need Financing?</h4>
            <p className="text-gray-600 text-sm mb-4">
              Calculate payments and explore mortgage options.
            </p>
            <a
              href="/mortgage-calculator"
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              Mortgage Calculator →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}