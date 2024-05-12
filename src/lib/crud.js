export async function getData(parm) {
  const res = await fetch(`http://localhost:8080/${parm}`);
  return await res.json();
}

export async function getLikes(parm) {
  const headersList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };

  const getUser = await fetch("https://lwvdzfdgkmziuewtursm.supabase.co/rest/v1/users?name=eq." + parm, {
    headers: headersList,
  });

  const userData = await getUser.json();
  const userId = userData[0].id;

  const response = await fetch("https://lwvdzfdgkmziuewtursm.supabase.co/rest/v1/users_liked?userid=eq." + userId, {
    headers: headersList,
  });

  const likes = await response.json();
  const likedArray = likes[0].liked;

  return likedArray;
}

export async function addLikes(parm, userId) {
  const headersList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    perfer: "return=representation",
    "Content-Type": "application/json",
  };
  let bodyContent = JSON.stringify({
    liked: parm,
  });

  const response = await fetch("https://lwvdzfdgkmziuewtursm.supabase.co/rest/v1/users_liked?userid=eq." + userId, {
    method: "PATCH",
    body: bodyContent,
    headers: headersList,
  });
}
