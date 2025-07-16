import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Portfolio'
  const description = searchParams.get('description') || 'My portfolio site'
  
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <h1 style={{ color: 'white', fontSize: '60px', margin: '0' }}>
          {title}
        </h1>
        <p style={{ color: 'white', fontSize: '30px', margin: '20px 0 0 0' }}>
          {description}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
