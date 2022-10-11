import Image, { ImageProps } from 'next/image'
import Logo from '../../assets/landing.svg';

type Props = Omit<ImageProps, 'src' | 'alt'>

export const LandingImage = (imageProps: Props) => {
  return (
    <Image
        {...imageProps}
        src={Logo}
        alt='Landing Ilustration'
    />
  )
}