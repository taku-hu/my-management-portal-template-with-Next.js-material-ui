import type { NextApiHandler } from 'next'

const handler: NextApiHandler = (req, res) => {
  const { body, method, headers: { cookie } } = req
  const { username, password } = body
  const sessionId = `uid=${username}${password}`

  switch (method) {
    case 'POST':
      return res.status(200).setHeader('Set-Cookie', sessionId).json({ token: sessionId })
    default:
      return res.status(400).json({ message: 'Method not allowed' })
  }
}

export default handler
