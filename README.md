# Project Context: Book-App (Node + Supabase)

### Core Architecture
- **Environment:** Mobile-first development (GitHub Web Interface).
- **Hosting:** Render (Node.js Runtime - Port 10000).
- **Database:** Supabase (PostgreSQL).
- **Security:** Backend-as-a-Proxy (Frontend has NO direct DB access).

### Communication Protocol
1. **Safety First:** Assistant MUST ask for the existing version of a file before providing an updated version.
2. **File Paths:** All code blocks must start with a comment indicating the file path (e.g., // path: server.js).

### File Roles
1. **package.json:** Installation instructions for Render.
2. **supabaseClient.js:** Secure Superuser connection to Supabase.
3. **server.js:** The main API "Brain" that handles requests and Port 10000.

### Environment Variables (Set in Render)
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
