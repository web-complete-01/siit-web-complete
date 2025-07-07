import { Fragment, useState, type ReactNode } from 'react';
import { HiMiniPlusCircle, HiMinusCircle } from 'react-icons/hi2';
import { validateForm, type ValidationErrors } from '../../utils/validation';
import { z } from 'zod/v4';

const maxAge = 120;

const validationSchema = z.object({
  name: z.string().min(1, "Please enter a name for the game."),
  thumbnail: z.url("Please enter a valid url to the thumbnail of the game."),
  image: z.url("Please enter a valid url to the full sized image of the game."),
  description: z.string().min(1),
  min:  z.number("Please specify a valid number.").min(1, "The number of players can't be less than 1."),
  max: z.number("Please specify a valid number.").min(1, "The number of players can't be less than 1."),
  recommended: z.number("Please specify a valid number.").min(1, "The number of players can't be less than 1."),
  best: z.number("Please specify a valid number.").min(1, "The number of players can't be less than 1."),
  alternateNames: z.array(z.string().min(1, 'Please specify valid alternate names or delete the empty inputs.')),
  minAge: z.number("Please specify a valid age.").min(1, "Age can't be less than 1.").max(maxAge, `Age can't be more than ${maxAge}.`),
});

type DefaultValues = {
    name: string;
    thumbnail: string;
    image: string;
    description: string;
    min: string;
    max: string;
    recommended: string;
    best: string;
    alternateNames: string[];
    minAge: string;
}

const initialDefaultValues: DefaultValues = {
  name: '',
  thumbnail: '',
  image: '',
  description: '',
  min: '',
  max: '',
  recommended: '',
  best: '',
  alternateNames: [],
  minAge: '',
};

export function AddGame() {
  const [alternateNames, setAlternateNames] = useState<ReactNode[]>([]);
  const [errors, setErrors] = useState<null | ValidationErrors<typeof validationSchema>>(null);
  const [defaultValues, setDefaultValues] = useState(initialDefaultValues);

  function addAlternateNameField() {
    const i = alternateNames.length;
    const key = Math.random();

    setAlternateNames([
      ...alternateNames,
      <Fragment key={key}>
        <label htmlFor={`alternateNames${key}`}>Name {i + 1}</label>
        <div className="fieldGroup">
          <input
            type="text"
            id={`alternateNames${key}`}
            name="alternateNames"
          />
          <button
            type="button"
            className="btn btnDestructive iconBtn"
            onClick={() => {
              setAlternateNames((oldNames) => oldNames.toSpliced(i, 1, null));
            }}
          >
            <HiMinusCircle />
          </button>
        </div>
      </Fragment>,
    ]);
  }

  async function handleAddGame(formData: FormData) {
    const values: Record<string, FormDataEntryValue | FormDataEntryValue[]> = Object.fromEntries(formData.entries());
    values.alternateNames = formData.getAll('alternateNames');
    const errors = validateForm(values, validationSchema);

    console.log(values);
    

    if (errors) {
      setErrors(errors);
      setDefaultValues(values as typeof defaultValues);
      return;
    }

    setErrors(null);
    setDefaultValues(initialDefaultValues);
  }

  return (
    <form className="brandForm" action={handleAddGame}>
      <h1 className="fullWidth">Add Game</h1>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" defaultValue={defaultValues.name} />
      {errors?.name && <p className="fieldError">{errors.name[0]}</p>}

      <label htmlFor="thumbnail">Thumbnail</label>
      <input type="url" id="thumbnail" name="thumbnail" defaultValue={defaultValues.thumbnail} />
      {errors?.thumbnail && <p className="fieldError">{errors.thumbnail[0]}</p>}

      <label htmlFor="image">Image</label>
      <input type="url" id="image" name="image" defaultValue={defaultValues.image} />
      {errors?.image && <p className="fieldError">{errors.image[0]}</p>}

      <label className="alignTop" htmlFor="description">
        Description
      </label>
      <textarea id="description" name="description" defaultValue={defaultValues.description}></textarea>
      {errors?.description && <p className="fieldError">{errors.description[0]}</p>}

      <fieldset className="fullWidth">
        <legend>Number of Players</legend>

        <label htmlFor="min">Min</label>
        <input type="number" id="min" name="min" defaultValue={defaultValues.min} />
        {errors?.min && <p className="fieldError">{errors.min[0]}</p>}
        <label htmlFor="max">Max</label>
        <input type="number" id="max" name="max" defaultValue={defaultValues.max} />
        {errors?.max && <p className="fieldError">{errors.max[0]}</p>}
        <label htmlFor="recommended">Recommended</label>
        <input type="number" id="recommended" name="recommended" defaultValue={defaultValues.recommended} />
        {errors?.recommended && <p className="fieldError">{errors.recommended[0]}</p>}
        <label htmlFor="best">Best</label>
        <input type="number" id="best" name="best" defaultValue={defaultValues.best} />
        {errors?.best && <p className="fieldError">{errors.best[0]}</p>}
      </fieldset>

      <fieldset className="fullWidth">
        <legend>Alternate Names</legend>

        {alternateNames}
        {errors?.alternateNames && <p className="fieldError">{errors.alternateNames[0]}</p>}

        <button
          type="button"
          className="btn iconBtn secondColumn"
          onClick={addAlternateNameField}
        >
          <HiMiniPlusCircle />
          Add an Alternate Name
        </button>
      </fieldset>
      <label htmlFor="minAge">Minimum Age</label>
      <select id="minAge" name="minAge" defaultValue={defaultValues.minAge}>
        {new Array(maxAge).fill(null).map((_, i) => (
          <option key={i} value={i + 1}>{i + 1}</option>
        ))}
      </select>
      {errors?.minAge && <p className="fieldError">{errors.minAge[0]}</p>}

      <button type="submit" className="btn secondColumn">
        Add game
      </button>
    </form>
  );
}
