const getTimeElapsed = async (creationTime) => {
  const creationTimeDate = new Date(creationTime);
  const now = new Date();

  const subtractionInMs = now - creationTimeDate;

  const minutes = Math.round(subtractionInMs / (1000 * 60));
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const months = Math.round(days / 30);

  let timeElapsed;

  if (minutes < 60) {
    timeElapsed = minutes + (minutes === 1 ? " minute" : " minutes");
  } else if (hours < 24) {
    timeElapsed = hours + (hours === 1 ? " hour" : " hours");
  } else if (days < 30) {
    timeElapsed = days + (days === 1 ? " day" : " days");
  } else {
    timeElapsed = months + (months === 1 ? " month" : " months");
  }

  return timeElapsed;
};

export default getTimeElapsed;
