import React, { useEffect } from 'react'
import NavBar from '../component/NavBar'
import SideBarr from '../component/SideBarr'
import Categories from '../component/Categories'
import {useAppDispatch,useAppSelector} from "../hooks/useApp"
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos)

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  },[dispatch])
  return (
    <div className='position' >
      <NavBar/>
      <div className='flex1'>
      <SideBarr/>
      <Categories/>
      </div>
    </div>
  )
}
