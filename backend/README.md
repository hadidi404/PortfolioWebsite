# Sample backend

This is a tiny Express server used as a sample backend for the `my-website` project.

How to run locally:

```bash
# install dependencies in backend/
npm --prefix backend install

# from project root: start backend
npm run start:backend

# or directly inside backend/
cd backend && npm start
```

Endpoints:

- GET /api/hello -> { message, now }
- POST /api/echo -> echos JSON body

Notes: CORS is permissive for local dev. For production, tighten origins.
