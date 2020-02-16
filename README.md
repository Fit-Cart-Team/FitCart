# FitCart <!-- omit in TOC -->

## Overview

FitCart is a modern front-end redesign of a multi-feature product details page for an e-commerce web application, built with React.

## Table of Contents

- [Overview](#overview)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Team Members](#team-members)

## Description

FitCart contains many essential features in a modern e-commerce product details page, including:

- [Product Overview](#product-overview)
- [Related Products](#related-products)
- [My Outfit](#my-outfit)
- [Questions & Answers](#questions-&-answers)
- [Ratings & Reviews](#ratings-&-reviews)

This application was developed based on strict design requirements in the form of a detailed design mock-up and a requirements document. 

### Product Overview <!-- omit in TOC -->

_Developed by [William Loo](#team-members)_

All the information you would need about your product is located on the right of the Product Overview widget, including the product's rating, category, name, and price. Next to the rating, there is an option to jump down to [Ratings & Reviews](#ratings-&-reviews) to read all reviews.

Customers have the option to select one of a multitude of styles for each product, with one selected by default. When a new style is selected, the price and style indicators update dynamically. This change is also reflected in the Image Gallery on the left.

When a customer clicks on the star button, they will add the current item to their outfit while automatically being scrolled down to view said outfit. The customer also has the option to share this product on popular social media platforms Facebook, Twitter, and Pinterest.

The Image Gallery defaults to the selected style's first image. The customer can select different images by either clicking on its thumbnail, or by navigating through the left and right arrows on the side of the image. These arrows are dynamically displayed, depending on where in the image list the customer is. 

Per requirements, the Image Gallery was given three different view options: regular, expanded, and zoomed. In expanded mode, the customer is provided a better view of the image, spanning hte entirety of the Overview. When a customer clicks on the expanded image, they will be shown a 2.5x zoomed version of the image, allowing them to pan the image by moving their mouse around the image. 

### Related Products <!-- omit in TOC -->

_Developed by [William Loo](#team-members)_

Based on data provided by the team's external API, the Related Products widget surfaces the current product's suggestions. 

This section will display four products at a time, with the ability to scroll through the products with the provided right and left arrows. These arrows are displayed dynamically depending on which image you have selected.

On each product, all of the necessary information is displayed, as well as the product's default style's default image. When a customer hovers on the product card, a row of image thumbnails will appear at the bottom of the main image, allowing them to change the displayed image. 

If the customer clicks on the star icon at the top right of each related product, a modal will pop up detailing a comparison between the product the customer is currently browsing, and the selected related product. This modal will run through the features included in each product in list format, providing the customer an easy way to see which product is best for them.

### My Outfit <!-- omit in TOC -->

_Developed by [William Loo](#team-members)_

My Outfit provides the customer a way to keep track of products they're fond of! If the customer wants to store a particular product, they can add it to their outfit through the star button in the overview, or by clicking on the persistent first card in the My Outfit section. 

To remove an item from their outfit, the customer simply needs to click on the red x icon at the top right of their product card, and the change will be instantly reflected.

If the customer happens to close their browser while shopping, there's no need to worry! The outfit is persistent so that if you navigate back, all your products will still be right there.

### Questions & Answers <!-- omit in TOC -->

_Developed by [Erin Levsen](#team-members)_

### Ratings & Reviews <!-- omit in TOC -->

_Developed by [Patrick Pagba](#team-members)_

## Getting Started

This project can be run locally by following these steps.

### Installation <!-- omit in TOC -->

1. Download or clone this git repository onto your local machine
2. Within the root directory, run `npm install` in your terminal

### Build <!-- omit in TOC -->

In the same directory, run `npm build` to build the requisite files

### Start the Server <!-- omit in TOC -->

Within the root directory, `npm start` and then navigate to our [webpage](http://localhost:51623)

## Running Tests

Our team incorporated Jest and Enzyme for Unit testing, and used Cypress for end-to-end testing.

### Unit Tests <!-- omit in TOC -->

Explain what these tests test and why

```bash
npm run test
```

### End-to-end Tests <!-- omit in TOC -->

Explain what these tests test and why

```
cypress blahblah
```

## Team Members

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><br/><a href="https://github.com/wjloo95"><img src="https://live.staticflickr.com/8104/8525230481_ff0e205732_b.jpg" width="130px;" height="100px;" alt=""/><br /><sub><b>William Loo</b></sub></a><p>📖</p></td>
    <td align="center"><br/><a href="https://github.com/papat27"><img src="https://cdn.pixabay.com/photo/2018/11/13/16/05/puppy-3813375_960_720.jpg" width="130px;" height="100px;" alt=""/><br /><sub><b>Patrick Pagba</b></sub></a><p>📖</p></td>
    <td align="center"><br/><a href="https://github.com/erinlevsen13"><img src="https://live.staticflickr.com/5220/5462177379_3da3eb5fe1_b.jpg" width="130px;" height="100px;" alt=""/><br /><sub><b>Erin Levsen</b></sub></a><p>📖</p></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
