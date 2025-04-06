import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTheme } from '@/components/theme-provider';
import { Moon, Sun, Palette, Type, Box, Layers } from 'lucide-react';

export function DesignSystemDemo() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Design System</h1>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>

        <Tabs defaultValue="colors" className="space-y-4">
          <TabsList>
            <TabsTrigger value="colors" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Colors
            </TabsTrigger>
            <TabsTrigger value="typography" className="flex items-center gap-2">
              <Type className="h-4 w-4" />
              Typography
            </TabsTrigger>
            <TabsTrigger value="components" className="flex items-center gap-2">
              <Box className="h-4 w-4" />
              Components
            </TabsTrigger>
            <TabsTrigger value="patterns" className="flex items-center gap-2">
              <Layers className="h-4 w-4" />
              Patterns
            </TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Primary', class: 'bg-primary' },
                  { name: 'Secondary', class: 'bg-secondary' },
                  { name: 'Accent', class: 'bg-accent' },
                  { name: 'Muted', class: 'bg-muted' },
                ].map((color) => (
                  <div key={color.name} className="space-y-2">
                    <div
                      className={`${color.class} h-24 rounded-lg shadow-sm`}
                    ></div>
                    <p className="text-sm font-medium">{color.name}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="typography" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Typography Scale</h2>
              <div className="space-y-4">
                <div>
                  <h1 className="text-4xl font-bold">Heading 1</h1>
                  <p className="text-sm text-muted-foreground">4xl / Bold</p>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold">Heading 2</h2>
                  <p className="text-sm text-muted-foreground">3xl / Semibold</p>
                </div>
                <div>
                  <h3 className="text-2xl font-medium">Heading 3</h3>
                  <p className="text-sm text-muted-foreground">2xl / Medium</p>
                </div>
                <div>
                  <p className="text-base">Body Text</p>
                  <p className="text-sm text-muted-foreground">base / Regular</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="components" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Components</h2>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Buttons</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="patterns" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Common Patterns</h2>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Card Layouts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-medium">Card Title</h4>
                      <p className="text-sm text-muted-foreground">
                        Card description
                      </p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-medium">Card Title</h4>
                      <p className="text-sm text-muted-foreground">
                        Card description
                      </p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-medium">Card Title</h4>
                      <p className="text-sm text-muted-foreground">
                        Card description
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}