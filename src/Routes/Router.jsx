import React from 'react'
import { Route, Routes } from 'react-router'

import Home from '../page/Home'
import Video from '../page/Video'
import Magazine from '../page/Magazine'
import Pools from '../page/Pools'
import Tick from '../page/Tick'
import Bell from '../page/Bell'
import PageNotFound from '../page/PageNotFound'

function Router() {
  return (
    <>
    <div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path={'/video'} element={<Video/>}/>
        <Route path={'/pools'} element={<Pools/>}/>
        <Route path={'/magazine'} element={<Magazine/>}/>
        <Route path={'/tick'} element={<Tick/>}/>
        <Route path={'/bell'} element={<Bell/>}/>
        <Route path={'/*'} element={<PageNotFound/>}/>
      </Routes>
    </div>
    </>
  )
}

export default Router
