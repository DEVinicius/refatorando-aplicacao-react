import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


interface SideBarProps {
  genres: Array<GenreResponseProps>;
  onButtonClick: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({
  genres, 
  onButtonClick,
  selectedGenreId
}: SideBarProps) {
  // Complete aqui

  return (
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onButtonClick(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
    </>
  );
}