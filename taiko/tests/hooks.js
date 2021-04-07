const { openBrowser, closeBrowser } = require("taiko");
var assert = require("assert");

beforeSpec(async () => await openBrowser());

afterSpec(async () => await closeBrowser());

