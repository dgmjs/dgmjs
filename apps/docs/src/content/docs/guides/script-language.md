---
title: "Script Language"
---

DGMScript is a tiny clojure-inspired LISP language which is based on the [Mal](https://github.com/kanaka/mal) interpreter. Here is the [online playground](https://kanaka.github.io/mal/) for Mal interpreter.

## Datatypes

DGMScript supports datatypes including number, string, boolean, nil, symbol, keyword, map, list, vector and atom.

### Number

```clojure
;; number
3.14

;; math functions
(+ 1 2) ;;=> 3
(- 8 3) ;;=> 5
(* 3 4) ;;=> 12
(/ 3 2) ;;=> 1.5

;; comparison
(= 1 1) ;;=> true
(< 1 2) ;;=> true
(> 2 1) ;;=> true
(<= 2 2) ;;=> true
(>= 2 2) ;;=> true
```

### String

```clojure
;; string
"string"
(str "hello")            ;;=> "hello"
(str "hello" 1 2 3)      ;;=> "hello123"
(str `hello)             ;;=> "hello"
(str :hello)             ;;=> ":hello"
(str true)               ;;=> "true"
(str nil)                ;;=> "nil"
(pr-str '(a b foo :bar)) ;;=> "(a b foo :bar)"

;; test string
(string? "hello")        ;;=> true

;; concat
(concat "hello" "world") ;;=> "helloworld"

;; seq
(seq "hello")            ;;=> ("h" "e" "l" "l" "o")
```

### Boolean

```clojure
;; boolean
true
false

;; boolean test
(true? true)           ;;=> true
(false? false)         ;;=> true

;; not
(not false)            ;;=> true
(not 1)                ;;=> false
(not nil)              ;;=> true

;; or
(or true false false)  ;;=> true
(or false false)       ;;=> false
(or 0 1 2)             ;;=> 0
(or 1 2 3)             ;;=> 1
(or "true" "false")    ;;=> "true"
(or "false" "true")    ;;=> "false"
(or nil 1)             ;;=> 1
```

### Nil

```clojure
;; nil
nil

(nil? nil)       ;;=> true
```

### Symbol

```clojure
;; symbol
`sym
(symbol "sym")            ;;=> sym

;; test symbol
(symbol? `sym)            ;;=> true
(symbol? (symbol "sym"))  ;;=> true
```

### Keyword

```clojure
;; keyword
:key                    ;;=> :key
(keyword "key")         ;;=> :key

;; keyword?
(keyword? :key)         ;;=> true

;; use keywords in map
(def! map0 {:key1 100 :key2 200})
(get map0 :key1)        ;;=> 100
(keys map0)             ;;=> (:key1 :key2)
(contains? map0 :key1)  ;;=> true
```

### Map

```clojure
;; map
{"key1" "value1", "key2" "value2"}
(hash-map :k1 "v1" :k2 100)  ;;=> {:k1 "v1" :k2 100}

;; define a map
(def! map1 {"key1" "value1", "key2" "value2"})

;; test map
(map? map1)                  ;;=> true

;; get
(get map1 "key1")            ;;=> "value1";
(get map1 "key2")            ;;=> "value2";
(get map1 "key3")            ;;=> nil;

;; keys
(keys map1)                  ;;=> ("key1" "key2")

;; vals
(vals map1)                  ;;=> ("value1" "value2")

;; contains
(contains? map1 "key1")      ;;=> true
(contains? map1 "key3")      ;;=> false

;; assoc
(assoc map1 "key1" "newval") ;;=> {"key1" "newval" "key2" "value2"}

;; dissoc
(dissoc map1 "key1")         ;;=> {"key2": "value2"}
```

### List

```clojure
;; list
`(1 2 3 "four")
(list 1 2 3)   ;;=> (1 2 3)

;; define a list
(def! list1 `(1 2 3))

;; test list
(list? list1)          ;;=> true

;; count
(count list1)          ;;=> 3

