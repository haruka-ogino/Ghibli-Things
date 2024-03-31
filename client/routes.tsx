import { createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './pages/Layout.tsx'
import Films from './pages/Films.tsx'
import Home from './pages/Home.tsx'
import Dishes from './pages/Dishes.tsx'
import Characters from './pages/Characters.tsx'
import AddCharacter from './pages/AddCharacter.tsx'
import EditCharacter from './pages/EditCharacter.tsx'
import RandomItems from './pages/RandomItems.tsx'
import Places from './pages/Places.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="films" element={<Films />} />
    <Route path="dishes" element={<Dishes />} />
    <Route path="game" element={<RandomItems />} />
    <Route path="characters" element={<Characters />} />
    <Route path="add-character" element={<AddCharacter />} />
    <Route path="characters/:id/edit" element={<EditCharacter />} />
    <Route path="places" element={<Places />} />
  </Route>,
)
