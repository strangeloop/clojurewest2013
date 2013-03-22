title: Common pains when porting to Clojurescript

- Host differences (Classes, Regexp, Functions)

- Small differences between Clojure and Clojurescript APIs
<br><br>e.g.&nbsp; <code>-invoke</code> vs <code>invoke</code>

- The ns hell
<br><br>e.g.&nbsp; <code>:require</code> vs <code>:require-macro</code>

- Among others...

---

title: Agenda
class: big
build_lists: true

Things we'll cover:

- Port Clojure &#x2192; Clojurescript effectively and without pain

- Test your librares in both languages using the same test suite

- Get fast feedback in development process

---

title: Simple Clojure &#x2192; Clojurescript
subtitle: Introducing lein-dalap
class: segue nobackground dark

---

title: lein-dalap provides

- Inspired by [cljx](https://github.com/lynaghk/cljx) (kudos to Kevin Lynagh)

- Clojure files as input, Clojurescript files as output

- Use Clojure meta tags to adapt/transform forms to Clojurescript

- Provide transformation rules <em>a la css</em> using the [dalap](http://github.com/BirdseyeSoftware/dalap)
<br><br>instead of [kibit](https://github.com/jonase/kibit)

<aside class="note">

- dalap single traversal with custom tree modification at any level of the tree
- kibit uses backtracking to accomplish this
- You may both, kibit on your dalap transformation functions

</aside>

<!---

title: Installing lein-dalap
subtitle: <code>project.clj</code> changes

<pre class="prettyprint lang-clj" data-lang="project.clj">
(defproject awesome-library
  ;; ..
  <b>:plugins [[lein-cljsbuild "0.2.9"]
           [com.birdseye-sw/lein-dalap "0.1.0"]]

  <br/>
  :hooks [leiningen.dalap]</b>
  ;; ..
  )

</pre>
-->

---

title: Get your rules handled
subtitle: Add <code>dalap_rules.clj</code>

<pre class="prettyprint lang-clj" data-lang="project/dalap_rules.clj">
  {
   ;; input clojure file -> output clojurescript file
   <b>["src/clj/awesome_library/core.clj" "src/cljs/awesome_library/core.cljs"]</b>
   [ #_(Opt. additional transformation rules go here) ]

  }
</pre>

---

title: Make forms Clojure only
subtitle: The :clj meta tag

Excludes Clojure forms from code transformation.

<pre class="prettyprint lang-clj" data-lang="CLOJURE INPUT">
(deftest upper-case-test
  (is (= (upper-case "hello world") "HELLO WORLD")))

<b>^:clj</b>
(deftest java-io-test
  (assert (instance? File (file "/fixture/one.txt"))))
</pre>

<pre class="prettyprint lang-clj" data-lang="CLOJURESCRIPT OUTPUT">
(deftest upper-case-test
  (is (= (upper-case "hello world") "HELLO WORLD")))
</pre>

---

title: Make forms Clojurescript only
subtitle: Ignore reader macro with :cljs at the start

Add Clojurescript, without breaking your Clojure code.

<pre class="prettyprint lang-clj" data-lang="CLOJURE INPUT">
(ns clout.test.core
  ^:clj (:require [ring.mock.request :refer [request]])
  <b>#_(:cljs</b> (:require [goog.Uri :as uri]))<b>)</b>

#_(<b>:cljs-do</b>
  (defn request [method uri]
       {:uri (.getPath (goog.Uri. uri))
        :request-method method})
  (defn other-fn []
     ;...
  ))
</pre>

---

title: Make forms Clojurescript only
subtitle: Ignore reader macro with :cljs at the start

Add Clojurescript, without breaking your Clojure code.

<pre class="prettyprint lang-clj" data-lang="CLOJURESCRIPT OUTPUT">
(ns clout.test.core
  (:require [goog.Uri :as uri]))

<b>(do
  (defn request [method uri]
       {:uri (.getPath (goog.Uri. uri))
        :request-method method})
  (defn other-fn []
       ;...
  ))</b>

</pre>

---

title: Handling differences in <code>ns</code> macro
subtitle: meta tags FTW

<pre class="prettyprint lang-clj" data-lang="CLOJURE INPUT">
(ns monads.test.core-test
  (:require [monads.core :as m]
            <b>#_(:cljs</b> [monads.core writer-transformer state-transformer])<b>)</b>
  <b>^:cljs-macro</b> (:require [monads.macros :as monadic])
  <b>^:clj</b> (:import [monads.core writer-transformer state-transformer]))
</pre>

<pre class="prettyprint lang-clj" data-lang="CLOJURESCRIPT OUTPUT">
(ns monads.test.core-test
  (:require [monads.core :as m]
            [monads.core writer-transformer state-transformer])
  (:require-macros [monads.macros :as monadic]))
</pre>

---

title: Replace forms via meta tags
subtitle: :cljs meta tag

<pre class="prettyprint lang-clj" data-lang="CLOJURE INPUT">
<b>^{:cljs</b>
  '(ns monads.test.core-test
     (:require [monads.core :as m]
               [monads.core writer-transformer state-transformer])
     (:require-macros [monads.macros :as monadic]))<b>}</b>
(ns monads.test.core-test
  (:require [monads.core :as m]
            [monads.macros :as monadic])
  (:import [monads.core writer-transformer state-transformer])
</pre>

<pre class="prettyprint lang-clj" data-lang="CLOJURESCRIPT OUTPUT">
(ns monads.test.core-test
  (:require [monads.core :as m]
            [monads.core writer-transformer state-transformer])
  (:require-macros [monads.macros :as monadic]))
</pre>

---

title: Transform your code via selectors (a la CSS)
subtitle: Selectors work in a per file basis.

<pre class="prettyprint lang-clj" data-lang="project/dalap_rules.clj">
  {
   ;; Key a mapping from a Clojure file to a Clojurescript file
   ["src/clj/awesome_library/core.clj" "src/cljs/awesome_library/core.cljs"]

   [
    ;; Some rules that lein-dalap provides by default
    <b>(dalap/when (dalap/has-meta? :cljs))
    (dalap/transform (dalap/replace-with-meta :cljs))</b>


    ;; etc ..
   ]
   ;; .. Other files to transform
  }
</pre>

---

title: Transform your code via selectors (a la CSS)
subtitle: Selectors work in a per file basis.

<pre class="prettyprint lang-clj" data-lang="project/dalap_rules.clj">
  {
   ;; Key a mapping from a Clojure file to a Clojurescript file
   ["src/clj/awesome_library/core.clj" "src/cljs/awesome_library/core.cljs"]

   [
    ;; pairs
    <b>'java.lang.String 'string
    'deref '-deref</b>

    ;; etc ..
   ]
   ;; .. Other files to transform
  }
</pre>

---

title: Default transformation rules.
build_lists: true

- All tags shown so far are implemented using code selectors.
<br><br>e.g &nbsp; <code>:clj, :cljs, :cljs-macro</code>


- Fully qualified Java types are transformed to their JS equivalent.
<br><br>e.g &nbsp; <code>java.lang.String</code> will be mapped to JS' <code>string</code>

---

title: API is extensible
build_lists: true

- Add your own tags for code transformation.

- Add new selection rules by exploring the CLJ form tree.

- Specify code transformations in a granular level through <br><code>project/dalap_rules.clj</code>.

---

title: Same testsuite, many platforms.
subtitle: Introducing buster-cljs
class: segue nobackground dark

---

title: How can we test Clojurescript?
subtitle: Reuse options available in JS

Started by checking the usual suspects

- Jasmine
- Mocha
- Qunit
- <b>busterjs</b>

---

title: buster-cljs provides:

- Compatible clojuresque API for both Clojure and Clojurescript

- Not a new Clojure test library, just wraps clojure.test behind the curtains

- Parallel test execution in multiple envs (e.g nodejs, browser, JVM)<br><br> using busterjs

---

title: Installing buster-cljs
subtitle: <code>project.clj</code> changes

<pre class="prettyprint lang-clj" data-lang="project.clj">
(defproject awesome-library
  ;; ..
  <b>:dependencies [ ;; other dependencies
                     [com.birdseye-sw/buster-cljs "0.1.0"]]</b>
  ;; ..
  )
</pre>


---

title: Example of busterjs syntax
subtitle: BDD style

<pre class="prettyprint" data-lang="JAVASCRIPT">
buster.describe("Adding numbers", function() {
  buster.describe("natural numbers", function() {
    buster.it("adds correctly two numbers", function(){
      buster.assert((2 + 2) === 4);
    });
  });
  buster.describe("floating numbers", function() {
    // ...
  });
});
</pre>

---

title: Adapting clojure.test to busterjs syntax
subtitle: Same semantics

<pre class="prettyprint lang-clj" data-lang="CLOJURE">
(deftest adding-numbers
  (testing "natural numbers"
    (testing "adds correctly two numbers"
      (is (= (+ 2 2) 4)))
   (testing "floating numbers"
     ;; ..
     )))
</pre>

---

title: 1:1 clojure.test <=> busterjs

<table>
 <thead>
  <tr>
   <th>clojure.test</th>
   <th>busterjs</th>
  </tr>
 </thead>
 <tbody>
   <tr>
     <td><code>deftest<code></td>
     <td><code>buster.describe</code></td>
   </tr>
   <tr>
     <td><code>testing</code></td>
     <td><code>buster.describe</code></td>
   </tr>
   <tr>
     <td><code>testing</code></td>
     <td><code>buster.it</code></td>
   </tr>
   <tr>
     <td><code>is</code></td>
     <td><code>buster.assert</code></td>
   </tr>
 </tbody>
</table>



---

title: busterjs + clojure.test

<pre class="prettyprint lang-clj" data-lang="CLOJURE">
(<b>deftest</b> adding-numbers
  (<b>describe</b> "natural numbers"
    (<b>it</b> "adds correctly two numbers"
      (<b>is</b> (= (+ 2 2) 4)))
   (describe "floating numbers"
     ;; ..
     )))
</pre>

---

title: Example
subtitle: Works both in Clojure and Clojurescript

<pre class="prettyprint lang-clj" data-lang="CLOJURE">
(ns awesome-library.test.core-test
  #_(:cljs (:require-macros [buster-cljs.macros :refer
                               [initialize-buster deftest describe it is]]))
  ^:clj (:require [buster-cljs.clojure :refer [deftest describe it is]]))

#_(:cljs-do (initialize-buster))

(deftest adding-numbers
  (<b>describe</b> "natural numbers"
    (<b>it</b> "adds correctly two numbers"
      (is (= (+ 2 2) 4)))
   (describe "floating numbers"
     ;; ..
     )))
</pre>

---

title: Example - protocol-monads library
subtitle: JVM execution (clojure.test)

<pre data-lang="BASH">
<b>$ lein test</b>

lein test monads.test.core

Ran 72 tests containing 139 assertions.
0 failures, 0 errors.
</pre>

---

title: Example - protocol-monads library
subtitle: nodejs and browsers (busterjs)

<article class="smaller">
<pre data-lang="BASH">
# $ npm install
# $ lein cljsbuild once

<b>$ ./node_modules/buster/bin/buster-test -e browser</b>
PhantomJS 1.8.2, Linux:        .................................................
Safari 6.0.2, Mac OS X 10.7.5: .................................................
Firefox 19.0, Mac OS X 10.7:   .................................................
426 test cases, 432 tests, 774 assertions, 0 failures, 0 errors, 0 timeouts

<b>$ ./node_modules/buster/bin/buster-test -e node -r quiet</b>
71 test cases, 72 tests, 129 assertions, 0 failures, 0 errors, 0 timeouts
</pre>
</article>

---

class: big

<article>
<iframe data-src="vendor/busterstatic/buster.html" src="vendor/busterstatic/buster.html"></iframe>
</article>

---

title: Continuous testing with TravisCI
subtitle: JVM, node and headless browser

<article class="smaller">
<pre class="prettyprint lang-yaml" data-lang=".travis.yml">
language:
  - node_js
  - clojure
lein: lein2
jdk:
  - oraclejdk7
node_js:
  - "0.8"
before_script:
  - "export DISPLAY=:99:0"
  <b>- "lein2 cljsbuild once"
  - "./node_modules/buster/bin/buster-server &"
  - "sleep 3"
  - "phantomjs ./node_modules/buster/script/phantom.js &"
  - "sleep 3"</b>
script:
  <b>- lein2 test && npm test</b>
</pre>
</article>

---

class: big

<article>
<iframe data-src="vendor/travisci/travisci.html" src="vendor/travisci/travisci.html"></iframe>
</article>

---

title: Fast feedback loop
subtitle: Making Emacs + nrepl work for you (demo)
class: segue nobackground dark

---

title: Development environment
class: image

![Development Environment Diagram](images/emacs_clojure_development.jpg)

---

title: Make your library usable in the front-end
subtitle: Some projects that made the jump

Third Party

- [protocol-monads](http://github.com/jduey/protocol-monads)

- [clout](http://github.com//clout)

Internal Projects

- [dalap](http://github.com/BirdseyeSoftware/dalap)

- [dalap-html](http://github.com/BirdseyeSoftware/dalap-html)

Your awesome library/project?

<aside class="note">

- Helped finding bugs on Clojurescript in the translation process

</aside>

---

title: What to do?

- Old library: if it makes sense, make it front-end usable

- New library: Consider Clojurescript in your library from the [very start]()

- Make Clojurescript more awesome!

<!---
title: Why busterjs?
build_lists: true

Testing API had to be good, but it wasn't the most important point.

<b>Main Feature</b>: execute test suites in multiple browsers, in
parallel

1. 1) Slave your many vendored browsers (phantomJS for headless testing)

2. 2) Push your testsuite to each of them in parallel

3. 3) Get results back in the terminal
-->