import Image, { ImageProps } from 'next/image'
import Error from '../../assets/error.svg';

type Props = Omit<ImageProps, 'src' | 'alt'>

export const ErrorImage = (imageProps: Props) => {
  return (
    <Image
        {...imageProps}
        src={Error}
        alt='Page error'
    />
  )
}
