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
    imageUrl: '/api/mock-image/drizzy',
    community: false,
  },
  {
    voice: 'Ariana',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/ariana',
    community: false,
  },
  {
    voice: 'Ariana',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/ariana',
    community: false,
  },
  {
    voice: 'Ariana',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/ariana',
    community: false,
  },
  {
    voice: 'Juice',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/juice',
    community: false,
  },
  {
    voice: 'Plankton',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/plankton',
    community: true,
  },
]

const community: Feature[] = [
  {
    voice: 'Elvis',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/elvis',
    community: true,
  },
  {
    voice: 'Minecraft Villager',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/minecraft-villager',
    community: true,
  },
  {
    voice: 'Hatsune Miku',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/hatsune-miku',
    community: true,
  },
  {
    voice: 'Elvis',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/elvis',
    community: true,
  },
]

let moreVoices: Feature[] = [
  {
    voice: 'Michael',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/michael',
    community: false,
  },
  {
    voice: 'Patrick',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/patrick',
    community: false,
  },
  {
    voice: 'Taylor',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/taylor',
    community: false,
  },
  {
    voice: 'Patrick',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/patrick',
    community: false,
  },
  {
    voice: 'Kanye',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/kanye',
    community: false,
  },
  {
    voice: 'Weeknd',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/weeknd',
    community: false,
  },
  {
    voice: 'Justin',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/justin',
    community: false,
  },
  {
    voice: 'Weeknd',
    uses: 45,
    likes: 1,
    imageUrl: '/api/mock-image/weeknd',
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
