import config from '@config/app'
import { createFromIconfontCN } from '@ant-design/icons';

const defaultUrl = '//at.alicdn.com/t/font_2064533_ton7c6coyyg.js'
export default createFromIconfontCN({scriptUrl: !config.iconfontUrl || config.iconfontUrl === ''? defaultUrl : config.iconfontUrl});