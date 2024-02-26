# NextJS Voicify Demo

Live url: https://nextjs-voicify-demo.vercel.app/home

This is an implementation of Voicefy AI homepage based on incomplete design file.


## Solution structure

- Project structure follows official [Next.js guidelines](https://nextjs.org/docs/app/building-your-application/routing/colocation). Components are located in a separate folder outside the app folder, which contains only page routes for better separation and clarity. 

- The project utilizes innovative [shadcn](https://ui.shadcn.com/) component library, enabling better and easier customization as the code is directly copied into the project rather than imported as a separate library. Additionally, shadcn is being used by organizations such as Vercel and OpenAI.

## Design tradeoffs
- due to an incomplete design file and some inconsistencies within it, certain dimensions may have been rounded to the nearest Tailwind values.
- due to some issues with Jest testing library and SVG imports in current version of Next.js, test have not been written for all compnents.


## Future improvements

- RoobertPRO font appears slightly different on the screen compared to the provided Figma file, requiring investigation.
- image optimization and placeholder loading on feature cards are turned off due to a Vercel build bug that needs investigation (works locally).
- certain components could be broken down into multiple subcomponents.
- some components might benefit from additional animations.
- project could utilize SWR or React Query in the future as it grows.
- add tests for all components


## Getting started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
