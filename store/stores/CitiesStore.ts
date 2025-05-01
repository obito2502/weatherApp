import { makeAutoObservable } from 'mobx';
import { CityDataType } from '../../src/types/MainTypes';
import CitiesList from '../../src/data/CitiesList';

class CitiesStore {
  public citiesList: CityDataType[] = [...CitiesList];

  public loader: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  searchCity = (text: string) => {
    if (!text) {
      this.setCitiesList([...CitiesList]);
    }
    const foundCities = CitiesList.filter((city) =>
      city.city.toLowerCase().startsWith(text.toLowerCase())
    );
    this.setCitiesList(foundCities);
  };

  setCitiesList(item: CityDataType[]) {
    this.citiesList = [...item];
  }
}

export default CitiesStore;
