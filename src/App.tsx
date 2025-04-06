import { ThemeProvider } from '@/components/theme-provider';
import { DesignSystemDemo } from '@/components/design-system-demo';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="design-system-theme">
      <DesignSystemDemo />
    </ThemeProvider>
  );
}

export default App;