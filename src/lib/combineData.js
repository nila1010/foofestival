import { getData } from "./crud";

export default async function combinedData() {
  const allArtist = await getData("bands");
  const schedule = await getData("schedule");

  for (let stage in schedule) {
    for (let day in schedule[stage]) {
      schedule[stage][day].forEach((act) => {
        const matched = allArtist.find((slot) => slot.name === act.act);
        if (matched) {
          act.info = matched.logo;
        }
      });
    }
  }
  console.log(schedule);
  return schedule;
}

/* const mergedArray = allArtist.map((oneArtst) => {
    const matchedArray = times.flat(Infinity).find((slot) => slot.act === oneArtst.name);
    return { ...oneArtst, ...matchedArray }; */
