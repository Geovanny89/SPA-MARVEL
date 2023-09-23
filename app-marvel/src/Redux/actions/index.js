
import axios from 'axios'

export function getCharacter(character) {
  return {
    type: 'GET_CHARACTER',
    payload: character,
  };
}




export function showCharacterDetail(characterId) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?ts=1&apikey=3f893c7e6bd8aab050dcbbe60eb5d6fe&hash=ec10d52f15f3d0adea6086a93b22ba48`
      );

      const comicDetails = response.data.data.results[0];

      dispatch({
        type: 'COMIC_DETAIL',
        payload: comicDetails,
      });
    } catch (error) {
      console.error('Error fetching comic details:', error);
    }
  };
}

export function Clear() {
  return {
    type: "CLEAR",
    payload: []
  }
}