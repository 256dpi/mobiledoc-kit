import { VALID_MARKUP_SECTION_TAGNAMES } from './markup-section'
import { VALID_MARKUP_TAGNAMES } from './markup'
import { VALID_ATTRIBUTES } from './markup'

export function addSectionTag(name: string) {
  VALID_MARKUP_SECTION_TAGNAMES.push(name)
}

export function addMarkupTag(name: string) {
  VALID_MARKUP_TAGNAMES.push(name)
}

export function addAttribute(name: string) {
  VALID_ATTRIBUTES.push(name)
}
