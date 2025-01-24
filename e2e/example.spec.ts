import { test, expect } from '@playwright/test';

test('Renders all movies', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.locator('#root')).toMatchAriaSnapshot(`
    - link "Sonic the Hedgehog 3 Sonic the Hedgehog 3":
      - img "Sonic the Hedgehog 3"
      - paragraph: Sonic the Hedgehog 3
    - link "Kraven the Hunter Kraven the Hunter":
      - img "Kraven the Hunter"
      - paragraph: Kraven the Hunter
    - 'link "Mufasa: The Lion King Mufasa: The Lion King"':
      - 'img "Mufasa: The Lion King"'
      - paragraph: "Mufasa: The Lion King"
    - link "Back in Action Back in Action":
      - img "Back in Action"
      - paragraph: Back in Action
    - 'link "Devara: Part 1 Devara: Part 1"':
      - 'img "Devara: Part 1"'
      - paragraph: "Devara: Part 1"
    - 'link "Venom: The Last Dance Venom: The Last Dance"':
      - 'img "Venom: The Last Dance"'
      - paragraph: "Venom: The Last Dance"
    - link "Moana 2 Moana 2":
      - img "Moana 2"
      - paragraph: Moana 2
    - link "Nosferatu Nosferatu":
      - img "Nosferatu"
      - paragraph: Nosferatu
    - link "Gladiator II Gladiator II":
      - img "Gladiator II"
      - paragraph: Gladiator II
    - link "The Gardener The Gardener":
      - img "The Gardener"
      - paragraph: The Gardener
    - 'link "Kingdom IV: Return of the Great General Kingdom IV: Return of the Great General"':
      - 'img "Kingdom IV: Return of the Great General"'
      - paragraph: "Kingdom IV: Return of the Great General"
    - link "Wicked Wicked":
      - img "Wicked"
      - paragraph: Wicked
    - link "River of Blood River of Blood":
      - img "River of Blood"
      - paragraph: River of Blood
    - link "Werewolves Werewolves":
      - img "Werewolves"
      - paragraph: Werewolves
    - link "Your Fault Your Fault":
      - img "Your Fault"
      - paragraph: Your Fault
    - link "Red One Red One":
      - img "Red One"
      - paragraph: Red One
    - 'link "The Lord of the Rings: The War of the Rohirrim The Lord of the Rings: The War of the Rohirrim"':
      - 'img "The Lord of the Rings: The War of the Rohirrim"'
      - paragraph: "The Lord of the Rings: The War of the Rohirrim"
    - link "Aftermath Aftermath":
      - img "Aftermath"
      - paragraph: Aftermath
    - link /Number \\d+ Number \\d+/:
      - img /Number \\d+/
      - paragraph: /Number \\d+/
    - link "Memoir of a Snail Memoir of a Snail":
      - img "Memoir of a Snail"
      - paragraph: Memoir of a Snail
    `);
  });

test('Search for specific movie', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Search for a movie...' }).click();
  await page.getByRole('textbox', { name: 'Search for a movie...' }).fill('Mufasa');
  await expect(page.locator('#root')).toMatchAriaSnapshot(`
    - 'link "Mufasa: The Lion King Mufasa: The Lion King"':
      - 'img "Mufasa: The Lion King"'
      - paragraph: "Mufasa: The Lion King"
    `);
  });

test('No movies found', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Search for a movie...' }).dblclick();
  await page.getByRole('textbox', { name: 'Search for a movie...' }).fill('87435ikhdsflks');
  await expect(page.getByRole('paragraph')).toContainText('No movies found');
  await expect(page.locator('#root')).toMatchAriaSnapshot(`
    - button "Previous" [disabled]
    - text: Page 1 of 1
    - button "Next" [disabled]
    `);
  });

