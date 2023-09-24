import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui-elements/btn'
const LandingPage: React.FC = () => {
  return (
    <div className="background">
      <div className="m-auto min-h-screen  flex flex-col items-center justify-center p-4 lg:p-0 mt-20 bg lg:mt-20">
        <div className="flex flex-col md:flex-row w-full max-w-screen-lg items-center justify-center gap-32  mt-10">
          <section className="lg:w-1/2 text-left lg:text-left mt-20 md:max-w-sm">
            <h2 className="text-4xl font-semibold mb-6 text-text">
              Transform Your{' '}
              <div className="text-secondary ">Mental Well-being</div>
            </h2>
            <p className="mb-8">
              Roshan Rooz: Your digital mental health ally. Log your daily
              emotions, pen your reflections, and uplift your spirit with
              affirmations powered by ChatGPT. Track and visualize your mental
              well-being journey with our intuitive mood analytics.
            </p>
            <Link href="/register">
              <Button variant="primary">Get started</Button>
            </Link>
          </section>
          <div className="flex items-center justify-center">
            <Image
              src="/roshan_logo.svg"
              width={500}
              height={500}
              alt="Roshan Rooz, Your journey to lighter days"
            />
          </div>
        </div>
        <section className="mt-16 max-w-5xl mx-auto  lg:text-left">
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose Roshan Rooz?
          </h2>
          <p className="mb-6">
            With countless journaling apps out there, Roshan Rooz stands out
            with its unique blend of modern tech and genuine care for your
            well-being. Our AI-backed features ensure that you&apos;re not just
            jotting down thoughts, but embarking on a journey of self-discovery.
          </p>
          <p>
            Plus, with privacy at the forefront of our design, you can rest
            assured that your entries remain yours alone. Begin today, and
            experience the transformative power of introspective journaling.
          </p>
        </section>{' '}
        <section className="mt-16 max-w-5xl mx-auto  lg:text-left">
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose Roshan Rooz?
          </h2>
          <p className="mb-6">
            With countless journaling apps out there, Roshan Rooz stands out
            with its unique blend of modern tech and genuine care for your
            well-being. Our AI-backed features ensure that you&apos;re not just
            jotting down thoughts, but embarking on a journey of self-discovery.
          </p>
          <p>
            Plus, with privacy at the forefront of our design, you can rest
            assured that your entries remain yours alone. Begin today, and
            experience the transformative power of introspective journaling.
          </p>
        </section>
      </div>
    </div>
  )
}

export default LandingPage
