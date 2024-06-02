---
title: Handlers
sidebar:
  order: 3
---

## Handlers

Handlers handle the user inputs from pointing devices (mouse, touchpad, etc.) and keyboards. The editor has a set of handlers, but only one __active handler__ processes the user's input. Followings are the builtin handlers:

- Select Handler (_default handler_) - allows user's to select shapes or area and manipulates selected shapes (move, resize, etc.).
- Hand Handler - scroll editor's viewport.
- Factory Handlers
  - Rectangle Factory Handler - creates a rectangle shape.
  - Ellipse Factory Handler - creates an ellipse shape.
  - Text Factory Handler - creates a text shape.
  - Image Factory Handler - creates an image shape.
  - Line Factory Handler - creates a line shape.
  - Connector Factory Handler - creates a connector shape.
  - Freehand Factory Handler - creates a freehand shape.
  - Highlighter Factory Handler - creates a highlighter shape.

## Active Handler

The active handler handles the user's input from the editor, so all other deactivated handlers do nothing. To make a handler works, you have to activate the handler as below:

```tsx
editor.activateHandler('Rectangle');
```

## Handler Lock

When the active handler finishes a series of user mouse actions (mouse down, dragging and up), it returns to the default handler. For example, when the Rectangle Factory Handler finishes creating a single rectangle, it returns to the default handler (Select Handler). However, if you want the user to create multiple rectangles, you can lock it to prevent returning to the default handler. If you want to lock the current active handler, you can set lock as below:

```tsx
editor.setActiveHandlerLock(true);
```
