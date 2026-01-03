import React from 'react'
const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          About <span className="text-blue-600">Me</span>
        </h2>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed mb-10 text-center">
            I am a dedicated Full Stack Developer with 6+ months of experience building web applications. 
            Known for my <span className="font-semibold text-blue-600">problem-solving</span> and{' '}
            <span className="font-semibold text-blue-600">strategic thinking</span>, I specialize in building 
            responsive websites and backend systems with the MERN stack. Currently working as a freelancer with 
            a team on various projects.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-3 flex items-center">
                <span className="mr-2">🎯</span> Focus
              </h3>
              <p className="text-gray-600">
                Building responsive websites, backend development, and full-stack solutions with MERN
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-green-600 mb-3 flex items-center">
                <span className="mr-2">🚀</span> Experience
              </h3>
              <p className="text-gray-600">
                6+ months working as a freelancer with collaborative teams on real-world projects
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-600 mb-3 flex items-center">
                <span className="mr-2">💪</span> Strengths
              </h3>
              <p className="text-gray-600">
                Problem solving, strategic thinking, rapid learning, and effective collaboration
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mt-8">
            <p className="text-blue-700 italic flex items-center">
              <span className="mr-2">💡</span>
              For the best experience viewing my projects, I recommend using a desktop browser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;