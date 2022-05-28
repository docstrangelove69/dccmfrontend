import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { Config, DAppProvider, Rinkeby } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
const config: Config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: getDefaultProvider('rinkeby'),
  },
}
function App() {
  return (
    <DAppProvider config={config}>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </DAppProvider>
  )
}

export default App
