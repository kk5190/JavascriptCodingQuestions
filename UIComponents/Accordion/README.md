# Accordion
Build an Accordion component that displays a list of vertically stacked sections that each contain a title and content snippet. Some HTML is provided for you as example contents along with a chevron icon.

## Requirements
By default, all sections are collapsed and are hidden from view.
Clicking on a section title toggles the contents.
If the section is collapsed, the section will be expanded and the contents will be displayed.
If the section is expanded, the section will be collapsed and the contents will be hidden.
The sections are independent of each other.
Example
Try out an example of an accordion component.

## Notes
The focus of this question is on functionality, not the styling. Do not spent too much time writing custom CSS.
You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc) and use client-side rendering instead.
You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).

## Solution
Implementing a basic (not fully accessible) Accordion component in React is quite simple due to the fact that only one state value is needed, the expanded/collapsed states of each section. React also helps to keep the state and the UI in sync, which is a little more troublesome to do so in Vanilla JavaScript.

## Props (API Design)
Part of the complexity of building a component is designing the API for it. In the case of React, it would be the props of the component. At the bare minimum, we will need the following props:

items: A list of item objects. Each item is an object with the fields:
value: A unique identifier for the accordion item.
title: The text label to show in the accordion title.
contents: The contents to show when the section is expanded.

## State
We can use ES6 Set to keep track of the sections which are expanded. When the section title is clicked, check if the section's value is within the set. The value will be removed from the set if it's inside and added it into the set otherwise.

## Test Cases
All the provided sections should be displayed.
Clicking on a collapsed section's title should expand it.
Clicking on an expanded section's title should collapse it.
Test that all sections are allowed to expand and collapse independently.
Test that you are able to initialize multiple instances of the component, each with independent states.

## Accessibility
Interactive elements need to be focusable, so we'll use a <button> for the title.

The ARIA Authoring Practices Guide for Accordion has a long list of guidelines for the ARIA roles, states, and properties to add to the various elements of an accordion. Accordion II and Accordion III will focus on improving the accessibility of the Accordion component.
