export const register = async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password is required and shpuld be 6 characters long",
      });
    }
    res.json({
      data: "This is /register endpoint",
    });
  } catch (err) {
    console.log(err);
  }
};
