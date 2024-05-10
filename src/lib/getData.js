export default async function getData(parm) {
  const res = await fetch(`http://localhost:8080/${parm}`);
  return await res.json();
}
