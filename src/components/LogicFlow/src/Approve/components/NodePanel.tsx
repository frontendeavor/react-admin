import type LogicFlow from '@logicflow/core'
import { approveNodes } from '../config'
import type { HtmlNodeConfig } from '../type'

export default function NodePanel(lf: LogicFlow) {
  // 拖拽创建
  const dragNode = (item: HtmlNodeConfig) => {
    lf.dnd.startDrag({
      type: item.type,
      text: item.label
    })
  }
  // 节点菜单
  const getNodePanel = (): JSX.Element[] => {
    const nodeList: JSX.Element[] = []
    approveNodes.forEach((item, key) => {
      nodeList.push(
        <div className={`approve-node node-${item.type}`} key={key}>
          <div className='node-shape' style={{ ...item.style }} onMouseDown={() => dragNode(item)}></div>
          <div className='node-label'>{item.label}</div>
        </div>
      )
    })
    return nodeList
  }
  return getNodePanel()
}
