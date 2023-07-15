/**
 * @file Development script, which performs the following actions.
 *
 * 1. Starts the Firebase Local Emulator Suite.
 * 2. Manually executes the `clearConnections` function on a schedule.
 * 3. Starts the frontend React app with Fast Refresh enabled.
 */

const path = require("path");
const { spawn, spawnSync } = require("child_process");

let emulators, app;

process.on("exit", () => {
  if (emulators && !emulators.killed) emulators.kill();
  if (app && !app.killed) app.kill();
});

app = spawn("npm", ["ci"],  {
  cwd: __dirname + "/bint-frontend",
  stdio: ["ignore", "pipe", "inherit"],
});
app.stdout.pipe(process.stdout);
// Frontend application
// why vite dev no work
app = spawn("npm", ["run", "build"], {
  cwd: __dirname + "/bint-frontend",
  stdio: ["ignore", "pipe", "inherit"],
});
app.stdout.pipe(process.stdout);
