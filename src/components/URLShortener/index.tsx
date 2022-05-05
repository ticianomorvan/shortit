import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { encodeURL, getShortedURL } from '@/utils/url';

type FormValues = {
  url: string;
}

const URLShortener = () => {
  const [shortURL, setShortURL] = useState<string>('');

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => {
    const encodedURL = encodeURL(data.url);
    const apiResponse = getShortedURL(encodedURL).then((response) => {
      setShortURL(response.data.short);
    })
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('url')} />
      <button type="submit">Submit</button>

      { shortURL && (
        <a href={`https://1pt.co/${shortURL}`} target="_blank" rel="noreferrer">Your link</a>
      )}
    </form>
  )
}

export default URLShortener;