import { url } from '../main';
import { setGallery } from '../main';

export function fetchImg() {
  
//   setGallery.innerHTML = (`<div class="loader"></div>`).json();

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
