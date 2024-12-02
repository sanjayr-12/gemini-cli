#!/usr/bin/env node

const readline = require("node:readline");
const axios = require("axios");
const chalk = require("chalk");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function genContent() {
  rl.question("Enter the prompt: ", async (prompt) => {
    try {
      const result = await axios.post(
        "https://gemini-35e7.onrender.com/api/prompt",
        {
          prompt,
        }
      );
      console.log(chalk.blue.italic(result.data));
    } catch (error) {
      console.log(chalk.red("Server Error"));
    }
    genContent();
  });
}

genContent();
