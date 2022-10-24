import Image, { ImageProps } from 'next/image'
import ICCLogo from '../../assets/icc/logo-icc2.svg';

type Props = Omit<ImageProps, 'src' | 'alt'>

export const LogoImage = (imageProps: Props) => {
  return (
    <Image
        {...imageProps}
        src={ICCLogo}
        alt='ICC loco'
    />
  )
}
