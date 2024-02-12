import { TUBES } from "./mockData/tubes";
import { test, expect } from "@playwright/test";

test("should navigate to the home page and check racks", async ({ page }) => {
  await page.route("http://localhost:3000/api/tubes", async (route) => {
    const json = { tubes: TUBES };
    await route.fulfill({ json });
  });

  await page.goto("/");

  // Check default values
  await expect(page.getByTestId("rack_0")).toContainText("Damian Kalek");
  await expect(page.getByTestId("rack_0")).toContainText("Dawid Jakis");

  await expect(page.getByTestId("rack_1")).toContainText("Stefan Test");
  await expect(page.getByTestId("rack_1")).toContainText("Lukasz Doncic");

  await expect(page.getByTestId("rack_2")).toContainText("Imie Nazwisko");
});