;; empty
(empty? list1)         ;;=> false
(empty? `())           ;;=> true

;; first
(first list1)          ;;=> 1

;; rest
(rest list1)           ;;=> (2 3)

;; nth
(nth list1 0)          ;;=> 1
(nth list1 1)          ;;=> 2
(nth list1 2)          ;;=> 3

;; cons
(cons 1 `(2 3))        ;;=> (1 2 3)
(cons 1 [2 3])         ;;=> (1 2 3)

;; conj
(conj `(1 2) 3)        ;;=> (3 1 2)
(conj `(1 2) 3 4)      ;;=> (4 3 1 2)

;; concat
(concat `(1 2) `(3 4)) ;;=> (1 2 3 4)

;; seq
(seq `(1 2 3))         ;;=> (1 2 3)
(seq [1 2 3])          ;;=> (1 2 3)
(seq "hello")          ;;=> ("h" "e" "l" "l" "o")
(seq nil)              ;;=> nil
```

### Vector

```clojure
;; vector
[1 2 3 "a" "b" "c"]
(vector 1 2 3)       ;;=> [1 2 3]

;; define a vector
(def! vec1 [1 2 3])

;; test vector
(vector? vec1)       ;;=> true

;; count
(count vec1)         ;;=> 3

;; empty
(empty? vec1)        ;;=> false
(empty? [])          ;;=> true

;; first
(first vec1)         ;;=> 1

;; rest
(rest vec1)          ;;=> (2 3)

;; nth
(nth vec1 0)         ;;=> 1
(nth vec1 1)         ;;=> 2
(nth vec1 2)         ;;=> 3

;; concat
(concat [1 2] [3 4]) ;;=> (1 2 3 4)

;; conj
(conj [1 2] 3 4)     ;;=> [1 2 3 4]

;; seq
(seq [1 2 3])        ;;=> (1 2 3)
```

### Atom

Atom is a reference type used to manage shared, mutable state. It encapsulates a single value that can be updated atomically.

```clojure
;; new atom
(def! my-atom (atom 0))

;; deref (read)
@my-atom                           ;;=> 0
(deref my-atom)                    ;;=> 0

;; swap (mutate)
(swap! my-atom (fn* [n] (+ n 1)))  ;;=> 1
@my-atom                           ;;=> 1

;; atom?
(atom? my-atom)                    ;;=> true

;; reset
(reset! my-atom 5)                 ;;=> 5
@my-atom                           ;;=> 5
```

## Defines

```clojure
;; def!
(def! pi 3.14)
(def! sum (fn* [a b] (+ a b)))

;; let*
(let* [a 1 b 2] (+ a b)) ;; 3
```

## Functions

```clojure
;; anonymous function
(fn* [a b] (+ a b))

;; define named function
(def! sum (fn* [a b] (+ a b)))

;; call function
(sum 1 2) ;; 3
```

## Conditionals

You can use conditional expression `if`, `cond`, and `or`.

```clojure
;; if-condition
(if true 1 2) ;; 1
(if false 1 2) ;; 2

;; cond
(def! pos-neg-or-zero 
  (fn* [n] 
    (cond
      (< n 0) "negative"
      (> n 0) "positive"
      :else "zero")))

(post-neg-or-zero 1)   ;;=> "positive"
(post-neg-or-zero -1)  ;;=> "negative"
(post-neg-or-zero 0)   ;;=> "zero"
```

## Multiple actions

You can execute multiple actions has side-effects with `do`.

```clojure
;; do
(do
  (println "hello!")
  (println "DGM"))
;;=>
;;hello
;;DGM
```

## Useful functions

```clojure
;; sequential
(sequential? [1 2 3])  ;;=> true
(sequential? `(1 2 3)) ;;=> true

;; map
(def! inc)
(map
  (fn* [n] (+ n 1))
  `(1 2 3))            ;;=> (2 3 4)

;; apply
(concat "a" "b" "c")   ;;=> "abc"
(apply concat
  `("a" "b" "c"))      ;;=> "abc"

