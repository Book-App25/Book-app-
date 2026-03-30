# Project Context: Book-App (Node + Supabase)

### Core Architecture
- **Environment:** Mobile-first development (GitHub Web Interface).
- **Hosting:** Render (Node.js Runtime).
- **Database:** Supabase (PostgreSQL).
- **Security:** Backend-as-a-Proxy (Frontend has NO direct DB access).

### File Roles (Modular Setup)
1. **package.json:** Tells Render which tools to install (Express, Supabase SDK).
2. **supabaseClient.js:** The "Locked Door." It creates the secure connection using the `SERVICE_ROLE_KEY`.
3. **server.js (The Brain):** - This is the entry point for Render.
   - It listens for requests from the frontend.
   - It uses `supabaseClient.js` to fetch data and sends it back to the user.
   - **Crucial:** It handles the `PORT` and `CORS` so the app can be seen online.

### Environment Variables (Set in Render)
- `SUPABASE_URL`: Project API URL.
- `SUPABASE_SERVICE_ROLE_KEY`: Superuser secret key.

### Status
Current goal is a modular, scalable Node backend where `server.js` acts as the middleman between the user and the Supabase tables.
