const connection = require("../database/connection");

module.exports = {
  async store(req, res) {
    const { id } = req.body;

    const ongs = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ongs) {
      return res.status(400).json({ error: "No ONGs found with this ID" });
    }

    return res.json(ongs);
  }
};
