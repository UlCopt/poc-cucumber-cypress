import { Given, Then, When } from "cucumber";

Given("A new step", async function () {
  console.log("hello");
});

When("Try to do something", async function () {
  console.log("Nice");
});

Then("Testing yeah", async function () {
  console.log("bye");
});
