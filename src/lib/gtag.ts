// export const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS_ID
export const GA_TRACKING_ID = 'G-L5MNPNPQ46'

declare global { interface Window { hoge: any } }
window.hoge = window.hoge || {};

export const pageview = (path) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: path,
  })
}

export const event = ({ action, category, label, value = '' }: any) => {
  if (!GA_TRACKING_ID) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  })
}