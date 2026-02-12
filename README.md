This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

**Run the dev server from the `app` folder:**

```bash
cd app
npm run dev
```

Then open **http://127.0.0.1:3000** in your browser.

**Useful scripts:**
- `npm run dev` – start dev server with webpack on port 3000
- `npm run dev:fresh` – delete `.next` cache and start dev server
- `npm run build && npm run start` – **faster load**: production build, then serve on 3000 (no recompile on each request)
- `npm run clean` – remove `.next` folder only

**If port 3000 is in use:** run `lsof -i :3000` then `kill -9 <PID>` to free it.

**If "Compiling..." never finishes:**  
- Try increasing file limit first: `ulimit -n 10240` then `npm run dev` again.  
- Or use webpack instead of Turbopack: `npm run dev:webpack` (slower first compile but more reliable on some systems).
3. Increase file limit (helps “too many open files”): run `ulimit -n 10240` in the same terminal before `npm run dev`.
4. If the project is on iCloud Drive, try copying it to a local folder (e.g. `~/Projects/NTC`) and run from there.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
