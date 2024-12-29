import { ImageShowcaser } from 'components/ImageShowcaser/ImageShowcaser'
import { createClient } from 'utils/createClient'
import {
  BUCKET_NAME,
  EMPTY_FOLDER_NAME,
  IMAGES_FOLDER_NAME,
  SUPABASE_OPTIONS,
} from 'constants/assets'
import styles from './HomePageWrapper.module.scss'

export const HomePageWrapper = async () => {
  const supabase = await createClient()
  const { data } = await supabase.storage
    .from(BUCKET_NAME)
    .list(IMAGES_FOLDER_NAME, SUPABASE_OPTIONS)

  const images = data
    ?.filter((image) => image.name != EMPTY_FOLDER_NAME)
    .map((image) => {
      const response = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(`${IMAGES_FOLDER_NAME}/${image.name}`)
      return response.data.publicUrl
    })

  return (
    <div className={styles.container}>
      {images && <ImageShowcaser images={images} />}
    </div>
  )
}