;; println, prn
(println "hello!") ;;=> hello\n
(prn  "hello!")    ;;=> hello\n
```

## Math

```clojure
;; pi (3.141592...)
pi

;; trigonometric functions
(def! radian (/ (* 45 pi) 180))
(cos radian)
(sin radian)
(tan radian)
(acos radian)
(asin radian)
(atan radian)

;; abs/floor/ceil/trunc
(abs -7)      ;;=> 7
(floor 5.95)  ;;=> 5
(ceil 5.01)   ;;=> 6
(trunc 42.84) ;;=> 42

;; power
(pow 2 8)     ;;=> 256

;; square root
(sqrt 9)      ;;=> 3

;; min/max
(max 1 2 3 4) ;;=> 4
(min 1 2 3 4) ;;=> 1
```

## DGM object interoperability

```clojure
;; access to a DGM object's field
(. shape :left)
(. shape :id)

;; call a DGM object's method
(. canvas :line 10 10 100 100)
(. canvas :polyline [[10 10] [100 100]])
```

In script, you can use the following accessible objects:

- [`shape`](#shape)
- [`canvas`](#canvas)
- [`geometry`](#geometry)

### Shape

The `shape` object is the shape object where the script code is attached.

The below is the available variables and functions in `shape` object.

```clojure
(. shape :id)
(. shape :type)
(. shape :name)
(. shape :description)
(. shape :proto)
(. shape :tags)
(. shape :enable)
(. shape :visible)
(. shape :movable)
(. shape :sizable)
(. shape :rotatable)
(. shape :containable)
(. shape :containableFilter)
(. shape :connectable)
(. shape :left)
(. shape :top)
(. shape :right)
(. shape :bottom)
(. shape :width)
(. shape :height)
(. shape :rotate)
(. shape :strokeColor)
(. shape :strokeWidth)
(. shape :strokePattern)
(. shape :fillColor)
(. shape :fillStyle)
(. shape :fontColor)
(. shape :fontFamily)
(. shape :fontSize)
(. shape :fontStyle)
(. shape :fontWeight)
(. shape :opacity)
(. shape :roughness)
(. shape :constraints)
(. shape :properties)
(. shape :scripts)
```

```clojure
(. shape :renderDefault canvas)
(. shape :renderText canvas)
(. shape :getCenter)
(. shape :getOutlineDefault)
(. shape :getConnectionPointsDefault)
(. shape :getBoundingRect)
```

### Canvas

The below is the available functions in `canvas` object.

```clojure
(. canvas :setStrokeColor c)
(. canvas :setStrokeWidth w)
(. canvas :setStrokePattern pattern)
(. canvas :setFillColor c)
(. canvas :setFillStyle style)
(. canvas :setFontColor c)
(. canvas :setFont font)
(. canvas :setAlpha alpha)
(. canvas :setRoughness roughness)
(. canvas :line x1 y1 x2 y2)
(. canvas :strokeRect x1 y1 x2 y2)
(. canvas :fillRect x1 y1 x2 y2)
(. canvas :rect x1 y1 x2 y2)
(. canvas :strokeRoundRect x1 y1 x2 y2 radius)
(. canvas :fillRoundRect x1 y1 x2 y2 radius)
(. canvas :roundRect x1 y1 x2 y2 radius)
(. canvas :strokeEllipse x1 y1 x2 y2)
(. canvas :fillEllipse x1 y1 x2 y2)
(. canvas :ellipse x1 y1 x2 y2)
(. canvas :polyline path)
(. canvas :strokeCurve path)
(. canvas :fillCurve path)
(. canvas :curve path)
(. canvas :strokePolygon path)
(. canvas :fillPolygon path)
(. canvas :polygon path)
(. canvas :strokeArc x y r startAngle endAngle)
(. canvas :fillArc x y r startAngle endAngle)
(. canvas :arc x y r startAngle endAngle)
(. canvas :fillText x y text)
(. canvas :textMetric text)
```

### geometry

See `geometry` namespace of `@dgmjs/core`.