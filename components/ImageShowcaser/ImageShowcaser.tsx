import Image from 'next/image'
import styles from './ImageShowcaser.module.scss'

type ImageShowcaserProps = { images: string[] }

export const ImageShowcaser = ({ images }: ImageShowcaserProps) => {
  return (
    <div className={styles.container}>
      {images.map((imageUrl) => (
        <div className={styles.imageContainer}>
          <Image fill alt='' src={imageUrl} key={imageUrl} />
        </div>
      ))}
    </div>
  )
}
