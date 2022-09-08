export const currencyFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export const formatDate = (date: Date) => date.toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })

export const getDaysBetweenTwoDates = (a: Date, b: Date) => (a.getTime() - b.getTime()) / (1000 * 3600 * 24)