import { ThemeProvider } from "next-themes";
import ProductProvider from "./ProductProvider";
import UserProvider from "./UserProvider";

function AppWrapper({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider defaultTheme="light" attribute="class">
            <UserProvider>
                <ProductProvider>
                    {children}
                </ProductProvider>
            </UserProvider>
        </ThemeProvider>
    )
}
export default AppWrapper