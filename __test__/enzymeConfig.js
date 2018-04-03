import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// In order to use some of Enzyme's to level APIs
// We'll need to configure the adapter
configure({ adapter: new Adapter() })
