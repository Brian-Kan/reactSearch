const express = require("express")
const bodyparser = require("body-parser")
const swaggerUi = require("swagger-ui-express")

const swaggerDocument = require("./swagger.json")
const documents = require("./routes/documents")
const search = require("./routes/search")

const PORT = process.env.PORT || 4000

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyparser.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use("/search", search)
app.use("/documents", documents)

app.get("/", (_, res) => res.json({ Hello: "World" }))

app.listen(PORT, () => {
  console.log(`Running on localhost:${PORT}`)
})
