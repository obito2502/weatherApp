import networkConfig from '../network/networkConfig';

const getImageUrl = (iconName: string) => {
  return `${networkConfig.imageUrl}/${iconName}@2x.png`;
};

export default getImageUrl;
