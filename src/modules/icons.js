// http://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/
import { objectAssign } from 'commons'

import containers from 'images/containers'
import f7 from 'images/icons-f7'
import ionic from 'images/icons-ionic'
import vsct from 'images/icons-vsct'
import operations from 'images/operations'

export {
  containers,
  f7,
  ionic,
  vsct,
  operations,
}

export default objectAssign({},
  containers,
  f7,
  ionic,
  operations,
  vsct
)
