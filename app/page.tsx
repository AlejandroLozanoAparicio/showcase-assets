import { ImageShowcaser } from 'components/ImageShowcaser/ImageShowcaser'
import { createClient } from '../utils/createClient'

import type { Metadata } from 'next'
import {
  BUCKET_NAME,
  EMPTY_FOLDER_NAME,
  IMAGES_FOLDER_NAME,
  SUPABASE_OPTIONS,
} from 'constants/assets'

export const metadata: Metadata = {
  title: 'Showcase Assets',
  description: 'Home Page to showcase assets',
}

export default async function HomePage() {
  const supabase = await createClient()
  const { data, error } = await supabase.storage
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

  return images ? <ImageShowcaser images={images} /> : { error }
}
