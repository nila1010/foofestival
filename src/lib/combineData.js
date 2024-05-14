import { getData } from "./crud";

export default async function combinedData() {
  const allArtist = await getData("bands");
  const allPlaytimesData = await getData("schedule");

  const times = Object.entries(allPlaytimesData).map((venue) => {
    const filtered = Object.entries(venue[1]).map((day) => {
      return day[1].map((oneDay) => {
        return oneDay;
      });
    });
    return filtered;
  });

  const times2 = Object.entries(allPlaytimesData).map((venue) => {
    return Object.entries(venue[1]).map((days) => {
      return days[1].map((oneDay) => {
        const matched = allArtist.find((slot) => slot.name === oneDay.act);
        return { ...oneDay, ...matched };
      });
    });
  });
  /*  for (let venue in allPlaytimesData) {
    if (allPlaytimesData.hasOwnProperty(venue)) {
      const daysObject = allPlaytimesData[venue];
      console.log(daysObject);
    }
  } */

  const mergedArray = allArtist.map((oneArtst) => {
    const matchedArray = times.flat(Infinity).find((slot) => slot.act === oneArtst.name);
    return { ...oneArtst, ...matchedArray };
  });

  return times2;
}
