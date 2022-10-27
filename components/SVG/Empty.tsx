import Image, { ImageProps } from 'next/image'
import Logo from '../../assets/empty.svg';

type Props = Omit<ImageProps, 'src' | 'alt'>

export const EmptyImage = (imageProps: Props) => {
  return (
    <Image
        {...imageProps}
        src={Logo}
        alt='Empty'
    />
  )
}