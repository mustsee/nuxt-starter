import Airtable from "airtable";

export default function (context, locale) {
  return new Promise((resolve, reject) => {
    const { apiKey, stepsDB } = context.env;
    const base = new Airtable({ apiKey }).base(stepsDB);

    // firstPage = first 100 entries, use eachPage if more than 100 entries
    base("translations")
      .select({ filterByFormula: `lang="${locale}"` })
      .firstPage((error, records) => {
        if (error) reject(`Error while retrieving ${locale}.js`, error);
        resolve(JSON.parse(records[0].fields.text));
      });
  });
}

// The API is limited to 5 requests per second per base.
// If you exceed this rate, you will receive a 429 status code and will need to wait 30 seconds before subsequent requests will succeed.
// The official JavaScript client has built-in retry logic.

/* import Airtable from "airtable";

export default async (context, locale) => {
  return new Promise((resolve, reject) => {
    const { apiKey, stepsDB } = context.env;
    const base = new Airtable({ apiKey }).base(stepsDB);

    // firstPage = first 100 entries, use eachPage if more than 100 entries
    base("translations")
      .select({ filterByFormula: `lang="${locale}"` })
      .firstPage((error, records) => {
        if (error) reject(`Error while retrieving ${locale}.js`, error);
        resolve(JSON.parse(records[0].fields.text));
      });
  });
}; */

// Documentation about this piece of code
// https://mydnic.be/post/nuxt-how-to-load-translations-from-the-backend-with-an-api

/* export default async (context, locale) => {
  const axios = require("axios").default;
  try {
    const { apiKey, stepsDB } = context.env;
    const formula = encodeURIComponent(`lang="${locale}"`);
    const res = await axios.get(
      `https://api.airtable.com/v0/${stepsDB}/translations?filterByFormula=${formula}&api_key=${apiKey}`
    );
    return JSON.parse(res.data.records[0].fields.text);
  } catch (e) {
    console.log(`Error while retrieving ${locale}.js`, e);
  }
}; */
