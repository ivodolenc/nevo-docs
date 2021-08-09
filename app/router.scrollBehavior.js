export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else if (to.hash) {
    return {
      selector: to.hash,
      offset: { x: 0, y: 100 }
    }
  }
  return { x: 0, y: 0 }
}
