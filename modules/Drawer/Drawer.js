import React, { forwardRef } from 'react';
import {Drawer as DrawerNativeBase } from 'native-base';
import Sidebar from "./Sidebar"

const Drawer = forwardRef((props, drawerRef) => {
  const handleCloseDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current._root.close()
    }
  }

  return (
    <DrawerNativeBase
      ref={drawerRef}
      content={<Sidebar handleCloseDrawer={handleCloseDrawer} />}
      onClose={handleCloseDrawer}
    >
      {props.children}
    </DrawerNativeBase>
  )
})

export default Drawer
