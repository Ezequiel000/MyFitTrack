import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store , persistor} from './'

interface PropTypes {
  children: React.ReactNode
}

export default function Provider(props: PropTypes) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {props.children}    
      </PersistGate>
    </ReduxProvider>
  )
}