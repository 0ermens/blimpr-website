export async function onRequest(context) {
  const url = new URL(context.request.url);
  const indexUrl = new URL('/join/index.html', url.origin);
  const response = await fetch(indexUrl);
  return new Response(response.body, {
    status: 200,
    headers: response.headers,
  });
}