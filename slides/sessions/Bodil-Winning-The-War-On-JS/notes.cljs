;;; Pylon classes

(defclass Pony
  (defn constructor [name]
    (set! @.name name))
  (defn hello []
    (str "Hello " name "!")))

(defclass Pony
  (defn constructor [name]
    (set! @.name name))
  (defn ponyType [] "nopony")
  (defn hello []
    (str "Hello " name " the " (@.ponyType) "!")))

(defclass RainbowDash :extends Pony
  (constructor []
    (set! @.name "Rainbow Dash"))
  (ponyType [] "pegasus pony")
  (hello []
    (str (super) " You need to be about 20% cooler.")))

;;; Promises

=> (def p (p/promise))

=> @p
:redlobster.promise/not-realised

=> (p/realise p "Hello everypony!")
=> @p
"Hello everypony!"

=> (def p (p/promise))
=> (p/on-realised p #(println "OMG REALISED")
                    #(println "OMG FAILED"))
=> (p/realised p "Hello everypony!")
OMG REALISED
=> @p
"Hello everypony!"

=> (def p (p/promise))
=> (def p* (p/promise))
=> (p/realise p p*)
=> @p
:redlobster.promise/not-realised
=> (p/realise p* "Hello everypony!")
=> @p
"Hello everypony!"

;;; Dog Fort example

(def coll
  (let-realised [db (mongo/connect "localhost" 27017 "dogfort")]
    (mongo/collection @db "items")))

(defroutes handler
  (GET "/" []
       (when-realised [coll]
         (let-realised [docs (mongo/find-all @coll {})]
           (response/response 200 (page-template @docs)))))

  (POST "/new" [new]
        (when-realised [coll]
          (let-realised [docs (mongo/save! @coll {"name" new "done" false})]
            (response/redirect-after-post "/"))))

  (POST "/delete/:id" [id]
        (when-realised [coll]
          (let-realised [docs (mongo/delete-id! @coll id)]
            (response/redirect-after-post "/"))))

  (POST "/check/:id" [id]
        (when-realised [coll]
          (let-realised
            [docs (mongo/update-id! @coll id #(assoc % "done" (not (% "done"))))]
            (response/redirect-after-post "/")))))


;;; Tests

(test "Rainbow Dash should be a pegasus pony"
  (is (= "pegasus pony" (.ponyType (RainbowDash.))))
  (done))

(test {:only :node} "Rainbow Dash should be best pony"
  (let-realised [best-pony (io/slurp "bestpony.txt")]
    (is (= "Rainbow Dash" @best-pony))
    (done)))

(test {:only :node :expect :fail} "Fluttershy should not be best pony"
  (let-realised [best-pony (io/slurp "bestpony.txt")]
    (is (= "Fluttershy" @best-pony))
    (done)))
