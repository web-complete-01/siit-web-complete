export function AddGame() {
  async function handleAddGame() {}

  // "alternateNames": [
  //   "Brass. Бирмингем",
  //   "Brass. Бірмінгем",
  //   "ブラス：バーミンガム",
  //   "工业革命：伯明翰(Chinese edition) (2018)",
  //   "工業革命：伯明翰",
  //   "브라스: 버밍엄"
  // ],
  // "numberOfPlayers": {
  //   "min": 2,
  //   "max": 4,
  //   "recommended": 2,
  //   "best": 3
  // },
  // "playtime": {
  //   "avg": 120,
  //   "min": 60,
  //   "max": 120
  // },
  // "minAge": 14,
  // "yearpublished": 2018,
  return (
    <form className="brandForm" action={handleAddGame}>
      <h1 className="fullWidth">Add Game</h1>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="thumbnail">Thumbnail</label>
      <input type="url" id="thumbnail" name="thumbnail" />

      <label htmlFor="image">Image</label>
      <input type="url" id="image" name="image" />

      <label className="alignTop" htmlFor="description">
        Description
      </label>
      <textarea id="description" name="description"></textarea>

      <span className="label alignTop">Number of Players</span>
      <fieldset>
        <legend>Specify the details</legend>

        <label htmlFor="min">Min</label>
        <input type="number" />
        <label htmlFor="max">Max</label>
        <input type="number" />
        <label htmlFor="recommended">Recommended</label>
        <input type="number" />
        <label htmlFor="best">Best</label>
        <input type="number" />
      </fieldset>
    </form>
  );
}
