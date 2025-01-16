import { render, screen } from '@testing-library/react';
import MovieThumbnail from '../MovieThumbnail';
import fallbackUrl from '@/shared/ui/video_placeholder.png';
import { fireEvent } from '@testing-library/react';
import { buildImageURL } from '@/shared/utils/buildImageURL';

describe('MovieThumbnail', () => {
  const title = 'Sample Movie';
  const validImageUrl = '/valid-image.jpg'
  const invalidImageUrl = '/invalid-image.jpg';

  test('renders with provided image URL and title', () => {
    render(<MovieThumbnail posterPath={validImageUrl} title={title} className="thumbnail" />);
    const imgElement = screen.getByAltText(title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', buildImageURL(validImageUrl, 200));
  });

  test('displays fallback image on error', () => {
    render(<MovieThumbnail posterPath={invalidImageUrl} title={title} className="thumbnail" />);
    const imgElement = screen.getByAltText(title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', buildImageURL(invalidImageUrl, 200));

    fireEvent.error(imgElement);

    expect(imgElement).toHaveAttribute('src', fallbackUrl);
  });
});
