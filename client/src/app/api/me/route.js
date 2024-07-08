// src/app/api/me/route.js
import auth0 from '../../lib/auth0';

export async function GET(req) {
  try {
    const session = await auth0.getSession(req);
    const user = session.user;
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response('Unauthorized', { status: 401 });
  }
}
