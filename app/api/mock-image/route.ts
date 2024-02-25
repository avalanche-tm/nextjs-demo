import { existsSync, readFileSync } from 'fs'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { join } from 'path'

// the purpose of this endpoint is to mock serve images from the public folder
const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp']

export async function GET(req: NextRequest) {
  try {
    // Extract the imageName from the URL
    const { searchParams } = new URL(req.url)
    const imageNameWithExtension = searchParams.get('img') || ''

    // Retrieve the file extension and check if it is allowed
    const fileExt = imageNameWithExtension.split('.').pop() || ''
    if (!imageExtensions.includes(fileExt.toLowerCase())) {
      return new Response('Invalid image extension', { status: 400 })
    }

    // Construct the path to the requested image
    const imagePath = join('./public/assets/images/voices', imageNameWithExtension)

    // Check if the image exists
    if (existsSync(imagePath)) {
      // Read the image file from the filesystem
      const imageBuffer = readFileSync(imagePath)

      // Set the correct headers for image content
      const headers = new Headers({ 'Content-Type': `image/${fileExt.toLowerCase()}` })

      // Return the image response
      return new NextResponse(imageBuffer, { headers })
    } else {
      // If the image doesn't exist, send a 404 response
      return new NextResponse('Image not found', { status: 404 })
    }
  } catch (error) {
    // If there's an error, send a 500 response
    console.error(error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
