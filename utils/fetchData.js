import Cookies from "js-cookie";
export default async function fetchData(
  url,
  method = "GET",
  body = null,
  file = false
) {
  try {
    const token = Cookies.get("_at_");
    let api = `${process.env.NEXT_PUBLIC_API_URL_DEV}/${url}`;
    if (token) {
      api = `${api}?auth_token=${token}`;
    }
    let first = {};
    if (method === "GET") {
      first = await fetch(api, {
        method,
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
    } else if (file) {
      first = await fetch(api, {
        method,
        body,
        credentials: "include",
      });
    } else if (method === "DELETE") {
      first = await fetch(api, {
        method,
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
    } else {
      first = await fetch(api, {
        body: JSON.stringify(body),
        method,
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
    }

    const second = await first.json();
    if (second.err) {
      return second
    }
    console.log(second)
      Cookies.set("_at_", second.data.auth_token, {
        expires: 1,
      });
    
    const { data:{data}} = second;
    return {data, err:null};
  } catch (error) {
    return { err: error, data: null };
  }
}
