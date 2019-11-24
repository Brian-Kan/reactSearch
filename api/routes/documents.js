const { Router } = require("express")
const db = require("../db/documents")

const router = Router()

router.get("/:id", (req, res) => {
  const { id } = req.params

  if (!id) return res.status(400).json({ message: "Bad Request" })

  const document = db.get(id)

  if (!document) {
    return res.status(404).json({ message: "Document Not Found" })
  }
  res.json({ document })
})

module.exports = router
