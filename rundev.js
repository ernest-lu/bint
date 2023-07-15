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

spawnSync("npm", ["run", "build"], {
  cwd: path.join(__dirname, "functions"),
  stdio: ["ignore", "inherit", "inherit"],
});

// Start emulators
emulators = spawn(
  "firebase",
  [
    "emulators:start",
    "--project",
    "staging",
    "--import=./data",
    "--export-on-exit",
  ],
  {
    cwd: __dirname,
    stdio: ["ignore", "inherit", "inherit"],
  },
);

// Frontend application
// why vite dev no work
app = spawn("npm", ["run", "dev"], {
  cwd: __dirname + "/bint-frontend",
  stdio: ["ignore", "pipe", "inherit"],
});
app.stdout.pipe(process.stdout);
