export default function checkExpiresIn(expiresIn: string) {
  if (!expiresIn) return;

  let expiresInFormatted: any = 3600;

  if (expiresIn.includes("days")) {
    const days = expiresIn.split(" ")[0];

    expiresInFormatted = parseInt(days) * 86400;
  }

  if (expiresIn.includes("month")) {
    const month = expiresIn.split(" ")[0];

    expiresInFormatted = parseFloat(month) * 2592000;
  }
  if (expiresIn.includes("years")) {
    const years = expiresIn.split(" ")[1];

    expiresInFormatted = parseFloat(years) * 31104000;
  }
  if (expiresIn.includes("hours")) {
    const hours = expiresIn.split(" ")[1];

    expiresInFormatted = parseFloat(hours) * 3600;
  }
  if (expiresIn.includes("minutes")) {
    const minutes = expiresIn.split(" ")[1];

    expiresInFormatted = parseFloat(minutes) * 60;
  }
  if (expiresIn.includes("seconds")) {
    const seconds = expiresIn.split(" ")[1];

    expiresInFormatted = parseFloat(seconds);
  }

  return expiresInFormatted;
}
