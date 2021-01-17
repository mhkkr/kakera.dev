// export const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS_ID
export const GA_TRACKING_ID = 'G-L5MNPNPQ46'

export const pageview = (path) => {
  gtag('config', GA_TRACKING_ID, {
    page_path: path,
  })
}

export const event = ({ action, category, label, value = '' }: any) => {
  if (!GA_TRACKING_ID) {
    return
  }

  gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  })
}