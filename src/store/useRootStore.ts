import React from 'react';
import { storesContext } from './RootStore';

const useRootStore = () => React.useContext(storesContext);

export default useRootStore;
