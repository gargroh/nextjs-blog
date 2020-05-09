export default (req, res) => {
  let count = 0;

  while (count < 10000) {
    console.log(count);
    count++;
  }

  res.status(200).json({ text: "Hello" });
};
