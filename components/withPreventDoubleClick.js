import React from 'react'
import debounce from 'lodash.debounce'

// Source: https://snack.expo.io/@patwoz/withpreventdoubleclick
export const withPreventDoubleClick = (WrappedComponent) => {

  class PreventDoubleClick extends React.PureComponent {

    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress()
    }

    onPress = debounce(this.debouncedOnPress, 300, { leading: true, trailing: false })

    render() {
      return <WrappedComponent {...this.props} onPress={this.onPress} />
    }
  }

  PreventDoubleClick.displayName = `withPreventDoubleClick(${WrappedComponent.displayName || WrappedComponent.name})`
  return PreventDoubleClick
}
