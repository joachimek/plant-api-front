import i18n from 'i18next'

const provider = {
  translate: (key: string, options: any): string => i18n.t(key, options),
  changeLocale: async (locale: string): Promise<void> => {
    let preferences
    try {
      preferences = JSON.parse(window.localStorage?.preferences)
      if (preferences === null || preferences === undefined) preferences = {}
    } catch {
      preferences = {}
    }
    localStorage.setItem(
      'preferences',
      JSON.stringify({
        ...preferences,
        language: locale,
      }),
    )
    await i18n.changeLanguage(locale)
  },
  getLocale: (): string => i18n.language,
}

export default provider
