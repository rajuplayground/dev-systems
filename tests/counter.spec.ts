import { test, expect } from "@playwright/test";

test("should increment the count", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Increment" }).click();
  await page.getByRole("button", { name: "Increment" }).click();
  await page.getByRole("button", { name: "Increment" }).click();

  const countLocator = await page.getByTestId("current-count");
  console.log(countLocator.innerText());

  //   expect(currentCountEelement).toHaveText("3");
});
