# FitCart <!-- omit in TOC -->

## Overview

FitCart is a modern front-end redesign of a multi-feature product details page for an e-commerce web application, built with React.

![Overall Page](<README public/Overall App.gif>)

## Table of Contents

- [Overview](#overview)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Getting Started](#getting-started)
- [Team Members](#team-members)

## Description

FitCart contains many essential features in a modern e-commerce product details page, including:

- [Themes](#themes)
- [Product Overview](#product-overview)
- [Related Products](#related-products)
- [My Outfit](#my-outfit)
- [Questions & Answers](#questions-&-answers)
- [Ratings & Reviews](#ratings-&-reviews)

This application was developed based on strict design requirements in the form of a detailed design mock-up and a requirements document.

<!-- omit in TOC -->

### Themes

Per business requirements, customers have the ability to toggle between light-mode and dark-mode.

![Themes](<README public/Dark Light Themes.gif>)

<!-- omit in TOC -->

### Product Overview

_Developed by [William Loo](#team-members)_

All the requisite information for the specified product is located on the right-hand side of the Product Overview widget. This includes the product's rating, category, name, and price. Next to the rating, there is an option to jump down to [Ratings & Reviews](#ratings-&-reviews) and read all reviews.

End-users have the option to select one of a multitude of styles for each product, with one pre-selected by default. When a new style is selected, the price and style indicators update dynamically. This change is also reflected in the Image Gallery on the left.

When the user clicks on the star button, the currently selected product will be added to their outfit and they will immediately be navigated to the [My Outfit](#my-outfit) section of the website.

The option is also available to share this product on popular social media platforms Facebook, Twitter, and Pinterest.

![Image Gallery](<README public/Image Gallery.gif>)

The Image Gallery defaults to show the selected style's first image. The user can select different images by either clicking on the desired thumbnail, or navigating through the left and right arrows on the side of the image. These arrows are dynamically displayed, disappearing if the currently shown image is at the beginning or end of the list of available images.

Per requirements, the Image Gallery was given three different view options: regular, expanded, and zoomed. In expanded mode, the user is provided a better view of the image, spanning the entirety of the Overview. When a customer clicks on the expanded image, they will be shown a 2.5x zoomed version of the image. In this view, the shown section of the image will pan to correspond to the user's mouse location.

<!-- omit in TOC -->

### Related Products

_Developed by [William Loo](#team-members)_

The Related Products widget surfaces similar products related to the currently selected product, as provided by the team's external API.

This section will display four products at a time. If there are more than four related products, the user has the ability to scroll through the products with the provided right and left arrows.

On each product, all of the necessary information is displayed, as well as the default style's default image. When the user hovers over the product card, a row of image thumbnails will appear at the bottom of the main image, allowing them to change the displayed image.

![Related Products](<README public/Related Products.gif>)

If the user clicks on the star icon at the top right of each related product, a modal will pop up detailing a comparison between the current product, and the selected related product. This modal will run through the features included in each product in list format, providing the customer an easy way to see which product best fits their specific needs.

<!-- omit in TOC -->

### My Outfit

_Developed by [William Loo](#team-members)_

My Outfit provides the user a way to keep track of products they're fond of! If the user wants to store a particular product, they can add it to their outfit through the star button in the overview, or by clicking on the persistent first card in the My Outfit section.

![My Outfit](<README public/My Outfit.gif>)

To remove an item from their outfit, the user simply needs to click on the red X icon at the top right of the product card. The change will be instantly reflected in the displayed outfit.

The outfit data is persistent, allowing the user to navigate away from the page and return with their list of saved products intact.

<!-- omit in TOC -->

### Questions & Answers

_Developed by [Erin Levsen](#team-members)_

The Questions and Answers feature extends the user's ability to view and search questions, ask questions, answer questions and provide feedback on questions about the current product.

The search bar above the questions list provides the user with the capability to enter search terms and filter the list for matching results. After the user types 3 or more characters into the search bar the results begin to filter and continue to update as the user adds or removes characters. Any matching text within the questons is highlighted.

By default, on page load up to 3 questions are displayed and sorted by helpfulness rating in descending order. If the user clicks "More Answered Questions", the list expands into an infinite scroll.

Below each question, the respective answers are sorted by "Seller" and then by descending order of helpfulness. By default, up to 2 answers are displayed but the user can expand the list into an infinite scroll.

The user has the ability to report a question or answer or vote helpful. No questions or answers that have been reported will be rendered to the page.

If an answer submitted includes images, thumbnail images per image submitted appear below the answer and above the username and other metadata. Upon the user clicking a thumbnail, a modal window expanding the image at full resolution appears over the page.

Upon clicking the "Add Answer" or "Ask a Question" buttons, a modal window opens, overlaying the product page. These form's inputs are validated.

<!-- omit in TOC -->

### Ratings & Reviews

_Developed by [Patrick Pagba](#team-members)_

## Getting Started

This project can be run locally by following these steps.

### Installation <!-- omit in TOC -->

1. Download or clone this git repository onto your local machine
2. Within the root directory, run `npm install` in your terminal

### Build <!-- omit in TOC -->

In the same directory, run `npm build` to build the requisite files

### Start the Server <!-- omit in TOC -->

Within the root directory, run `npm start` and then navigate to our [webpage](http://localhost:51623)

## Team Members

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><br/><a href="https://github.com/wjloo95"><img src="https://live.staticflickr.com/8104/8525230481_ff0e205732_b.jpg" width="130px;" height="100px;" alt=""/><br /><sub><b>William Loo</b></sub></a><p>:computer:</p></td>
    <td align="center"><br/><a href="https://github.com/papat27"><img src="https://cdn.pixabay.com/photo/2018/11/13/16/05/puppy-3813375_960_720.jpg" width="130px;" height="100px;" alt=""/><br /><sub><b>Patrick Pagba</b></sub></a><p>:computer:</p></td>
    <td align="center"><br/><a href="https://github.com/erinlevsen13"><img src="https://live.staticflickr.com/5220/5462177379_3da3eb5fe1_b.jpg" width="130px;" height="100px;" alt=""/><br /><sub><b>Erin Levsen</b></sub></a><p>:computer:</p></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