test('Page Navigation', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Search for a movie...' }).dblclick();
  await page.getByRole('textbox', { name: 'Search for a movie...' }).fill('');
  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.locator('#root')).toMatchAriaSnapshot(`
    - link "The Substance The Substance":
      - img "The Substance"
      - paragraph: The Substance
    - link "Elevation Elevation":
      - img "Elevation"
      - paragraph: Elevation
    - link "Solo Leveling -ReAwakening- Solo Leveling -ReAwakening-":
      - img "Solo Leveling -ReAwakening-"
      - paragraph: Solo Leveling -ReAwakening-
    - link "Heretic Heretic":
      - img "Heretic"
      - paragraph: Heretic
    - link "The Wild Robot The Wild Robot":
      - img "The Wild Robot"
      - paragraph: The Wild Robot
    - link "The Ballad of Davy Crockett The Ballad of Davy Crockett":
      - img "The Ballad of Davy Crockett"
      - paragraph: The Ballad of Davy Crockett
    - link "Flow Flow":
      - img "Flow"
      - paragraph: Flow
    - link "My Fault My Fault":
      - img "My Fault"
      - paragraph: My Fault
    - link "Deadpool & Wolverine Deadpool & Wolverine":
      - img "Deadpool & Wolverine"
      - paragraph: Deadpool & Wolverine
    - link "Dirty Angels Dirty Angels":
      - img "Dirty Angels"
      - paragraph: Dirty Angels
    - link "El Candidato Honesto El Candidato Honesto":
      - img "El Candidato Honesto"
      - paragraph: El Candidato Honesto
    - link "Ad Vitam Ad Vitam":
      - img "Ad Vitam"
      - paragraph: Ad Vitam
    - link "Eye for an Eye 2 Eye for an Eye 2":
      - img "Eye for an Eye 2"
      - paragraph: Eye for an Eye 2
    - link "Absolution Absolution":
      - img "Absolution"
      - paragraph: Absolution
    - link "Carry-On Carry-On":
      - img "Carry-On"
      - paragraph: Carry-On
    - link "Despicable Me 4 Despicable Me 4":
      - img "Despicable Me 4"
      - paragraph: Despicable Me 4
    - 'link "Henry Danger: The Movie Henry Danger: The Movie"':
      - 'img "Henry Danger: The Movie"'
      - paragraph: "Henry Danger: The Movie"
    - link /Sex Game \\d+ Sex Game \\d+/:
      - img /Sex Game \\d+/
      - paragraph: /Sex Game \\d+/
    - link "Alarum Alarum":
      - img "Alarum"
      - paragraph: Alarum
    - link "Inside Out 2 Inside Out 2":
      - img "Inside Out 2"
      - paragraph: Inside Out 2
    `);

  await expect(page.locator('#root')).toMatchAriaSnapshot(`
    - button "Previous"
    - text: /Page 2 of \\d+/
    - button "Next"
    `);
  });

test('Navigate the movie and back', async ({ page }) => {
  await page.getByRole('link', { name: 'Solo Leveling -ReAwakening-' }).click();
  await expect(page.getByRole('heading')).toContainText('Solo Leveling -ReAwakening-');
  await expect(page.getByRole('paragraph')).toContainText('Over a decade after \'gates\' connecting worlds appeared, awakening \'hunters\' with superpowers, weakest hunter Sung Jinwoo encounters a double dungeon and accepts a mysterious quest, becoming the only one able to level up, changing his fate. A catch-up recap of the first season coupled with an exclusive sneak peek of the first two episodes of the highly anticipated second season in one momentous theatrical fan experience.');
  await expect(page.locator('#root')).toMatchAriaSnapshot(`
    - strong: "Release Date:"
    - text: /\\d+-\\d+-\\d+ ★★★★★★ \\(\\d+ votes\\)/
    `);
  await page.getByRole('link', { name: 'Back to List' }).click();
  await expect(page.locator('#root')).toMatchAriaSnapshot(`
    - link "Sonic the Hedgehog 3 Sonic the Hedgehog 3":
      - img "Sonic the Hedgehog 3"
      - paragraph: Sonic the Hedgehog 3
    - link "Kraven the Hunter Kraven the Hunter":
      - img "Kraven the Hunter"
      - paragraph: Kraven the Hunter
    - 'link "Mufasa: The Lion King Mufasa: The Lion King"':
      - 'img "Mufasa: The Lion King"'
      - paragraph: "Mufasa: The Lion King"
    - link "Back in Action Back in Action":
      - img "Back in Action"
      - paragraph: Back in Action
    - 'link "Devara: Part 1 Devara: Part 1"':
      - 'img "Devara: Part 1"'
      - paragraph: "Devara: Part 1"
    - 'link "Venom: The Last Dance Venom: The Last Dance"':
      - 'img "Venom: The Last Dance"'
      - paragraph: "Venom: The Last Dance"
    - link "Moana 2 Moana 2":
      - img "Moana 2"
      - paragraph: Moana 2
    - link "Nosferatu Nosferatu":
      - img "Nosferatu"
      - paragraph: Nosferatu
    - link "Gladiator II Gladiator II":
      - img "Gladiator II"
      - paragraph: Gladiator II
    - link "The Gardener The Gardener":
      - img "The Gardener"
      - paragraph: The Gardener
    - 'link "Kingdom IV: Return of the Great General Kingdom IV: Return of the Great General"':
      - 'img "Kingdom IV: Return of the Great General"'
      - paragraph: "Kingdom IV: Return of the Great General"
    - link "Wicked Wicked":
      - img "Wicked"
      - paragraph: Wicked
    - link "River of Blood River of Blood":
      - img "River of Blood"
      - paragraph: River of Blood
    - link "Werewolves Werewolves":
      - img "Werewolves"
      - paragraph: Werewolves
    - link "Your Fault Your Fault":
      - img "Your Fault"
      - paragraph: Your Fault
    - link "Red One Red One":
      - img "Red One"
      - paragraph: Red One
    - 'link "The Lord of the Rings: The War of the Rohirrim The Lord of the Rings: The War of the Rohirrim"':
      - 'img "The Lord of the Rings: The War of the Rohirrim"'
      - paragraph: "The Lord of the Rings: The War of the Rohirrim"
    - link "Aftermath Aftermath":
      - img "Aftermath"
      - paragraph: Aftermath
    - link /Number \\d+ Number \\d+/:
      - img /Number \\d+/
      - paragraph: /Number \\d+/
    - link "Memoir of a Snail Memoir of a Snail":
      - img "Memoir of a Snail"
      - paragraph: Memoir of a Snail
    `);
});