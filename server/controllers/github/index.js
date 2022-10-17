/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const dotenv = require("dotenv").config();
const { Octokit } = require("octokit");
const moment = require("moment");
const { request } = require("express");
const GITHUB_PAT = process.env.GITHUB_PAT;
const { addEvent } = require("../../helpers/firebase/index");

const octokit = new Octokit({
  auth: GITHUB_PAT,
});

const pushTheDaysCommit = async () => {
  let events = [];
  try {
    const allEvents = await (
      await octokit.request("GET /users/{username}/events/public", {
        username: "Kilo0110",
      })
    ).data;

    allEvents.forEach((event) => {
      if (event.type === "PushEvent") {
        let pushEventInfo = {
          createdOn: null,
          eventCommits: [],
        };
        let eventTimestamp = event.created_at;
        if (eventTimestamp === getToday()) {
          pushEventInfo.createdOn = eventTimestamp;
          let eventCommits = event.payload.commits;
          eventCommits.forEach((commit) => {
            pushEventInfo.eventCommits.push(commit.message);
          });
          addEvent(pushEventInfo);
        } else {
          return;
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
  return events;
};

const getToday = () => {
  const today = new Date();
  return today;
};

module.exports = {
  pushTheDaysCommit,
};
