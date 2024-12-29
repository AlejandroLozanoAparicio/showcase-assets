import { ImageShowcaser } from 'components/ImageShowcaser/ImageShowcaser';
import { createClient } from '../utils/createClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Showcase Assets',
  description: 'Home Page to showcase assets',
};

export default async function HomePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.storage.from('assets').list('images', {
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  });

  const images = data
    ?.filter((image) => image.name != '.emptyFolderPlaceholder')
    .map((image) => {
      const response = supabase.storage
        .from('assets')
        .getPublicUrl(`images/${image.name}`);
      return response.data.publicUrl;
    });

  return images ? <ImageShowcaser images={images} /> : { error };
}
