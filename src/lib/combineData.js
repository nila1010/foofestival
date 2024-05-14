import { getData } from "./crud";

export default async function combinedData() {
  const allArtist = await getData("bands");
  const schedule = await getData("schedule");
  //schedule["Midgard"]
  for (let stage in schedule) {
    //schedule[stage]
    // console.log(stage);
    for (let day in schedule[stage]) {
      //console.log(day);
      schedule[stage][day].forEach((act) => {
        const matched = allArtist.find((slot) => slot.name === act.act);
        act.info = matched;
      });
    }
  }
  console.log(schedule.Midgard.mon);

  /*   const times = Object.entries(allPlaytimesData).map((venue) => {
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


  const mergedArray = allArtist.map((oneArtst) => {
    const matchedArray = times.flat(Infinity).find((slot) => slot.act === oneArtst.name);
    return { ...oneArtst, ...matchedArray };
  });

  return times2; */
}

/*  for (let venue in allPlaytimesData) {
    if (allPlaytimesData.hasOwnProperty(venue)) {
      const daysObject = allPlaytimesData[venue];
      console.log(daysObject);
    }
  } */
