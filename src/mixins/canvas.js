import html2canvas from 'html2canvas'
export default {
  methods: {
    async drawCanvas({ el = '#capture', isTest = false }) {
      let targetEl = el
      if (typeof el === 'string') {
        targetEl = document.querySelector(el)
      }
      const canvas = await html2canvas(targetEl, {
        logging: true,
        allowTaint: true,
        useCORS: true,
        scale: window.devicePixelRatio / 2,
      })

      if (isTest) {
        document.body.appendChild(canvas)
      }
    },
  },
}
