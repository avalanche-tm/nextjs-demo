import { getPlaiceholder } from 'plaiceholder'

export async function getImagePlaceholder(src: string) {
  const imgSrc = src
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/${src}`
    : 'https://images.unsplash.com/photo-1621961458348-f013d219b50c'

  const buffer = await fetch(imgSrc)
    .then(async (res) => Buffer.from(await res.arrayBuffer()))
    .catch((err) => {
      console.error(err)
    })

  if (!buffer) {
    return undefined
  }
  const { base64 } = await getPlaiceholder(buffer)

  return base64
}
