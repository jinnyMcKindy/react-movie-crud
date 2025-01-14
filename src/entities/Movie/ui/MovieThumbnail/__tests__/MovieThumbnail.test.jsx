import { render, screen } from '@testing-library/react';
import MovieThumbnail from '../MovieThumbnail';
import fallbackUrl from '@/assets/video_placeholder.png';
import { fireEvent } from '@testing-library/react';

describe('MovieThumbnail', () => {
  const title = 'Sample Movie';
  const validImageUrl = 'https://example.com/valid-image.jpg';
  const invalidImageUrl = 'https://example.com/invalid-image.jpg';

  test('renders with provided image URL and title', () => {
    render(<MovieThumbnail imageUrl={validImageUrl} title={title} className="thumbnail" />);
    const imgElement = screen.getByAltText(title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', validImageUrl);
  });

  test('displays fallback image on error', () => {
    render(<MovieThumbnail imageUrl={invalidImageUrl} title={title} className="thumbnail" />);
    const imgElement = screen.getByAltText(title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', invalidImageUrl);

    fireEvent.error(imgElement);

    expect(imgElement).toHaveAttribute('src', fallbackUrl);
  });
});
