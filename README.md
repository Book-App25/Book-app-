# Project Context: Book-App (Node + Supabase)

### Architecture
- **Environment:** Mobile-first development (GitHub Web Interface).
- **Hosting:** Render (Node.js Runtime).
- **Database:** Supabase (PostgreSQL).
- **Security Strategy:** Backend-as-a-Proxy. 
  - Frontend has NO direct DB access.
  - Backend uses `SUPABASE_SERVICE_ROLE_KEY` to bypass RLS.
  - All communication is Modular (supabaseClient.js handles connection).

### Environment Variables (Set in Render)
- `SUPABASE_URL`: Project API URL.
- `SUPABASE_SERVICE_ROLE_KEY`: Superuser secret key.
- `PORT`: Managed by Render.

### Current Goal
Maintain a scalable, modular Node.js backend that serves data to a frontend while keeping the database hidden and secure.
