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

/** Header for the card */
const header = `           ${chalk.cyan.bold("Nate")} ${chalk.blue.bold(
  "Moore"
)} ${sym("/")} ${tranquilMarmot}`;

/** Where I (currently) work */
const work = `  ${chalk.white.bold("Lead Software Engineer")} at ${chalk.blue.dim(
  "Tyler"
)} ${chalk.green.dim("Technologies")}
  ${chalk.cyan("Socrata")}, Data & Insights Division`;

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

/** Link to my Twitter account (it's mostly bad retweets) */
const twitter = ` ${label("Twitter")}   ${url(
  "https://twitter.com/"
)}${tranquilMarmot}`;

/** Link to my LinkedIn account (it's mostly out-of-date) */
const linkedIn = `${label("LinkedIn")}   ${url(
  "https://www.linkedin.com/in/"
)}${nate}${sym("-")}${moore}`;

/** The command you can run to show this card! */
const cardCommand = `    ${label("Card")}   ${sym("npx")} github${sym(
  ":"
)}${tranquilMarmot}${sym("/")}card`;

/** This is the actual string of the card... */
const card = `${header}

${work}
${location}

${email}
${web}
${github}
${twitter}
${linkedIn}

${cardCommand}`;

/** And this is the card surrounded by a nice box */
const boxed = boxen(card, {
  padding: 1,
  margin: 1,
  borderColor: "#6e9c78",
  borderStyle: 'round'
});

console.log(boxed);
