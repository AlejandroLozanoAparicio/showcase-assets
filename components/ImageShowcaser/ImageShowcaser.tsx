import Image from 'next/image'
import styles from './ImageShowcaser.module.scss'

type ImageShowcaserProps = { images: string[] }

export const ImageShowcaser = ({ images }: ImageShowcaserProps) => {
  return (
    <div className={styles.container}>
      {images.map((imageUrl) => (
        <Image
          src={imageUrl}
          alt=''
          className={styles.image}
          width={100}
          height={100}
          key={imageUrl}
        />
      ))}
    </div>
  )
}
