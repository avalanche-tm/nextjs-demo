export type Feature = {
  voice: string
  uses: number
  likes: number
  imageUrl: string
  community: boolean // not sure what this property represents
}

const featured: Feature[] = [
  {
    voice: 'Drizzy',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=drizzy.png',
    community: false,
  },
  {
    voice: 'Ariana',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=ariana.png',
    community: false,
  },
  {
    voice: 'Ariana',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=ariana.png',
    community: false,
  },
  {
    voice: 'Ariana',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=ariana.png',
    community: false,
  },
  {
    voice: 'Juice',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=juice.png',
    community: false,
  },
  {
    voice: 'Plankton',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=plankton.png',
    community: true,
  },
]

const community: Feature[] = [
  {
    voice: 'Elvis',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=elvis.png',
    community: true,
  },
  {
    voice: 'Minecraft Villager',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=minecraft-villager.png',
    community: true,
  },
  {
    voice: 'Hatsune Miku',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=hatsune-miku.png',
    community: true,
  },
  {
    voice: 'Elvis',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=elvis.png',
    community: true,
  },
]

let moreVoices: Feature[] = [
  {
    voice: 'Michael',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=michael.png',
    community: false,
  },
  {
    voice: 'Patrick',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=patrick.png',
    community: false,
  },
  {
    voice: 'Taylor',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=taylor.png',
    community: false,
  },
  {
    voice: 'Patrick',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=patrick.png',
    community: false,
  },
  {
    voice: 'Kanye',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=kanye.png',
    community: false,
  },
  {
    voice: 'Weeknd',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=weeknd.png',
    community: false,
  },
  {
    voice: 'Justin',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=justin.png',
    community: false,
  },
  {
    voice: 'Weeknd',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image?img=weeknd.png',
    community: false,
  },
]
// duplicate to simulate a longer list
moreVoices = moreVoices.concat(moreVoices)

export async function getFeaturedVoices() {
  // add delay to simulate network request
  await randomDelay()
  return featured
}

export async function getCommunityVoices() {
  await randomDelay()
  return community
}

export async function getMoreVoices() {
  await randomDelay()
  return moreVoices
}

function randomDelay() {
  const duration = Math.floor(Math.random() * (300 - 100 + 1)) + 100
  return new Promise((resolve) => setTimeout(resolve, duration))
}
