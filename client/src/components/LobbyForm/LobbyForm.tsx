import './LobbyForm.scss';
import { Avatar, Button, FormControlLabel, Switch } from '@material-ui/core';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FileInput } from '../FileInput/FileInput';
import { getInitials } from '../../helpers/utils';

interface Props {
  handleClose: () => void;
}

interface FormInputs {
  firstname: string;
  lastname: string;
  position: string;
  isObserver: boolean;
  avatar: string;
}

export function LobbyForm(props: Props): JSX.Element {
  const { handleClose } = props;
  const [src, setSrc] = useState<string>('');

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  });

  const watchName: string = watch('firstname');
  const watchLastname: string = watch('lastname');

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <form className="lobby-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="lobby-form__title-wrapper">
        <h2 className="lobby-form__title">Connect to lobby</h2>
        <Controller
          name="isObserver"
          control={control}
          defaultValue
          render={({ field }) => (
            <FormControlLabel
              control={<Switch color="default" {...field} checked={field.value} />}
              label="Connect as Observer"
              labelPlacement="start"
            />
          )}
        />
      </div>
      <div className="lobby-form__fields-wrapper">
        <div className="lobby-form__group">
          <label className="lobby-form__label" htmlFor="firstname">
            Your first name:
          </label>
          <div className="lobby-form__field-wrapper">
            <input
              className="lobby-form__field"
              id="firstname"
              type="text"
              autoComplete="off"
              {...register('firstname', {
                required: 'Enter your name',
                pattern: {
                  value: /(?!^[\d ]+$)^[^!@#$%*()_—+=|:;"'`<>,.?/^]+$/i,
                  message: 'This input must match the pattern',
                },
                maxLength: {
                  value: 30,
                  message: 'Max length is 30',
                },
              })}
            />
            {errors.firstname?.type === 'required' && (
              <p className="lobby-form__error">{errors.firstname.types.required}</p>
            )}
            {errors.firstname?.type === 'pattern' && (
              <p className="lobby-form__error">{errors.firstname.types.pattern}</p>
            )}
            {errors.firstname?.type === 'maxLength' && (
              <p className="lobby-form__error">{errors.firstname.types.maxLength}</p>
            )}
          </div>
        </div>
        <div className="lobby-form__group">
          <label className="lobby-form__label" htmlFor="lastname">
            Your last name:
          </label>
          <div className="lobby-form__field-wrapper">
            <input
              className="lobby-form__field"
              id="lastname"
              type="text"
              autoComplete="off"
              {...register('lastname', {
                pattern: {
                  value: /(?!^[\d ]+$)^[^!@#$%*()_—+=|:;"'`<>,.?/^]+$/i,
                  message: 'This input must match the pattern',
                },
                maxLength: {
                  value: 30,
                  message: 'Max length is 30',
                },
              })}
            />
            {errors.lastname?.type === 'pattern' && (
              <p className="lobby-form__error">{errors.lastname.types.pattern}</p>
            )}
            {errors.lastname?.type === 'maxLength' && (
              <p className="lobby-form__error">{errors.lastname.types.maxLength}</p>
            )}
          </div>
        </div>
        <div className="lobby-form__group">
          <label className="lobby-form__label" htmlFor="position">
            Your job position:
          </label>
          <div className="lobby-form__field-wrapper">
            <input
              className="lobby-form__field"
              id="position"
              type="text"
              autoComplete="off"
              {...register('position', {
                pattern: {
                  value: /(?!^[\d ]+$)^[^!@#$%*()_—+=|:;"'`<>,.?/^]+$/i,
                  message: 'This input must match the pattern',
                },
              })}
            />
            {errors.position?.type === 'pattern' && (
              <p className="lobby-form__error">{errors.position.types.pattern}</p>
            )}
          </div>
        </div>
        <FileInput setSrc={setSrc} control={control} />
        <Avatar className="lobby-form__avatar" src={src}>
          {getInitials(watchName, watchLastname)}
        </Avatar>
      </div>
      <div className="lobby-form__btn-wrapper">
        <Button className="btn btn--small" variant="contained" type="submit">
          Confirm
        </Button>
        <Button className="btn btn--small btn--cancel" variant="outlined" color="primary" onClick={handleClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
}