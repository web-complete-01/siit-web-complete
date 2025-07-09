import { Fragment, useCallback, useEffect, useState } from 'react';
import { HiMiniPlusCircle, HiMinusCircle } from 'react-icons/hi2';
import { validateForm, type ValidationErrors } from '../../utils/validation';
import { z } from 'zod/v4';
import { useAuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router';
import type { Boardgame } from './types';

const apiUrl = import.meta.env.VITE_API_URL;
const maxAge = 120;

const validationSchema = z.object({
  name: z.string().min(1, 'Please enter a name for the game.'),
  thumbnail: z.url('Please enter a valid url to the thumbnail of the game.'),
  image: z.url('Please enter a valid url to the full sized image of the game.'),
  description: z.string().min(1),
  min: z.coerce
    .number('Please specify a valid number.')
    .min(1, "The number of players can't be less than 1."),
  max: z.coerce
    .number('Please specify a valid number.')
    .min(1, "The number of players can't be less than 1."),
  recommended: z.coerce
    .number('Please specify a valid number.')
    .min(1, "The number of players can't be less than 1."),
  best: z.coerce
    .number('Please specify a valid number.')
    .min(1, "The number of players can't be less than 1."),
  alternateNames: z.array(
    z
      .string()
      .min(
        1,
        'Please specify valid alternate names or delete the empty inputs.'
      )
  ),
  minAge: z.coerce
    .number('Please specify a valid age.')
    .min(1, "Age can't be less than 1.")
    .max(maxAge, `Age can't be more than ${maxAge}.`),
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
};

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

export function EditGame() {
  const [game, setGame] = useState<null | Boardgame>(null);
  const [alternateNames, setAlternateNames] = useState<number[]>([]);
  const [errors, setErrors] = useState<null | ValidationErrors<
    typeof validationSchema
  >>(null);
  const [defaultValues, setDefaultValues] = useState(initialDefaultValues);

  const { accessToken } = useAuthContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const addAlternateNameField = useCallback(() => {
    const key = Math.random();

    setAlternateNames((oldNames) => [...oldNames, key]);
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/boardgames/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setGame(data);
        for(let i = 0;  i < data.alternateNames.length; i++) {
          setAlternateNames((oldNames) => {
            if(oldNames.length >= data.alternateNames.length) {
              return oldNames;
            }
            return [...oldNames, data.alternateNames[i]]
        });
        }
        setDefaultValues(data);
      });
  }, [id]);

  function handleInputChange(
    e:
      | React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      | React.MouseEvent<HTMLButtonElement>
  ) {
    if (!errors) {
      return;
    }
    const formValues = new FormData(e.currentTarget.form!);
    const valuesAsObject: Record<
      string,
      FormDataEntryValue | FormDataEntryValue[]
    > = Object.fromEntries(formValues.entries());
    valuesAsObject.alternateNames = formValues.getAll('alternateNames');

    const newErrors = validateForm(valuesAsObject, validationSchema);
    setErrors(newErrors);
  }

  async function handleUpdateGame(formData: FormData) {
    if(!game) return;
    const values: Record<string, FormDataEntryValue | FormDataEntryValue[]> =
      Object.fromEntries(formData.entries());
    values.alternateNames = formData.getAll('alternateNames');
    const errors = validateForm(values, validationSchema);
    console.log(values);

    if (errors) {
      setErrors(errors);
      setDefaultValues(values as typeof defaultValues);
      return;
    }

    setErrors(null);
    setDefaultValues(game as unknown as DefaultValues);

    await fetch(`${apiUrl}/boardgames/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    toast.success(`Successfully updated the game: "${values.name}"!`);
    navigate(-1);
  }

  if (!game) {
    return <strong>Loading ...</strong>;
  }

  return (
    <form className="brandForm" action={handleUpdateGame}>
      <h1 className="fullWidth">Edit "{game.name}"</h1>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        defaultValue={defaultValues.name}
        onChange={handleInputChange}
      />
      {errors?.name && <p className="fieldError">{errors.name[0]}</p>}

      <label htmlFor="thumbnail">Thumbnail</label>
      <input
        type="url"
        id="thumbnail"
        name="thumbnail"
        defaultValue={defaultValues.thumbnail}
        onChange={handleInputChange}
      />
      {errors?.thumbnail && <p className="fieldError">{errors.thumbnail[0]}</p>}

      <label htmlFor="image">Image</label>
      <input
        type="url"
        id="image"
        name="image"
        defaultValue={defaultValues.image}
        onChange={handleInputChange}
      />
      {errors?.image && <p className="fieldError">{errors.image[0]}</p>}

      <label className="alignTop" htmlFor="description">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        defaultValue={defaultValues.description}
        onChange={handleInputChange}
      ></textarea>
      {errors?.description && (
        <p className="fieldError">{errors.description[0]}</p>
      )}

      <fieldset className="fullWidth">
        <legend>Number of Players</legend>

        <label htmlFor="min">Min</label>
        <input
          type="number"
          id="min"
          name="min"
          defaultValue={defaultValues.min}
          onChange={handleInputChange}
        />
        {errors?.min && <p className="fieldError">{errors.min[0]}</p>}
        <label htmlFor="max">Max</label>
        <input
          type="number"
          id="max"
          name="max"
          defaultValue={defaultValues.max}
          onChange={handleInputChange}
        />
        {errors?.max && <p className="fieldError">{errors.max[0]}</p>}
        <label htmlFor="recommended">Recommended</label>
        <input
          type="number"
          id="recommended"
          name="recommended"
          defaultValue={defaultValues.recommended}
          onChange={handleInputChange}
        />
        {errors?.recommended && (
          <p className="fieldError">{errors.recommended[0]}</p>
        )}
        <label htmlFor="best">Best</label>
        <input
          type="number"
          id="best"
          name="best"
          defaultValue={defaultValues.best}
          onChange={handleInputChange}
        />
        {errors?.best && <p className="fieldError">{errors.best[0]}</p>}
      </fieldset>

      <fieldset className="fullWidth">
        <legend>Alternate Names</legend>

        {alternateNames.map((key, i) => {
          return (
            <Fragment key={key}>
              <label htmlFor={`alternateNames${key}`}>Name {i + 1}</label>
              <div data-field-group className="fieldGroup">
                <input
                  type="text"
                  id={`alternateNames${key}`}
                  name="alternateNames"
                  defaultValue={defaultValues.alternateNames[i]}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="btn btnDestructive iconBtn"
                  onClick={(e) => {
                    setDefaultValues((oldValues) => {
                      oldValues.alternateNames =
                        oldValues.alternateNames.toSpliced(i, 1);
                      return { ...oldValues };
                    });
                    setAlternateNames((oldNames) =>
                      oldNames.filter((k) => k !== key)
                    );
                    // The next line is required for the field to pass validation as it is only removed on the next render
                    e.currentTarget
                      .closest('[data-field-group]')!
                      .querySelector('input')!.value =
                      'Dummy value to pass validation';
                    handleInputChange(e);
                  }}
                >
                  <HiMinusCircle />
                </button>
              </div>
            </Fragment>
          );
        })}
        {errors?.alternateNames && (
          <p className="fieldError">{errors.alternateNames[0]}</p>
        )}

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
      <select
        id="minAge"
        name="minAge"
        // the key is necessary for react to pick up on the defaultValue change, otherwise it just ignores the change and does not apply a default value.
        key={`minAge${defaultValues.minAge}`}
        defaultValue={defaultValues.minAge}
        onChange={handleInputChange}
      >
        {new Array(maxAge).fill(null).map((_, i) => (
          <option key={i} value={String(i + 1)}>
            {i + 1}
          </option>
        ))}
      </select>
      {errors?.minAge && <p className="fieldError">{errors.minAge[0]}</p>}

      <button type="submit" className="btn secondColumn">
        Add game
      </button>
    </form>
  );
}
