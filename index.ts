#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

/** Create a colored label string */
const label = (labelName: string): string => chalk.white.bold(`${labelName}:`);

/** Create a colored URL string */
const url = (baseUrl: string): string => chalk.grey(baseUrl);

/** Create a colored symbol string (for i.e. @, /, -, .) */
const sym = (symbol: string): string => chalk.magenta(symbol);

/** A colored dot. */
const dot = sym(".");

/** My first name */
const nate = chalk.cyan(`nate`);

/** My last name */
const moore = chalk.blue(`moore`);

/** My handle */
const tranquilMarmot = chalk.green("TranquilMarmot");

/** My handle, but... lowercase */
const lowerTranquilMarmot = chalk.green("tranquilmarmot");

/** Header for the card */
const header = `           ${chalk.cyan.bold("Nate")} ${chalk.blue.bold(
  "Moore"
)} ${sym("/")} ${tranquilMarmot}`;

/** Where I (currently) work */
const work = `  ${chalk.white.bold("Senior Software Engineer")} at ${chalk
  .rgb(255, 79, 0)
  .bold("Zapier")}`;

/** Where I (currently) live */
const location = `  ${chalk.grey("Seattle, WA")}`;

/** Where to reach me by electronic mail */
const email = `   ${label("Email")}   ${nate}${sym("@")}${moore}${dot}codes`;

/** Where to find my site on the web */
const web = `     ${label("Web")}   ${chalk.grey(
  "https://"
)}${nate}${dot}${moore}${dot}codes`;

/** Link to my GitHub profile */
const github = `  ${label("GitHub")}   ${url(
  "https://github.com/"
)}${tranquilMarmot}`;

/** Link to my Bluesky account */
const bluesky = ` ${label("Bluesky")}   ${url(
  `https://bsky.app/profile/${nate}${dot}${moore}${dot}${chalk.white("codes")}`
)}`;

/** Link to my LinkedIn account */
const linkedIn = `${label("LinkedIn")}   ${url(
  "https://www.linkedin.com/in/"
)}${nate}${sym("-")}${moore}`;

/** The command you can run to show this card! */
const cardCommand = `    ${label("Card")}   ${sym("npx")} ${sym(
  "@"
)}${lowerTranquilMarmot}${sym("/")}card`;

/** This is the actual string of the card... */
const card = `${header}

${work}
${location}

${email}
${web}
${github}
${bluesky}
${linkedIn}

${cardCommand}`;

/** And this is the card surrounded by a nice box */
const boxed = boxen(card, {
  padding: 1,
  margin: 1,
  borderColor: "#6e9c78",
  borderStyle: "round",
});

console.log(boxed);
