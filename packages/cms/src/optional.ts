// tslint:disable:no-var-requires

let helpCenterData = {
  locations: [],
  attributes: [],
}
try {
  helpCenterData = {
    locations: require('@oky/core/src/modules/translations/helpCenter').helpCenterLocations,
    attributes: require('@oky/core/src/modules/translations/helpCenter').helpCenterAttributes,
  }
} catch (e) {
  //
}

let contentFilterOptions = [
  {
    value: -1,
    description: 'All',
  },
  {
    value: 0,
    description: 'Rural',
  },
  {
    value: 1,
    description: 'Urban',
  },
]

try {
  contentFilterOptions = require('@oky/core')?.contentFilterOptions ?? []
} catch (e) {
  //
}

let ageRestrictionOptions = []

try {
  ageRestrictionOptions = require('@oky/core')?.ageRestrictionOptions ?? []
} catch (e) {
  //
}

export { helpCenterData, contentFilterOptions, ageRestrictionOptions }
