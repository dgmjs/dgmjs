---
title: Document and pages
sidebar:
  order: 2
---

The editor can edit a single document, and the document can have one or more pages. Each page is composed of multiple shapes.

## Document

The document is correspond to the [Doc](/api-core/classes/doc/) class.

### Access the document

```ts
const doc = editor.getDoc();
```

### Create a document

Use `editor.newDoc()` instead of instantiating the `Doc` class directly.

```ts
const doc = editor.newDoc();
```

### Save document to JSON

```ts
const json = editor.saveToJSON();
```

### Load document from JSON

```ts
const json = ...
editor.loadFromJSON(json);
```

## Page

A document must have at least one _page_, and the editor performs all tasks on a single _current page_. The page is correspond to the [Page](/api-core/classes/page/) class.

### Access to current page

```ts
const currentPage = editor.getCurrentPage();
```

### Change the current page

```ts
const currentPage = ...
editor.setCurrentPage(currentPage);
```

### Listen to the changes of current page

You can listen to the changes of current page through the both React component and editor object.

```tsx
<DGMEditor
  onCurrentPageChange={(page) => {
    console.log('current page', page);
  }}/>
```

```ts
editor.onCurrentPageChange.addListener((page) => {
  console.log('current page', page);
});
```

### Add a page

To add a page in the current document:

```ts
// add a page to the end
const page = editor.actions.addPage();

// add a page to the specific position (at the third position)
const position = 2;
const page = editor.actions.addPage(postion);
```

### Remove a page

```ts
const page = ...
editor.actions.removePage(page);
```

### Reorder a page

```ts
const page = ...
const newPostion = ...
editor.actions.reorderPage(page, newPosition);
```
