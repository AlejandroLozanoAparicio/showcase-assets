import Image from 'next/image'
import styles from './ImageShowcaser.module.scss'

type ImageShowcaserProps = { images: string[] }

const DEFAULT_ALT = ''
const MAX_VISIBLE_IMAGES = 12
const SIZES_MEDIA_QUERY =
  '(min-width: 1024px) 21vw, (min-width: 600px) 26vw, 43vw'

export const ImageShowcaser = ({ images }: ImageShowcaserProps) => {
  return (
    <div className={styles.container}>
      {images.map((imageUrl, index) => (
        <div className={styles.imageContainer} key={imageUrl}>
          <Image
            fill
            alt={DEFAULT_ALT}
            src={imageUrl}
            priority={index <= MAX_VISIBLE_IMAGES}
            sizes={SIZES_MEDIA_QUERY}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  )
}
