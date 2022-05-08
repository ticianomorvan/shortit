import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { encodeURL, getShortedURL } from '@/utils/url';
import {
  StyledForm,
  StyledInput,
  StyledButton,
  ShortedLink,
} from '@/components/URLShortener/components';
import joi from 'joi';
import toast from 'react-hot-toast';

type FormValues = {
  url: string;
}

const schema = joi.object({
  url: joi.string()
    .uri()
    .required()
})

const URLShortener = () => {
  const [shortURL, setShortURL] = useState<string>('');

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {
    const validate = schema.validate(data);

    if (validate.error === undefined) {
      const encodedURL = encodeURL(data.url);
      const apiResponse = getShortedURL(encodedURL).then((response) => {
        setShortURL(response.data.short);
      })
    } else {
      toast.error(validate.error.message);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        placeholder="e.g.: https://google.com"
        required
        {...register('url', { required: true, })} 
      />
      <StyledButton type="submit">
        Shortit!
      </StyledButton>

      { shortURL && (
        <ShortedLink href={`https://1pt.co/${shortURL}`} target="_blank" rel="noreferrer">Your link</ShortedLink>
      )}

    </StyledForm>
  )
}

export default URLShortener;