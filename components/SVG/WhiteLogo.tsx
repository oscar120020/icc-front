import Image, { ImageProps } from 'next/image'
import ICCLogo from '../../assets/icc/logo-white.svg';

type Props = Omit<ImageProps, 'src' | 'alt'>

export const WhiteLogoImage = (imageProps: Props) => {
  return (
    <Image
        {...imageProps}
        src={ICCLogo}
        alt='ICC loco'
    />
  )
}
