const github_base = 'https://github.com/chrvadala/react-svg-pan-zoom/blob/master'

const doc_v1_to_v2 = github_base + '/docs/migrate-from-v1-to-v2.md'
const doc_v2_to_v3 = github_base + '/docs/migrate-from-v2-to-v3.md'

export function tipNoViewer() {
  console.error(`HEY! You are trying to use an older version of ReactSVGPanZoom. Please read here ${doc_v1_to_v2}`)
}

export function tipControlledComponent() {
  console.error(`HEY! Starting from ReactSVGPanZoom >= 3 you MUST specify value and tool props. Please read here ${doc_v2_to_v3}`)
}
