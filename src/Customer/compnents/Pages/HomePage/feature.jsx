import React from 'react';

function AboutUs() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About <span className='text-red-500'>Us</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">Three Years of Trusted Service</h2>
                        <p className="text-gray-600 leading-relaxed">With a proven track record of reliability and excellence, we've been serving the community for three years, earning the trust of countless satisfied customers.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">Featured title</h2>
                        <p className="text-gray-600 leading-relaxed">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">Featured title</h2>
                        <p className="text-gray-600 leading-relaxed">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
