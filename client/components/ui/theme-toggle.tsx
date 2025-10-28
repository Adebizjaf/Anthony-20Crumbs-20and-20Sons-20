import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, actualTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="relative w-9 h-9 xs:w-10 xs:h-10 p-0 border-border/40 dark:border-border/30 bg-background/80 dark:bg-background/60 backdrop-blur-sm hover:bg-accent/10 dark:hover:bg-accent/20 hover:border-accent/50 dark:hover:border-accent/40 transition-all duration-300 group shadow-sm dark:shadow-md hover:shadow-md dark:hover:shadow-lg touch-manipulation"
        >
          <Sun className="h-4 w-4 xs:h-[1.2rem] xs:w-[1.2rem] rotate-0 scale-100 transition-all duration-500 ease-in-out dark:-rotate-180 dark:scale-0 text-amber-500 group-hover:text-amber-600 dark:group-hover:text-amber-400" />
          <Moon className="absolute h-4 w-4 xs:h-[1.2rem] xs:w-[1.2rem] rotate-180 scale-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2 bg-background/95 dark:bg-background/90 backdrop-blur-md border-border/50 dark:border-border/30 shadow-lg dark:shadow-xl min-w-[140px]">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="flex items-center gap-3 cursor-pointer hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors duration-200 py-3 px-4 touch-manipulation"
        >
          <Sun className="h-4 w-4 text-amber-500 flex-shrink-0" />
          <span className="text-foreground/80 dark:text-foreground/70 text-sm">Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="flex items-center gap-3 cursor-pointer hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors duration-200 py-3 px-4 touch-manipulation"
        >
          <Moon className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <span className="text-foreground/80 dark:text-foreground/70 text-sm">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="flex items-center gap-3 cursor-pointer hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors duration-200 py-3 px-4 touch-manipulation"
        >
          <div className="h-4 w-4 relative flex-shrink-0">
            <Sun className="h-2.5 w-2.5 absolute top-0 left-0 text-amber-500" />
            <Moon className="h-2.5 w-2.5 absolute bottom-0 right-0 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-foreground/80 dark:text-foreground/70 text-sm">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Alternative simple toggle version without dropdown
export function SimpleThemeToggle() {
  const { setTheme, actualTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(actualTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="relative w-10 h-10 p-0 border-border/40 dark:border-border/30 bg-background/80 dark:bg-background/60 backdrop-blur-sm hover:bg-accent/10 dark:hover:bg-accent/20 hover:border-accent/50 dark:hover:border-accent/40 transition-all duration-300 group overflow-hidden shadow-sm dark:shadow-md hover:shadow-md dark:hover:shadow-lg"
    >
      <div className="relative flex items-center justify-center">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 ease-in-out dark:-rotate-90 dark:scale-0 text-amber-500 group-hover:text-amber-600 dark:group-hover:text-amber-400" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}