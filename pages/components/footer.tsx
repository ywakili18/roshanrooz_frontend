import Link from 'next/link'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-black py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <Link className="hover:text-gray-400 mr-4" href="/">
              Home
            </Link>
            {/* You can add more links here if needed */}
          </div>
          <div>&copy; {currentYear} Roshan Rooz. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
