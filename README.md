# Wiki Viewer
This project Uses the MediaWiki API to replicate the search function and random article function, similar to the functionality found on Wikipedia.

![Screen Shot 2023-05-06 at 10 33 32 AM](https://user-images.githubusercontent.com/16522246/236630557-ba4d6c48-a973-4989-a2c8-fb09a7f83d6a.png)

## How it works

1. Once the site loads, a user enters their search word or phrase in to the input field.
2. A list of corresponding article results is listed to the user.
3. A user selects on of those results to get redirected to the related article entry on Wikipedia.
4. A user also has the ability to get a random article by clicking the "I'm feeling lucky!" option.

https://user-images.githubusercontent.com/16522246/236631002-cbbe4356-05e5-481e-968b-02543954ad6a.mov

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
