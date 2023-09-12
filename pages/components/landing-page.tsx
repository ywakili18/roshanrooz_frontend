
const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-300 min-h-screen text-white flex flex-col justify-center items-center">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4">Roshan Rooz</h1>
        <p className="text-lg mb-8">Your Journey to Lighter Days</p>
        <a
          href="#signup"
          className="bg-white text-blue-500 py-3 px-8 rounded-full text-lg hover:bg-blue-100 transition duration-300 ease-in-out"
        >
          Sign Up
        </a>
      </header>

      <section className="mt-16 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Transform Your Mental Well-being</h2>
        <p className="text-gray-200 mb-8">
          Roshan Rooz is your personal mental health journaling companion. Record your daily moods, jot down your thoughts, and get a dose of positivity with our ChatGPT-powered affirmations. Watch your journey to better mental health unfold with our mood tracking feature.
        </p>
        <a
          href="#signup"
          className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg hover:bg-blue-100 transition duration-300 ease-in-out"
        >
          Get Started
        </a>
      </section>

      <footer className="text-gray-300 text-center mt-16">
        <p>&copy; 2023 Roshan Rooz. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
