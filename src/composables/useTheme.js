import { ref, watch, onMounted } from 'vue'

const theme = ref('dark')

export function useTheme() {
  const setTheme = (newTheme) => {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    updateThemeClass()
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  const updateThemeClass = () => {
    const root = document.documentElement
    if (theme.value === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      theme.value = savedTheme
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.value = prefersDark ? 'dark' : 'light'
    }
    updateThemeClass()
  }

  onMounted(() => {
    initTheme()
  })

  // Watch for system theme changes
  watch(() => theme.value, updateThemeClass)

  return {
    theme,
    setTheme,
    toggleTheme
  }
}