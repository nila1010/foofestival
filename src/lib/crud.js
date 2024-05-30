/* export const endPoint = "http://localhost:8080"; */
export const endPoint = "https://water-efficacious-volleyball.glitch.me";

export async function getData(parm) {
  const res = await fetch(endPoint + "/" + parm);
  return await res.json();
}

export async function getLikes(parm) {
  const headersList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };

  const getUser = await fetch("https://lwvdzfdgkmziuewtursm.supabase.co/rest/v1/users?name=eq." + parm, {
    headers: headersList,
    cache: "no-store",
  });

  const userData = await getUser.json();
  const userId = userData[0].id;

  const response = await fetch("https://lwvdzfdgkmziuewtursm.supabase.co/rest/v1/users_liked?userid=eq." + userId, {
    headers: headersList,
    cache: "no-store",
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
    cache: "no-store",
  });
}

export async function getReservation(title, spots) {
  const response = await fetch(endPoint + "/reserve-spot", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      area: title,
      amount: spots,
    }),
  });
  return await response.json();
}

export async function getSpots() {
  const res = await fetch(endPoint + "/available-spots");
  return await res.json();
}

export async function addBooking(info) {
  let headersList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    prefer: "return=representation",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    billingfullname: info.billingfullname,
    billinglastname: info.billinglastname,
    address: info.address,
    city: info.city,
    zip: info.zip,
    email: info.email,
    tel: info.tel,
    extrapersons: info.extrapersons,
    userid: info.userid,
  });

  let response = await fetch("https://lwvdzfdgkmziuewtursm.supabase.co/rest/v1/form_foo_festival", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  /*   if (!response.ok) {
    // Log the status and full response for debugging
    console.error(`Error: ${response.status}`);
    const errorDetails = await response.json();
    console.error("Error details:", errorDetails);
    throw new Error("Failed to add booking"); */
  /*   } */

  let data = await response.json();

  return data;
}

export async function addReservation(info) {
  let headersList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    prefer: "return=representation",
    "Content-Type": "application/json",
  };

  const getId = await fetch("https://lwvdzfdgkmziuewtursm.supabase.co/rest/v1/form_foo_festival?userid=eq." + info.userid, {
    headers: headersList,
  });
  const idData = await getId.json();
  const userId = idData[0].userid;

  let bodyContent = JSON.stringify({
    userid: userId,
    camp: info.camp,
    regtickets: info.regtickets,
    viptickets: info.viptickets,
    tent2pers: info.tent2pers,
    tent3pers: info.trent3pers,
    greencamp: info.greencamp,
  });

  let response = await fetch("https://lwvdzfdgkmziuewtursm.supabase.co/rest/v1/foo_festival_bookings", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  /*   if (!response.ok) {
    // Log the status and full response for debugging
    console.error(`Error: ${response.status}`);
    const errorDetails = await response.json();
    console.error("Error details:", errorDetails);
    throw new Error("Failed to add booking");
  } */

  let data = await response.json();

  return data;
}

export async function setReservation(reservationId) {
  const response = await fetch(endPoint + "/fullfill-reservation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: reservationId.id,
    }),
  });
  return await response.json();
}
