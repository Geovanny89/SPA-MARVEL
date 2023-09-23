
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,Link } from 'react-router-dom';
import { Clear, showCharacterDetail } from '../../Redux/actions';
import './detail.scss';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detailCharacter);

  useEffect(() => {
    dispatch(showCharacterDetail(id));
    dispatch(Clear());
  }, [dispatch, id]);

  if (!detail || !detail.thumbnail || !detail.thumbnail.path || !detail.thumbnail.extension) {
    return <div>No hay información de imagen disponible</div>;
  }

  const imageUrl = `${detail.thumbnail.path}.${detail.thumbnail.extension}`;

  return (
    <div className="card-container">
     
      <div className="detail-card-image">
        <img src={imageUrl} alt={detail.title} />
      </div>
      
      <div className="content-card">
      <div className='button-volver' >
        <Link to='/' >Volver</Link>
      </div>
        <h6>Detalles del Cómic</h6>
        <p>
          <strong>Título:</strong> {detail.title}
        </p>
        <p>
          <strong>Número de Cómic:</strong> {detail.id}
        </p>
        <p>
          <strong>Descripción:</strong> {detail.description || 'No hay descripción disponible.'}
        </p>
        <p>Personajes: </p>
        <ul>
          {detail.characters.items.map((character) => (
            <li key={character.resourceURI}>{character.name}</li>
          ))}
        </ul>
      </div>
      
     
    </div>
  );
};

export default Detail;

