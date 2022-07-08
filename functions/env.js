export function onRequest({ env }) {
  return new Response(JSON.stringify(env, null, 4));
}
