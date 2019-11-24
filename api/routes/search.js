const { Router } = require("express")
const db = require("../db/documents")

const router = Router()

router.post("/", (req, res) => {
  const { text, type } = req.body

  if (!text) return res.status(400).json({ message: "Bad Request" })

  let documents = []
  if (type === "citation") {
    documents = db.findByCitation(text)
  } else {
    documents = db.find(text)
  }

  setTimeout(() => {
    res.json({ documents })
  }, 2000)
})

module.exports = router
