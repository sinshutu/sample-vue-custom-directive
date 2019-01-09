import Vue from "vue"

Vue.directive('data-action-click', {
  bind: function (el, binding) {
    el.setAttribute('data-category', binding.expression)
    el.setAttribute('data-action', 'click')
  }
})
