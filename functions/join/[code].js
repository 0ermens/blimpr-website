export async function onRequest(context) {
  return context.env.ASSETS.fetch(
    new Request(new URL('/join/index.html', context.request.url))
  );
}