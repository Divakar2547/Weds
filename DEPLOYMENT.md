# Deployment guide

## Render backend

1. Push this repository to GitHub.
2. In Render, choose **New -> Blueprint** and select the repository. Render reads `render.yaml` and creates the API service from `backend/`.
3. Set the Render environment values marked `sync: false`:
   - `MONGO_URI`: a production MongoDB connection string (MongoDB Atlas is recommended).
   - `CLIENT_URL`: the Vercel production URL, for example `https://your-site.vercel.app`.
   - `ADMIN_EMAIL` and `ADMIN_PASSWORD`.
   - Cloudinary values, if image uploads should persist. Render local storage is temporary, so Cloudinary is required for production image uploads.
4. Deploy, then confirm `https://your-render-service.onrender.com/health` returns `{ "ok": true }`.

## Vercel frontend

1. In Vercel, import the same GitHub repository.
2. Set **Root Directory** to `frontend`.
3. Vercel uses `frontend/vercel.json` to build the Vite application and support direct URL visits.
4. Add `VITE_API_URL` in Vercel environment variables using the Render service URL. This is ready for frontend API integration.
5. Deploy. Copy the resulting Vercel URL into Render's `CLIENT_URL`, then redeploy the Render service.

## Local use

Copy `backend/.env.example` to `backend/.env` and fill its values. Then run `npm run seed` and `npm start` inside `backend`. Run `npm run dev` inside `frontend` for the site.
