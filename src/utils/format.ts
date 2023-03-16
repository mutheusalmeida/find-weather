export const formatCountry = (name: string) => {
  const countries = {
    'Brazil': 'Brasil'
  }

  return countries[name as keyof typeof countries] || name
}

export const formatDate = (date: string) => {
  const newDate = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }

  const formatedDate = newDate.toLocaleString('pt-BR', options)

  return {
    getFullDate: () => formatedDate.split(' ').map(word => word.length > 2 ? word[0].toUpperCase() + word.slice(1) : word).join(' ').replace('.', ''),
    getHours: () => newDate.toLocaleTimeString('pt-BR', { hour: '2-digit' })
  }
}
