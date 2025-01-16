# Unhandled Exception Crashing Node.js Server

This repository demonstrates a common issue in Node.js applications: unhandled exceptions causing the server to crash without informative error logs.  The `server.js` file contains a simple HTTP server that throws an unhandled exception.  The solution, in `serverSolution.js`, demonstrates how to use error handling to prevent this crash and provide helpful debugging information.

## Problem

Unhandled exceptions can lead to unexpected server crashes, making debugging and troubleshooting difficult.  The lack of comprehensive error logging makes it challenging to identify and fix the root cause. 

## Solution

Implementing a `process.on('uncaughtException')` event listener allows the application to gracefully handle unexpected errors, log detailed information, and potentially perform cleanup tasks before exiting.  This approach provides more informative error messages, facilitating smoother debugging and improved application stability.