# Mal

## Datatype

- Map
- List
- Vector
- Scalar

## Function

- call
- define
- anonymouse function

...

## With JS-Object Datatype

```clojure
;; Need to enhance canvas drawing functions
;; ex) drawing a rectangle
;; - canvas.strokeRect (only stroke)
;; - canvas.fillRect (only fill)
;; - canvas.rect (fill and stroke)

;; Box rendering
(call canvas :rect
  (. shape :left)
  (. shape :top)
  (. shape :right)
  (. shape :bottom))

;; Reading a property
(call shape :getProperty "showAttributes")

;; Note rendering
(do
  (def! m 5)
  (def! l (. shape :left))
  (def! t (. shape :top))
  (def! r (. shape :right))
  (def! b (. shape :bottom))
  (call canvas :polygon [
    [l t]
    [r t]
    [r (- b m)]
    [(- r m) b]
    [l b]
    [l t]
  ]))

;; return outline
(do
  (def! m 5)
  (def! l (. shape :left))
  (def! t (. shape :top))
  (def! r (. shape :right))
  (def! b (. shape :bottom))
  [[l t] [r t] [r (- b m)] [(- r m) b] [l b] [l t]])

;; return connection points
(do
  (def! m 5)
  (def! l (. shape :left))
  (def! t (. shape :top))
  (def! r (. shape :right))
  (def! b (. shape :bottom))
  [[l t] [r t] [r (- b m)] [(- r m) b] [l b] [l t]])
```
