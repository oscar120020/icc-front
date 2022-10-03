import Image, { ImageProps } from 'next/image'
import Page404 from '../../assets/404.svg';

type Props = Omit<ImageProps, 'src' | 'alt'>

export const Error404Image = (imageProps: Props) => {
  return (
    <Image
        {...imageProps}
        src={Page404}
        alt='Page error 404'
    />
  )
}
