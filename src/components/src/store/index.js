import { createStore } from 'vuex'

export default createStore({
  // Data for app interface
  state: {
  	sortBy: [
      {
        name: 'Days',
        value: 'days'
      },
      {
        name: 'Month',
        value: 'months'
      },
      {
        name: 'Years',
        value: 'years'
      }
    ],
    years: [
      {
        name: '2020',
        value: 2020
      },
      {
        name: '2019',
        value: 2019
      },
      {
        name: '2018',
        value: 2018
      }
    ],
    months: [
      {
        name: 'January',
        value: 0
      },
      {
        name: 'February',
        value: 1
      },
      {
        name: 'March',
        value: 2
      },
      {
        name: 'April',
        value: 3
      },
      {
        name: 'May',
        value: 4
      },
      {
        name: 'June',
        value: 5
      },
      {
        name: 'July',
        value: 6
      },
      {
        name: 'August',
        value: 7
      },
      {
        name: 'September',
        value: 8
      },
      {
        name: 'October',
        value: 9
      },
      {
        name: 'November',
        value: 10
      },
      {
        name: 'December',
        value: 11
      },
    ],
    markerOptions: [
      {
        markerName: 'Point',
        markerTypes: [
          {
            name: '▲',
            value: 'triangle'
          },
          {
            name: ' ◆',
            value: 'rhombus'
          },
          {
            name: '▬',
            value: 'square'
          }
        ],
        markerColors: [
          {
            name: '🟡',
            value: 'yellow'
          },
          {
            name: '🔴',
            value: 'red'
          },
          {
            name: '🟢',
            value: 'green'
          },
          {
            name: '🔵',
            value: 'blue'
          },
        ],
        markerSizes: [
          {
            name: 'S',
            value: '2px'
          },
          {
            name: 'M',
            value: '4px'
          },
          {
            name: 'L',
            value: '6px'
          }
        ]
      },
      {
        markerName: 'Line',
        markerTypes: [
          {
            name: '—',
            value: 'straight'
          },
          {
            name: '/',
            value: 'oblique'
          }
        ],
        markerColors: [
          {
            name: '🟡',
            value: 'yellow'
          },
          {
            name: '🔴',
            value: 'red'
          },
          {
            name: '🟢',
            value: 'green'
          },
          {
            name: '🔵',
            value: 'blue'
          },
        ],
        markerSizes: [
          {
            name: 'S',
            value: '2px'
          },
          {
            name: 'M',
            value: '4px'
          },
          {
            name: 'L',
            value: '6px'
          }
        ]
      }
    ],
    markers: []
  },
  mutations: {
    addMarker(state, marker) {
      state.markers.push(marker);
    },
    removeMarker(state, index) {
      state.markers.splice(index, 1);
    }
  },
  getters: {
    getSortOptions(state) {
      return state.sortBy
    },
    getYears(state) {
      return state.years
    },
    getMonths(state) {
      return state.months
    },
    getMarkerOptions(state) {
      return state.markerOptions
    },
    getMarkers(state) {
      return state.markers
    }
  },
  actions: {
    addMarker(context, marker) {
      context.commit('addMarker', marker);
    },
    removeMarker(context, index) {
      context.commit('removeMarker', index);
    }
  },
  modules: {
  }
})
