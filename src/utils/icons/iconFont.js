import { configGetter } from '@utils/helper'
import { createFromIconfontCN } from '@ant-design/icons';

const defaultUrl = '//at.alicdn.com/t/font_2064533_ton7c6coyyg.js'
const iconfontUrl = configGetter('app->iconfontUrl')
export default createFromIconfontCN({scriptUrl: !iconfontUrl || iconfontUrl === ''? defaultUrl : iconfontUrl});