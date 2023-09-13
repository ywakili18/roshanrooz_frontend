import Link from 'next/link'
import Image from 'next/image'

const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#FCF9DA] min-h-screen text-[#DB636F] flex flex-col items-center justify-center p-4 lg:p-0">
      <div className="flex flex-col lg:flex-row w-full max-w-screen-lg items-center justify-center gap-8">
        <div className="flex items-center justify-center">
          <Image
            src="/1.svg"
            width={500}
            height={500}
            alt="Roshan Rooz, Your journey to lighter days"
          />
        </div>

        <section className="lg:w-1/2 text-center lg:text-left mt-20">
          <h2 className="text-3xl font-semibold mb-6">
            Transform Your Mental Well-being
          </h2>
          <p className="mb-8">
            Roshan Rooz is your personal mental health journaling companion.
            Record your daily moods, jot down your thoughts, and get a dose of
            positivity with our ChatGPT-powered affirmations. Watch your journey
            to better mental health unfold with our mood tracking feature.
          </p>
          <Link
            href="/register"
            className="bg-[#DB636F] text-white py-3 px-6 rounded-full text-sm font-medium hover:bg-opacity-80 transition duration-300 ease-in-out"
          >
            Get started
          </Link>
        </section>
      </div>

      <section className="mt-16 max-w-4xl mx-auto text-center lg:text-left">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Roshan Rooz?</h2>
        <p className="mb-6">
          With countless journaling apps out there, Roshan Rooz stands out with
          its unique blend of modern tech and genuine care for your well-being.
          Our AI-backed features ensure that you&apos;re not just jotting down
          thoughts, but embarking on a journey of self-discovery.
        </p>
        <p>
          Plus, with privacy at the forefront of our design, you can rest
          assured that your entries remain yours alone. Begin today, and
          experience the transformative power of introspective journaling.
        </p>
      </section>
    </div>
  )
}

export default LandingPage
