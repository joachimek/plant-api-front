import React from 'react';
import './App.css';
import { Admin, LegacyDataProvider, Resource } from 'react-admin';
import { ResourceName } from './core/ResourceName';
import { DevicesList } from './main/devices/DevicesList';
import { Dashboard } from './main/Dashboard';
import dataProvider from './core/data.provider';
import { DeviceShow } from './main/devices/DeviceShow';

function App() {

  return (
    <Admin dataProvider={dataProvider as unknown as LegacyDataProvider} dashboard={Dashboard}>
      <Resource name={ResourceName.DEVICES} list={DevicesList} show={DeviceShow} />
    </Admin>
  );
}

export default App;
