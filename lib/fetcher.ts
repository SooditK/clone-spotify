export default function fetcher(
  url: string,
  data: { email: string; password: string }
) {
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
    body: data ? JSON.stringify(data) : undefined,
  }).then((res) => {
    if (res.status > 399 && res.status < 200) {
      window.location.href = "/login";
    }
    return res.json();
  });
}
