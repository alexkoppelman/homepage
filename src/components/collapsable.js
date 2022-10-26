import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

const Panel = styled.div`
  width: 300px;
  text-align: left;
`

const PanelHeading = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

const ToggleButtonWrapper = styled.div`
  transform: ${props => props.isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'}
`

const PanelContent = styled.div`
  border: 1px solid #000000;
  border-top: none;
  padding: 0 20px;
  color: #000000;
  overflow: hidden;
  height: ${props => props.isCollapsed ? 0 : 'auto'};
`

const PanelContentInner = styled.div`
  padding: 20px 0;
`

const CollapsablePanel = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(true)

  const togglePanel = () => {
    setIsCollapsed(prevState => !prevState)
  }

  return (
    <Panel>
      <PanelHeading onClick={togglePanel}>
        <span>This is the heading</span>
        <ToggleButtonWrapper isCollapsed={isCollapsed}>
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </ToggleButtonWrapper>
      </PanelHeading>
      <PanelContent isCollapsed={isCollapsed}>
        <PanelContentInner>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </PanelContentInner>
      </PanelContent>
    </Panel>
  )
}

export default CollapsablePanel