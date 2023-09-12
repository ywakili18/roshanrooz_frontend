/** @type {import('next').NextConfig} */
const nextConfig = {}
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const path = require('path')

module.exports = (phase) => {
  const envPath =
    phase === PHASE_DEVELOPMENT_SERVER
      ? path.join(__dirname, '.env.local')
      : path.join(__dirname, `.env.${process.env.NEXT_ENV}`)

  require('dotenv').config({ path: envPath })

  // Rest of your Next.js config
  return {}
}

module.exports = nextConfig
