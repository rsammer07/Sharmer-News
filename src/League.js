import { Image } from 'semantic-ui-react';


const League = ({ icon, name }) => (
  <div>
    <Image src={icon} alt={name} />
    <p>{name}</p>
  </div>
);

export default League;