import { getData } from "./crud";

export default async function combinedData() {
  const allArtist = await getData("bands");
  const schedule = await getData("schedule");

  for (let stage in schedule) {
    for (let day in schedule[stage]) {
      schedule[stage][day].forEach((act) => {
        const matched = allArtist.find((slot) => slot.name === act.act);
        console.log(matched);
        act.info = matched;
      });
    }
  }
  return schedule;
}
