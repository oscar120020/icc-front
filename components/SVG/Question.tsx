import Image, { ImageProps } from 'next/image'
import Logo from '../../assets/question.svg';

type Props = Omit<ImageProps, 'src' | 'alt'>

export const QuestionImage = (imageProps: Props) => {
  return (
    <Image
        {...imageProps}
        src={Logo}
        alt='Question Ilustration'
    />
  )
}