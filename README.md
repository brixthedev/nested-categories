# Problem: Nested Categories

## Introduction

This problem is intended to test your skills at parsing nested JSON objects with no predefined depth and rendering components that follow this JSON structure. This
problem is inspired by categories and sub-categories in online shops.

## Problem Description

A category is a JSON object that has two properties: name and categories . The name property is a string, while the categories property is a list of category
objects that represent the child categories the given category. You will be presented with a category JSON object with a name property equal to "root".
The names of the child categories under the root category will be named X , where X is equal to the index of that child (one-based) in the categories list. All the
other categories are named following the pattern PARENT.X , where PARENT is the name of the parent category and X is equal to the index of that child (one-based)
in the categories list of the parent category. So, for example, the sixth child of the category named 4.5.3 will be named 4.5.3.6 .

An example of this JSON object is:
{
name: "root",
categories: [
{
name: "1",
categories: [
{
name: "1.1",
categories: []
},
{
name: "1.2",
categories: [
{
name: "1.2.1",
categories: []
}
]
}
]
},
{
name: "2",
categories: [
{
name: "2.1",
categories: []
}
]
},
]
}

You will be presented with a stringified JSON similar to the example above and you will be required to render nested divs that will follow the structure of this JSON.
Basically, each div you render will need to display the name property of the corresponding category object and have child divs for each of the its child categories
listed in the categories property. These child divs will also need to display the name property of their corresponding category object and have child divs for each
of their own child categories listed in the categories property.

The JSON showed above should render something similar to this:
- Name: root

-- Name: 1

--- Name: 1.1

--- Name: 1.2

---- Name: 1.2.1

-- Name: 2

--- Name: 2.1

## Modes

### Easy mode

Your code only needs to work for the example JSON provided in the Problem Description.

### Medium mode

Your code needs to work even if we changed the JSON provided in the Problem Description.

### Hard mode

You should add a "+" button in each of the categories. Pressing that button should nest a new child category inside of it, with a name that follows the convention in the
JSON provided in the Problem Description. For example, if you pressed the "+" button in the div with a name property equal to "4.5.2" and that category has 3 children
already (with names "4.5.2.1", "4.5.2.2" and "4.5.2.3"), the new nested category should have a name property equal to "4.5.2.4".
Bonus: Print the JSON object that corresponds to the modified version of the nested structure.

## Notes

You must use React.JS

If you know TypeScript, you should use it

The design is not important - just add a border and some margin to the divs so that we can properly see the result

You do not need to care about a backend - the JSON will be hardcoded in your code
