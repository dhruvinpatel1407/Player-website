
const About = () => {
  return (
    <div className="bg-blue-100 bg-opacity-90 text-black py-12 px-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-800">
          Discover, explore, and celebrate the world of sports with us.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>
              <span className="text-black font-medium">Comprehensive Player Data:</span> Access detailed statistics, scores, and performance metrics for players across various sports.
            </li>
            <li>
              <span className="text-black font-medium">Trending Players:</span> Stay informed about the top-performing athletes and rising stars.
            </li>
            <li>
              <span className="text-black font-medium">Custom Leaderboards:</span> Create and view personalized leaderboards for your favorite players or teams.
            </li>
            <li>
              <span className="text-black font-medium">Community Insights:</span> Share your reviews and rankings or see how others view a player&rsquo;s performance.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-800 leading-relaxed">
            We aim to bring sports enthusiasts closer to their favorite games by creating a platform that highlights the achievements of players worldwide. Whether it&rsquo;s a legendary athlete or an emerging talent, we believe every player deserves recognition.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Us on the Journey</h2>
          <p className="text-gray-800 leading-relaxed">
            Be part of our vibrant community of sports lovers. Explore player data, share your thoughts, and celebrate the passion for sports with fellow enthusiasts. Together, let&rsquo;s honor the incredible world of sports!
          </p>
        </section>

        {/* Office Section */}
        <section>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {/* Office 1 */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6 w-80 flex flex-col items-center">
              <h2 className="text-xl text-white font-semibold mb-2">Head Office</h2>
              <p className="text-gray-300 text-center leading-relaxed">
                456 Sports Avenue <br />
                Game City, NY 10001 <br />
                United States
              </p>
            </div>

            {/* Office 2 */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6 w-80 flex flex-col items-center">
              <h2 className="text-xl text-white font-semibold mb-2">Branch Office</h2>
              <p className="text-gray-300 text-center leading-relaxed">
                789 Athlete Street, <br />
                Stadium City, <br />
                Melbourne, VIC 3000
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
